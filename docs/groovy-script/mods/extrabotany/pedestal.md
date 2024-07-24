---
title: "Livingrock Pedestal"
titleTemplate: "Extra Botany | CleanroomMC"
description: "Converts an input item into an output itemstack when placed inside a Livingrock Pedestal and interacted with by an Extra Botany Hammer."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrabotany/Pedestal.java"
---

# Livingrock Pedestal (Extra Botany)

## Description

Converts an input item into an output itemstack when placed inside a Livingrock Pedestal and interacted with by an Extra Botany Hammer.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.extrabotany.pedestal/* Used as page default */ // [!code focus]
mods.extrabotany.Pedestal
```


## Adding Recipes

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.extrabotany.pedestal.add(IIngredient, ItemStack)
    ```


### Recipe Builder

Just like other recipe types, the Livingrock Pedestal also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.extrabotany.pedestal.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.meteor.extrabotany.common.crafting.recipe.RecipePedestal`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrabotany.pedestal.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()

mods.extrabotany.pedestal.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.extrabotany.pedestal.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.extrabotany.pedestal.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.extrabotany.pedestal.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrabotany.pedestal.removeByInput(item('minecraft:cobblestone'))
mods.extrabotany.pedestal.removeByOutput(item('minecraft:flint'))
mods.extrabotany.pedestal.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.extrabotany.pedestal.streamRecipes()
    ```
