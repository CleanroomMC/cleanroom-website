---
title: "Blast Furnace"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts an input itemstack into an output itemstack and an optional 'slag' itemstack, taking time and consuming fuel (based on Blast Furnace Fuels)."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/BlastFurnace.java"
---

# Blast Furnace (Immersive Engineering)

## Description

Converts an input itemstack into an output itemstack and an optional 'slag' itemstack, taking time and consuming fuel (based on Blast Furnace Fuels).

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.ie.blast_furnace
mods.ie.blastfurnace
mods.ie.blastFurnace
mods.ie.BlastFurnace
mods.immersiveengineering.blast_furnace/*(1)!*/
mods.immersiveengineering.blastfurnace
mods.immersiveengineering.blastFurnace
mods.immersiveengineering.BlastFurnace
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `output`, `input`, `time`, `slag`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blast_furnace.add(ItemStack, IIngredient, int, ItemStack)
    ```


### Recipe Builder

Just like other recipe types, the Blast Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.immersiveengineering.blast_furnace.recipeBuilder() {open id="abstract"}
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

- `ItemStack`. Sets the item output as slag.

    ```groovy:no-line-numbers
    slag(ItemStack)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.BlastFurnaceRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.blast_furnace.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .time(100)
    .slag(item('minecraft:gold_nugget'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blast_furnace.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blast_furnace.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blast_furnace.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.blast_furnace.removeByInput(item('minecraft:iron_block'))
mods.immersiveengineering.blast_furnace.removeByOutput(item('immersiveengineering:metal:8'))
mods.immersiveengineering.blast_furnace.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blast_furnace.streamRecipes()
    ```
