---
title: "Centrifugal Separator"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into an optional output fluidstack and up to four output itemstacks with chance, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Centrifuge.java"
---

# Centrifugal Separator (Thermal Expansion)

## Description

Converts an input itemstack into an optional output fluidstack and up to four output itemstacks with chance, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.centrifuge
mods.thermal.Centrifuge
mods.thermalexpansion.centrifuge/* Used as page default */ // [!code focus]
mods.thermalexpansion.Centrifuge
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `output`, `chance`, `fluidOutput`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.centrifuge.add(int, IIngredient, List<ItemStack>, List<Integer>, FluidStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.centrifuge.add(1000, item('minecraft:obsidian') * 3, [item('minecraft:clay')], [100], null)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Centrifugal Separator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thermalexpansion.centrifuge.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 4.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `List<Integer>`. Sets the chance of each output. Requires greater than or equal to 0 and less than or equal to 100.

    ```groovy:no-line-numbers
    chance(int)
    chance(Integer...)
    chance(List<Integer>)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `CentrifugeManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.CentrifugeManager$CentrifugeRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.centrifuge.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('water') * 100)
    .output(item('minecraft:diamond') * 2, item('minecraft:gold_ingot'), item('minecraft:gold_ingot'))
    .chance(50, 100, 1)
    .register()

mods.thermalexpansion.centrifuge.recipeBuilder()
    .input(item('minecraft:diamond') * 3)
    .output(item('minecraft:clay'))
    .chance(100)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.centrifuge.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.centrifuge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.centrifuge.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.centrifuge.removeByInput(item('minecraft:reeds'))
mods.thermalexpansion.centrifuge.removeByOutput(fluid('redstone'))
mods.thermalexpansion.centrifuge.removeByOutput(item('minecraft:redstone'))
mods.thermalexpansion.centrifuge.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.centrifuge.streamRecipes()
    ```
