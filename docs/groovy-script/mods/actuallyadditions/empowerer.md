---
title: "Empowerer"
titleTemplate: "Actually Additions | CleanroomMC"
description: "Turns 5 input items into an output item at the cost of power and time. Has a configurable color."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/Empowerer.java"
---

# Empowerer (Actually Additions)

## Description

Turns 5 input items into an output item at the cost of power and time. Has a configurable color.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.aa.empowerer
mods.aa.Empowerer
mods.actuallyadditions.empowerer/* Used as page default */ // [!code focus]
mods.actuallyadditions.Empowerer
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.actuallyadditions.empowerer.add(EmpowererRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Empowerer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.actuallyadditions.empowerer.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 4 and less than or equal to 5.

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

- `float`. Sets the red color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy:no-line-numbers
    red(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

- `float`. Sets the blue color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy:no-line-numbers
    blue(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

- `int`. Sets the amount of time the recipe takes to complete. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `float`. Sets the green color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy:no-line-numbers
    green(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

- `IIngredient`. Sets the center IIngredient if the input only has 4 entries.

    ```groovy:no-line-numbers
    mainInput(IIngredient)
    ```

- `int`. Sets the amount of energy each stand must consume to process the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    energyPerStand(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.EmpowererRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.actuallyadditions.empowerer.recipeBuilder()
    .mainInput(item('minecraft:clay'))
    .input(item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .time(50)
    .energy(1000)
    .red(0.5)
    .green(0.3)
    .blue(0.2)
    .register()

mods.actuallyadditions.empowerer.recipeBuilder()
    .mainInput(item('minecraft:clay'))
    .input(item('minecraft:diamond'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .time(50)
    .color(0.5, 0.3, 0.2)
    .register()

mods.actuallyadditions.empowerer.recipeBuilder()
    .mainInput(item('minecraft:diamond'))
    .input(item('minecraft:diamond'),item('minecraft:gold_ingot'),item('minecraft:diamond'),item('minecraft:gold_ingot'))
    .output(item('minecraft:dirt') * 8)
    .time(50)
    .particleColor(0x00FF88)
    .register()

mods.actuallyadditions.empowerer.recipeBuilder()
    .input(item('minecraft:gold_ingot'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .time(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.actuallyadditions.empowerer.remove(EmpowererRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.actuallyadditions.empowerer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.actuallyadditions.empowerer.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.actuallyadditions.empowerer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.actuallyadditions.empowerer.removeByInput(item('actuallyadditions:item_crystal'))
mods.actuallyadditions.empowerer.removeByOutput(item('actuallyadditions:item_misc:24'))
mods.actuallyadditions.empowerer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.actuallyadditions.empowerer.streamRecipes()
    ```
