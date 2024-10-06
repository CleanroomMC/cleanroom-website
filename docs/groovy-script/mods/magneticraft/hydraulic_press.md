---
title: "Hydraulic Press"
titleTemplate: "Magneticraft | CleanroomMC"
description: "Converts an input itemstack into an output itemstack when set to a given mode in a Hydraulic Press Multiblock."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/HydraulicPress.java"
---

# Hydraulic Press (Magneticraft)

## Description

Converts an input itemstack into an output itemstack when set to a given mode in a Hydraulic Press Multiblock.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.magneticraft.hydraulic_press/* Used as page default */ // [!code focus]
mods.magneticraft.hydraulicpress
mods.magneticraft.hydraulicPress
mods.magneticraft.HydraulicPress
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.hydraulic_press.add(IHydraulicPressRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Hydraulic Press also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.magneticraft.hydraulic_press.recipeBuilder() {open id="abstract"}
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

- `HydraulicPressMode`. Sets the mode the Hydraulic Press need to be set on. Requires not null.

    ```groovy:no-line-numbers
    mode(HydraulicPressMode)
    heavy()
    light()
    medium()
    ```

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    ticks(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.hydraulicpress.IHydraulicPressRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.hydraulic_press.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .ticks(50)
    .register()

mods.magneticraft.hydraulic_press.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .ticks(50)
    .medium()
    .register()

mods.magneticraft.hydraulic_press.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .ticks(100)
    .mode(HydraulicPressMode.HEAVY)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.hydraulic_press.remove(IHydraulicPressRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.magneticraft.hydraulic_press.removeByInput(IIngredient)
    ```

- Removes all entries with the given mode:

    ```groovy:no-line-numbers
    mods.magneticraft.hydraulic_press.removeByMode(HydraulicPressMode)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.magneticraft.hydraulic_press.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.magneticraft.hydraulic_press.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.hydraulic_press.removeByInput(item('minecraft:iron_ingot'))
mods.magneticraft.hydraulic_press.removeByMode(HydraulicPressMode.MEDIUM)
mods.magneticraft.hydraulic_press.removeByOutput(item('minecraft:cobblestone'))
mods.magneticraft.hydraulic_press.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.magneticraft.hydraulic_press.streamRecipes()
    ```
