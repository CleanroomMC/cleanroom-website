---
title: "Evaporator"
titleTemplate: "Alchemistry | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack, taking a set amount of time."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Evaporator.java"
---

# Evaporator (Alchemistry)

## Description

Converts an input fluidstack into an output fluidstack, taking a set amount of time.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.alchemistry.evaporator/* Used as page default */ // [!code focus]
mods.alchemistry.Evaporator
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.alchemistry.evaporator.add(EvaporatorRecipe)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.alchemistry.evaporator.add(FluidStack, ItemStack)
    ```


### Recipe Builder

Just like other recipe types, the Evaporator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.alchemistry.evaporator.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.EvaporatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.evaporator.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .output(item('minecraft:redstone') * 8)
    .register()

mods.alchemistry.evaporator.recipeBuilder()
    .fluidInput(fluid('water') * 10)
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.alchemistry.evaporator.remove(EvaporatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.alchemistry.evaporator.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.alchemistry.evaporator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.alchemistry.evaporator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.evaporator.removeByInput(fluid('lava'))
mods.alchemistry.evaporator.removeByOutput(item('alchemistry:mineral_salt'))
mods.alchemistry.evaporator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.alchemistry.evaporator.streamRecipes()
    ```
