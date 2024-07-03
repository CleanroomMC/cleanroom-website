---
title: "Kiln"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Converts a block into up to three output itemstacks, with the ability to require specific amounts of heat."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Kiln.java"
---

# Kiln (Better With Mods)

## Description

Converts a block into up to three output itemstacks, with the ability to require specific amounts of heat.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.kiln/* Used as page default */ // [!code focus]
mods.betterwithmods.Kiln
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithmods.kiln.recipeBuilder() {open id="abstract"}
- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets if the Kiln requires a normal fire (1) or a Stoked Fire (2) below it. (Default `1`).

    ```groovy:no-line-numbers
    heat(int)
    ```

- `BlockIngredient`. Sets the input block of the recipe.

    ```groovy:no-line-numbers
    input(String)
    input(IIngredient)
    input(ItemStack...)
    input(IIngredient...)
    input(BlockIngredient)
    input(List<ItemStack>)
    input(Collection<IIngredient>)
    ```

- `boolean`. Sets if the Kiln requires any heat source below it. (Default `false`).

    ```groovy:no-line-numbers
    ignoreHeat()
    ignoreHeat(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.block.recipe.KilnRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.kiln.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .heat(2)
    .register()

mods.betterwithmods.kiln.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:gold_ingot') * 16)
    .ignoreHeat()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithmods.kiln.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithmods.kiln.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.kiln.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.kiln.removeByInput(item('minecraft:end_stone'))
mods.betterwithmods.kiln.removeByOutput(item('minecraft:brick'))
mods.betterwithmods.kiln.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.kiln.streamRecipes()
    ```
