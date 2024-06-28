---
title: "Arboreal Extractor Tree Structures"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Controls what valid log blocks and leaf blocks are to define a tree structure which the Arboreal Extractor can function on. The \"tree\" must contain some number of leaves adjacent to the log blocks to be valid."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/TapperTree.java"
---

# Arboreal Extractor Tree Structures (Thermal Expansion)

## Description

Controls what valid log blocks and leaf blocks are to define a tree structure which the Arboreal Extractor can function on. The \"tree\" must contain some number of leaves adjacent to the log blocks to be valid.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.thermal.tapper_tree
mods.thermal.tappertree
mods.thermal.tapperTree
mods.thermal.TapperTree
mods.thermalexpansion.tapper_tree/* Used as page default */ // [!code focus]
mods.thermalexpansion.tappertree
mods.thermalexpansion.tapperTree
mods.thermalexpansion.TapperTree
```


## Adding Entries

- Adds recipes in the format `log`, `leaf`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_tree.add(IBlockState, IBlockState)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.tapper_tree.add(blockstate('minecraft:clay'), blockstate('minecraft:gold_block'))
```

::::::::::

## Removing Entries

- Removes all entries with the given IBlockState as a leaf:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_tree.removeByLeaf(BlockWrapper)
    ```

- Removes all entries with the given IBlockState as a leaf:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_tree.removeByLeaf(IBlockState)
    ```

- Removes all entries with the given IBlockState as a log:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_tree.removeByLog(BlockWrapper)
    ```

- Removes all entries with the given IBlockState as a log:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_tree.removeByLog(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_tree.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.tapper_tree.removeByLeaf(blockstate('minecraft:leaves', 'variant=birch'))
mods.thermalexpansion.tapper_tree.removeByLog(blockstate('minecraft:log', 'variant=spruce'))
mods.thermalexpansion.tapper_tree.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper_tree.streamRecipes()
    ```
