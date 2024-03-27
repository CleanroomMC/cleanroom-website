---
title: "Category Catalysts"
titleTemplate: "Just Enough Items | CleanroomMC"
description: "Modify the items shown on the left of JEI Categories which indicate where the recipe takes place"
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Catalyst.java"
---

# Category Catalysts (Just Enough Items)

## Description

Modify the items shown on the left of JEI Categories which indicate where the recipe takes place

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.hei.catalyst
mods.hei.Catalyst
mods.jei.catalyst/* Used as page default */ // [!code focus]
mods.jei.Catalyst
```


## Adding Entries

- Adds the given catalyst items to the given category:

    ```groovy:no-line-numbers
    mods.jei.catalyst.add(String, Collection<ItemStack>)
    ```

- Adds the given catalyst items to the given category:

    ```groovy:no-line-numbers
    mods.jei.catalyst.add(String, ItemStack)
    ```

- Adds the given catalyst items to the given category:

    ```groovy:no-line-numbers
    mods.jei.catalyst.add(String, ItemStack...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.catalyst.add('minecraft.smelting', item('minecraft:clay') * 8, item('minecraft:cobblestone'))
```

::::::::::

## Removing Entries

- Removes the given catalyst items from the given category:

    ```groovy:no-line-numbers
    mods.jei.catalyst.remove(String, Collection<ItemStack>)
    ```

- Removes the given catalyst items from the given category:

    ```groovy:no-line-numbers
    mods.jei.catalyst.remove(String, ItemStack)
    ```

- Removes the given catalyst items from the given category:

    ```groovy:no-line-numbers
    mods.jei.catalyst.remove(String, ItemStack...)
    ```

- Removes all catalyst items from the given category:

    ```groovy:no-line-numbers
    mods.jei.catalyst.removeByType(String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.catalyst.remove('minecraft.smelting', item('minecraft:furnace'))
mods.jei.catalyst.removeByType('minecraft.anvil')
```

::::::::::
