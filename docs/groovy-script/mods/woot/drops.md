---
title: "Drops"
titleTemplate: "Woot | CleanroomMC"
description: "Controls extra drops given by mobs. Chance and Size are both arrays 4 long, containing the values for levels 0/1/2/3 levels of Looting."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/Drops.java"
---

# Drops (Woot)

## Description

Controls extra drops given by mobs. Chance and Size are both arrays 4 long, containing the values for levels 0/1/2/3 levels of Looting.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.woot.drops/* Used as page default */ // [!code focus]
mods.woot.Drops
```


## Adding Recipes

- Adds recipes in the format `wootMobName`, `itemStack`, `chances`, `sizes`:

    ```groovy:no-line-numbers
    mods.woot.drops.add(WootMobName, ItemStack, List<Integer>, List<Integer>)
    ```


### Recipe Builder

Just like other recipe types, the Drops also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.woot.drops.recipeBuilder() {open id="abstract"}
- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `WootMobName`. Sets the entity and nbt tags. Requires not null.

    ```groovy:no-line-numbers
    name(String)
    name(EntityEntry)
    name(WootMobName)
    name(String, String)
    ```

- `List<Integer>`. Sets the quantity of the drop for each level of Looting. Requires exactly 4.

    ```groovy:no-line-numbers
    size(int)
    size(int...)
    size(Collection<Integer>)
    ```

- `List<Integer>`. Sets the chance of the drop for each level of Looting. Requires exactly 4.

    ```groovy:no-line-numbers
    chance(int)
    chance(int...)
    chance(Collection<Integer>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.ItemStack`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.woot.drops.recipeBuilder()
    .name('minecraft:zombie')
    .output(item('minecraft:clay'))
    .chance(10, 30, 60, 100)
    .size(5, 10, 20, 50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes recipes matching the given entity:

    ```groovy:no-line-numbers
    mods.woot.drops.removeByEntity(EntityEntry)
    ```

- Removes recipes matching the given entity:

    ```groovy:no-line-numbers
    mods.woot.drops.removeByEntity(String)
    ```

- Removes recipes matching the given entity:

    ```groovy:no-line-numbers
    mods.woot.drops.removeByEntity(String, String)
    ```

- Removes recipes matching the given entity:

    ```groovy:no-line-numbers
    mods.woot.drops.removeByEntity(WootMobName)
    ```

- Removes recipes matching the given output item:

    ```groovy:no-line-numbers
    mods.woot.drops.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.woot.drops.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.woot.drops.removeByEntity(entity('minecraft:ender_dragon'))
mods.woot.drops.removeByEntity('minecraft:ender_dragon')
mods.woot.drops.removeByEntity('minecraft:ender_dragon', '')
mods.woot.drops.removeByEntity(new WootMobName('minecraft:ender_dragon'))
mods.woot.drops.removeByOutput(item('minecraft:dragon_breath'))
mods.woot.drops.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.woot.drops.streamRecipes()
    ```
