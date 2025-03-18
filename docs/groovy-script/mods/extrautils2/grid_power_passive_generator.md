---
title: "Grid Power Generators"
titleTemplate: "Extra Utilities 2 | CleanroomMC"
description: "Passively produces Grid Power into the Owner's GP network."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/GridPowerPassiveGenerator.java"
---

# Grid Power Generators (Extra Utilities 2)

## Description

Passively produces Grid Power into the Owner's GP network.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.extrautils2.grid_power_passive_generator/* Used as page default */ // [!code focus]
mods.extrautils2.gridpowerpassivegenerator
mods.extrautils2.gridPowerPassiveGenerator
mods.extrautils2.GridPowerPassiveGenerator
mods.extrautilities2.grid_power_passive_generator
mods.extrautilities2.gridpowerpassivegenerator
mods.extrautilities2.gridPowerPassiveGenerator
mods.extrautilities2.GridPowerPassiveGenerator
```


## Editing Values

- Sets the base power produced by the given generator in the format `generator`, `basePower`. Typically only impacts the tooltip, and setPowerLevel is required to make effective changes:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setBasePower(ResourceLocation, float)
    ```

- Sets the base power produced by the given generator in the format `generator`, `basePower`. Typically only impacts the tooltip, and setPowerLevel is required to make effective changes:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setBasePower(String, float)
    ```

- Sets the function used to determine what the Grid Power produced by the given generator given its position in the world in the format `generator` and the Closure taking 2 parameters, `TilePassiveGenerator generator` and `World world` and returning a `float`:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setPowerLevel(ResourceLocation, Closure<Float>)
    ```

- Sets the function used to determine what the Grid Power produced by the given generator given its position in the world in the format `generator` and the Closure taking 2 parameters, `TilePassiveGenerator generator` and `World world` and returning a `float`:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setPowerLevel(String, Closure<Float>)
    ```

- Sets an additional multiplier applied to the generator after base power and power level are calculated, but before scaling is applied:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setPowerMultiplier(BlockPassiveGenerator.GeneratorType, IWorldPowerMultiplier)
    ```

- Sets an additional multiplier applied to the generator after base power and power level are calculated, but before scaling is applied:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setPowerMultiplier(ResourceLocation, IWorldPowerMultiplier)
    ```

- Sets an additional multiplier applied to the generator after base power and power level are calculated, but before scaling is applied:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setPowerMultiplier(String, IWorldPowerMultiplier)
    ```

- Sets the function used to determine what the Grid Power produced by the given generator is reduced by in the format `generator`, `scaling`. Scaling consists of floats controlling first how much GP the effect will activate at followed by the multiplier:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setScaling(ResourceLocation, float...)
    ```

- Sets the function used to determine what the Grid Power produced by the given generator is reduced by in the format `generator`, `scaling`. Scaling consists of floats controlling first how much GP the effect will activate at followed by the multiplier:

    ```groovy:no-line-numbers
    mods.extrautils2.grid_power_passive_generator.setScaling(String, float...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrautils2.grid_power_passive_generator.setBasePower(resource('generators:player_wind_up'), 100f)
mods.extrautils2.grid_power_passive_generator.setBasePower(resource('generators:creative'), 5f)
mods.extrautils2.grid_power_passive_generator.setPowerLevel(resource('generators:solar'), { TilePassiveGenerator generator, World world -> 100f })
mods.extrautils2.grid_power_passive_generator.setPowerMultiplier(resource('generators:wind'), IWorldPowerMultiplier.CONSTANT)
mods.extrautils2.grid_power_passive_generator.setScaling(resource('generators:creative'), 500.0F, 0.5F, 1000.0F, 0.25F, 1500.0F, 0.05F)
```

::::::::::
