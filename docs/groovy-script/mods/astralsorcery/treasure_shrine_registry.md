---
title: "Treasure Shrine Registry"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "When the block in the middle of a Treasure Shrine structure is broken, a random ore from this list will replace it until the Treasure Shrine is exhausted."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/OreChance.java"
---

# Treasure Shrine Registry (Astral Sorcery)

## Description

When the block in the middle of a Treasure Shrine structure is broken, a random ore from this list will replace it until the Treasure Shrine is exhausted.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.treasure_shrine_registry/* Used as page default */ // [!code focus]
mods.astralsorcery.treasureshrineregistry
mods.astralsorcery.treasureShrineRegistry
mods.astralsorcery.TreasureShrineRegistry
mods.astral.treasure_shrine_registry
mods.astral.treasureshrineregistry
mods.astral.treasureShrineRegistry
mods.astral.TreasureShrineRegistry
```


## Adding Entries

- Adds entries in the format `ore`, `weight`:

    ```groovy:no-line-numbers
    mods.astralsorcery.treasure_shrine_registry.add(String, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.treasure_shrine_registry.add(ore('blockDiamond'), 10000)
```

::::::::::

## Removing Entries

- Removes entries of the given ore:

    ```groovy:no-line-numbers
    mods.astralsorcery.treasure_shrine_registry.remove(OreDictIngredient)
    ```

- Removes entries of the given ore:

    ```groovy:no-line-numbers
    mods.astralsorcery.treasure_shrine_registry.remove(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.treasure_shrine_registry.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.treasure_shrine_registry.remove(ore('oreDiamond'))
mods.astralsorcery.treasure_shrine_registry.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.treasure_shrine_registry.streamRecipes()
    ```
