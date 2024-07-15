---
title: "Thermopneumatic Processing Plant"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack, consuming Pressure and Temperature, with an optional itemstack being consumed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/ThermopneumaticProcessingPlant.java"
---

# Thermopneumatic Processing Plant (PneumaticCraft: Repressurized)

## Description

Converts an input fluidstack into an output fluidstack, consuming Pressure and Temperature, with an optional itemstack being consumed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.thermopneumatic_processing_plant/* Used as page default */ // [!code focus]
mods.pneumaticcraft.thermopneumaticprocessingplant
mods.pneumaticcraft.thermopneumaticProcessingPlant
mods.pneumaticcraft.ThermopneumaticProcessingPlant
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Thermopneumatic Processing Plant also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.thermopneumatic_processing_plant.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

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

- `float`. Sets the Pressure consumed to perform the craft. (Default `0.0f`).

    ```groovy:no-line-numbers
    pressure(float)
    ```

- `double`. Sets the required temperate in Kelvin required to process the recipe. (Default `0.0d`).

    ```groovy:no-line-numbers
    requiredTemperature(double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.api.recipe.IThermopneumaticProcessingPlantRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.thermopneumatic_processing_plant.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('kerosene') * 100)
    .pressure(4)
    .requiredTemperature(323)
    .register()

mods.pneumaticcraft.thermopneumatic_processing_plant.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('lava') * 100)
    .pressure(4)
    .requiredTemperature(323)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.thermopneumatic_processing_plant.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.thermopneumatic_processing_plant.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.thermopneumatic_processing_plant.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.thermopneumatic_processing_plant.removeByInput(item('minecraft:coal'))
mods.pneumaticcraft.thermopneumatic_processing_plant.removeByInput(fluid('diesel'))
mods.pneumaticcraft.thermopneumatic_processing_plant.removeByOutput(fluid('lpg'))
mods.pneumaticcraft.thermopneumatic_processing_plant.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.thermopneumatic_processing_plant.streamRecipes()
    ```
