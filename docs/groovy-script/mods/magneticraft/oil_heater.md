---
title: "Oil Heater"
titleTemplate: "Magneticraft | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack in a Oil Heater Multiblock."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/OilHeater.java"
---

# Oil Heater (Magneticraft)

## Description

Converts an input fluidstack into an output fluidstack in a Oil Heater Multiblock.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.magneticraft.oil_heater/* Used as page default */ // [!code focus]
mods.magneticraft.oilheater
mods.magneticraft.oilHeater
mods.magneticraft.OilHeater
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.oil_heater.add(IOilHeaterRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Oil Heater also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.magneticraft.oil_heater.recipeBuilder() {open id="abstract"}
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

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    duration(float)
    ```

- `float`. Sets the minimum temperature required to process the recipe. (Default `0.0f`).

    ```groovy:no-line-numbers
    minTemperature(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.oilheater.IOilHeaterRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.oil_heater.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('lava'))
    .duration(50)
    .minTemperature(200)
    .register()

mods.magneticraft.oil_heater.recipeBuilder()
    .fluidInput(fluid('lava'))
    .fluidOutput(fluid('water'))
    .duration(100)
    .minTemperature(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.oil_heater.remove(IOilHeaterRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.magneticraft.oil_heater.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.magneticraft.oil_heater.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.magneticraft.oil_heater.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.oil_heater.removeByInput(fluid('oil'))
mods.magneticraft.oil_heater.removeByOutput(fluid('steam'))
mods.magneticraft.oil_heater.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.magneticraft.oil_heater.streamRecipes()
    ```
