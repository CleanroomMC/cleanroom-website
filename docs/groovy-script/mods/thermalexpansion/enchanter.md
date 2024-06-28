---
title: "Arcane Ensorcellator"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Converts two input itemstacks and liquid experience into an output itemstack, costing power and taking time based on the power cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Enchanter.java"
---

# Arcane Ensorcellator (Thermal Expansion)

## Description

Converts two input itemstacks and liquid experience into an output itemstack, costing power and taking time based on the power cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.thermal.enchanter
mods.thermal.Enchanter
mods.thermalexpansion.enchanter/* Used as page default */ // [!code focus]
mods.thermalexpansion.Enchanter
```


## Adding Recipes

- Adds recipes in the format `energy`, `primaryInput`, `secondaryInput`, `output`, `experience`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.enchanter.add(int, IIngredient, IIngredient, ItemStack, int)
    ```

- Adds an item to the Arcana list, which filters the inputs for one of the Arcane Ensorcellator slots when enabled:

    ```groovy:no-line-numbers
    mods.thermalexpansion.enchanter.addArcana(ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.enchanter.add(1000, item('minecraft:obsidian'), item('minecraft:gold_ingot'), item('minecraft:diamond'), 1000)
mods.thermalexpansion.enchanter.addArcana(item('minecraft:clay'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Arcane Ensorcellator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.thermalexpansion.enchanter.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- `EnchanterManager.Type`. Sets the type of recipe, which by default does nothing. (Default `EnchanterManager.Type.STANDARD`).

    ```groovy:no-line-numbers
    type(EnchanterManager.Type)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `EnchanterManager.DEFAULT_ENERGY[0]`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- `int`. Sets the amount of experience the recipe consumes from the tank. Requires greater than or equal to 0. (Default `EnchanterManager.DEFAULT_EXPERIENCE[0]`).

    ```groovy:no-line-numbers
    experience(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.EnchanterManager$EnchanterRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.enchanter.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot') * 4)
    .output(item('minecraft:diamond'))
    .register()

mods.thermalexpansion.enchanter.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .experience(1000)
    .energy(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes an item from the Arcana list, which filters the inputs for one of the Arcane Ensorcellator slots when enabled:

    ```groovy:no-line-numbers
    mods.thermalexpansion.enchanter.removeArcana(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thermalexpansion.enchanter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thermalexpansion.enchanter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.enchanter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.enchanter.removeByInput(item('minecraft:blaze_rod'))
mods.thermalexpansion.enchanter.removeByInput(item('minecraft:book'))
mods.thermalexpansion.enchanter.removeByOutput(item('minecraft:enchanted_book').withNbt(['StoredEnchantments': [['lvl': 1, 'id': 34]]]))
mods.thermalexpansion.enchanter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.enchanter.streamRecipes()
    ```
