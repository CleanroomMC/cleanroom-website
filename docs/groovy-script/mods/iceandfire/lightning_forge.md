---
title: "Lightning Dragonforge"
titleTemplate: "Ice And Fire | CleanroomMC"
description: "Converts two input itemstacks into an output itemstack in a multiblock Dragonforge Lightning Multiblock while there is a stage 3+ Lightning Dragon nearby."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/iceandfire/LightningForge.java"
---

# Lightning Dragonforge (Ice And Fire)

## Description

Converts two input itemstacks into an output itemstack in a multiblock Dragonforge Lightning Multiblock while there is a stage 3+ Lightning Dragon nearby.

:::::::::: details Note {open id="note"}
Requires [Ice And Fire: RotN edition](https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-rotn-edition) to be installed to be enabled.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.iceandfire.lightning_forge/* Used as page default */ // [!code focus]
mods.iceandfire.lightningforge
mods.iceandfire.lightningForge
mods.iceandfire.LightningForge
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.iceandfire.lightning_forge.add(DragonForgeRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Lightning Dragonforge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.iceandfire.lightning_forge.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.github.alexthe666.iceandfire.recipe.DragonForgeRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.iceandfire.lightning_forge.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.iceandfire.lightning_forge.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.iceandfire.lightning_forge.remove(DragonForgeRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.iceandfire.lightning_forge.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.iceandfire.lightning_forge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.iceandfire.lightning_forge.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.iceandfire.lightning_forge.removeByInput(item('minecraft:iron_ingot'))
mods.iceandfire.lightning_forge.removeByInput(item('iceandfire:lightning_dragon_blood'))
mods.iceandfire.lightning_forge.removeByOutput(item('iceandfire:dragonsteel_lightning_ingot'))
mods.iceandfire.lightning_forge.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.iceandfire.lightning_forge.streamRecipes()
    ```
