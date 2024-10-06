---
title: "Accessory"
titleTemplate: "Aether Legacy | CleanroomMC"
description: "The Aether Accessory system."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/aetherlegacy/Accessory.java"
---

# Accessory (Aether Legacy)

## Description

The Aether Accessory system.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.aether_legacy.accessory/* Used as page default */ // [!code focus]
mods.aether_legacy.Accessory
mods.aether.accessory
mods.aether.Accessory
```


## Adding Recipes

- Adds an Accessory in the format `item`, `type`, where type is one of the following: "Ring", "Pendant", "Cape", "Shield", "Glove", or "Misc".:

    ```groovy:no-line-numbers
    mods.aether_legacy.accessory.add(ItemStack, String)
    ```


### Recipe Builder

Just like other recipe types, the Accessory also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.aether_legacy.accessory.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `AccessoryType`. Sets the type of accessory the item is, which controls what slot it can go into.

    ```groovy:no-line-numbers
    accessoryType(String)
    accessoryType(AccessoryType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.gildedgames.the_aether.api.accessories.AetherAccessory`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.accessory.recipeBuilder()
    .input(item('minecraft:shield'))
    .accessoryType('shield')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.aether_legacy.accessory.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.aether_legacy.accessory.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.accessory.removeByInput(item('aether_legacy:iron_pendant'))
mods.aether_legacy.accessory.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.aether_legacy.accessory.streamRecipes()
    ```
