---
title: "Energy Core"
titleTemplate: "Draconic Evolution | CleanroomMC"
description: "A multiblock with 8 tiers for storing large amounts of energy."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/draconicevolution/EnergyCore.java"
---

# Energy Core (Draconic Evolution)

## Description

A multiblock with 8 tiers for storing large amounts of energy.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.de.energy_core
mods.de.energycore
mods.de.energyCore
mods.de.EnergyCore
mods.draconicevolution.energy_core/* Used as page default */ // [!code focus]
mods.draconicevolution.energycore
mods.draconicevolution.energyCore
mods.draconicevolution.EnergyCore
```


## Editing Values

- Sets the outer block for the multiblock in the format `tier`, `block`:

    ```groovy:no-line-numbers
    mods.draconicevolution.energy_core.setInnerBlock(int, IBlockState...)
    ```

- Sets the inner block for the multiblock in the format `tier`, `block`:

    ```groovy:no-line-numbers
    mods.draconicevolution.energy_core.setOuterBlock(int, IBlockState...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.draconicevolution.energy_core.setInnerBlock(7, blockstate('minecraft:stone', 1))
mods.draconicevolution.energy_core.setOuterBlock(7, blockstate('minecraft:diamond_block'))
mods.draconicevolution.energy_core.setOuterBlock(2, blockstate('minecraft:diamond_block'))
```

::::::::::
