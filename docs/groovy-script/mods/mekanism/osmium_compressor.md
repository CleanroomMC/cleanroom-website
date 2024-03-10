---
title: "Osmium Compressor"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input itemstack and 200 of a gasstack into an output itemstack. By default, will use Liquid Osmium as the gasstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/OsmiumCompressor.java"
---

# Osmium Compressor (Mekanism)

## Description

Converts an input itemstack and 200 of a gasstack into an output itemstack. By default, will use Liquid Osmium as the gasstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.osmium_compressor/* Used as page default */ // [!code focus]
mods.mekanism.osmiumcompressor
mods.mekanism.osmiumCompressor
mods.mekanism.OsmiumCompressor
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `gasInput`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.osmium_compressor.add(IIngredient, GasStack, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.osmium_compressor.add(item('minecraft:diamond'), gas('hydrogen'), item('minecraft:nether_star'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Osmium Compressor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.mekanism.osmium_compressor.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `GasStackList`. Sets the gas inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1. (Default `MekanismFluids.LiquidOsmium`).

    ```groovy:no-line-numbers
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.OsmiumCompressorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.osmium_compressor.recipeBuilder()
    .input(item('minecraft:diamond'))
    .gasInput(gas('hydrogen'))/* Always uses 200 gas */
    .output(item('minecraft:nether_star'))
    .register()
```


:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.osmium_compressor.removeByInput(IIngredient, GasStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.osmium_compressor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.osmium_compressor.removeByInput(ore('dustRefinedObsidian'), gas('liquidosmium'))
mods.mekanism.osmium_compressor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.osmium_compressor.streamRecipes()
    ```
