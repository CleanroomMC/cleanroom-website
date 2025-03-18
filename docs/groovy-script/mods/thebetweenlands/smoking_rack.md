---
title: "Smoking Rack"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts an input item into an output itemstack over a configurable period of time, consuming Fallen Leaves to do so."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/SmokingRack.java"
---

# Smoking Rack (The Betweenlands)

## Description

Converts an input item into an output itemstack over a configurable period of time, consuming Fallen Leaves to do so.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.betweenlands.smoking_rack
mods.betweenlands.smokingrack
mods.betweenlands.smokingRack
mods.betweenlands.SmokingRack
mods.thebetweenlands.smoking_rack/* Used as page default */ // [!code focus]
mods.thebetweenlands.smokingrack
mods.thebetweenlands.smokingRack
mods.thebetweenlands.SmokingRack
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.smoking_rack.add(ISmokingRackRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Smoking Rack also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.smoking_rack.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time the recipe takes times 10 in seconds (3 = 30 seconds). Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.ISmokingRackRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.smoking_rack.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.smoking_rack.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .time(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.smoking_rack.remove(ISmokingRackRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.smoking_rack.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.smoking_rack.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.smoking_rack.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.smoking_rack.removeByInput(item('thebetweenlands:anadia'))
mods.thebetweenlands.smoking_rack.removeByOutput(item('thebetweenlands:barnacle_smoked'))
mods.thebetweenlands.smoking_rack.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.smoking_rack.streamRecipes()
    ```
