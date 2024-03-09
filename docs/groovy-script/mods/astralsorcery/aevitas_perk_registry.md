---
title: "Aevitas Perk Registry"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Having the Stone Enrichment perk will convert nearby stone blocks into random ores."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/OreChance.java"
---

# Aevitas Perk Registry (Astral Sorcery)

## Description

Having the Stone Enrichment perk will convert nearby stone blocks into random ores.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.aevitas_perk_registry/*(1)!*/
mods.astralsorcery.aevitasperkregistry
mods.astralsorcery.aevitasPerkRegistry
mods.astralsorcery.AevitasPerkRegistry
mods.astral.aevitas_perk_registry
mods.astral.aevitasperkregistry
mods.astral.aevitasPerkRegistry
mods.astral.AevitasPerkRegistry
```

1. This identifier will be used as the default for examples on this page

## Adding Entries

- Adds entries in the format `ore`, `weight`:

    ```groovy:no-line-numbers
    mods.astralsorcery.aevitas_perk_registry.add(String, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.aevitas_perk_registry.add(ore('blockDiamond'), 10000)
```

::::::::::

## Removing Entries

- Removes entries of the given ore:

    ```groovy:no-line-numbers
    mods.astralsorcery.aevitas_perk_registry.remove(OreDictIngredient)
    ```

- Removes entries of the given ore:

    ```groovy:no-line-numbers
    mods.astralsorcery.aevitas_perk_registry.remove(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.aevitas_perk_registry.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.aevitas_perk_registry.remove(ore('oreDiamond'))
mods.astralsorcery.aevitas_perk_registry.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.aevitas_perk_registry.streamRecipes()
    ```
