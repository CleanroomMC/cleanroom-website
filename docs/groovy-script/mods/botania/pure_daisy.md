---
title: "Pure Daisy"
titleTemplate: "Botania | CleanroomMC"
description: "Convert a given block to another blockstate after a period of time."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/PureDaisy.java"
---

# Pure Daisy (Botania)

## Description

Convert a given block to another blockstate after a period of time.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.pure_daisy/* Used as page default */ // [!code focus]
mods.botania.puredaisy
mods.botania.pureDaisy
mods.botania.PureDaisy
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.add(RecipePureDaisy)
    ```

- Adds recipes in the format `output`, `input`:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.add(IBlockState, IBlockState)
    ```

- Adds recipes in the format `output`, `input`, `time`:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.add(IBlockState, IBlockState, int)
    ```


### Recipe Builder

Just like other recipe types, the Pure Daisy also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.botania.pure_daisy.recipeBuilder() {open id="abstract"}
- `int`. Sets the duration the recipe takes to complete. Requires greater than or equal to 0. (Default `RecipePureDaisy.DEFAULT_TIME (150)`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `Object`. Sets the valid input states. Requires not null and either an IBlockState or String.

    ```groovy:no-line-numbers
    input(Block)
    input(String)
    input(IBlockState)
    input(OreDictIngredient)
    ```

- `IBlockState`. Sets the output IBlockState. Requires not null.

    ```groovy:no-line-numbers
    output(IBlockState)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipePureDaisy`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.pure_daisy.recipeBuilder()
    .input(ore('plankWood'))
    .output(blockstate('minecraft:clay'))
    .time(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.remove(RecipePureDaisy)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.removeByInput(Block)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.removeByInput(IBlockState)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.removeByInput(OreDictIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.removeByInput(String)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.removeByOutput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.pure_daisy.removeByInput(blockstate('minecraft:water'))
mods.botania.pure_daisy.removeByInput(ore('logWood'))
mods.botania.pure_daisy.removeByOutput(blockstate('botania:livingrock'))
mods.botania.pure_daisy.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania.pure_daisy.streamRecipes()
    ```
