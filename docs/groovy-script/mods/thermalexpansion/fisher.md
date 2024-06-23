---
title: "Aquatic Entangler"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Controls what itemstacks can be gained and how likely each is to be obtained."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Fisher.java"
---

# Aquatic Entangler (Thermal Expansion)

## Description

Controls what itemstacks can be gained and how likely each is to be obtained.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.fisher
mods.thermal.Fisher
mods.thermalexpansion.fisher/* Used as page default */ // [!code focus]
mods.thermalexpansion.Fisher
```


## Adding Entries

- Adds recipes in the format `fish`, `weight`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.fisher.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.fisher.add(item('minecraft:clay'), 100)
```

::::::::::

## Removing Entries

- Removes the given IIngredient as a valid output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.fisher.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.fisher.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.fisher.remove(item('minecraft:fish:0'))
mods.thermalexpansion.fisher.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.fisher.streamRecipes()
    ```
