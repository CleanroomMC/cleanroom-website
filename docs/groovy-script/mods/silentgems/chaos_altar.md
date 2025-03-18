---
title: "Chaos Altar"
titleTemplate: "Silent's Gems | CleanroomMC"
description: "Converts an input itemstack into an output itemstack with an optional catalyst, consuming a specified amount of Chaos from a Chaos Altar. Chaos is consumed at a maximum of 400 per tick, meaning the time taken corresponds to the Chaos cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/silentsgems/ChaosAltar.java"
---

# Chaos Altar (Silent's Gems)

## Description

Converts an input itemstack into an output itemstack with an optional catalyst, consuming a specified amount of Chaos from a Chaos Altar. Chaos is consumed at a maximum of 400 per tick, meaning the time taken corresponds to the Chaos cost.

:::::::::: details Warning {open id="warning"}
If no catalyst is required by the recipe, the Chaos Altar must have no item in the catalyst slot to be valid.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.silentgems.chaos_altar/* Used as page default */ // [!code focus]
mods.silentgems.chaosaltar
mods.silentgems.chaosAltar
mods.silentgems.ChaosAltar
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.silentgems.chaos_altar.add(RecipeChaosAltar)
    ```


### Recipe Builder

Just like other recipe types, the Chaos Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.silentgems.chaos_altar.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the total amount of Chaos required. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    cost(int)
    ```

- `ItemStack`. Sets the catalyst itemstack. Requires not null. (Default `ItemStack.EMPTY`).

    ```groovy:no-line-numbers
    catalyst(ItemStack)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.silentchaos512.gems.api.recipe.altar.RecipeChaosAltar`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.silentgems.chaos_altar.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .cost(5)
    .register()

mods.silentgems.chaos_altar.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay'))
    .catalyst(item('minecraft:diamond'))
    .cost(5000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.silentgems.chaos_altar.remove(RecipeChaosAltar)
    ```

- Removes all recipes that match the given catalyst:

    ```groovy:no-line-numbers
    mods.silentgems.chaos_altar.removeByCatalyst(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.silentgems.chaos_altar.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.silentgems.chaos_altar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.silentgems.chaos_altar.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.silentgems.chaos_altar.removeByCatalyst(item('minecraft:slime_ball'))
mods.silentgems.chaos_altar.removeByInput(item('silentgems:gem'))
mods.silentgems.chaos_altar.removeByOutput(item('silentgems:craftingmaterial'))
mods.silentgems.chaos_altar.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.silentgems.chaos_altar.streamRecipes()
    ```
