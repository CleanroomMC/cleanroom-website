---
title: "Gas Turbine"
titleTemplate: "Immersive Technology | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack after a given amount of time in a multiblock structure, producing power for an adjacent Alternator multiblock."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/GasTurbine.java"
---

# Gas Turbine (Immersive Technology)

## Description

Converts an input fluidstack into an output fluidstack after a given amount of time in a multiblock structure, producing power for an adjacent Alternator multiblock.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivetech.gas_turbine/* Used as page default */ // [!code focus]
mods.immersivetech.gasturbine
mods.immersivetech.gasTurbine
mods.immersivetech.GasTurbine
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.gas_turbine.add(GasTurbineRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Gas Turbine also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivetech.gas_turbine.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.GasTurbineRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.gas_turbine.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.gas_turbine.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .fluidOutput(fluid('lava') * 50)
    .time(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.gas_turbine.remove(GasTurbineRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersivetech.gas_turbine.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersivetech.gas_turbine.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivetech.gas_turbine.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.gas_turbine.removeByInput(fluid('biodiesel'))
mods.immersivetech.gas_turbine.removeByOutput(fluid('fluegas'))
mods.immersivetech.gas_turbine.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivetech.gas_turbine.streamRecipes()
    ```
