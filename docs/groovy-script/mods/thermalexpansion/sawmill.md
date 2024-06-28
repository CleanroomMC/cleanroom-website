---
title: "Sawmill"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Sawmill.java"
---

# Sawmill (Thermal Expansion)

## Description

Converts an input itemstack into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost.

:::::::::: details Note {open id="note"}
The valid items and fluid output while the Resin Funnel Augment is installed is controlled by the Arboreal Extractor device.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.sawmill
mods.thermal.Sawmill
mods.thermalexpansion.sawmill/* Used as page default */ // [!code focus]
mods.thermalexpansion.Sawmill
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `outputItem`, `secondayOutput`, `chance`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.sawmill.add(int, IIngredient, ItemStack, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.sawmill.add(1000, item('minecraft:obsidian') * 4, item('minecraft:gold_ingot'), item('minecraft:diamond'), 25)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Sawmill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.thermalexpansion.sawmill.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the chance the second output itemstack is created. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy:no-line-numbers
    chance(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `SawmillManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.SawmillManager$SawmillRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.sawmill.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot') * 2)
    .register()

mods.thermalexpansion.sawmill.recipeBuilder()
    .input(item('minecraft:clay') * 4)
    .output(item('minecraft:gold_ingot'), item('minecraft:diamond'))
    .chance(25)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.sawmill.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.sawmill.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.sawmill.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.sawmill.removeByInput(item('minecraft:pumpkin'))
mods.thermalexpansion.sawmill.removeByOutput(item('thermalfoundation:material:800'))
mods.thermalexpansion.sawmill.removeByOutput(item('minecraft:leather'))
mods.thermalexpansion.sawmill.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.sawmill.streamRecipes()
    ```
