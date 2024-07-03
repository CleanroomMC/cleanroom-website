---
title: "Phytogenic Insolator"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts two input itemstacks into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Insolator.java"
---

# Phytogenic Insolator (Thermal Expansion)

## Description

Converts two input itemstacks into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.insolator
mods.thermal.Insolator
mods.thermalexpansion.insolator/* Used as page default */ // [!code focus]
mods.thermalexpansion.Insolator
```


## Adding Recipes

- Adds recipes in the format `energy`, `water`, `primaryInput`, `secondaryInput`, `primaryOutput`, `secondaryOutput`, `secondaryChance`, `type`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.insolator.add(int, int, IIngredient, IIngredient, ItemStack, ItemStack, int, InsolatorManager.Type)
    ```

- Adds an item to the Fertilizer list, which filters the inputs for one of the Phytogenic Insolator slots when enabled:

    ```groovy:no-line-numbers
    mods.thermalexpansion.insolator.addFertilizer(ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.insolator.add(1000, 100, item('minecraft:obsidian'), item('minecraft:gold_ingot') * 2, item('minecraft:clay'), item('minecraft:diamond'), 5, InsolatorManager.Type.TREE)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Phytogenic Insolator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thermalexpansion.insolator.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `InsolatorManager.Type`. Sets the type of the recipe, which controls if the recipe requires the Sapling Infuser augment installed. (Default `InsolatorManager.Type.STANDARD`).

    ```groovy:no-line-numbers
    tree()
    type(InsolatorManager.Type)
    standard()
    ```

- `int`. Sets the amount of water consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    water(int)
    ```

- `int`. Sets the chance a secondary output is created, typically the input seed or sapling. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    chance(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `InsolatorManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.InsolatorManager$InsolatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.insolator.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:diamond'))
    .output(item('minecraft:diamond') * 4)
    .register()

mods.thermalexpansion.insolator.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay'), item('minecraft:diamond'))
    .chance(5)
    .water(100)
    .tree()
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.insolator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.insolator.removeByOutput(IIngredient)
    ```

- Removes an item from the Fertilizer list, which filters the inputs for one of the Phytogenic Insolator slots when enabled:

    ```groovy:no-line-numbers
    mods.thermalexpansion.insolator.removeFertilizer(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.insolator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.insolator.removeByInput(item('thermalfoundation:fertilizer'))
mods.thermalexpansion.insolator.removeByInput(item('minecraft:double_plant:4'))
mods.thermalexpansion.insolator.removeByOutput(item('minecraft:red_flower:6'))
mods.thermalexpansion.insolator.removeByOutput(item('minecraft:melon_seeds'))
mods.thermalexpansion.insolator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.insolator.streamRecipes()
    ```
