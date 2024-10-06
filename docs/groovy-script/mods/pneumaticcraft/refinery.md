---
title: "Refinery"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Converts an input fluidstack into between 2 and 4 fluidstacks, consuming Temperature, with the number of fluidstacks output depending on the recipe and the number of Refineries vertically stacked."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/Refinery.java"
---

# Refinery (PneumaticCraft: Repressurized)

## Description

Converts an input fluidstack into between 2 and 4 fluidstacks, consuming Temperature, with the number of fluidstacks output depending on the recipe and the number of Refineries vertically stacked.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.refinery/* Used as page default */ // [!code focus]
mods.pneumaticcraft.Refinery
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.refinery.add(RefineryRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Refinery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.refinery.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 2 and less than or equal to 4.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the required temperate in Kelvin required to process the recipe. (Default `373`).

    ```groovy:no-line-numbers
    requiredTemperature(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.RefineryRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.refinery.recipeBuilder()
    .fluidInput(fluid('water') * 1000)
    .fluidOutput(fluid('lava') * 750, fluid('lava') * 250, fluid('lava') * 100, fluid('lava') * 50)
    .register()

mods.pneumaticcraft.refinery.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('water') * 50, fluid('kerosene') * 25)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.refinery.remove(RefineryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.refinery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.refinery.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.refinery.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.refinery.removeByInput(fluid('oil'))
mods.pneumaticcraft.refinery.removeByOutput(fluid('kerosene'))
mods.pneumaticcraft.refinery.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.refinery.streamRecipes()
    ```
