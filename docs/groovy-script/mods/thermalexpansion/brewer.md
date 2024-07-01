---
title: "Alchemical Imbuer"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input fluidstack and input itemstack into an output fluidstack, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Brewer.java"
---

# Alchemical Imbuer (Thermal Expansion)

## Description

Converts an input fluidstack and input itemstack into an output fluidstack, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.thermal.brewer
mods.thermal.Brewer
mods.thermal.imbuer
mods.thermal.Imbuer
mods.thermalexpansion.brewer/* Used as page default */ // [!code focus]
mods.thermalexpansion.Brewer
mods.thermalexpansion.imbuer
mods.thermalexpansion.Imbuer
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `fluidInput`, `fluidOutput`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.brewer.add(int, IIngredient, FluidStack, FluidStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.brewer.add(1000, item('minecraft:obsidian') * 2, fluid('water') * 1000, fluid('steam') * 100)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Alchemical Imbuer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.thermalexpansion.brewer.recipeBuilder() {open id="abstract"}
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

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `BrewerManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.BrewerManager$BrewerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.brewer.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('lava') * 100)
    .register()

mods.thermalexpansion.brewer.recipeBuilder()
    .input(item('minecraft:diamond') * 2)
    .fluidInput(fluid('water') * 1000)
    .fluidOutput(fluid('steam') * 100)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.brewer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.brewer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.brewer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.brewer.removeByInput(fluid('potion').withNbt(['Potion': 'minecraft:leaping']))
mods.thermalexpansion.brewer.removeByInput(item('minecraft:glowstone_dust'))
mods.thermalexpansion.brewer.removeByOutput(fluid('potion_splash').withNbt(['Potion': 'cofhcore:luck2']))
mods.thermalexpansion.brewer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.brewer.streamRecipes()
    ```
