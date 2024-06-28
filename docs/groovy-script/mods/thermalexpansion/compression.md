---
title: "Compression Dynamo"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input fluidstack into power, taking time based on the power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Compression.java"
---

# Compression Dynamo (Thermal Expansion)

## Description

Converts an input fluidstack into power, taking time based on the power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.compression
mods.thermal.Compression
mods.thermalexpansion.compression/* Used as page default */ // [!code focus]
mods.thermalexpansion.Compression
```


## Adding Recipes

- Adds recipes in the format `fluidStack`, `energy`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compression.add(FluidStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.compression.add(fluid('steam'), 100)
```

::::::::::

## Removing Recipes

- Removes all recipes with given FluidStack:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compression.removeByInput(FluidStack)
    ```

- Removes all recipes with given FluidStack:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compression.removeByInput(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compression.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.compression.removeByInput(fluid('seed_oil'))
mods.thermalexpansion.compression.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compression.streamRecipes()
    ```
