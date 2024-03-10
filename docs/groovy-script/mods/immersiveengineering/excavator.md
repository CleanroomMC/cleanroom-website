---
title: "Excavator"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Adds a Mineral Mix with the given name, weight, fail chance, ores, and allowed dimensions. A Mineral Mix can be mined by an Excavator Multiblock and scanned via a Core Sample Drill."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Excavator.java"
---

# Excavator (Immersive Engineering)

## Description

Adds a Mineral Mix with the given name, weight, fail chance, ores, and allowed dimensions. A Mineral Mix can be mined by an Excavator Multiblock and scanned via a Core Sample Drill.

:::::::::: info Warning {id="warning"}
Reloading will not change chunks already 'discovered'
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.ie.excavator
mods.ie.Excavator
mods.immersiveengineering.excavator/* Used as page default */ // [!code focus]
mods.immersiveengineering.Excavator
```


## Adding Entries

- Adds entries in the format `name`, `mineralWeight`, `failChance`, `ores`, `chances`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.excavator.add(String, int, float, String[], float[])
    ```


### Recipe Builder

Just like other recipe types, the Excavator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.immersiveengineering.excavator.recipeBuilder() {open id="abstract"}
- `float`. Sets the chance that a given mining attempt with output nothing instead of an ore. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy:no-line-numbers
    fail(float)
    ```

- `String`. Sets the unique name of the vein.

    ```groovy:no-line-numbers
    name(String)
    ```

- `List<String>`. Sets the valid oredicts output. Requires exactly chances.

    ```groovy:no-line-numbers
    ore(String, float)
    ore(OreDictIngredient, float)
    ```

- `int`. Sets the weight the Mineral Mix has to spawn in its allowed dimensions. (Default `0`).

    ```groovy:no-line-numbers
    weight(int)
    ```

- `List<Float>`. Sets the chance a given block output will contain the corresponding entry in ores. Requires exactly ores.

    ```groovy:no-line-numbers
    ore(String, float)
    ore(OreDictIngredient, float)
    ```

- `boolean`. Sets if the `dimensions` property indicates allowed dimensions (false) or blocked dimensions (true). (Default `false`).

    ```groovy:no-line-numbers
    blacklist()
    blacklist(boolean)
    ```

- `List<Integer>`. Sets the list of dimension ids the vein can generate in (if `blacklist` is false) or are prevented from generating in (if `blacklist` is true).

    ```groovy:no-line-numbers
    dimension(int)
    dimension(int...)
    dimension(Collection<Integer>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.tool.ExcavatorHandler$MineralMix`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.excavator.recipeBuilder()
    .name('demo')
    .weight(20000)
    .fail(0.5)
    .ore(ore('blockDiamond'), 50)
    .ore('blockGold', 10)
    .dimension(0, 1)
    .register()

mods.immersiveengineering.excavator.recipeBuilder()
    .name('demo')
    .weight(2000)
    .fail(0.1)
    .ore(ore('blockDiamond'), 50)
    .dimension(-1, 1)
    .blacklist()
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the Mineral Mix entry with the given name:

    ```groovy:no-line-numbers
    mods.immersiveengineering.excavator.removeByMineral(String)
    ```

- Removes all Mineral Mix entries containing any of the given ores:

    ```groovy:no-line-numbers
    mods.immersiveengineering.excavator.removeByOres(OreDictIngredient...)
    ```

- Removes all Mineral Mix entries containing any of the given ores:

    ```groovy:no-line-numbers
    mods.immersiveengineering.excavator.removeByOres(String...)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.excavator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.excavator.removeByMineral('silt')
mods.immersiveengineering.excavator.removeByOres(ore('oreAluminum'))
mods.immersiveengineering.excavator.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.excavator.streamRecipes()
    ```
