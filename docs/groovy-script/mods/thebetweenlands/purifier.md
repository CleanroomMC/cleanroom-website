---
title: "Purifier"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts an input item into an output itemstack, consuming Sulfur and Swamp Water as fuel."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/Purifier.java"
---

# Purifier (The Betweenlands)

## Description

Converts an input item into an output itemstack, consuming Sulfur and Swamp Water as fuel.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.betweenlands.purifier
mods.betweenlands.Purifier
mods.thebetweenlands.purifier/* Used as page default */ // [!code focus]
mods.thebetweenlands.Purifier
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.purifier.add(IPurifierRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Purifier also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.purifier.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.IPurifierRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.purifier.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.purifier.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.purifier.remove(IPurifierRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.purifier.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.purifier.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.purifier.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.purifier.removeByInput(item('thebetweenlands:items_misc:64'))
mods.thebetweenlands.purifier.removeByOutput(item('thebetweenlands:cragrock'))
mods.thebetweenlands.purifier.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.purifier.streamRecipes()
    ```
