---
title: "Conductor Mast"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, costing a configurable amount of power. This power can only be gained via the Conductor Mast's semi-regular generation of lightning strikes."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/ConductorMast.java"
---

# Conductor Mast (Calculator)

## Description

Converts an input itemstack into an output itemstack, costing a configurable amount of power. This power can only be gained via the Conductor Mast's semi-regular generation of lightning strikes.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.conductor_mast/* Used as page default */ // [!code focus]
mods.calculator.conductormast
mods.calculator.conductorMast
mods.calculator.ConductorMast
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Conductor Mast also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.calculator.conductor_mast.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- `int`. Sets the amount of power required to make the conversion. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    value(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.core.recipes.DefaultSonarRecipe$Value`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.conductor_mast.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .value(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.conductor_mast.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.calculator.conductor_mast.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.conductor_mast.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.conductor_mast.removeByInput(item('calculator:firediamond'))
mods.calculator.conductor_mast.removeByOutput(item('calculator:material:7'))
mods.calculator.conductor_mast.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.conductor_mast.streamRecipes()
    ```
