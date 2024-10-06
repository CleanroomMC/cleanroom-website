---
title: "Stoenecutter"
titleTemplate: "Future MC | CleanroomMC"
description: "Converts an input itemstack into an output itemstack via selecting the desired output from the Stonecutter GUI."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Stonecutter.java"
---

# Stoenecutter (Future MC)

## Description

Converts an input itemstack into an output itemstack via selecting the desired output from the Stonecutter GUI.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.futuremc.stonecutter/* Used as page default */ // [!code focus]
mods.futuremc.Stonecutter
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.futuremc.stonecutter.add(SimpleRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Stoenecutter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.futuremc.stonecutter.recipeBuilder() {open id="abstract"}
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
mods.futuremc.stonecutter.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.futuremc.stonecutter.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.futuremc.stonecutter.remove(SimpleRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.futuremc.stonecutter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.futuremc.stonecutter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.futuremc.stonecutter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.stonecutter.removeByInput(item('minecraft:stonebrick'))
mods.futuremc.stonecutter.removeByOutput(item('minecraft:stone_slab'))
mods.futuremc.stonecutter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.futuremc.stonecutter.streamRecipes()
    ```
