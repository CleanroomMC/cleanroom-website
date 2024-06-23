---
title: "Steam Dynamo"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into power, taking time based on the power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Steam.java"
---

# Steam Dynamo (Thermal Expansion)

## Description

Converts an input itemstack into power, taking time based on the power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.steam
mods.thermal.Steam
mods.thermalexpansion.steam/* Used as page default */ // [!code focus]
mods.thermalexpansion.Steam
```


## Adding Recipes

- Adds recipes in the format `itemStack`, `energy`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.steam.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.steam.add(item('minecraft:clay'), 100)
```

::::::::::

## Removing Recipes

- Removes all recipes with given IIngredient:

    ```groovy:no-line-numbers
    mods.thermalexpansion.steam.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.steam.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.steam.removeByInput(item('minecraft:coal:1'))
mods.thermalexpansion.steam.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.steam.streamRecipes()
    ```
