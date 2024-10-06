---
title: "Grindstone"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Converts an item into an itemstack with a chance of getting twice the amount after right clicking the grindstone based on weight."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/Grindstone.java"
---

# Grindstone (Astral Sorcery)

## Description

Converts an item into an itemstack with a chance of getting twice the amount after right clicking the grindstone based on weight.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.grindstone/* Used as page default */ // [!code focus]
mods.astralsorcery.Grindstone
mods.astral.grindstone
mods.astral.Grindstone
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.add(GrindstoneRecipe)
    ```

- Adds a recipe in the format of `input`, `output`, `weight`, with the `secondaryChance` being 0:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.add(ItemHandle, ItemStack, int)
    ```

- Adds a recipe in the format of `input`, `output`, `weight`, `secondaryChance`:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.add(ItemHandle, ItemStack, int, float)
    ```


### Recipe Builder

Just like other recipe types, the Grindstone also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.astralsorcery.grindstone.recipeBuilder() {open id="abstract"}
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

- `int`. Sets how many interactions it takes to process the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    weight(int)
    ```

- `float`. Sets the chance of an additional output. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy:no-line-numbers
    secondaryChance(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.grindstone.GrindstoneRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.grindstone.recipeBuilder()
    .input(ore('blockDiamond'))
    .output(item('minecraft:clay'))
    .weight(1)
    .secondaryChance(1.0F)
    .register()

mods.astralsorcery.grindstone.recipeBuilder()
    .input(item('minecraft:stone'))
    .output(item('minecraft:cobblestone'))
    .weight(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.remove(GrindstoneRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.removeByOutput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.removeByOutput(OreDictIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.grindstone.removeByInput(item('minecraft:redstone_ore'))
mods.astralsorcery.grindstone.removeByOutput(ore('dustIron'))
mods.astralsorcery.grindstone.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.grindstone.streamRecipes()
    ```
