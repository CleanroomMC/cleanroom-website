
# Object Mappers

GroovyScript uses Object Mappers to reference game objects such as ItemStacks, BlockStates, or Entities.
These are always available by default in every file.

:::: info Danger {id="danger"}

If the file name is the same as the name of an Object Mapper the Object Mapper will not function properly.

::: info Example {id="example"}

If file name is `fluid.groovy`, using `fluid` will refer to the file object *instead* of the Object Mapper.

:::

::::

The syntax for all Object Mappers is

```groovy
[name]([parameters]) // basic version
mods.[modid].[name]([parameters]) // if added by a mod, can also refer to it specifically via the modid
```

::: info Warning {id="warning"}

If two mods add an Object Mapper with the same name, the basic version will not work,
and you will need to use the version that specifies the Object Mapper via the `modid`.

:::

::: info Example {id="example"}

```groovy
item('minecraft:clay')
item('minecraft:fish:1')
blockstate('minecraft:leaves', 'variant=birch')
blockstate('minecraft:log:axis=z:variant=oak')
enchantment('minecraft:unbreaking')
entity('minecraft:wither_skeleton')
fluid('lava')
ore('blockDiamond')
resource('roots:cod')
sound('minecraft:block.glass.break')
```

:::

::: info Note {id="note"}

In all cases, it must be the full resource location of the item/sound/enchantment - you cannot omit `minecraft`.

:::


## Individual Object Mappers

Object Mappers are added by multiple mods, and specific information is listed on their given pages.

::: info Work In Progress {id="warning"}

Object Mapper documentation is a Work In Progress, and is not fully documented on the wiki.
Currently, the best way to observe what Object Mappers will do is to use the Language Server in a compatible [editor](./editors.md).

:::

- [IIngredient](../minecraft/ingredient.md)

- [ItemStack](../minecraft/item.md)

- [OreDict](../minecraft/ore_dictionary.md)

- [Resource Location](../minecraft/resource_location.md)
