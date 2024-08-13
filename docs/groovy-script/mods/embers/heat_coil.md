---
title: "Heat Coil"
titleTemplate: "Embers | CleanroomMC"
description: "Convert an input item into an output item in a Heat Coil."
source_code_link: "https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/HeatCoil.java"
---

# Heat Coil (Embers)

## Description

Convert an input item into an output item in a Heat Coil.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.embers.heat_coil/* Used as page default */ // [!code focus]
mods.embers.heatcoil
mods.embers.heatCoil
mods.embers.HeatCoil
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Heat Coil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.embers.heat_coil.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.HeatCoilRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.heat_coil.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gravel'))
    .register()

mods.embers.heat_coil.recipeBuilder()
    .input(item('minecraft:gravel'))
    .output(item('minecraft:grass'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.embers.heat_coil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.embers.heat_coil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.embers.heat_coil.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.heat_coil.removeByInput(item('minecraft:iron_ore'))
mods.embers.heat_coil.removeByOutput(item('minecraft:iron_ingot'))
mods.embers.heat_coil.removeByOutput(item('minecraft:glass'))
mods.embers.heat_coil.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.embers.heat_coil.streamRecipes()
    ```
