---
title: "Glacial Precipitator"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an amount of water into a specific output itemstack, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Precipitator.java"
---

# Glacial Precipitator (Thermal Expansion)

## Description

Converts an amount of water into a specific output itemstack, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.precipitator
mods.thermal.Precipitator
mods.thermalexpansion.precipitator/* Used as page default */ // [!code focus]
mods.thermalexpansion.Precipitator
```


## Adding Recipes

- Adds recipes in the format `energy`, `output`, `water`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.precipitator.add(int, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.precipitator.add(1000, item('minecraft:obsidian'), 100)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Glacial Precipitator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.thermalexpansion.precipitator.recipeBuilder() {open id="abstract"}
- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the amount of water consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    water(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `PrecipitatorManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.PrecipitatorManager$PrecipitatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.precipitator.recipeBuilder()
    .output(item('minecraft:clay'))
    .register()

mods.thermalexpansion.precipitator.recipeBuilder()
    .water(100)
    .output(item('minecraft:clay'))
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.precipitator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.precipitator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.precipitator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.precipitator.removeByInput(fluid('water'))
mods.thermalexpansion.precipitator.removeByOutput(item('minecraft:snowball'))
mods.thermalexpansion.precipitator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.precipitator.streamRecipes()
    ```
