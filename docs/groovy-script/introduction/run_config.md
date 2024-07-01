
# Run Config

This file defines how each script file should be executed. It can also store some general info about the mod pack. The
file will be generated if it doesn't exist.
If you don't understand what this is or how it works you can skip this. All you need to know is that you put your
scripts with recipes in `groovy/postInit`.
Scripts with stuff like Item Creation go in `groovy/preInit`.

Let's see what the file can look like.

::: info Example {id="example"}
```json
{
  "packName": "",
  "packId": "",
  "version": "1.0.0",
  "debug": false,
  "classes": [
    "classes/"
  ],
  "loaders": {
    "preInit": [
      "preInit/"
    ],
    "postInit": [
      "postInit/"
    ]
  },
  "packmode": {
    "values": [
      "normal",
      "hard"
    ],
    "default": "normal",
    "integratePackmodeMod": false
  }
}
```
:::

Let's go through it bit by bit:


## `packName`

The name of the pack.
The pack name can be anything. It's the name that will show up in JEI in tooltips on items you created.
Important for [content](../content/index.md).
- Can be accessed in a script via `getPackName()`.

## `packId`

The id of the pack.
- Can be accessed in a script via `getPackId()`.
The pack id is very important. It must only consist of lower case letters and `_`.
Important for [content](../content/index.md).

::: info Failure {id="failure"}
If some mod tries to use the pack id internally and the pack id is not specified a fatal message will logged.
:::

::: info Danger {id="danger"}
Changing the pack id will result in created items being lost in existing worlds!
:::

## `version`

This is the version of the pack.
It currently doesn't do anything special.
- It can be accessed in a script via `getPackVersion()`.

## `debug`

If this is false all messages that logged to debug will not be logged.
Great for debugging.
- Can be accessed in a script via `isDebug()`.

## `classes`

Files that contain a single class should be specified here.
It makes sure classes are loaded when scripts try to access them.
You can specify classes to only load in certain loaders.
This works exactly like the `loaders` property.

::: info For example {id="example"}
```json
"classes": {
  "all": [
    // runs in all loaders
  ],
  "preInit": [
    // runs only in preInit loader
  ]
}
```
:::

## `loaders`

This defines at what stage what files should be loaded.
By default, there are three stages: `preInit`, `init`, and `postInit`.

### `preInit`

This will run at an early stage.
Do not register recipes here.
Use it to register game objects like items and blocks.

### `init`

This will run at a late stage, during the post-initialization phase.
This is **not** reloadable.

### `postInit`

This will run right before JEI loads.
Use it to register recipes for example.
When GroovyScript gets reloaded only this loader will run.
Inside the square brackets of the loader we define the files or path that will be run.
You can NOT run a file in multiple loaders.
Elements higher in the list will be run first.
Files can be put multiple times, but they will only get executed once.


::: info For example {id="example"}

Here first `ore_dict.groovy` will be executed and then all files of `postInit/`, but since `ore_dict.groovy` was already
executed, it will not run now.

```json
[
  "postInit/ore_dict.groovy",
  "postInit/"
]
```

First all files in `postInit/` except for `late_stuff.groovy` will be run, and then `late_stuff.groovy` will be run.


```json
[
  "postInit/",
  "postInit/late_stuff.groovy"
]
```

:::

First everything in `postInit/` will be executed, but since `late_stuff.groovy` is specifically put later it will not be
executed. After that only `late_stuff.groovy` will be executed.

## `packmode`

This contains various instructions for controls for the "packmode" feature.
- The current packmode can be gotten via `getPackmode()`, and you can check if the given packmode is enabled via `isPackmode(String)`

### `values`

This is a list of strings which represent the names of each packmode.

### `default`

This is the default packmode the config is set to when starting the game for the first time.
The name given should be one of the entries inside `values`.

### `integratePackmodeMod`

If the [PackMode](https://www.curseforge.com/minecraft/mc-mods/packmode) mod has integration with GroovyScript's packmode feature.
This should only be enabled if the PackMode mod is installed.
This replaces GroovyScript's packmode settings with those from [PackMode](https://www.curseforge.com/minecraft/mc-mods/packmode).
This will also disable the ability to reload packmodes on the fly.
