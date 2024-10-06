---
title: "Reservoir"
titleTemplate: "Immersive Petroleum | CleanroomMC"
description: "Adds a Reservoir Type with the given name, weight, minimum size, maximum size, replenishment rate, allowed dimensions, and allowed biomes. A Reservoir Type can be extracted by an Pumpjack Multiblock and scanned via a Core Sample Drill."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivepetroleum/Reservoir.java"
---

# Reservoir (Immersive Petroleum)

## Description

Adds a Reservoir Type with the given name, weight, minimum size, maximum size, replenishment rate, allowed dimensions, and allowed biomes. A Reservoir Type can be extracted by an Pumpjack Multiblock and scanned via a Core Sample Drill.

:::::::::: info Warning {id="warning"}
Reloading will not change chunks already 'discovered'.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivepetroleum.reservoir/* Used as page default */ // [!code focus]
mods.immersivepetroleum.Reservoir
```


## Adding Entries

### Recipe Builder

Just like other recipe types, the Reservoir also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivepetroleum.reservoir.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `String`. Sets the name of the reservoir.

    ```groovy:no-line-numbers
    name(String)
    ```

- `List<String>`. Sets the list of biome names the vein can generate in (if `biomeBlacklist` is false) or are prevented from generating in (if `biomeBlacklist` is true).

    ```groovy:no-line-numbers
    biome(String)
    biome(String...)
    biome(Collection<String>)
    ```

- `int`. Sets the weight the reservoir has to spawn in its allowed dimensions. (Default `0`).

    ```groovy:no-line-numbers
    weight(int)
    ```

- `int`. Sets the maximum size the reservoir can be, in mb. Requires greater than or equal to 1 and less than or equal to the number of elements in `maxSize`. (Default `0`).

    ```groovy:no-line-numbers
    maxSize(int)
    ```

- `int`. Sets the minimum size the reservoir can be, in mb. Requires greater than or equal to 1 and greater than or equal to the number of elements in `minSize`. (Default `0`).

    ```groovy:no-line-numbers
    minSize(int)
    ```

- `IntArrayList`. Sets the list of dimension ids the vein can generate in (if `dimensionBlacklist` is false) or are prevented from generating in (if `dimensionBlacklist` is true).

    ```groovy:no-line-numbers
    dimension(int)
    dimension(int...)
    dimension(Collection<Integer>)
    ```

- `int`. Sets the rate at which the reservoir is refilled, in. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    replenishRate(int)
    ```

- `boolean`. Sets if the `biomes` property indicates allowed biomes (false) or blocked biomes (true). (Default `false`).

    ```groovy:no-line-numbers
    biomeBlacklist()
    biomeBlacklist(boolean)
    ```

- `boolean`. Sets if the `dimensions` property indicates allowed dimensions (false) or blocked dimensions (true). (Default `false`).

    ```groovy:no-line-numbers
    dimensionBlacklist()
    dimensionBlacklist(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `flaxbeard.immersivepetroleum.api.crafting.PumpjackHandler$ReservoirType`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivepetroleum.reservoir.recipeBuilder()
    .name('demo')
    .fluidOutput(fluid('water'))
    .weight(20000)
    .minSize(100)
    .maxSize(100)
    .dimension(0, 1)
    .biome('hot')
    .register()

mods.immersivepetroleum.reservoir.recipeBuilder()
    .name('demo')
    .fluidOutput(fluid('lava'))
    .weight(2000)
    .minSize(1000)
    .maxSize(5000)
    .replenishRate(100)
    .dimension(-1, 1)
    .dimensionBlacklist()
    .biome('cold')
    .biomeBlacklist()
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the Reservoir entry with the given name:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.reservoir.removeByName(String)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.reservoir.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.reservoir.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivepetroleum.reservoir.removeByName('aquifer')
mods.immersivepetroleum.reservoir.removeByOutput(fluid('oil'))
mods.immersivepetroleum.reservoir.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.reservoir.streamRecipes()
    ```
