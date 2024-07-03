---
title: "Fluid Transposer - Empty"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/TransposerExtract.java"
---

# Fluid Transposer - Empty (Thermal Expansion)

## Description

Converts an input itemstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost.

:::::::::: details Note {open id="note"}
Does not alter fill/empty container recipes.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.thermal.transposer_extract
mods.thermal.transposerextract
mods.thermal.transposerExtract
mods.thermal.TransposerExtract
mods.thermalexpansion.transposer_extract/* Used as page default */ // [!code focus]
mods.thermalexpansion.transposerextract
mods.thermalexpansion.transposerExtract
mods.thermalexpansion.TransposerExtract
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `outputFluid`, `outputItem`, `chance`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_extract.add(int, IIngredient, FluidStack, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.transposer_extract.add(1000, item('minecraft:obsidian'), fluid('water') * 50, item('minecraft:diamond') * 2, 100)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Fluid Transposer - Empty also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thermalexpansion.transposer_extract.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the chance the output itemstack is created. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy:no-line-numbers
    chance(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `TransposerManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.TransposerManager$TransposerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.transposer_extract.recipeBuilder()
    .input(item('minecraft:diamond') * 2)
    .fluidOutput(fluid('water') * 100)
    .register()

mods.thermalexpansion.transposer_extract.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .fluidOutput(fluid('water') * 50)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_extract.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_extract.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_extract.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.transposer_extract.removeByInput(item('minecraft:sponge:1'))
mods.thermalexpansion.transposer_extract.removeByOutput(fluid('seed_oil'))
mods.thermalexpansion.transposer_extract.removeByOutput(item('minecraft:bowl'))
mods.thermalexpansion.transposer_extract.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_extract.streamRecipes()
    ```
