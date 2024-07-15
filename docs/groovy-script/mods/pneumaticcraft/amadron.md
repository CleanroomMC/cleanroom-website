---
title: "Amadron"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Uses an Amadron Tablet and linked inventories in world to trade via drones."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/Amadron.java"
---

# Amadron (PneumaticCraft: Repressurized)

## Description

Uses an Amadron Tablet and linked inventories in world to trade via drones.

:::::::::: details Warning {open id="warning"}
Amadron recipes added or removed via GroovyScript will be saved to a config file in `config/pneumaticcraft/`, meaning changes made may persist unexpectedly through restarts.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.amadron/* Used as page default */ // [!code focus]
mods.pneumaticcraft.Amadron
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Amadron also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.amadron.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

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

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `boolean`. Sets if the Amadron recipe is periodic. (Default `false`).

    ```groovy:no-line-numbers
    periodic()
    periodic(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.AmadronOffer`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.amadron.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:gold_ingot'))
    .register()

mods.pneumaticcraft.amadron.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .output(item('minecraft:clay') * 3)
    .register()

mods.pneumaticcraft.amadron.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .fluidOutput(fluid('lava') * 10)
    .periodic()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.amadron.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.amadron.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.amadron.removeAll()
    ```

- Removes all periodic recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.amadron.removeAllPeriodic()
    ```

- Removes all static recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.amadron.removeAllStatic()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.amadron.removeByInput(item('minecraft:rotten_flesh'))
mods.pneumaticcraft.amadron.removeByOutput(item('minecraft:emerald'))
mods.pneumaticcraft.amadron.removeAll()
mods.pneumaticcraft.amadron.removeAllPeriodic()
mods.pneumaticcraft.amadron.removeAllStatic()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.amadron.streamRecipes()
    ```
