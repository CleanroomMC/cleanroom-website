---
title: "Liquid Fuel"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Converts fluid into Pressure in a Liquid Compressor."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/LiquidFuel.java"
---

# Liquid Fuel (PneumaticCraft: Repressurized)

## Description

Converts fluid into Pressure in a Liquid Compressor.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.liquid_fuel/* Used as page default */ // [!code focus]
mods.pneumaticcraft.liquidfuel
mods.pneumaticcraft.liquidFuel
mods.pneumaticcraft.LiquidFuel
```


## Adding Entries

- Adds entries in the format `fluid`, `pressure`:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.liquid_fuel.add(FluidStack, int)
    ```

- Adds entries in the format `fluid`, `pressure`:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.liquid_fuel.add(String, int)
    ```


### Recipe Builder

Just like other recipe types, the Liquid Fuel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.liquid_fuel.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `int`. Sets the Pressure created by the fluid. (Default `0`).

    ```groovy:no-line-numbers
    pressure(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.apache.commons.lang3.tuple.Pair<net.minecraftforge.fluids.FluidStack, java.lang.Integer>`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.liquid_fuel.recipeBuilder()
    .fluidInput(fluid('water'))
    .pressure(100_000_000)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes entries with the given `fluid`:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.liquid_fuel.remove(FluidStack)
    ```

- Removes entries with the given `fluid`:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.liquid_fuel.remove(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.liquid_fuel.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.liquid_fuel.remove(fluid('lava'))
mods.pneumaticcraft.liquid_fuel.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.liquid_fuel.streamRecipes()
    ```
