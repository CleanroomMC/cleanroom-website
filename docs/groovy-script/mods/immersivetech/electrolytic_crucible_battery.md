---
title: "Electrolytic Crucible Battery"
titleTemplate: "Immersive Technology | CleanroomMC"
description: "Converts an input fluidstack into up to three output fluidstacks after a given amount of time and energy in a multiblock structure."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/ElectrolyticCrucibleBattery.java"
---

# Electrolytic Crucible Battery (Immersive Technology)

## Description

Converts an input fluidstack into up to three output fluidstacks after a given amount of time and energy in a multiblock structure.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivetech.electrolytic_crucible_battery/* Used as page default */ // [!code focus]
mods.immersivetech.electrolyticcruciblebattery
mods.immersivetech.electrolyticCrucibleBattery
mods.immersivetech.ElectrolyticCrucibleBattery
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.electrolytic_crucible_battery.add(ElectrolyticCrucibleBatteryRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Electrolytic Crucible Battery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivetech.electrolytic_crucible_battery.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.ElectrolyticCrucibleBatteryRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.electrolytic_crucible_battery.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .output(item('minecraft:clay'))
    .time(100)
    .register()

mods.immersivetech.electrolytic_crucible_battery.recipeBuilder()
    .fluidInput(fluid('water') * 500)
    .fluidOutput(fluid('lava') * 50, fluid('hot_spring_water') * 50, fluid('water') * 400)
    .output(item('minecraft:diamond'))
    .time(50)
    .energy(5000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersivetech.electrolytic_crucible_battery.remove(ElectrolyticCrucibleBatteryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersivetech.electrolytic_crucible_battery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersivetech.electrolytic_crucible_battery.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivetech.electrolytic_crucible_battery.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivetech.electrolytic_crucible_battery.removeByInput(fluid('moltensalt'))
mods.immersivetech.electrolytic_crucible_battery.removeByOutput(fluid('chlorine'))
mods.immersivetech.electrolytic_crucible_battery.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivetech.electrolytic_crucible_battery.streamRecipes()
    ```
