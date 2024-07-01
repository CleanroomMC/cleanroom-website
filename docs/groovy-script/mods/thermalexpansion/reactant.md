---
title: "Reactant Dynamo"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack and input fluidstack into power, taking time based on the power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Reactant.java"
---

# Reactant Dynamo (Thermal Expansion)

## Description

Converts an input itemstack and input fluidstack into power, taking time based on the power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.reactant
mods.thermal.Reactant
mods.thermalexpansion.reactant/* Used as page default */ // [!code focus]
mods.thermalexpansion.Reactant
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `fluidStack`, `energy`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.add(IIngredient, FluidStack, int)
    ```

- Adds a fluid to the Element Catalyzer Fluid list, enabling its use with the Elemental Catalyzer augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.addElementalFluid(FluidStack)
    ```

- Adds a fluid to the Element Catalyzer Fluid list, enabling its use with the Elemental Catalyzer augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.addElementalFluid(String)
    ```

- Adds an itemstack to the Element Catalyzer Fluid list, enabling its use with the Elemental Catalyzer augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.addElementalReactant(ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.reactant.add(item('minecraft:clay'), fluid('steam'), 100)
mods.thermalexpansion.reactant.addElementalFluid(fluid('glowstone'))
mods.thermalexpansion.reactant.addElementalReactant(item('minecraft:gunpowder'))
mods.thermalexpansion.reactant.addElementalReactant(item('minecraft:clay'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Reactant Dynamo also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.thermalexpansion.reactant.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the amount of energy produced by the recipe. Requires greater than 0. (Default `ReactantManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.dynamo.ReactantManager$Reaction`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.reactant.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('steam'))
    .register()

mods.thermalexpansion.reactant.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('glowstone'))
    .energy(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes with given IIngredient or fluid name:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.removeByInput(IIngredient)
    ```

- Removes a fluid from the Element Catalyzer Fluid list, disabling its use with the Elemental Catalyzer augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.removeElementalFluid(FluidStack)
    ```

- Removes a fluid from the Element Catalyzer Fluid list, disabling its use with the Elemental Catalyzer augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.removeElementalFluid(String)
    ```

- Removes an itemstack from the Element Catalyzer Fluid list, disabling its use with the Elemental Catalyzer augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.removeElementalReactant(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.reactant.removeByInput(item('minecraft:blaze_powder'))
mods.thermalexpansion.reactant.removeByInput(fluid('redstone'))
mods.thermalexpansion.reactant.removeElementalFluid(fluid('cryotheum'))
mods.thermalexpansion.reactant.removeElementalReactant(item('thermalfoundation:material:1024'))
mods.thermalexpansion.reactant.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.reactant.streamRecipes()
    ```
