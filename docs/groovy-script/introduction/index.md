---
order: 1000
---

# Getting Started

Programming knowledge is not necessarily required, but it will help you a lot.

You will need a text editor.
While any will do, we recommend using one of the ones listed in [editors](./editors.md), as those have integrated support.

1. Download Minecraft Forge 1.12.2 and install it
2. Download the latest version of GroovyScript [here](https://www.curseforge.com/minecraft/mc-mods/groovyscript/files)
   and drop it into the mods folder
3. Also install [MixinBooter](https://www.curseforge.com/minecraft/mc-mods/mixin-booter/files) since GroovyScript
   depends on it
4. Launch minecraft without adding any files
5. GroovyScript will create several files
    - [`groovy.log`](#groovy-log)
    - [`groovy/runConfig.json`](./run_config.md)
    - `groovy/postInit/main.groovy` (default script file)

## Groovy log

Everything groovy related has its own log, and it generates its own file. If you run into issues with your script you
should look here first.

The files directory is always `[Minecraft instance path]/groovy.log`

## Run Config

The [Run Config](./run_config.md) controls some settings and the load order of scripts.

## Important Information

1. Groovy scripts must end in `.groovy`, `.gy`, `.gvy`, or `.gsh`.
2. Groovy scripts must be defined somehow in the [run config](./run_config.md) to be executed
3. The scripts and folders can have any name
4. All scripts and the [run config](./run_config.md) must be located in `[Minecraft instance path]/groovy/`
