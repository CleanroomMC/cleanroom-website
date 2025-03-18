---
title: "Compost"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts an input itemstack into an amount of compost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/Compost.java"
---

# Compost (The Betweenlands)

## Description

Converts an input itemstack into an amount of compost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.betweenlands.compost
mods.betweenlands.Compost
mods.thebetweenlands.compost/* Used as page default */ // [!code focus]
mods.thebetweenlands.Compost
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.compost.add(ICompostBinRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Compost also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.compost.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the time the recipe takes in ticks. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the amount of compost output. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    amount(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.ICompostBinRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.compost.recipeBuilder()
    .input(item('minecraft:clay'))
    .amount(20)
    .time(30)
    .register()

mods.thebetweenlands.compost.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .amount(1)
    .time(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.compost.remove(ICompostBinRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.compost.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.compost.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.compost.removeByInput(item('thebetweenlands:items_misc:13'))
mods.thebetweenlands.compost.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.compost.streamRecipes()
    ```
