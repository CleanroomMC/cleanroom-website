---
title: "Tranquility"
titleTemplate: "Blood Magic: Alchemical Wizardry | CleanroomMC"
description: "Blocks in the area around the Tranquility Altar provide tranquility up to the Altar's cap, with reduced effect the more of a particular type of Tranquility is provided."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bloodmagic/Tranquility.java"
---

# Tranquility (Blood Magic: Alchemical Wizardry)

## Description

Blocks in the area around the Tranquility Altar provide tranquility up to the Altar's cap, with reduced effect the more of a particular type of Tranquility is provided.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.bm.tranquility
mods.bm.Tranquility
mods.bloodmagic.tranquility/* Used as page default */ // [!code focus]
mods.bloodmagic.Tranquility
```


## Adding Recipes

- Adds recipes in the format `block`, `tranquility`, `value`:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.add(Block, String, double)
    ```

- Adds recipes in the format `block`, `tranquility`:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.add(Block, TranquilityStack)
    ```

- Adds recipes in the format `blockstate`, `tranquility`, `value`:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.add(IBlockState, String, double)
    ```

- Adds recipes in the format `blockstate`, `tranquility`:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.add(IBlockState, TranquilityStack)
    ```


### Recipe Builder

Just like other recipe types, the Tranquility also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.bloodmagic.tranquility.recipeBuilder() {open id="abstract"}
- `Block`. Sets the target block.

    ```groovy:no-line-numbers
    block(Block)
    ```

- `double`. Sets the amount of Tranquility provided. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    value(double)
    ```

- `IBlockState`. Sets the target blockstate.

    ```groovy:no-line-numbers
    blockstate(IBlockState)
    ```

- `EnumTranquilityType`. Sets the type of Tranquility being modified. Requires not null.

    ```groovy:no-line-numbers
    tranquility(String)
    tranquility(EnumTranquilityType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.apache.commons.lang3.tuple.Pair<?, WayofTime.bloodmagic.incense.TranquilityStack>`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bloodmagic.tranquility.recipeBuilder()
    .block(block('minecraft:obsidian'))
    .tranquility('LAVA')
    .value(10)
    .register()

mods.bloodmagic.tranquility.recipeBuilder()
    .block(block('minecraft:obsidian'))
    .tranquility('WATER')
    .value(10)
    .register()

mods.bloodmagic.tranquility.recipeBuilder()
    .blockstate(blockstate('minecraft:obsidian'))
    .tranquility('LAVA')
    .value(500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes any Tranquility entry that matches the given Block and EnumTranquilityType:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.remove(Block, EnumTranquilityType)
    ```

- Removes any Tranquility entry that matches the given Block and Tranquility type as String:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.remove(Block, String)
    ```

- Removes any Tranquility entry that matches the given IBlockState and EnumTranquilityType:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.remove(IBlockState, EnumTranquilityType)
    ```

- Removes any Tranquility entry that matches the given IBlockState and Tranquility as String:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.remove(IBlockState, String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bloodmagic.tranquility.remove(block('minecraft:dirt'), 'EARTHEN')
mods.bloodmagic.tranquility.remove(blockstate('minecraft:netherrack'), 'FIRE')
mods.bloodmagic.tranquility.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bloodmagic.tranquility.streamRecipes()
    ```
