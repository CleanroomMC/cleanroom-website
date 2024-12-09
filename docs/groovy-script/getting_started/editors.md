---
order: -500
---

# Editors

GroovyScript, using Groovy, can be modified in any text editor.
However, some editors have integration that allows for easier coding.
All editor support requires starting the language server.


## Start the Language Server:

There are two ways to start the language server.

1. Adding `-Dgroovyscript.run_ls=true` to the JVM arguments in your preferred launcher and start Minecraft with GroovyScript.
  You will be able to connect to the language server as soon as GroovyScript has been loaded in the `FMLInitializationEvent` load step.
2. By starting Minecraft and GroovyScript and running the [`/grs runLS` command](../minecraft/commands/index.md#language-server).
  As commands can only be run in-game, you will obviously need to load into a world for that.

You can check if the server started by checking for a `Starting Language server` message in the `groovy.log` file.

By default, the language server is started with a port of `25564`. This is configurable in the `groovyscript.cfg` config file.


## Visual Studio Code

[VS Code](https://code.visualstudio.com/) is an editor built on open source software and distributed by Microsoft.
This extension will work with any fork of VS Code, but for the purposes of this page the wording presumes you are using VS Code.

The extension is released under the name [`GroovyScript`](https://marketplace.visualstudio.com/items?itemName=CleanroomMC.groovyscript&ssr=false#overview)
and distributed by the publisher [`CleanroomMC`](https://marketplace.visualstudio.com/publishers/CleanroomMC).
It adds syntax validation, auto-completion for all installed mods, and hover information.
For more information, check the readme of the project.

::: info Contributors {id="tip"}

This extension was created by [`zznty`](https://github.com/zznty) and [`brachy`](https://github.com/brachy84).

:::

The source code can be viewed [here](https://github.com/CleanroomMC/GroovyScript/tree/master/editors/vscode).


### Installation

1. Open VS Code and install the [`GroovyScript`](https://marketplace.visualstudio.com/items?itemName=CleanroomMC.groovyscript&ssr=false#overview) extension
2. Open the instance folder (typically `minecraft`) or the `groovy` folder of a modpack in VS Code.
3. [Start the Language Server](#start-the-language-server) via the instructions above
4. The port in the `groovyscript.cfg` config file must match the port setting in the VS Code extension.
5. If you just opened VS Code, it should auto connect. Otherwise, run the GroovyScript: Reconnect command.
6. Done


## IntelliJ IDEA

[IntelliJ IDEA](https://www.jetbrains.com/idea/) is an Integrated Development Environment created and distributed by JetBrains.
The plugin will work with either Community Edition or Ultimate.

The plugin is released under the name [`GroovyScript`](https://plugins.jetbrains.com/plugin/25915-groovyscript)
and distributed by the vendor [`IntegerLimit`](https://plugins.jetbrains.com/vendor/integerlimit).
It adds syntax validation, auto-completion for all installed mods, and hover information.
For more information, check the readme of the project.

::: info Contributors {id="tip"}

This plugin was created by [`Integer Limit`](https://github.com/IntegerLimit).

:::

The source code can be viewed [here](https://github.com/IntegerLimit/GroovyScriptPlugin).


### Installation

1. Open IntelliJ IDEA and install the [`GroovyScript`](https://plugins.jetbrains.com/plugin/25915-groovyscript) plugin
2. Open the instance folder (typically `minecraft`) or the `groovy` folder of a modpack in IntelliJ IDEA.
3. [Start the Language Server](#start-the-language-server) via the instructions above
4. The port in the `groovyscript.cfg` config file must match the port setting in the IntelliJ IDEA plugin.
5. The server will try to connect automatically. If it cannot connect, restart it by accessing the Language Servers Tab and then right clicking on the GroovyScript LSP entry.
6. Done


## Emacs

[Emacs](https://www.gnu.org/software/emacs/) is a group of open source editors, with the largest edition being distributed by GNU.
This language support will work with any variation of Emacs, but will presume you are using GNU Emacs.

### Installation

1. Open Emacs and install [lsp-mode](https://emacs-lsp.github.io/lsp-mode/page/installation/), and follow further installation instructions for lsp-mode.
2. Install the GroovyScript LSP file here:
::: details GroovyScript LSP {id="example"}
```lisp title="lsp-groovyscript.el"
;;; lsp-groovyscript.el --- GroovyScript LSP support for lsp-mode -*- lexical-binding: t; -*-

;; Version: 1.0.0
;; Keywords: languages
;; Homepage: https://github.com/CleanroomMC/GroovyScript
;; Package-Requires: ((emacs "24.3") (lsp-mode) (groovy-mode))
;;
;; This file is not part of GNU Emacs.
;;
;;; Commentary:
;;
;;  GroovyScript LSP support for lsp-mode. Overrides lsp-mode's built in Groovy LSP
;;
;;; Code:

(require 'lsp-mode)

(defgroup lsp-groovyscript nil
  "GroovyScript LSP support for lsp-mode."
  :group 'languages)

(defcustom lsp-groovyscript-port 25564
  "Language server port."
  :type 'integer
  :group 'groovyscript)

;; this function was adapted from https://github.com/emacs-lsp/lsp-mode/blob/master/clients/lsp-gdscript.el
(defun lsp-groovyscript--tcp-connect-to-port ()
  "Define a TCP connection to language server."
  (list
   :connect (lambda (filter sentinel name _environment-fn _workspace)
              (let* ((host "localhost")
                     (port lsp-groovyscript-port)
                     (tcp-proc (lsp--open-network-stream host port (concat name "::tcp"))))

                (set-process-query-on-exit-flag tcp-proc nil)
                (set-process-filter tcp-proc filter)
                (set-process-sentinel tcp-proc sentinel)
                (cons tcp-proc tcp-proc)))
   :test? (lambda () t)))

(lsp-register-client
  (make-lsp-client :new-connection (lsp-groovyscript--tcp-connect-to-port)
                   :activation-fn (lsp-activate-on "groovy")
                   :priority 100 ; override lsp-groovy, if you installed this we will assume you want it
                   :server-id 'groovyscript))

(provide 'lsp-groovyscript)
;;; lsp-groovyscript.el ends here
```
:::
3. [Start the Language Server](#start-the-language-server) via the instructions above
4. The port in the `groovyscript.cfg` config file must match the port setting.
5. Done
