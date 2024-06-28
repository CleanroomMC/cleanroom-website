---
title: "Thermal Mediator"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Consumes fluid to speed up the tick rate of adjacent machines and devices and generate power in the Compression Dynamo."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Coolant.java"
---

# Thermal Mediator (Thermal Expansion)

## Description

Consumes fluid to speed up the tick rate of adjacent machines and devices and generate power in the Compression Dynamo.

:::::::::: details Warning {open id="warning"}
Due to a limitation involving displaying the entry in JEI, entries must output at least 4000 rf.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.coolant
mods.thermal.Coolant
mods.thermalexpansion.coolant/* Used as page default */ // [!code focus]
mods.thermalexpansion.Coolant
```


## Adding Entries

- Adds recipes in the format `energy`, `input`, `fluidOutput`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.coolant.add(FluidStack, int, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.coolant.add(fluid('lava'), 4000, 30)
```

::::::::::

## Removing Entries

- Removes the given fluid from the Thermal Mediator:

    ```groovy:no-line-numbers
    mods.thermalexpansion.coolant.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.coolant.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.coolant.remove(fluid('cryotheum'))
mods.thermalexpansion.coolant.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.coolant.streamRecipes()
    ```
