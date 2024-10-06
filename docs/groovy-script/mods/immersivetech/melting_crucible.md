---
title: "Melting Crucible"
titleTemplate: "Immersive Technology | CleanroomMC"
description: "Converts an input itemstack into an output fluidstack after a given amount of time and energy in a multiblock structure."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/MeltingCrucible.java"
---

# Melting Crucible (Immersive Technology)

## Description

Converts an input itemstack into an output fluidstack after a given amount of time and energy in a multiblock structure.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivetech.melting_crucible/* Used as page default */ // [!code focus]
mods.immersivetech.meltingcrucible
mods.immersivetech.meltingCrucible
mods.immersivetech.MeltingCrucible
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.melting_crucible.add(MeltingCrucibleRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Melting Crucible also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivetech.melting_crucible.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the energy used in total IF consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.MeltingCrucibleRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.melting_crucible.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidOutput(fluid('hot_spring_water'))
    .time(100)
    .register()

mods.immersivetech.melting_crucible.recipeBuilder()
    .input(item('minecraft:clay') * 8)
    .fluidOutput(fluid('lava') * 50)
    .time(50)
    .energy(5000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.melting_crucible.remove(MeltingCrucibleRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersivetech.melting_crucible.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersivetech.melting_crucible.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivetech.melting_crucible.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.melting_crucible.removeByInput(item('minecraft:cobblestone'))
mods.immersivetech.melting_crucible.removeByOutput(fluid('moltensalt'))
mods.immersivetech.melting_crucible.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivetech.melting_crucible.streamRecipes()
    ```
