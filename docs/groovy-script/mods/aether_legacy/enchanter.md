---
title: "Enchanter"
titleTemplate: "Aether Legacy | CleanroomMC"
description: "Enchanting is a mechanic used to create new items, as well as repair tools, armor, and weapons, using the Altar block."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/aetherlegacy/Enchanter.java"
---

# Enchanter (Aether Legacy)

## Description

Enchanting is a mechanic used to create new items, as well as repair tools, armor, and weapons, using the Altar block.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.aether_legacy.enchanter/* Used as page default */ // [!code focus]
mods.aether_legacy.Enchanter
mods.aether.enchanter
mods.aether.Enchanter
```


## Adding Recipes

- Adds an Enchanting recipe in the format `input`, `output`, `time`:

    ```groovy:no-line-numbers
    mods.aether_legacy.enchanter.add(ItemStack, ItemStack, int)
    ```


### Recipe Builder

Just like other recipe types, the Enchanter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.aether_legacy.enchanter.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.gildedgames.the_aether.api.enchantments.AetherEnchantment`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.enchanter.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .time(200)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.aether_legacy.enchanter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.aether_legacy.enchanter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.enchanter.removeByOutput(item('aether_legacy:enchanted_gravitite'))
mods.aether_legacy.enchanter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.aether_legacy.enchanter.streamRecipes()
    ```
