---
title: "Soaking Unit"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input item into an output itemstack if placed within the appropriate multiblock. The multiblock is Ice directly above the Soaking Box, 8 Water around the Soaking Box, and Water directly below the Soaking Box."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/SoakingBox.java"
---

# Soaking Unit (Better With Addons)

## Description

Converts an input item into an output itemstack if placed within the appropriate multiblock. The multiblock is Ice directly above the Soaking Box, 8 Water around the Soaking Box, and Water directly below the Soaking Box.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.soaking_box/* Used as page default */ // [!code focus]
mods.betterwithaddons.soakingbox
mods.betterwithaddons.soakingBox
mods.betterwithaddons.SoakingBox
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.soaking_box.add(CherryBoxRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Soaking Unit also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.soaking_box.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.CherryBoxRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.soaking_box.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.soaking_box.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.soaking_box.remove(CherryBoxRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.soaking_box.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.soaking_box.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.soaking_box.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.soaking_box.removeByInput(item('betterwithaddons:bamboo'))
mods.betterwithaddons.soaking_box.removeByOutput(item('betterwithaddons:japanmat:8'))
mods.betterwithaddons.soaking_box.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.soaking_box.streamRecipes()
    ```
