---
title: "Sand Net"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input item into any number of output itemstacks if placed within the appropriate multiblock. The multiblock is a Slat Block directly below the Netted Screen, 8 Water Blocks around the Water, and 8 Slat Blocks placed around the Netted Screen."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/SandNet.java"
---

# Sand Net (Better With Addons)

## Description

Converts an input item into any number of output itemstacks if placed within the appropriate multiblock. The multiblock is a Slat Block directly below the Netted Screen, 8 Water Blocks around the Water, and 8 Slat Blocks placed around the Netted Screen.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.sand_net/* Used as page default */ // [!code focus]
mods.betterwithaddons.sandnet
mods.betterwithaddons.sandNet
mods.betterwithaddons.SandNet
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.sand_net.add(NetRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Sand Net also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.sand_net.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the amount of sand consumed when the recipe is processed. Requires greater than or equal to 0 and less than or equal to 8. (Default `0`).

    ```groovy:no-line-numbers
    sand(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.NetRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.sand_net.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.sand_net.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .sand(2)
    .register()

mods.betterwithaddons.sand_net.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4, item('minecraft:diamond'), item('minecraft:diamond') * 2)
    .sand(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.sand_net.remove(NetRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.sand_net.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.sand_net.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.sand_net.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.sand_net.removeByInput(item('minecraft:iron_ingot'))
mods.betterwithaddons.sand_net.removeByOutput(item('minecraft:sand'))
mods.betterwithaddons.sand_net.removeByOutput(item('betterwithaddons:iron_sand'))
mods.betterwithaddons.sand_net.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.sand_net.streamRecipes()
    ```
