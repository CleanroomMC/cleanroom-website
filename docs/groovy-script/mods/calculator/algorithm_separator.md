---
title: "Algorithm Separator"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts an input itemstack into two output itemstacks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/AlgorithmSeparator.java"
---

# Algorithm Separator (Calculator)

## Description

Converts an input itemstack into two output itemstacks.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.algorithm_separator/* Used as page default */ // [!code focus]
mods.calculator.algorithmseparator
mods.calculator.algorithmSeparator
mods.calculator.AlgorithmSeparator
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Algorithm Separator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.calculator.algorithm_separator.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 2.

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
mods.calculator.algorithm_separator.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'), item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.algorithm_separator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.calculator.algorithm_separator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.algorithm_separator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.algorithm_separator.removeByInput(item('calculator:tanzaniteleaves'))
mods.calculator.algorithm_separator.removeByOutput(item('calculator:weakeneddiamond'))
mods.calculator.algorithm_separator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.algorithm_separator.streamRecipes()
    ```
