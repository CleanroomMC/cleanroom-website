---
title: "Fermenter"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts an input itemstack into an output fluidstack with an optional output itemstack, consuming power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Fermenter.java"
---

# Fermenter (Immersive Engineering)

## Description

Converts an input itemstack into an output fluidstack with an optional output itemstack, consuming power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.ie.fermenter
mods.ie.Fermenter
mods.immersiveengineering.fermenter/* Used as page default */ // [!code focus]
mods.immersiveengineering.Fermenter
```


## Adding Recipes

- Adds recipes in the format `fluidOutput`, `itemOutput`, `input`, `energy`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.fermenter.add(FluidStack, ItemStack, IIngredient, int)
    ```


### Recipe Builder

Just like other recipe types, the Fermenter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.immersiveengineering.fermenter.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the amount of power consumed to complete the recipe. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.FermenterRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.fermenter.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .fluidOutput(fluid('water'))
    .energy(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.fermenter.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.fermenter.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.fermenter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.fermenter.removeByInput(item('minecraft:reeds'))
mods.immersiveengineering.fermenter.removeByOutput(fluid('ethanol'))
mods.immersiveengineering.fermenter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.fermenter.streamRecipes()
    ```
