---
title: "Magnetic Reassembler"
titleTemplate: "Prodigy Tech | CleanroomMC"
description: "A simple 1 to 1 processing machine for dusts."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/SimpleRecipeHandler.java"
---

# Magnetic Reassembler (Prodigy Tech)

## Description

A simple 1 to 1 processing machine for dusts.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.prodigytech.magnetic_reassembler/* Used as page default */ // [!code focus]
mods.prodigytech.magneticreassembler
mods.prodigytech.magneticReassembler
mods.prodigytech.MagneticReassembler
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Magnetic Reassembler also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.prodigytech.magnetic_reassembler.recipeBuilder() {open id="abstract"}
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

- `int`. The time needed to perform the recipe, in ticks. Will run faster than this number when heated over 125 C.. Requires greater than or equal to 1. (Default `(default time for this machine in the mod's config)`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.SimpleRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.magnetic_reassembler.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .time(50)
    .register()

mods.prodigytech.magnetic_reassembler.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:coal'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.prodigytech.magnetic_reassembler.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.prodigytech.magnetic_reassembler.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.magnetic_reassembler.removeByInput(item('minecraft:gravel'))
mods.prodigytech.magnetic_reassembler.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.prodigytech.magnetic_reassembler.streamRecipes()
    ```
