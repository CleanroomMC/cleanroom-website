---
title: "Small Plate Presser"
titleTemplate: "Advanced Rocketry | CleanroomMC"
description: "Converts a block right below it into output items when powered by redstone."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/advancedrocketry/SmallPlatePresser.java"
---

# Small Plate Presser (Advanced Rocketry)

## Description

Converts a block right below it into output items when powered by redstone.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.advancedrocketry.small_plate_presser/* Used as page default */ // [!code focus]
mods.advancedrocketry.smallplatepresser
mods.advancedrocketry.smallPlatePresser
mods.advancedrocketry.SmallPlatePresser
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.advancedrocketry.small_plate_presser.add(R)
    ```


### Recipe Builder

Just like other recipe types, the Small Plate Presser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.advancedrocketry.small_plate_presser.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1 and `input` to be a block.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `zmaster587.libVulpes.interfaces.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.advancedrocketry.small_plate_presser.recipeBuilder()
    .input(item('minecraft:cobblestone'))
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.advancedrocketry.small_plate_presser.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.advancedrocketry.small_plate_presser.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.advancedrocketry.small_plate_presser.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.advancedrocketry.small_plate_presser.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.advancedrocketry.small_plate_presser.removeByInput(item('minecraft:iron_block'))
mods.advancedrocketry.small_plate_presser.removeByOutput(item('libvulpes:productplate', 2))
mods.advancedrocketry.small_plate_presser.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.advancedrocketry.small_plate_presser.streamRecipes()
    ```
