---
title: "Arboreal Extractor Fertilizer"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Controls what items can be used in the fertilizer slot of the Arboreal Extractor Fertilizer and how effective they are."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/TapperFertilizer.java"
---

# Arboreal Extractor Fertilizer (Thermal Expansion)

## Description

Controls what items can be used in the fertilizer slot of the Arboreal Extractor Fertilizer and how effective they are.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.thermal.tapper_fertilizer
mods.thermal.tapperfertilizer
mods.thermal.tapperFertilizer
mods.thermal.TapperFertilizer
mods.thermalexpansion.tapper_fertilizer/* Used as page default */ // [!code focus]
mods.thermalexpansion.tapperfertilizer
mods.thermalexpansion.tapperFertilizer
mods.thermalexpansion.TapperFertilizer
```


## Adding Entries

- Adds recipes in the format `stack`, `multiplier`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_fertilizer.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.tapper_fertilizer.add(item('minecraft:clay'), 1000)
```

::::::::::

## Removing Entries

- Removes the given IIngredient as a valid fertilizer item:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_fertilizer.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_fertilizer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.tapper_fertilizer.remove(item('thermalfoundation:fertilizer:2'))
mods.thermalexpansion.tapper_fertilizer.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_fertilizer.streamRecipes()
    ```
