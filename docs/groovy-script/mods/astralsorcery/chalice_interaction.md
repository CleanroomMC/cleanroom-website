---
title: "Chalice Interaction"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "When two chalices containing different fluids are placed nearby, fluid may be consumed to produce an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/ChaliceInteraction.java"
---

# Chalice Interaction (Astral Sorcery)

## Description

When two chalices containing different fluids are placed nearby, fluid may be consumed to produce an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.chalice_interaction/* Used as page default */ // [!code focus]
mods.astralsorcery.chaliceinteraction
mods.astralsorcery.chaliceInteraction
mods.astralsorcery.ChaliceInteraction
mods.astral.chalice_interaction
mods.astral.chaliceinteraction
mods.astral.chaliceInteraction
mods.astral.ChaliceInteraction
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.add(LiquidInteraction)
    ```

- Adds entries in the format `probability`, `component1`, `component2`, `action`:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.add(int, FluidStack, FluidStack, LiquidInteraction.FluidInteractionAction)
    ```


### Recipe Builder

Just like other recipe types, the Chalice Interaction also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.astralsorcery.chalice_interaction.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 2.

    ```groovy:no-line-numbers
    component(FluidStack)
    component(FluidStack, float)
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(FluidStack, float)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, int)
    output(Collection<ItemStack>)
    result(ItemStack)
    result(ItemStack, int)
    ```

- `FloatArrayList`. Sets the chance to consume fluids from the Chalices. Requires exactly 2.

    ```groovy:no-line-numbers
    component(FluidStack)
    component(FluidStack, float)
    fluidInput(FluidStack)
    fluidInput(FluidStack, float)
    ```

- `IntArrayList`. Sets the chance a given output will occur among all possible combinations of the fluid. Requires greater than 0.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack, int)
    result(ItemStack)
    result(ItemStack, int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.base.LiquidInteraction`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.chalice_interaction.recipeBuilder()
    .output(item('astralsorcery:blockmarble'))
    .fluidInput(fluid('water') * 10)
    .fluidInput(fluid('astralsorcery.liquidstarlight') * 30)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.remove(LiquidInteraction)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.removeByInput(Fluid)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.removeByInput(Fluid, Fluid)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.removeByInput(FluidStack, FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.chalice_interaction.removeByInput(fluid('astralsorcery.liquidstarlight'))
mods.astralsorcery.chalice_interaction.removeByInput(fluid('water'), fluid('lava'))
mods.astralsorcery.chalice_interaction.removeByOutput(item('minecraft:ice'))
mods.astralsorcery.chalice_interaction.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.chalice_interaction.streamRecipes()
    ```
