---
title: "Manual Chopping Block"
titleTemplate: "Horse Power | CleanroomMC"
description: "Converts an itemstack input into an itemstack output after a configurable amount of processing has been done. Depending on if the config option `Separate Chopping Recipes` is true, this may affect both Horse and Hand Chopping Blocks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/horsepower/ManualChoppingBlock.java"
---

# Manual Chopping Block (Horse Power)

## Description

Converts an itemstack input into an itemstack output after a configurable amount of processing has been done. Depending on if the config option `Separate Chopping Recipes` is true, this may affect both Horse and Hand Chopping Blocks.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.horsepower.manual_chopping_block/* Used as page default */ // [!code focus]
mods.horsepower.manualchoppingblock
mods.horsepower.manualChoppingBlock
mods.horsepower.ManualChoppingBlock
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.horsepower.manual_chopping_block.add(ChoppingBlockRecipe)
    ```

- Adds recipes in the format `input`, `output`, `time`:

    ```groovy:no-line-numbers
    mods.horsepower.manual_chopping_block.add(IIngredient, ItemStack, int)
    ```


### Recipe Builder

Just like other recipe types, the Manual Chopping Block also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.horsepower.manual_chopping_block.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the amount of chops the player has to make to complete the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `se.gory_moon.horsepower.recipes.ChoppingBlockRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.horsepower.manual_chopping_block.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 5)
    .time(5)
    .register()

mods.horsepower.manual_chopping_block.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .time(1)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.horsepower.manual_chopping_block.remove(ChoppingBlockRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.horsepower.manual_chopping_block.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.horsepower.manual_chopping_block.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.horsepower.manual_chopping_block.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.horsepower.manual_chopping_block.removeByInput(item('minecraft:log:3'))
mods.horsepower.manual_chopping_block.removeByOutput(item('minecraft:planks:4'))
mods.horsepower.manual_chopping_block.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.horsepower.manual_chopping_block.streamRecipes()
    ```
