---
title: "Spatial Storage Allowed Tile Entities"
titleTemplate: "Applied Energistics 2 | CleanroomMC"
description: "Either the class itself or its String name to add or remove from the Tile Entities allowed in Spatial Storage."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/appliedenergistics2/Spatial.java"
---

# Spatial Storage Allowed Tile Entities (Applied Energistics 2)

## Description

Either the class itself or its String name to add or remove from the Tile Entities allowed in Spatial Storage.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.ae2.spatial
mods.ae2.Spatial
mods.appliedenergistics2.spatial/* Used as page default */ // [!code focus]
mods.appliedenergistics2.Spatial
```


## Adding Entries

- Adds the given class to the list of allowed TileEntities to be moved by Spatial Storage:

    ```groovy:no-line-numbers
    mods.appliedenergistics2.spatial.add(Class<? extends TileEntity>)
    ```

- Adds the given class to the list of allowed TileEntities to be moved by Spatial Storage:

    ```groovy:no-line-numbers
    mods.appliedenergistics2.spatial.add(String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.appliedenergistics2.spatial.add('net.minecraft.tileentity.TileEntityStructure')
```

::::::::::

## Removing Entries

- Removes the given class from the list of allowed TileEntities to be moved by Spatial Storage:

    ```groovy:no-line-numbers
    mods.appliedenergistics2.spatial.remove(Class<? extends TileEntity>)
    ```

- Removes the given class from the list of allowed TileEntities to be moved by Spatial Storage:

    ```groovy:no-line-numbers
    mods.appliedenergistics2.spatial.remove(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.appliedenergistics2.spatial.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.appliedenergistics2.spatial.remove('net.minecraft.tileentity.TileEntityChest')
mods.appliedenergistics2.spatial.removeAll()
```

::::::::::
