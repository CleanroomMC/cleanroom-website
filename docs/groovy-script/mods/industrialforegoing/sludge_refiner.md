---
title: "Sludge Refiner"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts 1000mb of Sludge into a random itemstack based on the weight of the given itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/SludgeRefiner.java"
---

# Sludge Refiner (Industrial Foregoing)

## Description

Converts 1000mb of Sludge into a random itemstack based on the weight of the given itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.industrialforegoing.sludge_refiner/* Used as page default */ // [!code focus]
mods.industrialforegoing.sludgerefiner
mods.industrialforegoing.sludgeRefiner
mods.industrialforegoing.SludgeRefiner
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.sludge_refiner.add(SludgeEntry)
    ```

- Adds a Protein Reactor recipe in the format `output`, `weight`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.sludge_refiner.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.sludge_refiner.add(item('minecraft:gold_ingot'), 5)
```

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.sludge_refiner.remove(SludgeEntry)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.sludge_refiner.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.sludge_refiner.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.sludge_refiner.removeByOutput(item('minecraft:clay_ball'))
mods.industrialforegoing.sludge_refiner.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.sludge_refiner.streamRecipes()
    ```
