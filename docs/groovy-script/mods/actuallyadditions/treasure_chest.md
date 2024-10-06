---
title: "Treasure Chest"
titleTemplate: "Actually Additions | CleanroomMC"
description: "A weighted item, with a weight to obtain and a minimum and maximum amount. Obtained via right-clicking a Treasure Chest spawning randomly on the sea floor."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/TreasureChest.java"
---

# Treasure Chest (Actually Additions)

## Description

A weighted item, with a weight to obtain and a minimum and maximum amount. Obtained via right-clicking a Treasure Chest spawning randomly on the sea floor.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.aa.treasure_chest
mods.aa.treasurechest
mods.aa.treasureChest
mods.aa.TreasureChest
mods.actuallyadditions.treasure_chest/* Used as page default */ // [!code focus]
mods.actuallyadditions.treasurechest
mods.actuallyadditions.treasureChest
mods.actuallyadditions.TreasureChest
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.actuallyadditions.treasure_chest.add(TreasureChestLoot)
    ```


### Recipe Builder

Just like other recipe types, the Treasure Chest also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.actuallyadditions.treasure_chest.recipeBuilder() {open id="abstract"}
- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the maximum stack size given when rolled. Requires greater than or equal to 0 and greater than or equal to the size of min. (Default `0`).

    ```groovy:no-line-numbers
    max(int)
    ```

- `int`. Sets the minimum stack size given when rolled. Requires greater than or equal to 0 and less than or equal to the size of max. (Default `0`).

    ```groovy:no-line-numbers
    min(int)
    ```

- `int`. Sets how likely this loot is to be rolled. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    weight(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.TreasureChestLoot`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.actuallyadditions.treasure_chest.recipeBuilder()
    .output(item('minecraft:clay'))
    .weight(50)
    .min(16)
    .max(32)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.actuallyadditions.treasure_chest.remove(TreasureChestLoot)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.actuallyadditions.treasure_chest.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.actuallyadditions.treasure_chest.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.actuallyadditions.treasure_chest.removeByOutput(item('minecraft:iron_ingot'))
mods.actuallyadditions.treasure_chest.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.actuallyadditions.treasure_chest.streamRecipes()
    ```
