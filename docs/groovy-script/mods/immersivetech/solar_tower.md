---
title: "Solar Tower"
titleTemplate: "Immersive Technology | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack after a given amount of time in a multiblock structure, with the time being able to be sped up via Solar Reflector multiblocks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/SolarTower.java"
---

# Solar Tower (Immersive Technology)

## Description

Converts an input fluidstack into an output fluidstack after a given amount of time in a multiblock structure, with the time being able to be sped up via Solar Reflector multiblocks.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivetech.solar_tower/* Used as page default */ // [!code focus]
mods.immersivetech.solartower
mods.immersivetech.solarTower
mods.immersivetech.SolarTower
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.solar_tower.add(SolarTowerRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Solar Tower also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivetech.solar_tower.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.SolarTowerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.solar_tower.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.solar_tower.recipeBuilder()
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
    mods.immersivetech.solar_tower.remove(SolarTowerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersivetech.solar_tower.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersivetech.solar_tower.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivetech.solar_tower.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.solar_tower.removeByInput(fluid('water'))
mods.immersivetech.solar_tower.removeByOutput(fluid('superheatedmoltensodium'))
mods.immersivetech.solar_tower.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivetech.solar_tower.streamRecipes()
    ```
