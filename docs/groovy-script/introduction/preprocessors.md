

# Preprocessors


Preprocessors are commented lines at the top of the file that are evaluated before the file is loaded.
They must be placed before all other code, including `imports` and the `package` statement, if any.

These are external to the [`runConfig.json`](./run_config.md) and work alongside it to determine what files run and when they run.

Currently, there are 6 preprocessors, which can be combined in any way.


::: details Example {id="example"}

```groovy
// debug_only
// mods_loaded chisel
// mods_loaded gregtech
// side client
// packmode easy
println '''
this will only run if debug is true,
both chisel and gregtech are loaded,
the currently loaded side is the client,
and the packmode is set to easy.
Good luck!
'''
```

:::


## No Run


Prevents the script file from being run.

::: info Example {id="example"}

```groovy
// no_run
println 'will never get run :('
```

:::


## Debug Only


Allows the script file to be run if and only if `debug` is set to true in [`runConfig.json`](./run_config.md#debug).

::: info Example {id="example"}

```groovy
// debug
println 'will only run while in debug mode'
```

:::


## No Reload


Allows the script to run on the first load, but prevents it from being run when reloading the game.
Useful if you need a script to be run in the `postInit` phase, but need it not to be reloaded.

::: info Example {id="example"}

```groovy
// no_reload
println 'will only run once'
```

:::


## Mods Loaded


Accepts any number of words indicating required modids.
Words should be separated by spaces, with no other characters included.

Allows the script file to be run if and only if the currently loaded mods include all listed mods.

::: info Example {id="example"}

```groovy
// mods_loaded chisel
println 'a mod with the modid of chisel is loaded'
```

<br>

```groovy
// mods_loaded chisel botania
println 'both chisel and botania are loaded'
```

:::


## Side


Accepts a single word indicating the side, either `CLIENT` or `SERVER`, case insensitive.

Allows the script file to be run if and only if the game is being loaded by the current side.
Dedicated Servers are considered Server-side.
Typically used for rendering, which is client-only.

::: info Example {id="example"}

```groovy
// side client
println 'will only run on the client'
```

:::


## Packmode


Accepts any number of words indicating valid packmodes.
Words should be separated by spaces, with no other characters included.

Allows the script file to be run if and only if the current packmode is set to one of the packmodes listed.

::: info Example {id="example"}

```groovy
// packmode easy normal
println 'packmode is either easy or normal, but not hard'
```

:::
