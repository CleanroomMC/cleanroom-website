---
title: "Water Net"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input item into any number of output itemstacks if placed within the appropriate multiblock. The multiblock is a Water Block directly below the Netted Screen, 8 Sakura Planks around the Water Block, and 8 Slat Blocks placed around the Netted Screen."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/WaterNet.java"
---

# Water Net (Better With Addons)

## Description

Converts an input item into any number of output itemstacks if placed within the appropriate multiblock. The multiblock is a Water Block directly below the Netted Screen, 8 Sakura Planks around the Water Block, and 8 Slat Blocks placed around the Netted Screen.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.water_net/* Used as page default */ // [!code focus]
mods.betterwithaddons.waternet
mods.betterwithaddons.waterNet
mods.betterwithaddons.WaterNet
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.water_net.add(NetRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Water Net also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.water_net.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.NetRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.water_net.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.water_net.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4, item('minecraft:diamond'), item('minecraft:diamond') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.water_net.remove(NetRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.water_net.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.water_net.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.water_net.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.water_net.removeByInput(item('betterwithaddons:iron_sand'))
mods.betterwithaddons.water_net.removeByOutput(item('betterwithaddons:food_sashimi'))
mods.betterwithaddons.water_net.removeByOutput(item('betterwithaddons:food_fugu_sac'))
mods.betterwithaddons.water_net.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.water_net.streamRecipes()
    ```
