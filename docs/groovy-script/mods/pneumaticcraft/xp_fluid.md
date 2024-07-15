---
title: "XP Fluid"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Controls what fluids are considered XP Fluids and how much experience they provide."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/XpFluid.java"
---

# XP Fluid (PneumaticCraft: Repressurized)

## Description

Controls what fluids are considered XP Fluids and how much experience they provide.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.xp_fluid/* Used as page default */ // [!code focus]
mods.pneumaticcraft.xpfluid
mods.pneumaticcraft.xpFluid
mods.pneumaticcraft.XpFluid
```


## Adding Entries

- Adds entries in the format `fluid`, `ratio`:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.xp_fluid.add(Fluid, int)
    ```

- Adds entries in the format `fluid`, `ratio`:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.xp_fluid.add(FluidStack, int)
    ```


### Recipe Builder

Just like other recipe types, the XP Fluid also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.xp_fluid.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `int`. Sets the amount of experience provided by the fluid for the purpose of determining the ratio between xp fluids. (Default `0`).

    ```groovy:no-line-numbers
    ratio(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.apache.commons.lang3.tuple.Pair<net.minecraftforge.fluids.FluidStack, java.lang.Integer>`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.xp_fluid.recipeBuilder()
    .fluidInput(fluid('lava'))
    .ratio(5)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes entries for the given `fluid`:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.xp_fluid.remove(Fluid)
    ```

- Removes entries for the given `fluid`:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.xp_fluid.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.xp_fluid.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.xp_fluid.remove(fluid('xpjuice'))
mods.pneumaticcraft.xp_fluid.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.xp_fluid.streamRecipes()
    ```
