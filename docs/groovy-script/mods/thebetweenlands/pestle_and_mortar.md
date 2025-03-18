---
title: "Pestle And Mortar"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts an input item into an output itemstack in a Pestle and Mortar by using a Pestle tool in the Mortar."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/PestleAndMortar.java"
---

# Pestle And Mortar (The Betweenlands)

## Description

Converts an input item into an output itemstack in a Pestle and Mortar by using a Pestle tool in the Mortar.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.betweenlands.pestle_and_mortar
mods.betweenlands.pestleandmortar
mods.betweenlands.pestleAndMortar
mods.betweenlands.PestleAndMortar
mods.thebetweenlands.pestle_and_mortar/* Used as page default */ // [!code focus]
mods.thebetweenlands.pestleandmortar
mods.thebetweenlands.pestleAndMortar
mods.thebetweenlands.PestleAndMortar
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.pestle_and_mortar.add(IPestleAndMortarRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Pestle And Mortar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.pestle_and_mortar.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.IPestleAndMortarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.pestle_and_mortar.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.pestle_and_mortar.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.pestle_and_mortar.remove(IPestleAndMortarRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.pestle_and_mortar.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.pestle_and_mortar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.pestle_and_mortar.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.pestle_and_mortar.removeByInput(item('thebetweenlands:limestone'))
mods.thebetweenlands.pestle_and_mortar.removeByOutput(item('thebetweenlands:fish_bait'))
mods.thebetweenlands.pestle_and_mortar.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.pestle_and_mortar.streamRecipes()
    ```
