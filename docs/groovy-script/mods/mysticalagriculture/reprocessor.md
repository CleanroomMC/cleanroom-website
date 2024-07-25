---
title: "Seed Reprocessor"
titleTemplate: "Mystical Agriculture | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, taking a set amount of time based on the machine and consuming fuel."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mysticalagriculture/Reprocessor.java"
---

# Seed Reprocessor (Mystical Agriculture)

## Description

Converts an input itemstack into an output itemstack, taking a set amount of time based on the machine and consuming fuel.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mysticalagriculture.reprocessor/* Used as page default */ // [!code focus]
mods.mysticalagriculture.Reprocessor
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Seed Reprocessor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.mysticalagriculture.reprocessor.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.blakebr0.mysticalagriculture.crafting.ReprocessorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mysticalagriculture.reprocessor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 3)
    .register()

mods.mysticalagriculture.reprocessor.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mysticalagriculture.reprocessor.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.mysticalagriculture.reprocessor.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mysticalagriculture.reprocessor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mysticalagriculture.reprocessor.removeByInput(item('mysticalagriculture:stone_seeds'))
mods.mysticalagriculture.reprocessor.removeByOutput(item('mysticalagriculture:dirt_essence'))
mods.mysticalagriculture.reprocessor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mysticalagriculture.reprocessor.streamRecipes()
    ```
