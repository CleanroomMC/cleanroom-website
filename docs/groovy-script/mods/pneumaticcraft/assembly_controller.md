---
title: "Assembly Controller"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Uses a given Program to convert an input itemstack into an output itemstack. Drill recipes that output an itemstack used for the input itemstack of a Laser recipe can be chained via the Drill & Laser Program."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/AssemblyController.java"
---

# Assembly Controller (PneumaticCraft: Repressurized)

## Description

Uses a given Program to convert an input itemstack into an output itemstack. Drill recipes that output an itemstack used for the input itemstack of a Laser recipe can be chained via the Drill & Laser Program.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.assembly_controller/* Used as page default */ // [!code focus]
mods.pneumaticcraft.assemblycontroller
mods.pneumaticcraft.assemblyController
mods.pneumaticcraft.AssemblyController
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Assembly Controller also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.assembly_controller.recipeBuilder() {open id="abstract"}
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

- `ItemStack`. Sets the program type used, between Drill and Laser. Requires not null.

    ```groovy:no-line-numbers
    drill()
    laser()
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.AssemblyRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.assembly_controller.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:gold_ingot') * 6)
    .drill()
    .register()

mods.pneumaticcraft.assembly_controller.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 6)
    .output(item('minecraft:diamond'))
    .laser()
    .register()

mods.pneumaticcraft.assembly_controller.recipeBuilder()
    .input(item('minecraft:stone'))
    .output(item('minecraft:clay') * 5)
    .laser()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.assembly_controller.removeByInput(AssemblyController.AssemblyType, IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.assembly_controller.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.assembly_controller.removeByOutput(AssemblyController.AssemblyType, IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.assembly_controller.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.assembly_controller.removeAll()
    ```

- Removes all Drill program recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.assembly_controller.removeAllDrill()
    ```

- Removes all Laser program recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.assembly_controller.removeAllLaser()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.assembly_controller.removeByInput(item('minecraft:redstone'))
mods.pneumaticcraft.assembly_controller.removeByOutput(item('pneumaticcraft:pressure_chamber_valve'))
mods.pneumaticcraft.assembly_controller.removeAll()
mods.pneumaticcraft.assembly_controller.removeAllDrill()
mods.pneumaticcraft.assembly_controller.removeAllLaser()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.assembly_controller.streamRecipes()
    ```
