---
title: "Pulverizer"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Pulverizer.java"
---

# Pulverizer (Thermal Expansion)

## Description

Converts an input itemstack into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.pulverizer
mods.thermal.Pulverizer
mods.thermalexpansion.pulverizer/* Used as page default */ // [!code focus]
mods.thermalexpansion.Pulverizer
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `primaryOutput`, `secondaryOutput`, `chance`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.pulverizer.add(int, IIngredient, ItemStack, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.pulverizer.add(1000, item('minecraft:obsidian'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), 100)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Pulverizer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thermalexpansion.pulverizer.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

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

- `int`. Sets the chance the secondary output itemstack is created. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy:no-line-numbers
    chance(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `PulverizerManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.PulverizerManager$PulverizerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'), item('minecraft:diamond'))
    .chance(1)
    .register()

mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'), item('minecraft:gold_ingot'))
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.pulverizer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.pulverizer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.pulverizer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.pulverizer.removeByInput(item('minecraft:emerald_ore'))
mods.thermalexpansion.pulverizer.removeByOutput(item('thermalfoundation:material:772'))
mods.thermalexpansion.pulverizer.removeByOutput(item('minecraft:diamond'))
mods.thermalexpansion.pulverizer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.pulverizer.streamRecipes()
    ```
