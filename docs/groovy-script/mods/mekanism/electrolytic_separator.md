---
title: "Electrolytic Separator"
description: "Converts an input fluid into two output gasstacks at the cost of power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/ElectrolyticSeparator.java"
---

# Electrolytic Separator (Mekanism)

## Description

Converts an input fluid into two output gasstacks at the cost of power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.electrolytic_separator/*(1)!*/
mods.mekanism.electrolyticseparator
mods.mekanism.electrolyticSeparator
mods.mekanism.ElectrolyticSeparator
mods.mekanism.separator
mods.mekanism.Separator
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `input`, `leftOutput`, `rightOutput`, `energy`:

    ```groovy:no-line-numbers
    mods.mekanism.electrolytic_separator.add(FluidStack, GasStack, GasStack, double)
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.mekanism.electrolytic_separator.add(fluid('lava') * 10, gas('cleanGold') * 5, gas('cleanCopper') * 3, 3000)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Electrolytic Separator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details ABSTRACT mods.mekanism.electrolytic_separator.recipeBuilder() {open}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 2.

    ```groovy:no-line-numbers
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

- `double`. Sets the energy cost of the recipe. Requires greater than 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.SeparatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.mekanism.electrolytic_separator.recipeBuilder()
    .fluidInput(fluid('lava') * 10)
    .gasOutput(gas('cleanGold') * 5, gas('cleanCopper') * 3)
    .energy(3000)
    .register()
```

::::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.electrolytic_separator.removeByInput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.electrolytic_separator.removeAll()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.mekanism.electrolytic_separator.removeByInput(fluid('water'))
mods.mekanism.electrolytic_separator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.electrolytic_separator.streamRecipes()
    ```
