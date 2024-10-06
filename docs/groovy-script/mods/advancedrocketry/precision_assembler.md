---
title: "Precision Assembler"
titleTemplate: "Advanced Rocketry | CleanroomMC"
description: "Converts input items and fluids into output items and fluids, consuming RF."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/advancedrocketry/PrecisionAssembler.java"
---

# Precision Assembler (Advanced Rocketry)

## Description

Converts input items and fluids into output items and fluids, consuming RF.

:::::::::: details Warning {open id="warning"}
The 'chances' used with the recipe outputs are actually output weights. For example, setting 'chance' to 0.1 will set the output's chance to 1, unless other outputs add up to the weight of 0.9. The output chances will also not do anything unless 'outputSize' is set to a number greater than 0.
::::::::::

:::::::::: details Warning {open id="warning"}
The recipes performed in this machine can have more than 9 inputs, but this makes the JEI handler overflow when displaying the recipe and breaks the tooltips.
::::::::::

:::::::::: details Warning {open id="warning"}
The recipes performed in this machine can have more than 9 outputs, but this makes the JEI handler overflow when displaying the recipe and breaks the tooltips.
::::::::::

:::::::::: details Info {open id="info"}
The Precision Assembler can support up to 6 input and output hatches. Each hatch can store either 1 type of fluid or up to 4 types of input or output items. Groovyscript will not add the recipe if it requires more than 6 hatches (i.e., has 6 fluid inputs and an output).
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.advancedrocketry.precision_assembler/* Used as page default */ // [!code focus]
mods.advancedrocketry.precisionassembler
mods.advancedrocketry.precisionAssembler
mods.advancedrocketry.PrecisionAssembler
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.advancedrocketry.precision_assembler.add(R)
    ```


### Recipe Builder

Just like other recipe types, the Precision Assembler also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.advancedrocketry.precision_assembler.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires either `input` or `fluidInput` to be non-null.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires either `input` or `fluidInput` to be non-null.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. The version with two arguments can be used to add weighted outputs. Requires either `output` or `fluidOutput` to be non-null.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires either `output` or `fluidOutput` to be non-null.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time needed to perform the recipe in ticks. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the power consumed by the recipe in RF/t. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    power(int)
    ```

- `int`. Sets the maximum amount of outputs produced by each recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    outputSize(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `zmaster587.libVulpes.interfaces.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.advancedrocketry.precision_assembler.recipeBuilder()
    .input(item('minecraft:fishing_rod'), item('minecraft:carrot'))
    .output(item('minecraft:carrot_on_a_stick'))
    .power(50)
    .time(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.advancedrocketry.precision_assembler.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.advancedrocketry.precision_assembler.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.advancedrocketry.precision_assembler.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.advancedrocketry.precision_assembler.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.advancedrocketry.precision_assembler.removeByInput(item('minecraft:redstone_block'))
mods.advancedrocketry.precision_assembler.removeByOutput(item('advancedrocketry:atmanalyser'))
mods.advancedrocketry.precision_assembler.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.advancedrocketry.precision_assembler.streamRecipes()
    ```
