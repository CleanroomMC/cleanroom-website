---
title: "Calculator"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts two input itemstacks into one output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/BasicCalculator.java"
---

# Calculator (Calculator)

## Description

Converts two input itemstacks into one output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.basic_calculator/* Used as page default */ // [!code focus]
mods.calculator.basiccalculator
mods.calculator.basicCalculator
mods.calculator.BasicCalculator
mods.calculator.calculator
mods.calculator.Calculator
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Calculator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.calculator.basic_calculator.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.CalculatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.basic_calculator.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.basic_calculator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.calculator.basic_calculator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.basic_calculator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.basic_calculator.removeByInput(item('minecraft:cobblestone'))
mods.calculator.basic_calculator.removeByOutput(item('calculator:reinforcedironingot'))
mods.calculator.basic_calculator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.basic_calculator.streamRecipes()
    ```
