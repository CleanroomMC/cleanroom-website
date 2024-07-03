---
title: "Drying Rack"
titleTemplate: "Tinkers' Construct | CleanroomMC"
description: "Convert an item into a different item by hanging it out to dry."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/Drying.java"
---

# Drying Rack (Tinkers' Construct)

## Description

Convert an item into a different item by hanging it out to dry.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.tconstruct.drying/* Used as page default */ // [!code focus]
mods.tconstruct.Drying
mods.tinkersconstruct.drying
mods.tinkersconstruct.Drying
mods.ticon.drying
mods.ticon.Drying
```


## Adding Recipes

- Adds a new recipe in the format `input`, `output`, `time`:

    ```groovy:no-line-numbers
    mods.tconstruct.drying.add(IIngredient, ItemStack, int)
    ```


### Recipe Builder

Just like other recipe types, the Drying Rack also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.tconstruct.drying.recipeBuilder() {open id="abstract"}
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

- `int`. The time in ticks it takes for the item to dry. Requires greater than or equal to 1. (Default `20`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `slimeknights.tconstruct.library.DryingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.drying.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:dirt'))
    .time(45)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.tconstruct.drying.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given input and the given output:

    ```groovy:no-line-numbers
    mods.tconstruct.drying.removeByInputAndOutput(IIngredient, ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.tconstruct.drying.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.tconstruct.drying.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.drying.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.tconstruct.drying.streamRecipes()
    ```
