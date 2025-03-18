---
title: "Spindle"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, with the ability to consume the Spindle, when placed against a Spinning Wheel powered by Mechanical Power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Spindle.java"
---

# Spindle (Better With Addons)

## Description

Converts an input itemstack into an output itemstack, with the ability to consume the Spindle, when placed against a Spinning Wheel powered by Mechanical Power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.spindle/* Used as page default */ // [!code focus]
mods.betterwithaddons.Spindle
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.spindle.add(SpindleRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Spindle also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.spindle.recipeBuilder() {open id="abstract"}
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

- `boolean`. Sets if the Spindle will break and be consumed when crafting. (Default `false`).

    ```groovy:no-line-numbers
    popoff()
    popoff(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.SpindleRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.spindle.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.spindle.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:diamond'))
    .popoff()
    .register()

mods.betterwithaddons.spindle.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.spindle.remove(SpindleRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.spindle.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.spindle.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.spindle.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.spindle.removeByInput(item('minecraft:vine'))
mods.betterwithaddons.spindle.removeByOutput(item('betterwithaddons:bolt'))
mods.betterwithaddons.spindle.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.spindle.streamRecipes()
    ```
