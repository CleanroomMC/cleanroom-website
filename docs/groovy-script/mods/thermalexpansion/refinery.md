---
title: "Fractionating Still"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Refinery.java"
---

# Fractionating Still (Thermal Expansion)

## Description

Converts an input fluidstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost.

:::::::::: details Note {open id="note"}
The Bio Fuel registry has no function in default Thermal Expansion.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.refinery
mods.thermal.Refinery
mods.thermalexpansion.refinery/* Used as page default */ // [!code focus]
mods.thermalexpansion.Refinery
```


## Adding Recipes

- Adds recipes in the format `energy`, `fluidInput`, `outputFluid`, `outputItem`, `chance`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.add(int, FluidStack, FluidStack, ItemStack, int)
    ```

- Adds a fluid to the Bio Fuel list, which currently does nothing:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.addBioFuel(Fluid)
    ```

- Adds a fluid to the Bio Fuel list, which currently does nothing:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.addBioFuel(FluidStack)
    ```

- Adds a fluid to the Bio Fuel list, which currently does nothing:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.addBioFuel(String)
    ```

- Adds a fluid to the Fossil Fuel list, which causes it to have increased output when processed with the Reflux Column augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.addFossilFuel(Fluid)
    ```

- Adds a fluid to the Fossil Fuel list, which causes it to have increased output when processed with the Reflux Column augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.addFossilFuel(FluidStack)
    ```

- Adds a fluid to the Fossil Fuel list, which causes it to have increased output when processed with the Reflux Column augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.addFossilFuel(String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.refinery.add(1000, fluid('ender') * 100, fluid('steam') * 150, item('minecraft:clay'), 25)
mods.thermalexpansion.refinery.addBioFuel(fluid('coal'))
mods.thermalexpansion.refinery.addFossilFuel(fluid('crude_oil'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Fractionating Still also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.thermalexpansion.refinery.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `RefineryManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.RefineryManager$RefineryRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.refinery.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('steam') * 80)
    .register()

mods.thermalexpansion.refinery.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('steam') * 150)
    .output(item('minecraft:clay'))
    .chance(25)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes a fluid to the Bio Fuel list, which currently does nothing:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeBioFuel(Fluid)
    ```

- Removes a fluid to the Bio Fuel list, which currently does nothing:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeBioFuel(FluidStack)
    ```

- Removes a fluid to the Bio Fuel list, which currently does nothing:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeBioFuel(String)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeByOutput(IIngredient)
    ```

- Removes a fluid to the Fossil Fuel list, which causes it to have increased output when processed with the Reflux Column augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeFossilFuel(Fluid)
    ```

- Removes a fluid to the Fossil Fuel list, which causes it to have increased output when processed with the Reflux Column augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeFossilFuel(FluidStack)
    ```

- Removes a fluid to the Fossil Fuel list, which causes it to have increased output when processed with the Reflux Column augment installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeFossilFuel(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeAll()
    ```

- Removes all Bio Fuel entries:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeAllBioFuels()
    ```

- Removes all Fossil Fuel entries:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.removeAllFossilFuels()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.refinery.removeBioFuel(fluid('resin'))
mods.thermalexpansion.refinery.removeByInput(fluid('resin'))
mods.thermalexpansion.refinery.removeByOutput(item('thermalfoundation:material:771'))
mods.thermalexpansion.refinery.removeByOutput(fluid('refined_biofuel'))
mods.thermalexpansion.refinery.removeFossilFuel(fluid('coal'))
mods.thermalexpansion.refinery.removeAll()
mods.thermalexpansion.refinery.removeAllBioFuels()
mods.thermalexpansion.refinery.removeAllFossilFuels()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery.streamRecipes()
    ```
