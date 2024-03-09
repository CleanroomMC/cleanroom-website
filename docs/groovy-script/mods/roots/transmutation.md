---
title: "Transmutation"
titleTemplate: "Roots 3 | CleanroomMC"
description: "When running the Transmutation, convert nearby blocks that match a set of conditions into either a block or items."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Transmutation.java"
---

# Transmutation (Roots 3)

## Description

When running the Transmutation, convert nearby blocks that match a set of conditions into either a block or items.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.transmutation/*(1)!*/
mods.roots.Transmutation
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Transmutation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.roots.transmutation.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `BlockStatePredicate`. Sets the starting blockstate. Requires not null.

    ```groovy:no-line-numbers
    start(IBlockState)
    start(BlockStatePredicate)
    ```

- `IBlockState`. Sets the output iblockstate.

    ```groovy:no-line-numbers
    state(IBlockState)
    output(IBlockState)
    ```

- `WorldBlockStatePredicate`. Sets a condition for the input to be converted, typically indicating a specific block above or below. (Default `WorldBlockStatePredicate.TRUE`).

    ```groovy:no-line-numbers
    condition(WorldBlockStatePredicate)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.TransmutationRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.transmutation.recipeBuilder()
    .name('clay_duping')
    .start(blockstate('minecraft:clay'))
    .output(item('minecraft:clay_ball') * 30)
    .condition(mods.roots.predicates.stateBuilder().blockstate(blockstate('minecraft:gold_block')).below().register())
    .register()

mods.roots.transmutation.recipeBuilder()
    .start(mods.roots.predicates.stateBuilder().blockstate(blockstate('minecraft:yellow_flower:type=dandelion')).properties('type').register())
    .state(blockstate('minecraft:gold_block'))
    .condition(mods.roots.predicates.above(mods.roots.predicates.LEAVES))
    .register()

mods.roots.transmutation.recipeBuilder()
    .start(blockstate('minecraft:diamond_block'))
    .state(blockstate('minecraft:gold_block'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the Transmutation recipe for the given input IBlockState:

    ```groovy:no-line-numbers
    mods.roots.transmutation.removeByInput(IBlockState)
    ```

- Removes the Transmutation recipe with the given name:

    ```groovy:no-line-numbers
    mods.roots.transmutation.removeByName(ResourceLocation)
    ```

- Removes the Transmutation recipe for the given output IBlockState:

    ```groovy:no-line-numbers
    mods.roots.transmutation.removeByOutput(IBlockState)
    ```

- Removes the Transmutation recipe for the given output itemstack:

    ```groovy:no-line-numbers
    mods.roots.transmutation.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.transmutation.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.transmutation.removeByName(resource('roots:redstone_block_to_glowstone'))
mods.roots.transmutation.removeByOutput(blockstate('minecraft:log:variant=jungle'))
mods.roots.transmutation.removeByOutput(item('minecraft:dye:3'))
mods.roots.transmutation.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.transmutation.streamRecipes()
    ```
