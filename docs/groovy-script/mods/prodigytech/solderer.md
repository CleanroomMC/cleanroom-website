---
title: "Solderer"
titleTemplate: "Prodigy Tech | CleanroomMC"
description: "Performs recipes using Gold Dust, has a recipe catalyst, and uses up Circuit Boards and an optional extra input for each recipe."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/Solderer.java"
---

# Solderer (Prodigy Tech)

## Description

Performs recipes using Gold Dust, has a recipe catalyst, and uses up Circuit Boards and an optional extra input for each recipe.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.prodigytech.solderer/* Used as page default */ // [!code focus]
mods.prodigytech.Solderer
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Solderer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.prodigytech.solderer.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

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

- `int`. Sets the number of Tiny Gold Dusts needed for the recipe (9 equals 1 ingot). Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    gold(int)
    ```

- `int`. Sets the time needed to perform the recipe, in ticks. Will run faster than this number when heated over 125 C. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `IIngredient`. The pattern used by the recipe, will not be consumed. Requires exactly 1.

    ```groovy:no-line-numbers
    pattern(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.SoldererManager$SoldererRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.solderer.recipeBuilder()
    .pattern(item('minecraft:clay'))
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .gold(5)
    .time(100)
    .register()

mods.prodigytech.solderer.recipeBuilder()
    .pattern(item('minecraft:coal_block'))
    .output(item('minecraft:nether_star'))
    .gold(75)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipes using the given additive.:

    ```groovy:no-line-numbers
    mods.prodigytech.solderer.removeByAdditive(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.prodigytech.solderer.removeByOutput(IIngredient)
    ```

- Removes the recipes using the given pattern.:

    ```groovy:no-line-numbers
    mods.prodigytech.solderer.removeByPattern(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.prodigytech.solderer.removeAll()
    ```

- Removes all recipes not using additives.:

    ```groovy:no-line-numbers
    mods.prodigytech.solderer.removeWithoutAdditive()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.solderer.removeByAdditive(item('minecraft:iron_ingot'))
mods.prodigytech.solderer.removeByOutput(item('prodigytech:circuit_refined'))
mods.prodigytech.solderer.removeByPattern(item('prodigytech:pattern_circuit_refined'))
mods.prodigytech.solderer.removeAll()
mods.prodigytech.solderer.removeWithoutAdditive()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.prodigytech.solderer.streamRecipes()
    ```
