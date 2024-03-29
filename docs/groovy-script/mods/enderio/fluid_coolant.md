---
title: "Fluid Coolant"
titleTemplate: "Ender IO | CleanroomMC"
description: "Create a Coolant with a given coolant rate that produces power with a Fuel while in a Combustion Generator."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/FluidCoolant.java"
---

# Fluid Coolant (Ender IO)

## Description

Create a Coolant with a given coolant rate that produces power with a Fuel while in a Combustion Generator.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.enderio.fluid_coolant/* Used as page default */ // [!code focus]
mods.enderio.fluidcoolant
mods.enderio.fluidCoolant
mods.enderio.FluidCoolant
mods.enderio.combustion_coolant
mods.enderio.combustioncoolant
mods.enderio.combustionCoolant
mods.enderio.CombustionCoolant
mods.eio.fluid_coolant
mods.eio.fluidcoolant
mods.eio.fluidCoolant
mods.eio.FluidCoolant
mods.eio.combustion_coolant
mods.eio.combustioncoolant
mods.eio.combustionCoolant
mods.eio.CombustionCoolant
```


## Adding Recipes

- Adds recipes in the format `fluid`, `degreesPerMb`:

    ```groovy:no-line-numbers
    mods.enderio.fluid_coolant.addCoolant(Fluid, float)
    ```

- Adds recipes in the format `fluid`, `degreesPerMb`:

    ```groovy:no-line-numbers
    mods.enderio.fluid_coolant.addCoolant(FluidStack, float)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.fluid_coolant.addCoolant(fluid('xpjuice'), 1000)
```

::::::::::

## Removing Recipes

- Removes recipes matching the target fluid:

    ```groovy:no-line-numbers
    mods.enderio.fluid_coolant.remove(Fluid)
    ```

- Removes recipes matching the target fluid:

    ```groovy:no-line-numbers
    mods.enderio.fluid_coolant.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.enderio.fluid_coolant.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.fluid_coolant.remove(fluid('water'))
mods.enderio.fluid_coolant.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.enderio.fluid_coolant.streamRecipes()
    ```
