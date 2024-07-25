---
title: "Freezer Fuel"
titleTemplate: "Aether Legacy | CleanroomMC"
description: " By default, the Freezer takes Icestone as fuel. Using GroovyScript, custom fuels can be added."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/aetherlegacy/FreezerFuel.java"
---

# Freezer Fuel (Aether Legacy)

## Description

 By default, the Freezer takes Icestone as fuel. Using GroovyScript, custom fuels can be added.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.aether_legacy.freezer_fuel/* Used as page default */ // [!code focus]
mods.aether_legacy.freezerfuel
mods.aether_legacy.freezerFuel
mods.aether_legacy.FreezerFuel
mods.aether.freezer_fuel
mods.aether.freezerfuel
mods.aether.freezerFuel
mods.aether.FreezerFuel
```


## Adding Recipes

- Adds a Freezer fuel in the format `item`, `timeGiven`.:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer_fuel.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.freezer_fuel.add(item('minecraft:packed_ice'), 1000)
```

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer_fuel.removeByItem(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer_fuel.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.freezer_fuel.removeByItem(item('aether_legacy:icestone'))
mods.aether_legacy.freezer_fuel.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer_fuel.streamRecipes()
    ```
