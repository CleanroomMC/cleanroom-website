---
title: "Fire Dragonforge"
titleTemplate: "Ice And Fire | CleanroomMC"
description: "Converts two input itemstacks into an output itemstack in a multiblock Dragonforge Fire Multiblock while there is a stage 3+ Fire Dragon nearby."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/iceandfire/FireForge.java"
---

# Fire Dragonforge (Ice And Fire)

## Description

Converts two input itemstacks into an output itemstack in a multiblock Dragonforge Fire Multiblock while there is a stage 3+ Fire Dragon nearby.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.iceandfire.fire_forge/* Used as page default */ // [!code focus]
mods.iceandfire.fireforge
mods.iceandfire.fireForge
mods.iceandfire.FireForge
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.iceandfire.fire_forge.add(DragonForgeRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Fire Dragonforge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.iceandfire.fire_forge.recipeBuilder() {open id="abstract"}
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
mods.iceandfire.fire_forge.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.iceandfire.fire_forge.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.iceandfire.fire_forge.remove(DragonForgeRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.iceandfire.fire_forge.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.iceandfire.fire_forge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.iceandfire.fire_forge.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.iceandfire.fire_forge.removeByInput(item('minecraft:iron_ingot'))
mods.iceandfire.fire_forge.removeByInput(item('iceandfire:fire_dragon_blood'))
mods.iceandfire.fire_forge.removeByOutput(item('iceandfire:dragonsteel_fire_ingot'))
mods.iceandfire.fire_forge.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.iceandfire.fire_forge.streamRecipes()
    ```
