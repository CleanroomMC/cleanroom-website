---
title: "Turntable"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Converts a block into an output block and up to two itemstacks after being powered via rotation power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Turntable.java"
---

# Turntable (Better With Mods)

## Description

Converts a block into an output block and up to two itemstacks after being powered via rotation power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.turntable/* Used as page default */ // [!code focus]
mods.betterwithmods.Turntable
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.turntable.add(TurntableRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Turntable also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithmods.turntable.recipeBuilder() {open id="abstract"}
- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `BlockIngredient`. Sets the input block.

    ```groovy:no-line-numbers
    input(String)
    input(IIngredient)
    input(ItemStack...)
    input(IIngredient...)
    input(BlockIngredient)
    input(List<ItemStack>)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the number of rotations required to complete the recipe. (Default `1`).

    ```groovy:no-line-numbers
    rotations(int)
    ```

- `IBlockState`. Sets the blockstate that replaces the input block. (Default `Blocks.AIR.getDefaultState()`).

    ```groovy:no-line-numbers
    outputBlock(IBlockState)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.block.recipe.TurntableRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.turntable.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .outputBlock(blockstate('minecraft:clay'))
    .output(item('minecraft:gold_ingot') * 5)
    .rotations(5)
    .register()

mods.betterwithmods.turntable.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .rotations(2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.turntable.remove(TurntableRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithmods.turntable.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithmods.turntable.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.turntable.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.turntable.removeByInput(item('betterwithmods:unfired_pottery'))
mods.betterwithmods.turntable.removeByOutput(item('minecraft:clay_ball'))
mods.betterwithmods.turntable.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.turntable.streamRecipes()
    ```
