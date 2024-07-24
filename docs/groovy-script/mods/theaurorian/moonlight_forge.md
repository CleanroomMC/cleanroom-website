---
title: "Moonlight Forge"
titleTemplate: "The Aurorian | CleanroomMC"
description: "Combines two items to get a third item. Only works at night, and works faster the higher it is placed in the world."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/theaurorian/MoonlightForge.java"
---

# Moonlight Forge (The Aurorian)

## Description

Combines two items to get a third item. Only works at night, and works faster the higher it is placed in the world.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.aurorian.moonlight_forge
mods.aurorian.moonlightforge
mods.aurorian.moonlightForge
mods.aurorian.MoonlightForge
mods.theaurorian.moonlight_forge/* Used as page default */ // [!code focus]
mods.theaurorian.moonlightforge
mods.theaurorian.moonlightForge
mods.theaurorian.MoonlightForge
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Moonlight Forge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.theaurorian.moonlight_forge.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shiroroku.theaurorian.Recipes.MoonlightForgeRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.theaurorian.moonlight_forge.recipeBuilder()
    .input(item('minecraft:stone_sword'), item('minecraft:diamond'))
    .output(item('minecraft:diamond_sword'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes a recipe by the input item and the catalyst item:

    ```groovy:no-line-numbers
    mods.theaurorian.moonlight_forge.removeByInput(IIngredient, IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.theaurorian.moonlight_forge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.theaurorian.moonlight_forge.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.theaurorian.moonlight_forge.removeByInput(item('theaurorian:moonstonesword'), item('theaurorian:aurorianiteingot'))
mods.theaurorian.moonlight_forge.removeByOutput(item('theaurorian:queenschipper'))
mods.theaurorian.moonlight_forge.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.theaurorian.moonlight_forge.streamRecipes()
    ```
