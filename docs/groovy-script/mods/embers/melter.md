---
title: "Melter"
titleTemplate: "Embers | CleanroomMC"
description: "Converts an input item into an output fluidstack in a Melter with the ability to have a secondary output fluidstack by adding a Geologic Separator."
source_code_link: "https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/Melter.java"
---

# Melter (Embers)

## Description

Converts an input item into an output fluidstack in a Melter with the ability to have a secondary output fluidstack by adding a Geologic Separator.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.embers.melter/* Used as page default */ // [!code focus]
mods.embers.Melter
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Melter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.embers.melter.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.ItemMeltingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.melter.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('water') * 100)
    .register()

mods.embers.melter.recipeBuilder()
    .input(item('minecraft:gravel'))
    .fluidOutput(fluid('lava') * 50, fluid('water') * 50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.embers.melter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.embers.melter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.embers.melter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.melter.removeByInput(item('minecraft:redstone_block'))
mods.embers.melter.removeByOutput(fluid('oil_soul'))
mods.embers.melter.removeByOutput(fluid('iron'))
mods.embers.melter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.embers.melter.streamRecipes()
    ```
