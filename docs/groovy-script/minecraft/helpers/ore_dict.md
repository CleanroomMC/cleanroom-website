---
title: "Ore Dictionary"
titleTemplate: "Minecraft | CleanroomMC"
description: "Manipulate the Ore Dictionary and what itemstacks are part of what oredicts."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/OreDict.java"
---

# Ore Dictionary (Minecraft)

## Description

Manipulate the Ore Dictionary and what itemstacks are part of what oredicts.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
ore_dict/* Used as page default */ // [!code focus]
oredict
oreDict
OreDict
ore_dictionary
oredictionary
oreDictionary
OreDictionary
```


## Adding Recipes

- Adds the given oredict to the given oredict:

    ```groovy:no-line-numbers
    ore_dict.add(String, Block)
    ```

- Adds the given oredict to the given oredict:

    ```groovy:no-line-numbers
    ore_dict.add(String, Item)
    ```

- Adds the given oredict to the given oredict:

    ```groovy:no-line-numbers
    ore_dict.add(String, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
ore_dict.add('ingotGold', item('minecraft:nether_star'))
ore_dict.add('netherStar', item('minecraft:gold_ingot'))
```

::::::::::

## Removing Recipes

- Removes the given itemstack from the given oredict:

    ```groovy:no-line-numbers
    ore_dict.remove(String, ItemStack)
    ```

- Removes all itemstacks from the given oredict:

    ```groovy:no-line-numbers
    ore_dict.clear(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    ore_dict.removeAll(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    ore_dict.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
ore_dict.remove('netherStar', item('minecraft:nether_star'))
ore_dict.clear('plankWood')
ore_dict.removeAll('ingotIron')
ore_dict.removeAll()
```

::::::::::

## Getting the value of recipes

- Returns true if the given oredict exists, although this does not check if the oredict contains entries:

    ```groovy:no-line-numbers
    ore_dict.exists(String)
    ```

- Returns a list of all itemstacks in the given oredict:

    ```groovy:no-line-numbers
    ore_dict.getItems(String)
    ```
