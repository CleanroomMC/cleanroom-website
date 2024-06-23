---
title: "Smeltery Fuel"
titleTemplate: "Tinkers' Construct | CleanroomMC"
description: "Modifies what fluids are accepted as fuels for the Smeltery and how long each fuels the Smeltery."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/SmelteryFuel.java"
---

# Smeltery Fuel (Tinkers' Construct)

## Description

Modifies what fluids are accepted as fuels for the Smeltery and how long each fuels the Smeltery.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.tconstruct.smeltery_fuel/* Used as page default */ // [!code focus]
mods.tconstruct.smelteryfuel
mods.tconstruct.smelteryFuel
mods.tconstruct.SmelteryFuel
mods.tinkersconstruct.smeltery_fuel
mods.tinkersconstruct.smelteryfuel
mods.tinkersconstruct.smelteryFuel
mods.tinkersconstruct.SmelteryFuel
mods.ticon.smeltery_fuel
mods.ticon.smelteryfuel
mods.ticon.smelteryFuel
mods.ticon.SmelteryFuel
```


## Adding Entries

- Adds the given fluid as a smeltery fuel with the given burn time:

    ```groovy:no-line-numbers
    mods.tconstruct.smeltery_fuel.addFuel(FluidStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.smeltery_fuel.addFuel(fluid('water'), 250)
```

::::::::::

## Removing Entries

- Removes the given fluid from being a smeltery fuel:

    ```groovy:no-line-numbers
    mods.tconstruct.smeltery_fuel.removeFuel(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.tconstruct.smeltery_fuel.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.smeltery_fuel.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.tconstruct.smeltery_fuel.streamRecipes()
    ```
