---
title: "Lightwell"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Converts an input item into fluid, with a chance at breaking every time fluid is produced. The amount of fluid produced per interval can be increased via starlight."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/Lightwell.java"
---

# Lightwell (Astral Sorcery)

## Description

Converts an input item into fluid, with a chance at breaking every time fluid is produced. The amount of fluid produced per interval can be increased via starlight.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.lightwell/* Used as page default */ // [!code focus]
mods.astralsorcery.Lightwell
mods.astral.lightwell
mods.astral.Lightwell
```


## Adding Recipes

- Adds recipes in the format `catalyst`, `output`, `productionMultiplier`, `shatterMultiplier`:

    ```groovy:no-line-numbers
    mods.astralsorcery.lightwell.add(ItemStack, Fluid, float, float)
    ```

- Adds recipes in the format `catalyst`, `output`, `productionMultiplier`, `shatterMultiplier`, `color`:

    ```groovy:no-line-numbers
    mods.astralsorcery.lightwell.add(ItemStack, Fluid, float, float, Color)
    ```


### Recipe Builder

Just like other recipe types, the Lightwell also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.astralsorcery.lightwell.recipeBuilder() {open id="abstract"}
- `Color`. Sets the color of the produced particles.

    ```groovy:no-line-numbers
    catalystColor(int)
    catalystColor(Color)
    catalystColor(int, int, int)
    catalystColor(int, int, int, int)
    ```

- `Fluid`. Sets the output fluid. Requires not null.

    ```groovy:no-line-numbers
    output(FluidStack)
    ```

- `ItemStack`. Sets the input item. Requires not null.

    ```groovy:no-line-numbers
    catalyst(ItemStack)
    ```

- `float`. Sets how likely the catalyst is to shatter when producing fluid, with higher being less likely but never 0. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    shatterMultiplier(float)
    ```

- `float`. Sets the base amount of fluid produced per tick. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    productionMultiplier(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.base.WellLiquefaction$LiquefactionEntry`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.lightwell.recipeBuilder()
    .catalyst(item('minecraft:stone'))
    .output(fluid('astralsorcery.liquidstarlight'))
    .productionMultiplier(1.0F)
    .shatterMultiplier(15.0F)
    .catalystColor(16725260)
    .register()

mods.astralsorcery.lightwell.recipeBuilder()
    .catalyst(item('minecraft:obsidian'))
    .output(fluid('astralsorcery.liquidstarlight'))
    .productionMultiplier(1.0F)
    .shatterMultiplier(15.0F)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given catalyst:

    ```groovy:no-line-numbers
    mods.astralsorcery.lightwell.removeByCatalyst(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.astralsorcery.lightwell.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.astralsorcery.lightwell.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.lightwell.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.lightwell.removeByCatalyst(item('minecraft:ice'))
mods.astralsorcery.lightwell.removeByInput(item('minecraft:packed_ice'))
mods.astralsorcery.lightwell.removeByOutput(fluid('lava'))
mods.astralsorcery.lightwell.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.lightwell.streamRecipes()
    ```
