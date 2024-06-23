---
title: "Magmatic Dynamo"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input fluidstack into power, taking time based on the power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Magmatic.java"
---

# Magmatic Dynamo (Thermal Expansion)

## Description

Converts an input fluidstack into power, taking time based on the power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.magmatic
mods.thermal.Magmatic
mods.thermalexpansion.magmatic/* Used as page default */ // [!code focus]
mods.thermalexpansion.Magmatic
```


## Adding Recipes

- Adds recipes in the format `fluidStack`, `energy`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.magmatic.add(FluidStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.magmatic.add(fluid('steam'), 100)
```

::::::::::

## Removing Recipes

- Removes all recipes with given FluidStack:

    ```groovy:no-line-numbers
    mods.thermalexpansion.magmatic.removeByInput(FluidStack)
    ```

- Removes all recipes with given FluidStack:

    ```groovy:no-line-numbers
    mods.thermalexpansion.magmatic.removeByInput(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.magmatic.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.magmatic.removeByInput(fluid('lava'))
mods.thermalexpansion.magmatic.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.magmatic.streamRecipes()
    ```
