---
title: "Atomizer"
titleTemplate: "Alchemistry | CleanroomMC"
description: "Converts a non-element into its component elements."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Atomizer.java"
---

# Atomizer (Alchemistry)

## Description

Converts a non-element into its component elements.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.alchemistry.atomizer/* Used as page default */ // [!code focus]
mods.alchemistry.Atomizer
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.alchemistry.atomizer.add(AtomizerRecipe)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.alchemistry.atomizer.add(FluidStack, ItemStack)
    ```


### Recipe Builder

Just like other recipe types, the Atomizer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.alchemistry.atomizer.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `boolean`. Sets if the recipe will also create a Liquifier recipe to invert the process. (Default `false`).

    ```groovy:no-line-numbers
    reversible()
    reversible(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.AtomizerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.atomizer.recipeBuilder()
    .fluidInput(fluid('water') * 125)
    .output(item('minecraft:clay'))
    .register()

mods.alchemistry.atomizer.recipeBuilder()
    .fluidInput(fluid('lava') * 500)
    .output(item('minecraft:gold_ingot'))
    .reversible()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.alchemistry.atomizer.remove(AtomizerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.alchemistry.atomizer.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.alchemistry.atomizer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.alchemistry.atomizer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.atomizer.removeByInput(fluid('water'))
mods.alchemistry.atomizer.removeByOutput(item('alchemistry:compound:7'))
mods.alchemistry.atomizer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.alchemistry.atomizer.streamRecipes()
    ```
