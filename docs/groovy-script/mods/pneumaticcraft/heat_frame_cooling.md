---
title: "Heat Frame Cooling"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Converts an input itemstack into an output itemstack when inside an inventory placed within a Heat Frame which is cooled."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/HeatFrameCooling.java"
---

# Heat Frame Cooling (PneumaticCraft: Repressurized)

## Description

Converts an input itemstack into an output itemstack when inside an inventory placed within a Heat Frame which is cooled.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.heat_frame_cooling/* Used as page default */ // [!code focus]
mods.pneumaticcraft.heatframecooling
mods.pneumaticcraft.heatFrameCooling
mods.pneumaticcraft.HeatFrameCooling
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Heat Frame Cooling also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.heat_frame_cooling.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.HeatFrameCoolingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.heat_frame_cooling.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()

mods.pneumaticcraft.heat_frame_cooling.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:obsidian'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.heat_frame_cooling.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.heat_frame_cooling.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.heat_frame_cooling.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.heat_frame_cooling.removeByInput(item('minecraft:water_bucket'))
mods.pneumaticcraft.heat_frame_cooling.removeByOutput(item('minecraft:obsidian'))
mods.pneumaticcraft.heat_frame_cooling.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.heat_frame_cooling.streamRecipes()
    ```
