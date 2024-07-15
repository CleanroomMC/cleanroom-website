---
title: "Atomic Reshaper"
titleTemplate: "Prodigy Tech | CleanroomMC"
description: "Uses Hot Air and Primordium to convert items. Can have a weighted random based output."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/AtomicReshaper.java"
---

# Atomic Reshaper (Prodigy Tech)

## Description

Uses Hot Air and Primordium to convert items. Can have a weighted random based output.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.prodigytech.atomic_reshaper/* Used as page default */ // [!code focus]
mods.prodigytech.atomicreshaper
mods.prodigytech.atomicReshaper
mods.prodigytech.AtomicReshaper
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Atomic Reshaper also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.prodigytech.atomic_reshaper.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack, int)
    ```

- `int`. The time needed to perform the recipe, in ticks. Will run faster than this number when heated over 250 C.. Requires greater than or equal to 1. (Default `Config.atomicReshaperProcessTime`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. The amount of Primordium units consumed by this recipe. 1 Primordium equals 100 Primordium units.. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    primordium(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.AtomicReshaperManager$AtomicReshaperRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.atomic_reshaper.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:emerald_block'))
    .primordium(10)
    .time(50)
    .register()

mods.prodigytech.atomic_reshaper.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:diamond_block'), 10)
    .output(item('minecraft:carrot'), 3)
    .primordium(7)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.prodigytech.atomic_reshaper.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.prodigytech.atomic_reshaper.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.atomic_reshaper.removeByInput(ore('paper'))
mods.prodigytech.atomic_reshaper.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.prodigytech.atomic_reshaper.streamRecipes()
    ```
