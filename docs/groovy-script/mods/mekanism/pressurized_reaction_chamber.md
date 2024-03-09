---
title: "Pressurized Reaction Chamber"
description: "Converts an input fluidstack, gasstack, and optional itemstack into an output gasstack and optional itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/PressurizedReactionChamber.java"
---

# Pressurized Reaction Chamber (Mekanism)

## Description

Converts an input fluidstack, gasstack, and optional itemstack into an output gasstack and optional itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.pressurized_reaction_chamber/*(1)!*/
mods.mekanism.pressurizedreactionchamber
mods.mekanism.pressurizedReactionChamber
mods.mekanism.PressurizedReactionChamber
mods.mekanism.PRC
mods.mekanism.prc
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Pressurized Reaction Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.mekanism.pressurized_reaction_chamber.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

- `double`. Sets the energy cost of the recipe. Requires greater than 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    ```

- `int`. Sets the time in ticks for the recipe to process. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.PressurizedRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.pressurized_reaction_chamber.recipeBuilder()
    .fluidInput(fluid('water'))
    .gasInput(gas('water'))
    .input(item('minecraft:clay_ball'))
    .gasOutput(gas('ethene'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Adds recipes in the format `inputSolid`, `inputFluid`, `inputGas`, `outputSolid`, `outputGas`, `energy`, `duration`:

    ```groovy:no-line-numbers
    mods.mekanism.pressurized_reaction_chamber.add(IIngredient, FluidStack, GasStack, ItemStack, GasStack, double, int)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.pressurized_reaction_chamber.removeByInput(IIngredient, FluidStack, GasStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.pressurized_reaction_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.pressurized_reaction_chamber.removeByInput(ore('logWood'), fluid('water'), gas('oxygen'))
mods.mekanism.pressurized_reaction_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.pressurized_reaction_chamber.streamRecipes()
    ```
