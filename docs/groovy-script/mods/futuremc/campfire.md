---
title: "Campfire"
titleTemplate: "Future MC | CleanroomMC"
description: "Converts an input itemstack into an output itemstack when placed on the Campfire."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Campfire.java"
---

# Campfire (Future MC)

## Description

Converts an input itemstack into an output itemstack when placed on the Campfire.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.futuremc.campfire/* Used as page default */ // [!code focus]
mods.futuremc.Campfire
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.futuremc.campfire.add(CampfireRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Campfire also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.futuremc.campfire.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks the takes to process. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    duration(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thedarkcolour.futuremc.recipe.campfire.CampfireRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.campfire.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .duration(10)
    .register()

mods.futuremc.campfire.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .duration(1)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.futuremc.campfire.remove(CampfireRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.futuremc.campfire.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.futuremc.campfire.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.futuremc.campfire.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.campfire.removeByInput(item('minecraft:fish'))
mods.futuremc.campfire.removeByOutput(item('minecraft:cooked_mutton'))
mods.futuremc.campfire.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.futuremc.campfire.streamRecipes()
    ```
