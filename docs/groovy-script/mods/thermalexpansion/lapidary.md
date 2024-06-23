---
title: "Numismatic Dynamo - Lapidary Calibration"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into power, taking time based on the power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Lapidary.java"
---

# Numismatic Dynamo - Lapidary Calibration (Thermal Expansion)

## Description

Converts an input itemstack into power, taking time based on the power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.lapidary
mods.thermal.Lapidary
mods.thermalexpansion.lapidary/* Used as page default */ // [!code focus]
mods.thermalexpansion.Lapidary
```


## Adding Recipes

- Adds recipes in the format `itemStack`, `energy`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.lapidary.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.lapidary.add(item('minecraft:clay'), 1000)
```

::::::::::

## Removing Recipes

- Removes all recipes with given IIngredient:

    ```groovy:no-line-numbers
    mods.thermalexpansion.lapidary.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.lapidary.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.lapidary.removeByInput(item('minecraft:diamond'))
mods.thermalexpansion.lapidary.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.lapidary.streamRecipes()
    ```
