---
title: "Anvil Crafting"
titleTemplate: "Random Things | CleanroomMC"
description: "Converts two itemstacks into an itemstack in the Vanilla Anvil."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/randomthings/Anvil.java"
---

# Anvil Crafting (Random Things)

## Description

Converts two itemstacks into an itemstack in the Vanilla Anvil.

:::::::::: details Tip {open id="tip"}
Internally this uses a more restricted version of `AnvilUpdateEvent`, so consider using an event listener for that instead.
::::::::::

:::::::::: details Warning {open id="warning"}
Consumes the entire stack in the Anvil, regardless of the amount actually required. To avoid issues, consider only using unstackable items.
::::::::::

:::::::::: info Bug {id="bug"}
When crafting any recipe done via this, if the output of the Anvil was picked up via clicking it, it will not be craftable again until restarting the game. Can be fixed with a mixin from Universal Tweaks.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.randomthings.anvil/* Used as page default */ // [!code focus]
mods.randomthings.Anvil
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.randomthings.anvil.add(AnvilRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Anvil Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.randomthings.anvil.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- `int`. Sets the cost of the recipe in levels consumed. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    cost(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lumien.randomthings.recipes.anvil.AnvilRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.randomthings.anvil.recipeBuilder()
    .input(item('minecraft:diamond_sword'), item('minecraft:boat'))
    .output(item('minecraft:diamond'))
    .cost(1)
    .register()

mods.randomthings.anvil.recipeBuilder()
    .input(item('minecraft:iron_sword'), item('minecraft:boat'))
    .output(item('minecraft:gold_ingot') * 16)
    .cost(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.randomthings.anvil.remove(AnvilRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.randomthings.anvil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.randomthings.anvil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.randomthings.anvil.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.randomthings.anvil.removeByInput(item('randomthings:obsidianskull'))
mods.randomthings.anvil.removeByOutput(item('randomthings:lavawader'))
mods.randomthings.anvil.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.randomthings.anvil.streamRecipes()
    ```
