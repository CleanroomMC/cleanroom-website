---
title: "Refinery"
titleTemplate: "Magneticraft | CleanroomMC"
description: "Converts an input fluidstack into up to three output fluidstacks in a Refinery Multiblock."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/Refinery.java"
---

# Refinery (Magneticraft)

## Description

Converts an input fluidstack into up to three output fluidstacks in a Refinery Multiblock.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.magneticraft.refinery/* Used as page default */ // [!code focus]
mods.magneticraft.Refinery
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.refinery.add(IRefineryRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Refinery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.magneticraft.refinery.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    duration(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.refinery.IRefineryRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.refinery.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('lava'))
    .duration(50)
    .register()

mods.magneticraft.refinery.recipeBuilder()
    .fluidInput(fluid('lava'))
    .fluidOutput(fluid('water'))
    .duration(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.refinery.remove(IRefineryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.magneticraft.refinery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.magneticraft.refinery.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.magneticraft.refinery.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.refinery.removeByInput(fluid('steam'))
mods.magneticraft.refinery.removeByOutput(fluid('fuel'))
mods.magneticraft.refinery.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.magneticraft.refinery.streamRecipes()
    ```
