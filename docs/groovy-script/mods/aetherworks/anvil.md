---
title: "Aetherium Anvil"
titleTemplate: "Aetherworks | CleanroomMC"
description: "Converts an input item into an output item using the Aetherium Forge Anvil. The anvil requires a specific temperature range and a number of hits to process the item. The anvil can fail up to 3 times before the item is destroyed."
source_code_link: "https://github.com/Ender-Development/Aetherworks-Extended-Life/blob/master/src/main/java/v0id/aw/compat/groovyscript/Anvil.java"
---

# Aetherium Anvil (Aetherworks)

## Description

Converts an input item into an output item using the Aetherium Forge Anvil. The anvil requires a specific temperature range and a number of hits to process the item. The anvil can fail up to 3 times before the item is destroyed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.aetherworks.anvil/* Used as page default */ // [!code focus]
mods.aetherworks.Anvil
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Aetherium Anvil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.aetherworks.anvil.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the value of the difficulty. Requires greater than or equal to 1 and less than or equal to 10. (Default `1`).

    ```groovy:no-line-numbers
    difficulty(int)
    ```

- `int`. Sets the value how much ember is used per hit. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    embersPerHit(int)
    ```

- `int`. Sets the value how many hits are required to process the item. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    hits(int)
    ```

- `int`. Sets the maximum temperature the anvil can have. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    temperature(int, int)
    temperature(int, int, int)
    maxTemperature(int)
    ```

- `int`. Sets the minimum temperature the anvil can have. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    temperature(int, int)
    temperature(int, int, int)
    minTemperature(int)
    ```

- `int`. Sets the value how much the temperature can fluctuate, while processing the item. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    temperature(int, int, int)
    temperatureFluctuation(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `v0id.aw.common.recipe.AetheriumAnvilRecipes$AetheriumAnvilRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aetherworks.anvil.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:iron_nugget') * 9)
    .difficulty(2)
    .embersPerHit(100)
    .hits(10)
    .temperature(1900, 2500, 10)
    .register()

mods.aetherworks.anvil.recipeBuilder()
    .input(ore('plateGold'))
    .output(item('minecraft:gold_ingot') * 9)
    .difficulty(4)
    .embersPerHit(150)
    .hits(5)
    .minTemperature(2000)
    .maxTemperature(2100)
    .temperatureFluctuation(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.aetherworks.anvil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.aetherworks.anvil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.aetherworks.anvil.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aetherworks.anvil.removeByInput(item('aetherworks:item_resource', 9))
mods.aetherworks.anvil.removeByOutput(item('aetherworks:item_resource', 7))
mods.aetherworks.anvil.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.aetherworks.anvil.streamRecipes()
    ```
