---
order: 900
---

# Groovy Log


Everything Groovy related has its own log, and it generates its own file.
If you run into issues with your script you should look to this file first.


## Location


The file is always `[Minecraft instance path]/logs/groovy.log` for clients
and `[Minecraft instance path]/logs/groovy_server.log` for servers.


## Clean Reloading

When the [`/gs reload` command](../minecraft/commands/index.md#reload) is run to [reload](./reloading.md)
the `postInit` script files, you can pass `--clean` as an argument to remove the previously logged information.

This can help improve readability of the log file, yet may hide errors that still have an impact on your game.


## Interacting


There are six main ways to add messages to the log file.
Each has a different purpose and level of severity.

When adding messages to the log via these methods,
the time, side, log channel, currently loaded script, and currently running line
will be printed to the log file.

However, if you do not want any of that information, you can use `println`
instead of any of the other options to print the messages you provide it directly to the log file.


### Debug


Called via `log.debug(msg)`, this indicates that the information is
detailed information about the system for debugging purposes and is not important for regular use.

Logging on the debug channel will not be added to the `groovy.log` file unless
the [debug](./run_config.md#debug) option in the [`runConfig.json`](./run_config.md) is enabled.


### Info


Called via `log.info(String)`, this indicates that the information is
used to provide a record of the normal operation of the system.


### Warn


Called via `log.warn(String)`, this indicates that the information is
an indication of potential issues that may lead to errors or unexpected behavior.


### Error


Called via `log.error(String)`, this indicates that the information is
related to part of the script breaking and not functioning as intended.

When joining the game or reloading, any errors encountered will be added to the chat.


### Fatal


Called via `log.fatal(String)`, this indicates that the information is
a severe error that will prevent the application from continuing.


### Exception


Called via `log.exception(Throwable)`, this indicates that the information is
related to part of the script breaking and not functioning as intended.

Additionally, it will log the stacktrace of the Throwable,
making identifying the issue significantly easier.


## Debug


When the [debug](./run_config.md#debug) setting of the [`runConfig.json`](./run_config.md) is enabled,
messages logged to the debug channel will be printed to the log file.

These messages are typically things that are helpful in tracking what causes a problem,
but are generally unneeded in causual use.

Additionally, when this setting is enabled, errors and exceptions will include the line numbers in their logs.


## Reporting Issues


When sharing the Groovy Log, you should share the entire text of the log and that of the relevant class file as text.
