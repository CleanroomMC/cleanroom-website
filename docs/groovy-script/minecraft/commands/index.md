
# Commands

GroovyScript adds a large number of commands to aid in developing.

Any of these commands can be run via using `/gs`, `/grs`, or `groovyscript` interchangeably.
`/gs` will typically be used as it is the shortest.


## Language Server

- `/gs runLS`
- `/gs runLanguageServer`

The [Language Server](../../getting_started/editors.md) can be started in multiple ways, one of which being this command.


## Reload

- `/gs reload`

You can [reload](../../getting_started/reloading.md) the GroovyScript `postInit` files
via this command or via a keybind.

Running `/gs reload --clean` will clean up the [log](../../getting_started/groovy_log.md) file
and remove all prior text.

This can make it more readable and easier to identify errors with the current script instead of seeing
all errors that have been experienced iin this minecraft session.
These errors will still impact the game.

## Clean Log

- `/gs cleanLog`

Additionally, cleaning the [log](../../getting_started/groovy_log.md) file can be done directly.


## Check

- `/gs check`

Parses all script files to ensure the syntax is valid.
This will not identify dynamic errors, such as those from [Object Mappers](../../getting_started/object_mappers.md) or calling methods.


## [Info](./info.md)

- [`/gs info`](./info.md#info)
- [`/gs hand`](./info.md#hand)
- [`/gs looking`](./info.md#looking)
- [`/gs self`](./info.md#self)

There are a large number of possible arguments for each of these commands.

The most important set of commands are the set of [Info Commands](./info.md),
which will help you get data from the game into a GroovyScript format.


## Log

- `/gs log`

Prints the location of the GroovyScript log file and Minecraft log file to the chat.
The locations are copyable.


## Wiki

- `/gs wiki`
- `/gs doc`
- `/gs docs`
- `/gs documentation`

Prints a link to this [wiki](../../index.md) to the chat.


## Packmode

- `/gs packmode`

If packmodes are enabled, you can pass in an argument setting the packmode.


## Generate Wiki

- `/gs generateWiki`
- `/gs generateDoc`
- `/gs generateDocs`
- `/gs generateDocumentation`

Generates the wiki files for all mods installed in the pack.

These files will be generated from the source code of the mods, and so will be relevant and accurate to your pack,
regardless of any updates that happen afterwards.

It will also print a link to the wiki folder to the chat.


## Generate Examples

- `/gs generateExamples`

::: info Warning {id="warning"}

Currently, generating the example files can replace already existing files.
Ensure that you have your files backed up or in a subfolder to avoid this.

:::

Generates the examples files for all mods installed in the pack.

This can be extremely useful for seeing actual examples of recipes being changed for the mods that you have installed.

These files will be generated from the source code of the mods, and so will be relevant and accurate to your pack,
regardless of any updates that happen afterwards.

It will also print a link to the examples folder to the chat.


## Creative Tabs

- `/gs creativeTabs`

This will print every Creative Tab that has been registered to the chat
and the the `groovy.log` file.

It will also print the location of the GroovyScript log file to the chat.


## Delete Script Cache

- `/gs deleteScriptCache`

In order to improve the speed of loading scripts, GroovyScript [caches the script files](../../getting_started/reloading.md#class-caching).

Sometimes this can error, and classes will not be reloaded properly.
In this situation, running this command will delete the cache and force it to be entirely re-evaluated.
