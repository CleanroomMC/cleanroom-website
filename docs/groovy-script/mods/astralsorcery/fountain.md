---
title: "Fountain"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Adds virtual aquifers that can be accessed via the Evershifting Fountain's Necromantic Prime."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/Fountain.java"
---

# Fountain (Astral Sorcery)

## Description

Adds virtual aquifers that can be accessed via the Evershifting Fountain's Necromantic Prime.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.fountain/* Used as page default */ // [!code focus]
mods.astralsorcery.Fountain
mods.astral.fountain
mods.astral.Fountain
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.astralsorcery.fountain.add(FluidRarityRegistry.FluidRarityEntry)
    ```

- Adds recipes in the format `fluid`, `rarity`, `guaranteedAmt`, `addRand`:

    ```groovy:no-line-numbers
    mods.astralsorcery.fountain.add(Fluid, int, int, int)
    ```

- Adds recipes in the format `fluid`, `rarity`, `guaranteedAmt`, `addRand`:

    ```groovy:no-line-numbers
    mods.astralsorcery.fountain.add(FluidStack, int, int, int)
    ```


### Recipe Builder

Just like other recipe types, the Fountain also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.astralsorcery.fountain.chanceHelper() {open id="abstract"}
- `Fluid`. Sets the fluid being generated. Requires not null.

    ```groovy:no-line-numbers
    fluid(Fluid)
    fluid(FluidStack)
    ```

- `int`. Sets the frequency the fluid generates in a chunk. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    rarity(int)
    ```

- `int`. Sets the maximum amount of additional fluid that can be generated in a chunk. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    variance(int)
    ```

- `int`. Sets the minimum amount of fluid in a chunk. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    minimumAmount(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.base.FluidRarityRegistry$FluidRarityEntry`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.fountain.chanceHelper()
    .fluid(fluid('astralsorcery.liquidstarlight'))
    .rarity(10000000)
    .minimumAmount(4000000)
    .variance(1000000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.astralsorcery.fountain.remove(FluidRarityRegistry.FluidRarityEntry)
    ```

- Removes an entry matching the given `Fluid`:

    ```groovy:no-line-numbers
    mods.astralsorcery.fountain.remove(Fluid)
    ```

- Removes an entry matching the given `FluidStack`:

    ```groovy:no-line-numbers
    mods.astralsorcery.fountain.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.fountain.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.fountain.remove(fluid('lava'))
mods.astralsorcery.fountain.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.fountain.streamRecipes()
    ```
