---
title: "Heat"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Creates new levels or adds new blocks to old heat levels."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Heat.java"
---

# Heat (Better With Mods)

## Description

Creates new levels or adds new blocks to old heat levels.

:::::::::: details Note {open id="note"}
Anything using heat levels will create a new JEI tab for each heat level it has recipes for. This will have a lang key name.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.heat/* Used as page default */ // [!code focus]
mods.betterwithmods.Heat
```


## Editing Values

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, BlockIngredient)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, IIngredient)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, ItemStack...)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, List<ItemStack>)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.heat.add(4, item('minecraft:redstone_block'), item('minecraft:redstone_torch'))
mods.betterwithmods.heat.add(3, 'torch')
```

::::::::::
