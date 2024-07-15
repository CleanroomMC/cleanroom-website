---
title: "Heat Sawmill"
titleTemplate: "Prodigy Tech | CleanroomMC"
description: "Wood processing machine with 1 input, 2 outputs and an optional chance for the 2nd output."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/SimpleRecipeHandlerSecondaryOutput.java"
---

# Heat Sawmill (Prodigy Tech)

## Description

Wood processing machine with 1 input, 2 outputs and an optional chance for the 2nd output.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.prodigytech.heat_sawmill/* Used as page default */ // [!code focus]
mods.prodigytech.heatsawmill
mods.prodigytech.heatSawmill
mods.prodigytech.HeatSawmill
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Heat Sawmill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.prodigytech.heat_sawmill.recipeBuilder() {open id="abstract"}
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

- `int`. The time needed to perform the recipe, in ticks. Will run faster than this number when heated over 80 C.. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `float`. Sets the chance to get the 2nd output.. Requires less than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    secondaryChance(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.SimpleRecipeSecondaryOutput`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.heat_sawmill.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .time(50)
    .register()

mods.prodigytech.heat_sawmill.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:coal'))
    .register()

mods.prodigytech.heat_sawmill.recipeBuilder()
    .input(item('minecraft:iron_block'))
    .output(item('minecraft:emerald'), item('minecraft:clay'))
    .register()

mods.prodigytech.heat_sawmill.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:emerald'), item('minecraft:nether_star'))
    .secondaryChance(0.25)
    .time(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.prodigytech.heat_sawmill.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.prodigytech.heat_sawmill.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.heat_sawmill.removeByInput(ore('plankWood'))
mods.prodigytech.heat_sawmill.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.prodigytech.heat_sawmill.streamRecipes()
    ```
