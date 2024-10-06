---
title: "Heat Exchanger"
titleTemplate: "Immersive Technology | CleanroomMC"
description: "Converts up to two input fluidstacks into up to two output fluidstacks after a given amount of time in a multiblock structure."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/HeatExchanger.java"
---

# Heat Exchanger (Immersive Technology)

## Description

Converts up to two input fluidstacks into up to two output fluidstacks after a given amount of time in a multiblock structure.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivetech.heat_exchanger/* Used as page default */ // [!code focus]
mods.immersivetech.heatexchanger
mods.immersivetech.heatExchanger
mods.immersivetech.HeatExchanger
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.heat_exchanger.add(HeatExchangerRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Heat Exchanger also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivetech.heat_exchanger.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 2.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the energy used in total IF consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.HeatExchangerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.heat_exchanger.recipeBuilder()
    .fluidInput(fluid('lava') * 100, fluid('lava') * 50)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.heat_exchanger.recipeBuilder()
    .fluidInput(fluid('water') * 50, fluid('hot_spring_water') * 50)
    .fluidOutput(fluid('lava') * 50, fluid('water') * 10)
    .time(50)
    .energy(5000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.heat_exchanger.remove(HeatExchangerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersivetech.heat_exchanger.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersivetech.heat_exchanger.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivetech.heat_exchanger.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.heat_exchanger.removeByInput(fluid('fluegas'))
mods.immersivetech.heat_exchanger.removeByOutput(fluid('hot_spring_water'))
mods.immersivetech.heat_exchanger.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivetech.heat_exchanger.streamRecipes()
    ```
