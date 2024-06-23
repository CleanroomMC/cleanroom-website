---
title: "Numismatic Dynamo"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into power, taking time based on the power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Numismatic.java"
---

# Numismatic Dynamo (Thermal Expansion)

## Description

Converts an input itemstack into power, taking time based on the power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.numismatic
mods.thermal.Numismatic
mods.thermalexpansion.numismatic/* Used as page default */ // [!code focus]
mods.thermalexpansion.Numismatic
```


## Adding Recipes

- Adds recipes in the format `itemStack`, `energy`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.numismatic.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.numismatic.add(item('minecraft:clay'), 100)
```

::::::::::

## Removing Recipes

- Removes all recipes with given IIngredient:

    ```groovy:no-line-numbers
    mods.thermalexpansion.numismatic.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.numismatic.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.numismatic.removeByInput(item('thermalfoundation:coin:69'))
mods.thermalexpansion.numismatic.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.numismatic.streamRecipes()
    ```
