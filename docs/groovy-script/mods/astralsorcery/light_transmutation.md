---
title: "Light Transmutation"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Converts an input Block or IBlockState into an output IBlockState after being sent a given amount of starlight, with the ability to require a specific constellation of starlight."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/LightTransmutation.java"
---

# Light Transmutation (Astral Sorcery)

## Description

Converts an input Block or IBlockState into an output IBlockState after being sent a given amount of starlight, with the ability to require a specific constellation of starlight.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.light_transmutation/* Used as page default */ // [!code focus]
mods.astralsorcery.lighttransmutation
mods.astralsorcery.lightTransmutation
mods.astralsorcery.LightTransmutation
mods.astral.light_transmutation
mods.astral.lighttransmutation
mods.astral.lightTransmutation
mods.astral.LightTransmutation
```


## Editing Values

- Sets the IBlockState that Starmetal Ore is converted into when placed beneath a Celestial Crystal Cluster. Useful when the Light Transmutation recipe converting Iron Ore into Starmetal Ore has changed.:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.setStarmetalReplacementState(IBlockState)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.light_transmutation.setStarmetalReplacementState(blockstate('minecraft:clay'))
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.add(LightOreTransmutations.Transmutation)
    ```


### Recipe Builder

Just like other recipe types, the Light Transmutation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.astralsorcery.light_transmutation.recipeBuilder() {open id="abstract"}
- `double`. Sets the amount of starlight required to complete the craft. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    cost(double)
    ```

- `IBlockState`. Sets the input IBlockState, recipe will convert only the given blockstate. Requires not null or inBlock.

    ```groovy:no-line-numbers
    input(IBlockState)
    ```

- `IBlockState`. Sets the output IBlockState. Requires not null.

    ```groovy:no-line-numbers
    output(Block)
    output(IBlockState)
    ```

- `Block`. Sets the input Block, recipe will convert any blockstate of the provided block. Requires not null or input.

    ```groovy:no-line-numbers
    input(Block)
    ```

- `ItemStack`. Sets the item representing the input Block or IBlockState in JEI.

    ```groovy:no-line-numbers
    inputDisplayStack(ItemStack)
    ```

- `ItemStack`. Sets the item representing the output IBlockState in JEI.

    ```groovy:no-line-numbers
    outputDisplayStack(ItemStack)
    ```

- `IWeakConstellation`. Sets the required Constellation the starlight must be collected from. Must be either a Major or Weak Constellation.

    ```groovy:no-line-numbers
    constellation(IWeakConstellation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.base.LightOreTransmutations$Transmutation`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.light_transmutation.recipeBuilder()
    .input(block('minecraft:stone'))
    .output(block('astralsorcery:blockmarble'))
    .cost(100.0)
    .constellation(constellation('armara'))
    .inputDisplayStack(item('minecraft:stone'))
    .outputDisplayStack(item('minecraft:dye:15').withNbt([display:[Name:'Marble']]))
    .register()

mods.astralsorcery.light_transmutation.recipeBuilder()
    .input(blockstate('minecraft:pumpkin'))
    .output(blockstate('minecraft:diamond_block'))
    .cost(0)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.remove(LightOreTransmutations.Transmutation)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.removeByInput(Block)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.removeByInput(IBlockState)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.removeByOutput(Block)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.removeByOutput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.light_transmutation.removeByInput(block('minecraft:netherrack'))
mods.astralsorcery.light_transmutation.removeByInput(blockstate('minecraft:sandstone'))
mods.astralsorcery.light_transmutation.removeByOutput(block('minecraft:lapis_block'))
mods.astralsorcery.light_transmutation.removeByOutput(blockstate('minecraft:cake'))
mods.astralsorcery.light_transmutation.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.light_transmutation.streamRecipes()
    ```
