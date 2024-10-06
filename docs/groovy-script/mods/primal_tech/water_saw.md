---
title: "Water Saw"
titleTemplate: "Primal Tech | CleanroomMC"
description: "Converts an input item into an output itemstack after a given amount of time. Requires the block below it to be a water source block, and the block below and behind it flowing water."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/primaltech/WaterSaw.java"
---

# Water Saw (Primal Tech)

## Description

Converts an input item into an output itemstack after a given amount of time. Requires the block below it to be a water source block, and the block below and behind it flowing water.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.primal_tech.water_saw/* Used as page default */ // [!code focus]
mods.primal_tech.watersaw
mods.primal_tech.waterSaw
mods.primal_tech.WaterSaw
mods.primaltech.water_saw
mods.primaltech.watersaw
mods.primaltech.waterSaw
mods.primaltech.WaterSaw
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.primal_tech.water_saw.add(WaterSawRecipes)
    ```

- Adds recipes in the format `output`, `input`, `choppingTime`:

    ```groovy:no-line-numbers
    mods.primal_tech.water_saw.add(ItemStack, IIngredient, int)
    ```


### Recipe Builder

Just like other recipe types, the Water Saw also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.primal_tech.water_saw.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks for the recipe to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    choppingTime(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `primal_tech.recipes.WaterSawRecipes`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.primal_tech.water_saw.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .choppingTime(50)
    .register()

mods.primal_tech.water_saw.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 4)
    .choppingTime(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.primal_tech.water_saw.remove(WaterSawRecipes)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.primal_tech.water_saw.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.primal_tech.water_saw.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.primal_tech.water_saw.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.primal_tech.water_saw.removeByInput(item('minecraft:log'))
mods.primal_tech.water_saw.removeByOutput(item('minecraft:planks:1'))
mods.primal_tech.water_saw.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.primal_tech.water_saw.streamRecipes()
    ```
