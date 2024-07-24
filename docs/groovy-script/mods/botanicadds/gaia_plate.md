---
title: "Gaia Plate"
titleTemplate: "Botanic Additions | CleanroomMC"
description: "Converts an number of input items into an output itemstack, consuming a given amount of mana when dropped in-world atop a Gaia Agglomeration Plate as part of a multiblock structure."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botanicadditions/GaiaPlate.java"
---

# Gaia Plate (Botanic Additions)

## Description

Converts an number of input items into an output itemstack, consuming a given amount of mana when dropped in-world atop a Gaia Agglomeration Plate as part of a multiblock structure.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botanicadds.gaia_plate/* Used as page default */ // [!code focus]
mods.botanicadds.gaiaplate
mods.botanicadds.gaiaPlate
mods.botanicadds.GaiaPlate
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Gaia Plate also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.botanicadds.gaia_plate.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to Integer.MAX_VALUE.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the mana cost of processing the recipe. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    mana(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `tk.zeitheron.botanicadds.api.GaiaPlateRecipes$RecipeGaiaPlate`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botanicadds.gaia_plate.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot') * 16)
    .mana(1000)
    .register()

mods.botanicadds.gaia_plate.recipeBuilder()
    .input(item('minecraft:diamond_block'), item('minecraft:gold_block'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .mana(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botanicadds.gaia_plate.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botanicadds.gaia_plate.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botanicadds.gaia_plate.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botanicadds.gaia_plate.removeByInput(item('botania:manaresource'))
mods.botanicadds.gaia_plate.removeByOutput(item('botanicadds:gaiasteel_ingot'))
mods.botanicadds.gaia_plate.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botanicadds.gaia_plate.streamRecipes()
    ```
