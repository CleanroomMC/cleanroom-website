---
title: "Compression Crafting"
description: "Converts any number of a single item into an output itemstack, with a configurable rf cost, consumption per tick amount, catalyst, and if the catalyst is consumed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extendedcrafting/CompressionCrafting.java"
---

# Compression Crafting (Extended Crafting)

## Description

Converts any number of a single item into an output itemstack, with a configurable rf cost, consumption per tick amount, catalyst, and if the catalyst is consumed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.extendedcrafting.compression_crafting/*(1)!*/
mods.extendedcrafting.compressioncrafting
mods.extendedcrafting.compressionCrafting
mods.extendedcrafting.CompressionCrafting
mods.extendedcrafting.compression
mods.extendedcrafting.Compression
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `output`, `input`, `inputCount`, `catalyst`, `consumeCatalyst`, `powerCost`:

    ```groovy:no-line-numbers
    mods.extendedcrafting.compression_crafting.add(ItemStack, IIngredient, int, IIngredient, boolean, int)
    ```

- Adds recipes in the format `output`, `input`, `inputCount`, `catalyst`, `consumeCatalyst`, `powerCost`, `powerRate`:

    ```groovy:no-line-numbers
    mods.extendedcrafting.compression_crafting.add(ItemStack, IIngredient, int, IIngredient, boolean, int, int)
    ```


### Recipe Builder

Just like other recipe types, the Compression Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.extendedcrafting.compression_crafting.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires not null.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `IIngredient`. Sets the catalyst item for the recipe. Requires not null. (Default `IngredientHelper.toIIngredient(ItemSingularity.getCatalystStack())`).

    ```groovy:no-line-numbers
    catalyst(IIngredient)
    ```

- `int`. Sets the amount of RF required to complete the craft. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    powerCost(int)
    ```

- `int`. Sets the maximum amount of RF consumed per tick until the entire cost is paid. Requires greater than or equal to 0. (Default `ModConfig.confCompressorRFRate`).

    ```groovy:no-line-numbers
    powerRate(int)
    ```

- `int`. Sets the quantity of input items required. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    inputCount(int)
    ```

- `boolean`. Sets if the catalyst item is consumed when the recipe completes. (Default `false`).

    ```groovy:no-line-numbers
    consumeCatalyst(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.blakebr0.extendedcrafting.crafting.CompressorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extendedcrafting.compression_crafting.recipeBuilder()
    .input(item('minecraft:clay'))
    .inputCount(100)
    .output(item('minecraft:gold_ingot') * 7)
    .catalyst(item('minecraft:diamond'))
    .consumeCatalyst(true)
    .powerCost(10000)
    .powerRate(1000)
    .register()

mods.extendedcrafting.compression_crafting.recipeBuilder()
    .input(item('minecraft:clay') * 10)
    .output(item('minecraft:diamond') * 2)
    .powerCost(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given catalyst:

    ```groovy:no-line-numbers
    mods.extendedcrafting.compression_crafting.removeByCatalyst(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.extendedcrafting.compression_crafting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.extendedcrafting.compression_crafting.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.extendedcrafting.compression_crafting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extendedcrafting.compression_crafting.removeByCatalyst(item('extendedcrafting:material:11'))
mods.extendedcrafting.compression_crafting.removeByInput(item('minecraft:gold_ingot'))
mods.extendedcrafting.compression_crafting.removeByOutput(item('extendedcrafting:singularity:6'))
mods.extendedcrafting.compression_crafting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.extendedcrafting.compression_crafting.streamRecipes()
    ```
