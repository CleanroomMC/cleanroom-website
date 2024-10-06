---
title: "Precision Chamber"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts an input itemstack into two output itemstacks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/PrecisionChamber.java"
---

# Precision Chamber (Calculator)

## Description

Converts an input itemstack into two output itemstacks.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.precision_chamber/* Used as page default */ // [!code focus]
mods.calculator.precisionchamber
mods.calculator.precisionChamber
mods.calculator.PrecisionChamber
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.calculator.precision_chamber.add(CalculatorRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Precision Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.calculator.precision_chamber.recipeBuilder() {open id="abstract"}
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
mods.calculator.precision_chamber.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'), item('calculator:circuitdamaged:4'))
    .register()

mods.calculator.precision_chamber.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'), item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.calculator.precision_chamber.remove(CalculatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.precision_chamber.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.calculator.precision_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.precision_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.precision_chamber.removeByInput(item('minecraft:clay'))
mods.calculator.precision_chamber.removeByOutput(item('calculator:soil'))
mods.calculator.precision_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.precision_chamber.streamRecipes()
    ```
