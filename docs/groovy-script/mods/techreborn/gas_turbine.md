---
title: "Gas Turbine"
titleTemplate: "Tech Reborn | CleanroomMC"
description: "Converts a fluidstack input into power, at a given rate per tick."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/GasTurbine.java"
---

# Gas Turbine (Tech Reborn)

## Description

Converts a fluidstack input into power, at a given rate per tick.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.techreborn.gas_turbine/* Used as page default */ // [!code focus]
mods.techreborn.gasturbine
mods.techreborn.gasTurbine
mods.techreborn.GasTurbine
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.gas_turbine.add(R)
    ```


### Recipe Builder

Just like other recipe types, the Gas Turbine also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.techreborn.gas_turbine.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `double`. Sets the total amount of energy generated from a bucket. Requires greater than 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    energy(double)
    ```

- `double`. Sets the power consumed per tick. Requires greater than 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    perTick(double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `reborncore.api.praescriptum.fuels.Fuel`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.gas_turbine.recipeBuilder()
    .fluidInput(fluid('water'))
    .energy(10000)
    .perTick(500)
    .register()

mods.techreborn.gas_turbine.recipeBuilder()
    .fluidInput(fluid('lava'))
    .energy(200)
    .perTick(10)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.gas_turbine.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.techreborn.gas_turbine.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.techreborn.gas_turbine.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.gas_turbine.removeByInput(fluid('fluidhydrogen'))
mods.techreborn.gas_turbine.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.techreborn.gas_turbine.streamRecipes()
    ```
