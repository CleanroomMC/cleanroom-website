---
title: "Decorative Diffuser"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Controls what items can be used in to boost the potion time and level in the Decorative Diffuser."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Diffuser.java"
---

# Decorative Diffuser (Thermal Expansion)

## Description

Controls what items can be used in to boost the potion time and level in the Decorative Diffuser.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.diffuser
mods.thermal.Diffuser
mods.thermalexpansion.diffuser/* Used as page default */ // [!code focus]
mods.thermalexpansion.Diffuser
```


## Adding Entries

- Adds recipes in the format `energy`, `input`, `fluidOutput`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.diffuser.add(ItemStack, int, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.diffuser.add(item('minecraft:clay'), 2, 30)
```

::::::::::

## Removing Entries

- Removes the given ItemStack as a catalyst item in the Decorative Diffuser:

    ```groovy:no-line-numbers
    mods.thermalexpansion.diffuser.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.diffuser.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.diffuser.remove(item('minecraft:redstone'))
mods.thermalexpansion.diffuser.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.diffuser.streamRecipes()
    ```
