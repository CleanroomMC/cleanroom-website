---
title: "Perk Tree Config"
description: "Control the Perk level cap and XP formula."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/perktree/PerkTreeConfig.java"
---

# Perk Tree Config (Astral Sorcery)

## Description

Control the Perk level cap and XP formula.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.perk_tree_config/*(1)!*/
mods.astralsorcery.perktreeconfig
mods.astralsorcery.perkTreeConfig
mods.astralsorcery.PerkTreeConfig
mods.astral.perk_tree_config
mods.astral.perktreeconfig
mods.astral.perkTreeConfig
mods.astral.PerkTreeConfig
```

1. This identifier will be used as the default for examples on this page

## Editing Values

- Sets the maximum level of Astral Sorcery's Perks, between 1 and 100:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree_config.setLevelCap(int)
    ```

- Sets the Experience cost to advance to the next level, with the Closure taking 2 parameters, `int levelNumber` and `long previousLevelCost` and returning a `long`:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree_config.setXpFunction(Closure<Long>)
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.astralsorcery.perk_tree_config.setLevelCap(50)
mods.astralsorcery.perk_tree_config.setXpFunction({ int i, long prev -> prev + 1000L + MathHelper.lfloor(Math.pow(2.0, i / 2.0F + 3)) })
```

::::::::::
