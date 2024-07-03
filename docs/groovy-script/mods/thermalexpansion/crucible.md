---
title: "Magma Crucible"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Crucible.java"
---

# Magma Crucible (Thermal Expansion)

## Description

Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.crucible
mods.thermal.Crucible
mods.thermalexpansion.crucible/* Used as page default */ // [!code focus]
mods.thermalexpansion.Crucible
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `fluidOutput`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.crucible.add(int, IIngredient, FluidStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.crucible.add(1000, item('minecraft:obsidian'), fluid('water') * 1000)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Magma Crucible also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thermalexpansion.crucible.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `CrucibleManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.CrucibleManager$CrucibleRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.crucible.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('lava') * 25)
    .register()

mods.thermalexpansion.crucible.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidOutput(fluid('water') * 1000)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.crucible.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.crucible.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.crucible.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.crucible.removeByInput(item('minecraft:glowstone_dust'))
mods.thermalexpansion.crucible.removeByOutput(fluid('lava'))
mods.thermalexpansion.crucible.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.crucible.streamRecipes()
    ```
