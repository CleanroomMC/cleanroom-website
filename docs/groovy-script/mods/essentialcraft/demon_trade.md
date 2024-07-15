---
title: "Demon Trade"
titleTemplate: "EssentialCraft 4 | CleanroomMC"
description: "Adds an item that can be sold to Demons to obtain Ackronite. Note that each demon that spawns has a random item that it can accept, and will not accept any other item."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/DemonTradeManager.java"
---

# Demon Trade (EssentialCraft 4)

## Description

Adds an item that can be sold to Demons to obtain Ackronite. Note that each demon that spawns has a random item that it can accept, and will not accept any other item.

:::::::::: details Danger {open id="danger"}
Demon Trade recipes must set the correct NBT on all input items. This is a bug that was fixed in the version 1.12.2-4.9.112.6 of the mod.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.ec4.demon_trade
mods.ec4.demontrade
mods.ec4.demonTrade
mods.ec4.DemonTrade
mods.essentialcraft.demon_trade/* Used as page default */ // [!code focus]
mods.essentialcraft.demontrade
mods.essentialcraft.demonTrade
mods.essentialcraft.DemonTrade
```


## Adding Entries

- Adds an item or an entity that can be sold to demons:

    ```groovy:no-line-numbers
    mods.essentialcraft.demon_trade.add(EntityEntry)
    ```

- Adds an item or an entity that can be sold to demons:

    ```groovy:no-line-numbers
    mods.essentialcraft.demon_trade.add(IIngredient)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.demon_trade.add(entity('minecraft:chicken'))
mods.essentialcraft.demon_trade.add(item('minecraft:diamond'))
```

::::::::::

## Removing Entries

- Removes an entity from the pool of sold items:

    ```groovy:no-line-numbers
    mods.essentialcraft.demon_trade.remove(EntityEntry)
    ```

- Removes an item from the pool of sold items:

    ```groovy:no-line-numbers
    mods.essentialcraft.demon_trade.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.essentialcraft.demon_trade.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.demon_trade.remove(entity('minecraft:enderman'))
mods.essentialcraft.demon_trade.remove(item('minecraft:nether_star'))
mods.essentialcraft.demon_trade.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.essentialcraft.demon_trade.streamRecipes()
    ```
