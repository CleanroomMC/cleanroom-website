---
title: "Explosion Furnace Additives"
titleTemplate: "Prodigy Tech | CleanroomMC"
description: "Turn an item into an explosive or into a dampener when inserted into the Explosion Furnace."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/ExplosionFurnaceAdditives.java"
---

# Explosion Furnace Additives (Prodigy Tech)

## Description

Turn an item into an explosive or into a dampener when inserted into the Explosion Furnace.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.prodigytech.explosion_furnace_additives/* Used as page default */ // [!code focus]
mods.prodigytech.explosionfurnaceadditives
mods.prodigytech.explosionFurnaceAdditives
mods.prodigytech.ExplosionFurnaceAdditives
```


## Adding Entries

- Adds a dampener.:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace_additives.addDampener(IIngredient, int)
    ```

- Adds an explosive.:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace_additives.addExplosive(IIngredient, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.explosion_furnace_additives.addDampener(item('minecraft:stone'), 50)
mods.prodigytech.explosion_furnace_additives.addExplosive(item('minecraft:cobblestone'), 50)
```

::::::::::

## Removing Entries

- Removes a dampener by the input item.:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace_additives.removeDampener(IIngredient)
    ```

- Removes an explosive by the input item.:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace_additives.removeExplosive(IIngredient)
    ```

- Removes all registered dampeners.:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace_additives.removeAllDampeners()
    ```

- Removes all registered explosives.:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace_additives.removeAllExplosives()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.explosion_furnace_additives.removeDampener(ore('dustAsh'))
mods.prodigytech.explosion_furnace_additives.removeExplosive(ore('gunpowder'))
mods.prodigytech.explosion_furnace_additives.removeAllDampeners()
mods.prodigytech.explosion_furnace_additives.removeAllExplosives()
```

::::::::::
