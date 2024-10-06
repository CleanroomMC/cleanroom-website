---
title: "Fluid Replicator"
titleTemplate: "Tech Reborn | CleanroomMC"
description: "Converts a configurable amount of UU-Matter into a output fluidstack of 1000mb after a given process time, replicating a fluid source block placed in-world and consuming energy per tick."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/FluidReplicator.java"
---

# Fluid Replicator (Tech Reborn)

## Description

Converts a configurable amount of UU-Matter into a output fluidstack of 1000mb after a given process time, replicating a fluid source block placed in-world and consuming energy per tick.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.techreborn.fluid_replicator/* Used as page default */ // [!code focus]
mods.techreborn.fluidreplicator
mods.techreborn.fluidReplicator
mods.techreborn.FluidReplicator
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Fluid Replicator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.techreborn.fluid_replicator.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the amount of UU-Matter consumed to create a bucket of the fluid. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    matter(int)
    ```

- `int`. Sets the power consumed per tick. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    perTick(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `techreborn.api.fluidreplicator.FluidReplicatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.fluid_replicator.recipeBuilder()
    .matter(10)
    .fluidOutput(fluid('water'))
    .time(100)
    .perTick(10)
    .register()

mods.techreborn.fluid_replicator.recipeBuilder()
    .matter(1)
    .fluidOutput(fluid('fluidmethane'))
    .time(5)
    .perTick(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.techreborn.fluid_replicator.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.techreborn.fluid_replicator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.fluid_replicator.removeByOutput(fluid('water'))
mods.techreborn.fluid_replicator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.techreborn.fluid_replicator.streamRecipes()
    ```
