---
title: "Redstone Furnace"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Furnace.java"
---

# Redstone Furnace (Thermal Expansion)

## Description

Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.furnace
mods.thermal.Furnace
mods.thermalexpansion.furnace/* Used as page default */ // [!code focus]
mods.thermalexpansion.Furnace
```


## Adding Recipes

- Adds recipes in the format `energy`, `input`, `output`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.furnace.add(int, IIngredient, ItemStack)
    ```

- Adds the given ItemStack to the food list, which allows it to have doubled output if the Trivection Chamber augment is installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.furnace.addFood(ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.furnace.add(1000, item('minecraft:obsidian') * 2, item('minecraft:clay'))
mods.thermalexpansion.furnace.addFood(item('minecraft:emerald_ore'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Redstone Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.thermalexpansion.furnace.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `FurnaceManager.DEFAULT_ENERGY`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.FurnaceManager$FurnaceRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.furnace.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay') * 2)
    .register()

mods.thermalexpansion.furnace.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay'))
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.furnace.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.furnace.removeByOutput(IIngredient)
    ```

- Removes the given ItemStack from the food list, which allows it to have doubled output if the Trivection Chamber augment is installed:

    ```groovy:no-line-numbers
    mods.thermalexpansion.furnace.removeFood(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.furnace.removeAll()
    ```

- Removes all entries from the food list:

    ```groovy:no-line-numbers
    mods.thermalexpansion.furnace.removeAllFood()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.furnace.removeByInput(item('minecraft:cactus:*'))
mods.thermalexpansion.furnace.removeByOutput(item('minecraft:cooked_porkchop'))
mods.thermalexpansion.furnace.removeFood(item('minecraft:rabbit:*'))
mods.thermalexpansion.furnace.removeAll()
mods.thermalexpansion.furnace.removeAllFood()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.furnace.streamRecipes()
    ```
