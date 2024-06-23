---
title: "Fluid Transposer - Fill"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack and input fluidstack into an output itemstack with chance, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/TransposerFill.java"
---

# Fluid Transposer - Fill (Thermal Expansion)

## Description

Converts an input itemstack and input fluidstack into an output itemstack with chance, costing power and taking time based on the power cost.

:::::::::: details Note {open id="note"}
Does not alter fill/empty container recipes.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.thermal.transposer_fill
mods.thermal.transposerfill
mods.thermal.transposerFill
mods.thermal.TransposerFill
mods.thermalexpansion.transposer_fill/* Used as page default */ // [!code focus]
mods.thermalexpansion.transposerfill
mods.thermalexpansion.transposerFill
mods.thermalexpansion.TransposerFill
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `fluidInput`, `outputItem`, `chance`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_fill.add(int, IIngredient, FluidStack, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.transposer_fill.add(1000, item('minecraft:obsidian'), fluid('water') * 50, item('minecraft:diamond') * 2, 100)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Fluid Transposer - Fill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.thermalexpansion.transposer_fill.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
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
mods.thermalexpansion.transposer_fill.recipeBuilder()
    .input(item('minecraft:diamond') * 2)
    .fluidInput(fluid('water') * 100)
    .register()

mods.thermalexpansion.transposer_fill.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .fluidInput(fluid('water') * 50)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_fill.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_fill.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_fill.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.transposer_fill.removeByInput(fluid('glowstone'))
mods.thermalexpansion.transposer_fill.removeByInput(item('minecraft:concrete_powder:3'))
mods.thermalexpansion.transposer_fill.removeByOutput(item('minecraft:ice'))
mods.thermalexpansion.transposer_fill.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.transposer_fill.streamRecipes()
    ```
