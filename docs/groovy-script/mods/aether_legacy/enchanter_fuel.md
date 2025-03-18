---
title: "Enchanter Fuel"
titleTemplate: "Aether Legacy | CleanroomMC"
description: "By default, the Enchanter (Altar) takes Ambrosium Shards as fuel. Using GroovyScript, custom fuels can be added."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/aetherlegacy/EnchanterFuel.java"
---

# Enchanter Fuel (Aether Legacy)

## Description

By default, the Enchanter (Altar) takes Ambrosium Shards as fuel. Using GroovyScript, custom fuels can be added.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.aether_legacy.enchanter_fuel/* Used as page default */ // [!code focus]
mods.aether_legacy.enchanterfuel
mods.aether_legacy.enchanterFuel
mods.aether_legacy.EnchanterFuel
mods.aether.enchanter_fuel
mods.aether.enchanterfuel
mods.aether.enchanterFuel
mods.aether.EnchanterFuel
```


## Adding Recipes

- Adds an Enchanting fuel in the format `item`, `timeGiven`:

    ```groovy:no-line-numbers
    mods.aether_legacy.enchanter_fuel.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.enchanter_fuel.add(item('minecraft:blaze_rod'), 1000)
```

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.aether_legacy.enchanter_fuel.removeByItem(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.aether_legacy.enchanter_fuel.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.enchanter_fuel.removeByItem(item('aether_legacy:ambrosium_shard'))
mods.aether_legacy.enchanter_fuel.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.aether_legacy.enchanter_fuel.streamRecipes()
    ```
