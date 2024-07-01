---
title: "Health Processor"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts an input itemstack into \"Health Points\", which charge a Health or Nutrition module and are converted into rapidly regenerating health."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/HealthProcessor.java"
---

# Health Processor (Calculator)

## Description

Converts an input itemstack into \"Health Points\", which charge a Health or Nutrition module and are converted into rapidly regenerating health.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.health_processor/* Used as page default */ // [!code focus]
mods.calculator.healthprocessor
mods.calculator.healthProcessor
mods.calculator.HealthProcessor
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Health Processor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.calculator.health_processor.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the amount of "Health Points" gained. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    value(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.core.recipes.DefaultSonarRecipe$Value`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.health_processor.recipeBuilder()
    .input(item('minecraft:clay'))
    .value(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.health_processor.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.health_processor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.health_processor.removeByInput(item('minecraft:blaze_rod'))
mods.calculator.health_processor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.health_processor.streamRecipes()
    ```
