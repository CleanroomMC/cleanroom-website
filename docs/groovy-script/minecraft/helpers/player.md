---
title: "Starting Inventory"
titleTemplate: "Minecraft | CleanroomMC"
description: "Sets the starting inventory of the player, including armor slots and offhand."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Player.java"
---

# Starting Inventory (Minecraft)

## Description

Sets the starting inventory of the player, including armor slots and offhand.

:::::::::: details Warning {open id="warning"}
No more than a total of 41 items can be inserted into the inventory.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
player/* Used as page default */ // [!code focus]
Player
```


## Editing Values

- Sets if items given when joining the world regardless of if the flag has already been set:

    ```groovy:no-line-numbers
    player.testingStartingItems
    ```

- Sets if the player inventory is cleared prior to giving the player these items:

    ```groovy:no-line-numbers
    player.replaceDefaultInventory
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
player.testingStartingItems = true
player.replaceDefaultInventory = true
```

::::::::::


## Adding Entries

- Adds the given itemstack to the inventory list:

    ```groovy:no-line-numbers
    player.addStartingItem(ItemStack)
    ```

- Adds the given itemstack to a specific slot in the inventory list in the format `itemstack`, `slot`:

    ```groovy:no-line-numbers
    player.addStartingItem(ItemStack, int)
    ```

- Removes all previously added inputs and sets the starting inventory in the format `isSlotSpecific`, `items`:

    ```groovy:no-line-numbers
    player.setStartingItems(boolean, ItemStack...)
    ```

- Removes all previously added inputs and sets the starting inventory in the format `isSlotSpecific`, `items`:

    ```groovy:no-line-numbers
    player.setStartingItems(boolean, List<ItemStack>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
player.addStartingItem(item('minecraft:clay_ball'))
player.addStartingItem(item('minecraft:gold_ingot'))
player.addStartingItem(item('minecraft:diamond'))
player.addStartingItem(item('minecraft:nether_star'))
player.addStartingItem(item('minecraft:water_bucket'))
player.setStartingItems(true, item('minecraft:clay').withNbt([display:[Name:'Hotbar']]), null, null, null, null, null, null, null, null, item('minecraft:clay').withNbt([display:[Name:'Top row of inventory']]), null, null, null, null, null, null, null, null, item('minecraft:clay').withNbt([display:[Name:'Middle row of inventory']]), null, null, null, null, null, null, null, null, item('minecraft:clay').withNbt([display:[Name:'Bottom row of inventory']]), null, null, null, null, null, null, null, null, item('minecraft:diamond_boots'), item('minecraft:diamond_leggings'), item('minecraft:diamond_chestplate'), item('minecraft:diamond_helmet'), item('minecraft:clay').withNbt([display:[Name:'Offhand']]))
```

::::::::::
