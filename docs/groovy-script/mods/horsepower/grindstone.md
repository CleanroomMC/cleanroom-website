---
title: "Horse Grindstone"
titleTemplate: "Horse Power | CleanroomMC"
description: "Converts an itemstack input into an itemstack output, with the chance of an additional output after a configurable amount of processing has been done. Depending on if the config option `Separate Grindstone Recipes` is true, this may affect both Horse and Hand Grindstones."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/horsepower/Grindstone.java"
---

# Horse Grindstone (Horse Power)

## Description

Converts an itemstack input into an itemstack output, with the chance of an additional output after a configurable amount of processing has been done. Depending on if the config option `Separate Grindstone Recipes` is true, this may affect both Horse and Hand Grindstones.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.horsepower.grindstone/* Used as page default */ // [!code focus]
mods.horsepower.Grindstone
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.horsepower.grindstone.add(GrindstoneRecipe)
    ```

- Adds recipes in the format `input`, `output`, `time`:

    ```groovy:no-line-numbers
    mods.horsepower.grindstone.add(IIngredient, ItemStack, int)
    ```

- Adds recipes in the format `input`, `output`, `secondary`, `chance`, `time`:

    ```groovy:no-line-numbers
    mods.horsepower.grindstone.add(IIngredient, ItemStack, ItemStack, int, int)
    ```


### Recipe Builder

Just like other recipe types, the Horse Grindstone also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.horsepower.grindstone.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- `int`. Sets the time in laps the horse has to take to complete the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the chance that the secondary output will be created if the secondary output exists. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy:no-line-numbers
    chance(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `se.gory_moon.horsepower.recipes.GrindstoneRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.horsepower.grindstone.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 5)
    .time(5)
    .register()

mods.horsepower.grindstone.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .time(1)
    .register()

mods.horsepower.grindstone.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'), item('minecraft:diamond'))
    .chance(50)
    .time(2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.horsepower.grindstone.remove(GrindstoneRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.horsepower.grindstone.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.horsepower.grindstone.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.horsepower.grindstone.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.horsepower.grindstone.removeByInput(item('minecraft:double_plant:4'))
mods.horsepower.grindstone.removeByOutput(item('minecraft:sugar'))
mods.horsepower.grindstone.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.horsepower.grindstone.streamRecipes()
    ```
