# 前置知识

在学习本模组的内容时，编程知识并非必须，但它确实能让你的 GroovyScript 学习之旅更为顺畅。

As text editor you can use [Notepad++](https://notepad-plus-plus.org/downloads/) just fine. (We will work on a better
alternative in the future)

1. 下载 Minecraft Forge 1.12.2 并安装
2. 下载最新版本的 GroovyScript，点击[此处](https://www.curseforge.com/minecraft/mc-mods/groovyscript/files)即可跳转。然后将下载到的模组放入到 mods 文件夹内。
3. 安装 [MixinBooter](https://www.curseforge.com/minecraft/mc-mods/mixin-booter/files)，该模组为 GroovyScript 的前置模组。
4. 启动游戏
5. GroovyScript 会在启动时创建出一些文件：
   - groovy.log( ()参见 [Groovy 日志](#groovy-log))
   - groovy/runConfig.json（参见 [Groovy 日志](#run-config)）
   - groovy/postInit/main.groovy（默认的脚本文件）

## Groovy 日志

Everything groovy related has its own log, and it generates its own file. If you run into issues with your script you
should look here first.

The files directory is always `[Minecraft instance path]/groovy.log`

## Run config

This file defines how each script file should be executed. It can also store some general info about the mod pack. The
file will be generated if it doesn't exist.
If you don't understand what this is or how it works you can skip this. All you need to know is that you put your
scripts with recipes in `groovy/postInit`.
Scripts with stuff like Item Creation go in `groovy/preInit`.

Let's see what the file can look like.

```json
{
  "packName": "",
  "packId": "",
  "version": "1.0.0",
  "debug": false,
  "classes": ["classes/"],
  "loaders": {
    "preInit": ["preInit/"],
    "postInit": ["postInit2/"]
  }
}
```

Let's go through it bit by bit:

- `packName` is the name of the pack (See [pack name and id](#pack-name-and-id)). Important
  for [content](./content/index.md).

- `packId` (0.4.0+) is the id of the pack (See [pack name and id](#pack-name-and-id)). Important
  for [content](./content/index.md).

- `version` is the version of the pack. It currently doesn't do anything special.

- `debug`: If this is false all messages that logged to debug will not be logged. Great for debugging.

- `classes`: (0.3.0+) Files that contain a single class should be specified here. It makes sure classes are loaded when
  scripts try to access them.

- `loaders`: This defines at what stage what files should be loaded. By default, there are two stages: `preInit`
  and `postInit`.

- `preInit` will run at an early stage. Do not register recipes here. Use it to register game objects like items and
  blocks.

- `postInit` will run right before JEI loads. Use it to register recipes for example. When GroovyScript gets reloaded
  only this loader will run.

  Inside the square brackets of the loader we define the files or path that will be run. You can NOT run a file in
  multiple loaders.
  Elements higher in the list will be run first. Files can be put multiple times, but they will only get executed
  once.

::: info For example {id="example"}

```json
["postInit/ore_dict.groovy", "postInit/"]
```

Here first `ore_dict.groovy` will be executed and then all files of `postInit/`, but since `ore_dict.groovy` was already
executed, it will not run now.

:::

::: info Another example {id="example"}

```json
["postInit/", "postInit/late_stuff.groovy"]
```

:::

First everything in `postInit/` will be executed, but since `late_stuff.groovy` is specifically put later it will not be
executed. After that only `late_stuff.groovy` will be executed.

### Pack name and id

The pack name can be anything. It's the name that will show up in JEI in tooltips on items you created.

The pack id is very important. It must only consist of lower case letters and `_`.

::: info Warning {id="warning"}
Changing the pack id will result in created items being lost in existing worlds!
:::

## Important infos

1. Groovy scripts must end in `.groovy`
2. Groovy scripts must be defined somehow in the [run config](#run-config) to be executed
3. The scripts and folders can have any name
4. All scripts and the [run config](#run-config) must be located in `[Minecraft instance path]/groovy/`
