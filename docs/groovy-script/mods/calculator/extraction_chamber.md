---
title: "Extraction Chamber"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, and gives either a Dirty or Damaged Circuit."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/ExtractionChamber.java"
---

# Extraction Chamber (Calculator)

## Description

Converts an input itemstack into an output itemstack, and gives either a Dirty or Damaged Circuit.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.extraction_chamber/* Used as page default */ // [!code focus]
mods.calculator.extractionchamber
mods.calculator.extractionChamber
mods.calculator.ExtractionChamber
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Extraction Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.calculator.extraction_chamber.recipeBuilder() {open id="abstract"}
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

- `boolean`. Sets if the Circuit is a Damaged Circuit or a Dirty Circuit.. (Default `false`).

    ```groovy:no-line-numbers
    isDamaged()
    isDamaged(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.CalculatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.extraction_chamber.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.calculator.extraction_chamber.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .isDamaged()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.extraction_chamber.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.calculator.extraction_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.extraction_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.extraction_chamber.removeByInput(item('minecraft:dirt'))
mods.calculator.extraction_chamber.removeByOutput(item('calculator:smallstone'))
mods.calculator.extraction_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.extraction_chamber.streamRecipes()
    ```
