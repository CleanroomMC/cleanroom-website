---
title: "Stone Oven"
titleTemplate: "Pyrotech | CleanroomMC"
description: "When powered by burning fuel can convert items."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/StoneOven.java"
---

# Stone Oven (Pyrotech)

## Description

When powered by burning fuel can convert items.

:::::::::: info Warning {id="warning"}
Stone and Refractory Oven includes some recipes from the Furnace Registry that can't be removed here, you have to use `furnace.add` or `furnace.remove` to manipulate those recipes directly.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.stone_oven/* Used as page default */ // [!code focus]
mods.pyrotech.stoneoven
mods.pyrotech.stoneOven
mods.pyrotech.StoneOven
```


## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `duration`:

    ```groovy:no-line-numbers
    mods.pyrotech.stone_oven.add(String, IIngredient, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.stone_oven.add('apple_to_dirt_stone', item('minecraft:apple'), item('minecraft:dirt'), 1000)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Stone Oven also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pyrotech.stone_oven.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

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

- `int`. Sets the time required for the recipe to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    duration(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.machine.recipe.StoneOvenRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.stone_oven.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald'))
    .duration(400)
    .name('diamond_campfire_to_emerald_stone')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pyrotech.stone_oven.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.stone_oven.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.stone_oven.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.stone_oven.removeByInput(item('minecraft:porkchop'))
mods.pyrotech.stone_oven.removeByOutput(item('minecraft:cooked_porkchop'))
mods.pyrotech.stone_oven.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.stone_oven.streamRecipes()
    ```
