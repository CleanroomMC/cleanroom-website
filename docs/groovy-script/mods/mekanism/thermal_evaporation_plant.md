---
title: "Thermal Evaporation Plant"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack over time based on multiblock temperature."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/ThermalEvaporationPlant.java"
---

# Thermal Evaporation Plant (Mekanism)

## Description

Converts an input fluidstack into an output fluidstack over time based on multiblock temperature.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.thermal_evaporation_plant/* Used as page default */ // [!code focus]
mods.mekanism.thermalevaporationplant
mods.mekanism.thermalEvaporationPlant
mods.mekanism.ThermalEvaporationPlant
mods.mekanism.thermal_evaporation
mods.mekanism.thermalevaporation
mods.mekanism.thermalEvaporation
mods.mekanism.ThermalEvaporation
mods.mekanism.TEP
mods.mekanism.tep
```


## Adding Recipes

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.thermal_evaporation_plant.add(FluidStack, FluidStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.thermal_evaporation_plant.add(fluid('water'), fluid('steam'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Thermal Evaporation Plant also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.mekanism.thermal_evaporation_plant.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.ThermalEvaporationRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.thermal_evaporation_plant.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('steam'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.thermal_evaporation_plant.removeByInput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.thermal_evaporation_plant.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.thermal_evaporation_plant.removeByInput(fluid('water'))
mods.mekanism.thermal_evaporation_plant.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.thermal_evaporation_plant.streamRecipes()
    ```
