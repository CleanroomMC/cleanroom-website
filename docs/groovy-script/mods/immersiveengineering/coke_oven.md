---
title: "Coke Oven"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts an input itemstack into an output itemstack over time, producing a given amount of creosote oil."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/CokeOven.java"
---

# Coke Oven (Immersive Engineering)

## Description

Converts an input itemstack into an output itemstack over time, producing a given amount of creosote oil.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.ie.coke_oven
mods.ie.cokeoven
mods.ie.cokeOven
mods.ie.CokeOven
mods.immersiveengineering.coke_oven/* Used as page default */ // [!code focus]
mods.immersiveengineering.cokeoven
mods.immersiveengineering.cokeOven
mods.immersiveengineering.CokeOven
```


## Adding Recipes

- Adds recipes in the format `output`, `input`, `time`, `creosoteOutput`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.coke_oven.add(ItemStack, IIngredient, int, int)
    ```


### Recipe Builder

Just like other recipe types, the Coke Oven also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.immersiveengineering.coke_oven.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the amount of Creosote Oil output. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    creosote(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.CokeOvenRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.coke_oven.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .time(100)
    .creosote(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.coke_oven.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.coke_oven.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.coke_oven.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.coke_oven.removeByInput(item('minecraft:log'))
mods.immersiveengineering.coke_oven.removeByOutput(item('immersiveengineering:material:6'))
mods.immersiveengineering.coke_oven.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.coke_oven.streamRecipes()
    ```
