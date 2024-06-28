---
title: "Fractionating Still - Alchemical Retort"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/RefineryPotion.java"
---

# Fractionating Still - Alchemical Retort (Thermal Expansion)

## Description

Converts an input fluidstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.thermal.refinery_potion
mods.thermal.refinerypotion
mods.thermal.refineryPotion
mods.thermal.RefineryPotion
mods.thermalexpansion.refinery_potion/* Used as page default */ // [!code focus]
mods.thermalexpansion.refinerypotion
mods.thermalexpansion.refineryPotion
mods.thermalexpansion.RefineryPotion
```


## Adding Recipes

- Adds recipes in the format `energy`, `fluidInput`, `outputFluid`, `outputItem`, `chance`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery_potion.add(int, FluidStack, FluidStack, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.refinery_potion.add(1000, fluid('ender') * 100, fluid('steam') * 30, item('minecraft:clay'), 75)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Fractionating Still - Alchemical Retort also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.thermalexpansion.refinery_potion.recipeBuilder() {open id="abstract"}
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
mods.thermalexpansion.refinery_potion.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('steam') * 200)
    .register()

mods.thermalexpansion.refinery_potion.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('steam') * 30)
    .output(item('minecraft:clay'))
    .chance(75)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery_potion.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery_potion.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery_potion.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.refinery_potion.removeByInput(fluid('potion_lingering').withNbt(['Potion': 'cofhcore:healing3']))
mods.thermalexpansion.refinery_potion.removeByOutput(fluid('potion_splash').withNbt(['Potion': 'cofhcore:leaping4']))
mods.thermalexpansion.refinery_potion.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.refinery_potion.streamRecipes()
    ```
