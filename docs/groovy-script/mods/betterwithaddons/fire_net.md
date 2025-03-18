---
title: "Fire Net"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input item into any number of output itemstacks if placed within the appropriate multiblock. The multiblock is Lava or Fire directly below the Netted Screen, 8 Stone Brick around the Lava or Fire, and 8 Slat Blocks placed around the Netted Screen."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/FireNet.java"
---

# Fire Net (Better With Addons)

## Description

Converts an input item into any number of output itemstacks if placed within the appropriate multiblock. The multiblock is Lava or Fire directly below the Netted Screen, 8 Stone Brick around the Lava or Fire, and 8 Slat Blocks placed around the Netted Screen.

:::::::::: details Note {open id="note"}
Because the Fire Net needs Lava/Fire below the net to work, items that are output below the net will be destroyed.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.fire_net/* Used as page default */ // [!code focus]
mods.betterwithaddons.firenet
mods.betterwithaddons.fireNet
mods.betterwithaddons.FireNet
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.fire_net.add(NetRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Fire Net also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.fire_net.recipeBuilder() {open id="abstract"}
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
mods.betterwithaddons.fire_net.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.fire_net.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4, item('minecraft:diamond'), item('minecraft:diamond') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.fire_net.remove(NetRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.fire_net.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.fire_net.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.fire_net.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.fire_net.removeByInput(item('betterwithaddons:iron_sand'))
mods.betterwithaddons.fire_net.removeByOutput(item('betterwithaddons:japanmat:12'))
mods.betterwithaddons.fire_net.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.fire_net.streamRecipes()
    ```
