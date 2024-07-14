---
title: "Restoration Chamber"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, typically a Dirty Circuit."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/RestorationChamber.java"
---

# Restoration Chamber (Calculator)

## Description

Converts an input itemstack into an output itemstack, typically a Dirty Circuit.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.restoration_chamber/* Used as page default */ // [!code focus]
mods.calculator.restorationchamber
mods.calculator.restorationChamber
mods.calculator.RestorationChamber
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Restoration Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.calculator.restoration_chamber.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.CalculatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.restoration_chamber.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.restoration_chamber.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.calculator.restoration_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.restoration_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.restoration_chamber.removeByInput(item('calculator:circuitdirty:5'))
mods.calculator.restoration_chamber.removeByOutput(item('calculator:circuitboard:3'))
mods.calculator.restoration_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.restoration_chamber.streamRecipes()
    ```
