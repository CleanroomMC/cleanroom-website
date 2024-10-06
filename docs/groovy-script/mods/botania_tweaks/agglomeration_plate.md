---
title: "Agglomeration Plate"
titleTemplate: "Botania Tweaks | CleanroomMC"
description: "Converts any number of input itemstacks into an item output, consuming mana to do so. Occurs in-world above a Terrestrial Agglomeration Plate place on top of a small 3x3 multiblock, of which the center, sides, and corners may be set to require specific blockstates. While the recipe is running, particles will gradually change color until the recipe is finished. Upon finishing the recipe, the center, sides, and corners can each be converted into a replacement blockstate, if a replacement blockstate was set."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botaniatweaks/AgglomerationPlate.java"
---

# Agglomeration Plate (Botania Tweaks)

## Description

Converts any number of input itemstacks into an item output, consuming mana to do so. Occurs in-world above a Terrestrial Agglomeration Plate place on top of a small 3x3 multiblock, of which the center, sides, and corners may be set to require specific blockstates. While the recipe is running, particles will gradually change color until the recipe is finished. Upon finishing the recipe, the center, sides, and corners can each be converted into a replacement blockstate, if a replacement blockstate was set.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania_tweaks.agglomeration_plate/* Used as page default */ // [!code focus]
mods.botania_tweaks.agglomerationplate
mods.botania_tweaks.agglomerationPlate
mods.botania_tweaks.AgglomerationPlate
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.add(AgglomerationRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Agglomeration Plate also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.botania_tweaks.agglomeration_plate.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

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

- `IBlockState`. Sets the IBlockState of the edges of the structure. Requires not null.

    ```groovy:no-line-numbers
    edge(IBlockState)
    baseStructure()
    ```

- `int`. Sets the mana cost of processing the recipe. Requires greater than or equal to 1. (Default `500,000`).

    ```groovy:no-line-numbers
    mana(int)
    ```

- `IBlockState`. Sets the IBlockState of the center of the structure. Requires not null.

    ```groovy:no-line-numbers
    center(IBlockState)
    baseStructure()
    ```

- `IBlockState`. Sets the IBlockState of the corners of the structure. Requires not null.

    ```groovy:no-line-numbers
    corner(IBlockState)
    baseStructure()
    ```

- `int`. Sets the color hex code at the end of the recipe. (Default `0`).

    ```groovy:no-line-numbers
    color(int, int)
    colorEnd(int)
    ```

- `int`. Sets the color hex code at the start of the recipe. (Default `0`).

    ```groovy:no-line-numbers
    color(int, int)
    colorStart(int)
    ```

- `IBlockState`. Sets the IBlockState the edges will be replaced with, if not null.

    ```groovy:no-line-numbers
    edgeReplacement(IBlockState)
    ```

- `IBlockState`. Sets the IBlockState the center will be replaced with, if not null.

    ```groovy:no-line-numbers
    centerReplacement(IBlockState)
    ```

- `IBlockState`. Sets the IBlockState the corners will be replaced with, if not null.

    ```groovy:no-line-numbers
    cornerReplacement(IBlockState)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `quaternary.botaniatweaks.modules.botania.recipe.AgglomerationRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 3)
    .baseStructure()
    .mana(100000)
    .color(0xff00ff, 0x00ffff)
    .register()

mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:gold_ingot'), item('minecraft:gold_block'))
    .output(item('minecraft:clay') * 32)
    .colorStart(0x000000)
    .colorEnd(0x0000ff)
    .center(blockstate('minecraft:gold_block'))
    .edge(blockstate('botania:livingwood:variant=glimmering'))
    .corner(blockstate('botania:livingwood:variant=glimmering'))
    .register()

mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .mana(50000)
    .baseStructure()
    .center(blockstate('minecraft:diamond_block'))
    .centerReplacement(blockstate('minecraft:clay'))
    .edgeReplacement(blockstate('botania:livingrock:variant=default'))
    .cornerReplacement(blockstate('minecraft:lapis_block'))
    .register()

mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .mana(1000)
    .center(blockstate('minecraft:clay'))
    .edge(blockstate('botania:livingrock:variant=default'))
    .corner(blockstate('minecraft:lapis_block'))
    .centerReplacement(blockstate('minecraft:diamond_block'))
    .edgeReplacement(blockstate('minecraft:lapis_block'))
    .cornerReplacement(blockstate('botania:livingrock:variant=default'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.remove(AgglomerationRecipe)
    ```

- Removes all recipes with the given center IBlockState:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.removeByCenter(IBlockState)
    ```

- Removes all recipes with the given corner IBlockState:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.removeByCorner(IBlockState)
    ```

- Removes all recipes with the given edge IBlockState:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.removeByEdge(IBlockState)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania_tweaks.agglomeration_plate.removeByCenter(blockstate('botania:livingrock'))
mods.botania_tweaks.agglomeration_plate.removeByCorner(blockstate('botania:livingrock'))
mods.botania_tweaks.agglomeration_plate.removeByEdge(blockstate('minecraft:lapis_block'))
mods.botania_tweaks.agglomeration_plate.removeByInput(item('botania:manaresource:2'))
mods.botania_tweaks.agglomeration_plate.removeByOutput(item('botania:manaresource:4'))
mods.botania_tweaks.agglomeration_plate.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania_tweaks.agglomeration_plate.streamRecipes()
    ```
