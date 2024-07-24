---
title: "Kiln"
titleTemplate: "Atum 2 | CleanroomMC"
description: "Smelts an input item into an output itemstack and giving experience similar to a Furnace, but can process up to 4 stacks simultaneously. Makes a copy of the vanilla furnace recipes, excluding entries on a blacklist."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/atum/Kiln.java"
---

# Kiln (Atum 2)

## Description

Smelts an input item into an output itemstack and giving experience similar to a Furnace, but can process up to 4 stacks simultaneously. Makes a copy of the vanilla furnace recipes, excluding entries on a blacklist.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.atum.kiln/* Used as page default */ // [!code focus]
mods.atum.Kiln
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.atum.kiln.recipeBuilder() {open id="abstract"}
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

- `float`. Sets the experience gained by taking the output item out of the Kiln. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    experience(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.teammetallurgy.atum.api.recipe.kiln.IKilnRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.atum.kiln.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.atum.kiln.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .experience(0.5f)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.atum.kiln.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.atum.kiln.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.atum.kiln.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.atum.kiln.removeByInput(item('minecraft:netherrack'))
mods.atum.kiln.removeByOutput(item('minecraft:stone'))
mods.atum.kiln.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.atum.kiln.streamRecipes()
    ```
