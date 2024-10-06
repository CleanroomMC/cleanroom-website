---
title: "Smithing"
titleTemplate: "Future MC | CleanroomMC"
description: "Converts two input itemstacks into an output output itemstack in the Smithing Table."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Smithing.java"
---

# Smithing (Future MC)

## Description

Converts two input itemstacks into an output output itemstack in the Smithing Table.

:::::::::: details Warning {open id="warning"}
Crafting with stackable items may require picking up and placing an input to allow crafting the recipe again.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.futuremc.smithing/* Used as page default */ // [!code focus]
mods.futuremc.Smithing
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.futuremc.smithing.add(SmithingRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Smithing also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.futuremc.smithing.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thedarkcolour.futuremc.recipe.smithing.SmithingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.smithing.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()

mods.futuremc.smithing.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 4, item('minecraft:clay'))
    .output(item('minecraft:clay') * 8)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.futuremc.smithing.remove(SmithingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.futuremc.smithing.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.futuremc.smithing.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.futuremc.smithing.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.smithing.removeByInput(item('minecraft:diamond_hoe'))
mods.futuremc.smithing.removeByInput(item('futuremc:netherite_ingot'))
mods.futuremc.smithing.removeByOutput(item('futuremc:netherite_pickaxe'))
mods.futuremc.smithing.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.futuremc.smithing.streamRecipes()
    ```
