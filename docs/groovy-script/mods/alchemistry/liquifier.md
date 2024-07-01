---
title: "Liquifier"
titleTemplate: "Alchemistry | CleanroomMC"
description: "Converts an input itemstack into an output fluidstack, consuming a set amount of power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Liquifier.java"
---

# Liquifier (Alchemistry)

## Description

Converts an input itemstack into an output fluidstack, consuming a set amount of power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.alchemistry.liquifier/* Used as page default */ // [!code focus]
mods.alchemistry.Liquifier
```


## Adding Recipes

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.alchemistry.liquifier.add(IIngredient, FluidStack)
    ```


### Recipe Builder

Just like other recipe types, the Liquifier also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.alchemistry.liquifier.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.LiquifierRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.liquifier.recipeBuilder()
    .input(element('carbon') * 32)
    .fluidOutput(fluid('water') * 1000)
    .register()

mods.alchemistry.liquifier.recipeBuilder()
    .input(item('minecraft:magma'))
    .fluidOutput(fluid('lava') * 750)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.alchemistry.liquifier.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.alchemistry.liquifier.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.alchemistry.liquifier.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.liquifier.removeByInput(element('water'))
mods.alchemistry.liquifier.removeByOutput(fluid('water'))
mods.alchemistry.liquifier.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.alchemistry.liquifier.streamRecipes()
    ```
