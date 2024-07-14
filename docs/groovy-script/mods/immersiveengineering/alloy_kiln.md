---
title: "Alloy Kiln"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts two input itemstacks into an output itemstack, consuming fuel (based on burn time)."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/AlloyKiln.java"
---

# Alloy Kiln (Immersive Engineering)

## Description

Converts two input itemstacks into an output itemstack, consuming fuel (based on burn time).

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.ie.alloy_kiln
mods.ie.alloykiln
mods.ie.alloyKiln
mods.ie.AlloyKiln
mods.immersiveengineering.alloy_kiln/* Used as page default */ // [!code focus]
mods.immersiveengineering.alloykiln
mods.immersiveengineering.alloyKiln
mods.immersiveengineering.AlloyKiln
```


## Adding Recipes

- Adds recipes in the format `output`, `input0`, `input1`, `time`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.alloy_kiln.add(ItemStack, IIngredient, IIngredient, int)
    ```


### Recipe Builder

Just like other recipe types, the Alloy Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersiveengineering.alloy_kiln.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.AlloyRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.alloy_kiln.recipeBuilder()
    .input(item('minecraft:diamond'), ore('ingotGold'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.alloy_kiln.removeByInput(ItemStack, ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.alloy_kiln.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.alloy_kiln.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.alloy_kiln.removeByInput(item('minecraft:gold_ingot'), item('immersiveengineering:metal:3'))
mods.immersiveengineering.alloy_kiln.removeByOutput(item('immersiveengineering:metal:6'))
mods.immersiveengineering.alloy_kiln.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.alloy_kiln.streamRecipes()
    ```
