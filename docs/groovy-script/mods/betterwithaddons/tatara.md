---
title: "Tatara"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input item into an output itemstack if placed within the appropriate multiblock while fueled by Rice Ashes. The multiblock is Lava or Fire directly below the Tatara, 8 Clay around the Lava or Fire, 9 Nether Brick above the Tatara, 4 Stone Brick diagonal to the Tatara and two Iron Blocks across from each other adjacent to the Tatara."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Tatara.java"
---

# Tatara (Better With Addons)

## Description

Converts an input item into an output itemstack if placed within the appropriate multiblock while fueled by Rice Ashes. The multiblock is Lava or Fire directly below the Tatara, 8 Clay around the Lava or Fire, 9 Nether Brick above the Tatara, 4 Stone Brick diagonal to the Tatara and two Iron Blocks across from each other adjacent to the Tatara.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.tatara/* Used as page default */ // [!code focus]
mods.betterwithaddons.Tatara
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.tatara.add(SmeltingRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Tatara also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.tatara.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.SmeltingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.tatara.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.tatara.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.tatara.remove(SmeltingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.tatara.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.tatara.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.tatara.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.tatara.removeByInput(item('betterwithaddons:japanmat:20'))
mods.betterwithaddons.tatara.removeByOutput(item('betterwithaddons:kera'))
mods.betterwithaddons.tatara.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.tatara.streamRecipes()
    ```
