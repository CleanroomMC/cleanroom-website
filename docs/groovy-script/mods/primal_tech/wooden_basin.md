---
title: "Wooden Basin"
titleTemplate: "Primal Tech | CleanroomMC"
description: "Converts up to 4 items and 1000mb of fluid into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/primaltech/WoodenBasin.java"
---

# Wooden Basin (Primal Tech)

## Description

Converts up to 4 items and 1000mb of fluid into an output itemstack.

:::::::::: details Warning {open id="warning"}
The recipe requires items to be inserted in a specific order, which is displayed in JEI as top, left, right, bottom. Consider only one type of item to avoid issues.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.primal_tech.wooden_basin/* Used as page default */ // [!code focus]
mods.primal_tech.woodenbasin
mods.primal_tech.woodenBasin
mods.primal_tech.WoodenBasin
mods.primaltech.wooden_basin
mods.primaltech.woodenbasin
mods.primaltech.woodenBasin
mods.primaltech.WoodenBasin
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.primal_tech.wooden_basin.add(WoodenBasinRecipes)
    ```

- Adds recipes in the format `output`, `fluid`, `inputs`:

    ```groovy:no-line-numbers
    mods.primal_tech.wooden_basin.add(ItemStack, FluidStack, IIngredient...)
    ```


### Recipe Builder

Just like other recipe types, the Wooden Basin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.primal_tech.wooden_basin.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `primal_tech.recipes.WoodenBasinRecipes`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.primal_tech.wooden_basin.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('lava'))
    .output(item('minecraft:clay'))
    .register()

mods.primal_tech.wooden_basin.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:clay'))
    .fluidInput(fluid('water'))
    .output(item('minecraft:diamond') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.primal_tech.wooden_basin.remove(WoodenBasinRecipes)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.primal_tech.wooden_basin.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.primal_tech.wooden_basin.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.primal_tech.wooden_basin.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.primal_tech.wooden_basin.removeByInput(fluid('lava'))
mods.primal_tech.wooden_basin.removeByInput(item('minecraft:cobblestone'))
mods.primal_tech.wooden_basin.removeByOutput(item('minecraft:obsidian'))
mods.primal_tech.wooden_basin.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.primal_tech.wooden_basin.streamRecipes()
    ```
