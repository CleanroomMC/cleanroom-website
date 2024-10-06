---
title: "Smoker"
titleTemplate: "Future MC | CleanroomMC"
description: "Converts an input itemstack into an output itemstack at the cost of burnable fuel."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Smoker.java"
---

# Smoker (Future MC)

## Description

Converts an input itemstack into an output itemstack at the cost of burnable fuel.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.futuremc.smoker/* Used as page default */ // [!code focus]
mods.futuremc.Smoker
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.futuremc.smoker.add(SimpleRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Smoker also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.futuremc.smoker.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thedarkcolour.futuremc.recipe.SimpleRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.smoker.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.futuremc.smoker.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.futuremc.smoker.remove(SimpleRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.futuremc.smoker.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.futuremc.smoker.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.futuremc.smoker.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.smoker.removeByInput(item('minecraft:porkchop'))
mods.futuremc.smoker.removeByOutput(item('minecraft:baked_potato'))
mods.futuremc.smoker.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.futuremc.smoker.streamRecipes()
    ```
