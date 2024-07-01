---
title: "Compactor"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, with different modes each requiring a different augment to be installed, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Compactor.java"
---

# Compactor (Thermal Expansion)

## Description

Converts an input itemstack into an output itemstack, with different modes each requiring a different augment to be installed, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.compactor
mods.thermal.Compactor
mods.thermalexpansion.compactor/* Used as page default */ // [!code focus]
mods.thermalexpansion.Compactor
```


## Adding Recipes

- Adds recipes in the format `energy`, `mode`, `input`, `output`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compactor.add(int, CompactorManager.Mode, IIngredient, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.compactor.add(1000, compactorMode('plate'), item('minecraft:obsidian') * 2, item('minecraft:gold_ingot'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Compactor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.thermalexpansion.compactor.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `CompactorManager.Mode`. Sets the mode of the recipe, controlling what augments are allowed, if any, for the recipe to operate. (Default `CompactorManager.Mode.ALL`).

    ```groovy:no-line-numbers
    mode(CompactorManager.Mode)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `CompactorManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.CompactorManager$CompactorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.compactor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .mode(compactorMode('coin'))
    .register()

mods.thermalexpansion.compactor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .mode(compactorMode('all'))
    .register()

mods.thermalexpansion.compactor.recipeBuilder()
    .input(item('minecraft:diamond') * 2)
    .output(item('minecraft:gold_ingot'))
    .mode(compactorMode('plate'))
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given IIngredient input from the given Compactor mode:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compactor.removeByInput(CompactorManager.Mode, IIngredient)
    ```

- Removes the given IIngredient input from the given Compactor mode:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compactor.removeByInput(IIngredient)
    ```

- Removes all recipes for the given mode:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compactor.removeByMode(CompactorManager.Mode)
    ```

- Removes the given IIngredient output from the given Compactor mode:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compactor.removeByOutput(CompactorManager.Mode, IIngredient)
    ```

- Removes the given IIngredient output from the given Compactor mode:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compactor.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compactor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.compactor.removeByInput(compactorMode('coin'), item('thermalfoundation:material:130'))
mods.thermalexpansion.compactor.removeByInput(item('minecraft:iron_ingot'))
mods.thermalexpansion.compactor.removeByMode(compactorMode('plate'))
mods.thermalexpansion.compactor.removeByOutput(compactorMode('coin'), item('thermalfoundation:coin:102'))
mods.thermalexpansion.compactor.removeByOutput(item('thermalfoundation:material:24'))
mods.thermalexpansion.compactor.removeByOutput(item('minecraft:blaze_rod'))
mods.thermalexpansion.compactor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.compactor.streamRecipes()
    ```
