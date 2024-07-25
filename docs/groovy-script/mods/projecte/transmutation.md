---
title: "World Transmutation"
titleTemplate: "ProjectE | CleanroomMC"
description: "Converts an input blockstate into an output blockstate when right-clicked with by a Philosopher's Stone, with the ability to be converted into a different output blockstate when holding shift."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/projecte/Transmutation.java"
---

# World Transmutation (ProjectE)

## Description

Converts an input blockstate into an output blockstate when right-clicked with by a Philosopher's Stone, with the ability to be converted into a different output blockstate when holding shift.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.projecte.transmutation/* Used as page default */ // [!code focus]
mods.projecte.Transmutation
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the World Transmutation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.projecte.transmutation.recipeBuilder() {open id="abstract"}
- `IBlockState`. Sets the input blockstate. Requires not null.

    ```groovy:no-line-numbers
    input(Block)
    input(IBlockState)
    ```

- `IBlockState`. Sets the normal output blockstate. Requires not null.

    ```groovy:no-line-numbers
    output(Block)
    output(IBlockState)
    output(Block, Block)
    output(IBlockState, IBlockState)
    ```

- `IBlockState`. Sets the shift output blockstate.

    ```groovy:no-line-numbers
    output(Block, Block)
    output(IBlockState, IBlockState)
    altOutput(Block)
    altOutput(IBlockState)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `moze_intel.projecte.utils.WorldTransmutations$Entry`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.projecte.transmutation.recipeBuilder()
    .input(blockstate('minecraft:end_stone'))
    .output(blockstate('minecraft:diamond_block'), blockstate('minecraft:gold_block'))
    .register()

mods.projecte.transmutation.recipeBuilder()
    .input(blockstate('minecraft:diamond_block'))
    .output(blockstate('minecraft:end_stone'))
    .altOutput(blockstate('minecraft:gold_block'))
    .register()

mods.projecte.transmutation.recipeBuilder()
    .input(blockstate('minecraft:gold_block'))
    .output(blockstate('minecraft:diamond_block'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.projecte.transmutation.removeByInput(IBlockState)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.projecte.transmutation.removeByOutput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.projecte.transmutation.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.projecte.transmutation.removeByInput(blockstate('minecraft:wool'))
mods.projecte.transmutation.removeByOutput(blockstate('minecraft:dirt'))
mods.projecte.transmutation.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.projecte.transmutation.streamRecipes()
    ```
