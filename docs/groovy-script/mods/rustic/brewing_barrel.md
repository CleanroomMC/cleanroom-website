---
title: "Brewing Barrel"
titleTemplate: "Rustic | CleanroomMC"
description: "Converts a fluid into another fluid after a long period of time. If the fluid is an instanceof FluidBooze, has a variable Quality that can be refined through further cycles of conversion."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/rustic/BrewingBarrel.java"
---

# Brewing Barrel (Rustic)

## Description

Converts a fluid into another fluid after a long period of time. If the fluid is an instanceof FluidBooze, has a variable Quality that can be refined through further cycles of conversion.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.rustic.brewing_barrel/* Used as page default */ // [!code focus]
mods.rustic.brewingbarrel
mods.rustic.brewingBarrel
mods.rustic.BrewingBarrel
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.rustic.brewing_barrel.add(IBrewingBarrelRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Brewing Barrel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.rustic.brewing_barrel.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `rustic.common.crafting.IBrewingBarrelRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.rustic.brewing_barrel.recipeBuilder()
    .fluidInput(fluid('ironberryjuice'))
    .fluidOutput(fluid('lava'))
    .register()

mods.rustic.brewing_barrel.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('lava'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.rustic.brewing_barrel.remove(IBrewingBarrelRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.rustic.brewing_barrel.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.rustic.brewing_barrel.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.rustic.brewing_barrel.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.rustic.brewing_barrel.removeByInput(fluid('ironberryjuice'))
mods.rustic.brewing_barrel.removeByOutput(fluid('ale'))
mods.rustic.brewing_barrel.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.rustic.brewing_barrel.streamRecipes()
    ```
