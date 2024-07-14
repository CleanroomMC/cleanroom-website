---
title: "Igneous Extruder"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts a variable amount of lava and water into a specific output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Extruder.java"
---

# Igneous Extruder (Thermal Expansion)

## Description

Converts a variable amount of lava and water into a specific output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.extruder
mods.thermal.Extruder
mods.thermalexpansion.extruder/* Used as page default */ // [!code focus]
mods.thermalexpansion.Extruder
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `fluidHot`, `fluidCold`, `sedimentary`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.extruder.add(int, ItemStack, int, int, boolean)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.extruder.add(1000, item('minecraft:gold_block'), 100, 1000, false)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Igneous Extruder also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thermalexpansion.extruder.recipeBuilder() {open id="abstract"}
- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `ExtruderManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- `int`. Sets the amount of lava consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    fluidHot(int)
    ```

- `int`. Sets the amount of water consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    fluidCold(int)
    ```

- `boolean`. Sets if the recipe requires the Clastic Deposition augment installed. (Default `false`).

    ```groovy:no-line-numbers
    sedimentary()
    sedimentary(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.ExtruderManager$ExtruderRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.extruder.recipeBuilder()
    .fluidHot(100)
    .fluidCold(1000)
    .output(item('minecraft:clay'))
    .register()

mods.thermalexpansion.extruder.recipeBuilder()
    .fluidHot(100)
    .fluidCold(1000)
    .output(item('minecraft:gold_ingot'))
    .sedimentary()
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given IIngredient input from the given Igneous Extruder mode, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.extruder.removeByInput(boolean, IIngredient)
    ```

- Removes the given IIngredient input from the given Igneous Extruder mode, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.extruder.removeByInput(IIngredient)
    ```

- Removes the given IIngredient output from the given Igneous Extruder mode, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.extruder.removeByOutput(boolean, IIngredient)
    ```

- Removes the given IIngredient output from the given Igneous Extruder mode, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.extruder.removeByOutput(IIngredient)
    ```

- Removes all recipes for the given type, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.extruder.removeByType(boolean)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.extruder.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.extruder.removeByInput(false, fluid('lava'))
mods.thermalexpansion.extruder.removeByInput(fluid('water'))
mods.thermalexpansion.extruder.removeByOutput(true, item('minecraft:gravel'))
mods.thermalexpansion.extruder.removeByOutput(item('minecraft:obsidian'))
mods.thermalexpansion.extruder.removeByType(true)
mods.thermalexpansion.extruder.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.extruder.streamRecipes()
    ```
