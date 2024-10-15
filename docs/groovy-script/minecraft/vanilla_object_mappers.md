---
order: 1000
---

# Vanilla Object Mappers

There are a number of [Object Mappers](../getting_started/object_mappers.md) that
GroovyScript adds by default. They offer a shorthand way to get the object easily.

Like most Object Mappers, the best way to obtain these is via a GroovyScript info command.


## Resource

The `resource` Object Mapper allows you to retrieve a `ResourceLocation`.

There are three ways to call the `resource` Object Mapper:
- When two Strings are passed in, the first is the `namespace` and the second will be the `path`.
- When only one String is passed in, if there is a colon `:` then it is split by the colon into the same `namespace` and `path`.
- If there is only one String, it will be interpreted as the `path`, and the [GroovyScript `packid`](../getting_started/run_config.md#packid) will be used as the `namespace`.

Using only a single `String` separating the `namespace` and `path` with a colon `:` is the canonical form.

::: details Default `namespace` value {open id="warning"}

In some other places, when omitting the `namespace` from the `ResourceLocation`,
`minecraft` will be used as the default `namespace`.

This is not the case in GroovyScript, and the [GroovyScript `packid`](../getting_started/run_config.md#packid) is used instead.

:::


```groovy:no-line-numbers
resource('minecraft', 'clay')
resource('minecraft:dirt')
resource('custom_item')
```

## Ore

The `ore` Object Mapper allows you to retrieve an `IIngredient` representing the relevant OreDictionary.

There are two ways to call the `ore` Object Mapper:
- The full name of the OreDictionary being targeted.
- Using an asterisk `*` creates an `OreDictWildcardIngredient` which matches anything that has an ore that matches the rest of the text.

```groovy:no-line-numbers
ore('ingotIron')
ore('oreDiamond')
ore('ingot*') // every oredict that starts with 'ingot'
ore('*Gold') // every oredict that ends with 'Gold'
ore('*or*') // every oredict that contains 'or'
ore('*') // every oredict
```

## ItemStack

The `item` Object Mapper allows you to retrieve an `ItemStack`.

You can either get an `ItemStack` with a specific metadata or an `ItemStack` accepting any metadata.

To target the desired `ItemStack`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

By default the `ItemStack` will have a metadata of `0`, but it can be specified using the `int` parameter.

To create an `ItemStack` that allows any metadata, use a colon `:` followed by an asterisk `*`.

If called without parameters or otherwise is invalid, `ItemStack.EMPTY` will be returned.

```groovy:no-line-numbers
item() // ItemStack.EMPTY
item('minecraft:diamond')
item('minecraft:gold')
item('minecraft:iron_sword:*')
item('minecraft:diamond_pickaxe')
item('minecraft:iron_sword', 5)
```

## Liquid And Fluid

The `liquid` and `fluid` Object Mappers allows you to retrieve a `FluidStack`.
They are both the same method internally, and have merely been provided as an alias of each other.

To target the desired `FluidStack`, use name of the Fluid.


```groovy:no-line-numbers
fluid('water')
liquid('lava')
```

## Block

The `block` Object Mapper allows you to retrieve a `Block`.

To target the desired `Block`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

If called without parameters or otherwise is invalid, `Blocks.AIR` will be returned.

```groovy:no-line-numbers
block() // Blocks.AIR
block('minecraft:red_flower')
block('minecraft:obsidian')
```

## BlockState

The `blockstate` Object Mapper allows you to retrieve an `IBlockState`.

The `IBlockState` is made up of a `Block` and some number of optional state values.

To target the desired `Block`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

To target a specific `IBlockState`, either
- Use an `int` separated by a colon `:` or as a second parameter
- Specify the `property`=`value` entries

If called without parameters or otherwise is invalid, `Blocks.AIR.getDefaultState()` will be returned.

```groovy:no-line-numbers
blockstate() // Blocks.AIR.getDefaultState()
blockstate('minecraft:clay')
blockstate('minecraft:stained_glass:1')
blockstate('minecraft:stained_glass', 5)
blockstate('minecraft:yellow_flower:type=dandelion')
blockstate('minecraft:log', 'axis=z', 'variant=oak')
blockstate('minecraft:log:axis=z,variant=jungle')

```

## Enchantment

The `enchantment` Object Mapper allows you to retrieve an `Enchantment`.

To target the desired `Enchantment`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

```groovy:no-line-numbers
enchantment('minecraft:unbreaking')
enchantment('minecraft:sharpness')
```

## Potion

The `potion` Object Mapper allows you to retrieve a `Potion`.

To target the desired `Potion`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

```groovy:no-line-numbers
potion('minecraft:luck')
potion('minecraft:speed')
```

## PotionType

The `potionType` Object Mapper allows you to retrieve a `PotionType`.

To target the desired `PotionType`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

```groovy:no-line-numbers
potionType('minecraft:fire_resistance')
potionType('minecraft:long_water_breathing')
```

## Sound

The `sound` Object Mapper allows you to retrieve a `SoundEvent`.

To target the desired `SoundEvent`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

```groovy:no-line-numbers
sound('minecraft:block.glass.break')
sound('minecraft:block.anvil.destroy')
```

## Entity

The `entity` Object Mapper allows you to retrieve an `EntityEntry`.

To target the desired `EntityEntry`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

```groovy:no-line-numbers
entity('minecraft:wither_skeleton')
entity('minecraft:sheep')
entity('minecraft:villager')
```

## Dimension

The `dimension` Object Mapper allows you to retrieve a `DimensionType`.

To target the desired `DimensionType`, use the name of the Dimension.

```groovy:no-line-numbers
dimension('overworld')
dimension('the_nether')
dimension('the_end')
```

## Biome

The `biome` Object Mapper allows you to retrieve a `Biome`.

To target the desired `Biome`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

```groovy:no-line-numbers
biome('minecraft:sky')
biome('minecraft:hell')
```

## Profession

The `profession` Object Mapper allows you to retrieve a `VillagerProfession`.

To target the desired `VillagerProfession`, use the `ResourceLocation` of it
in the same format as the canonical form of [`resource` Object Mapper](#resource).

```groovy:no-line-numbers
profession('minecraft:farmer')
profession('minecraft:nitwit')
```

## Career

The `career` Object Mapper allows you to retrieve a `VillagerCareer`.

To target the desired `VillagerCareer`, use the name of the Career.

```groovy:no-line-numbers
career('farmer')
career('fisherman')
career('cartographer')
```

## CreativeTab

The `creativeTab` Object Mapper allows you to retrieve a `CreativeTab`.

To target the desired `CreativeTab`, use the name of the Creative Tab.

```groovy:no-line-numbers
creativeTab('buildingBlocks')
creativeTab('food')
```

## Textformat

The `textformat` Object Mapper allows you to retrieve a `TextFormatting`.

To target the desired `TextFormatting`, use the name of the Text Formatting entry.

```groovy:no-line-numbers
textformat('dark_green')
textformat('yellow')
textformat('underline')
textformat('reset')
```

## Nbt

The `nbt` Object Mapper allows you to create an `NBTTagCompound`.

Unlike most other Object Mappers, this is a shorthand way to create a new instance, not to retrieve
an already existing Object.

```groovy:no-line-numbers
nbt('{"key": "value"}')
```
