---
title: "Compost Bin"
description: "Can convert multiple items into a new one when its full"
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/CompostBin.java"
---

# Compost Bin (Pyrotech)

## Description

Can convert multiple items into a new one when its full

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.compost_bin/*(1)!*/
mods.pyrotech.compostbin
mods.pyrotech.compostBin
mods.pyrotech.CompostBin
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `compostValue`:

    ```groovy:no-line-numbers
    mods.pyrotech.compost_bin.add(String, IIngredient, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.compost_bin.add('iron_to_clay2', ore('ingotIron') * 5, item('minecraft:clay_ball') * 20, 2)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Compost Bin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.pyrotech.compost_bin.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

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

- `int`. Sets how much the items fills the bin. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    compostValue(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.CompostBinRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.compost_bin.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald') * 4)
    .compostValue(25)
    .name('diamond_to_emerald_compost_bin')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pyrotech.compost_bin.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.compost_bin.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.compost_bin.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.compost_bin.removeByInput(item('minecraft:golden_carrot'))
mods.pyrotech.compost_bin.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.compost_bin.streamRecipes()
    ```
