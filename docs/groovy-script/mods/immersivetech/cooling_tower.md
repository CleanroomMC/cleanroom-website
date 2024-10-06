---
title: "Cooling Tower"
titleTemplate: "Immersive Technology | CleanroomMC"
description: "Converts up to two input fluidstacks into up to three output fluidstacks after a given amount of time in a multiblock structure."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/CoolingTower.java"
---

# Cooling Tower (Immersive Technology)

## Description

Converts up to two input fluidstacks into up to three output fluidstacks after a given amount of time in a multiblock structure.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivetech.cooling_tower/* Used as page default */ // [!code focus]
mods.immersivetech.coolingtower
mods.immersivetech.coolingTower
mods.immersivetech.CoolingTower
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.cooling_tower.add(CoolingTowerRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Cooling Tower also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivetech.cooling_tower.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.CoolingTowerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.cooling_tower.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.cooling_tower.recipeBuilder()
    .fluidInput(fluid('water') * 50, fluid('hot_spring_water') * 50)
    .fluidOutput(fluid('lava') * 50, fluid('water') * 50, fluid('lava') * 50)
    .time(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.cooling_tower.remove(CoolingTowerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersivetech.cooling_tower.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersivetech.cooling_tower.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivetech.cooling_tower.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.cooling_tower.removeByInput(fluid('hot_spring_water'))
mods.immersivetech.cooling_tower.removeByOutput(fluid('water'))
mods.immersivetech.cooling_tower.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivetech.cooling_tower.streamRecipes()
    ```
