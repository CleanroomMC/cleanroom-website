---
order: 900
---

# Resource Location

Minecraft's Resource Location is often used as an identifier for items
but also for locations of asset files like models and textures.

It consists of two Strings: a namespace and a path.
The namespace is almost always a mod id. The path is a name (for items) or a path (for files).

A Resource Location can be represented like this: `namespace:path`.

::: info Capitalization {id="warning"}

When using capital letters in a Resource Location, they will automatically be changed to be lowercase.

While you are not prevented from using special symbols when making a Resource Location,
doing so may cause issues when using the Resource Location for assets (especially on different operating systems).

Typically, a Resource Location will exclusively contain lowercase letters, numbers, underscores, and dashes.

:::

## Creating a Resource Location
There are two ways to do that:

1. Using the `net.minecraft.util.ResourceLocation` constructor (this class is auto imported since version 0.4.0)
    - `new ResourceLocation('namespace:path')`
    - `new ResourceLocation('namespace', 'path')`
    - `new ResourceLocation('path')` (defaults to `minecraft` namespace)
2. Using the [`resource` Object Mapper](./vanilla_object_mappers.md#resource)
    - `resource('namespace:path')`
    - `resource('namespace', 'path')`
    - `resource('path')` (defaults to the pack id specified in the run config (see [here](../getting_started/index.md#run-config)))

We can see that both methods are mostly the same except that the game object handler defaults to the pack id instead of
minecraft. This way is the preferred way.

::: details Example {open id="example"}

```groovy
// the following 2 lines are equal
resource('groovyscript', 'path/to/file') // groovyscript:path/to/file
resource('groovyscript:path/to/file') // groovyscript:path/to/file
// the namespace defaults to the pack id if not specified
resource('furnace') // packid:furnace
```

:::


## Converting to file path

When the `ResourceLocation` refers to an asset or otherwise indicates a file, this refers to a specific place.

All assets are loaded in the same way.

GroovyScript has an `assets` folder that is automatically loaded, and so that will be used as the example,
but any method that loads assets can be navigated to - including other mods and Resource Packs.

The whole path is composed of

- the root path
- the namespace (mod id)
- the path (of the Resource Location)

Formatted: `rootPath/namespace/path`

::: details Examples {open id="example"}

We use `.minecraft/groovy/assets` as the root here.

| Resource Location                        | refers to File path                                               |
|------------------------------------------|-------------------------------------------------------------------|
| `minecraft:textures/gui/button.png`      | `.minecraft/groovy/assets/minecraft/textures/gui/button.png`      |
| `textures/gui/button.png`                | `.minecraft/groovy/assets/minecraft/textures/gui/button.png`      |
| `thaumcraft:research/SOME_RESEARCH.json` | `.minecraft/groovy/assets/thaumcraft/research/SOME_RESEARCH.json` |

:::

## Model files

In model or blockstate json files you may also find Resource Locations.
If we take `assets/minecraft/models/block/andesite.json` for example (`assets` being the root folder), in there you will find

```json
{
  "parent": "block/cube_all",
  "textures": {
    "all": "blocks/stone_andesite"
  }
}
```

Here `"block/cube_all"` and `"blocks/stone_andesite"` are both Resource Locations. So you might think the texture is
located in `assets/minecraft/blocks/stone_andesite`, but that is not the case.
The real path is `assets/minecraft/textures/blocks/stone_andesite.png`. The reason for that is that
minecraft knows it should point to a texture and prepends `textures/` and appends `.png` to the path.
It's similar for `"parent": "block/cube_all"` except it points to another model.

## Other uses

Resource locations are also used as identifiers for game registry entries for example items.

When you use the [`item` Object Mapper](./vanilla_object_mappers.md#item) you do something like `item('minecraft:iron_ingot')`.
`'minecraft:iron_ingot'` is a Resource Location, except it doesn't point to a resource.
For game objects like items the Resource Location is also referred to as the registry name.

::: info Warning {id="warning"}
Note that you can't use `item('iron_ingot')`. This is disabled by GroovyScript. You must always input the full registry name.
:::
