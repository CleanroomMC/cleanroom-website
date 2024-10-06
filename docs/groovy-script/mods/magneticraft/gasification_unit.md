---
title: "Gasification Unit"
titleTemplate: "Magneticraft | CleanroomMC"
description: "Converts an input itemstack into either an output itemstack, an output fluidstack, or both in a Gasification Unit block."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/GasificationUnit.java"
---

# Gasification Unit (Magneticraft)

## Description

Converts an input itemstack into either an output itemstack, an output fluidstack, or both in a Gasification Unit block.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.magneticraft.gasification_unit/* Used as page default */ // [!code focus]
mods.magneticraft.gasificationunit
mods.magneticraft.gasificationUnit
mods.magneticraft.GasificationUnit
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.gasification_unit.add(IGasificationUnitRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Gasification Unit also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.magneticraft.gasification_unit.recipeBuilder() {open id="abstract"}
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

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    duration(float)
    ```

- `float`. Sets the minimum temperature required to process the recipe. (Default `0.0f`).

    ```groovy:no-line-numbers
    minTemperature(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.gasificationunit.IGasificationUnitRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.gasification_unit.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .duration(50)
    .minTemperature(700)
    .register()

mods.magneticraft.gasification_unit.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidOutput(fluid('lava'))
    .duration(100)
    .minTemperature(500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.gasification_unit.remove(IGasificationUnitRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.magneticraft.gasification_unit.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.magneticraft.gasification_unit.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.magneticraft.gasification_unit.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.gasification_unit.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.magneticraft.gasification_unit.streamRecipes()
    ```
