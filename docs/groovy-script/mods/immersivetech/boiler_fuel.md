---
title: "Boiler Fuel"
titleTemplate: "Immersive Technology | CleanroomMC"
description: "Converts an input fluidstack into heat for the Boiler multiblock structure over a given amount of time."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/BoilerFuel.java"
---

# Boiler Fuel (Immersive Technology)

## Description

Converts an input fluidstack into heat for the Boiler multiblock structure over a given amount of time.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivetech.boiler_fuel/* Used as page default */ // [!code focus]
mods.immersivetech.boilerfuel
mods.immersivetech.boilerFuel
mods.immersivetech.BoilerFuel
```


## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.boiler_fuel.add(BoilerRecipe.BoilerFuelRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Boiler Fuel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivetech.boiler_fuel.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `double`. Sets the total heat gained by the Boiler. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    heat(double)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.BoilerRecipe$BoilerFuelRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.boiler_fuel.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .time(100)
    .heat(10)
    .register()

mods.immersivetech.boiler_fuel.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .time(50)
    .heat(0.05)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.boiler_fuel.remove(BoilerRecipe.BoilerFuelRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersivetech.boiler_fuel.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivetech.boiler_fuel.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.boiler_fuel.removeByInput(fluid('biodiesel'))
mods.immersivetech.boiler_fuel.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivetech.boiler_fuel.streamRecipes()
    ```
