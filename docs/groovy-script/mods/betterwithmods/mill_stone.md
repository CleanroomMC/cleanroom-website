---
title: "Mill Stone"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Converts input itemstacks into output itemstacks after being ground via rotation power for a given time."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/MillStone.java"
---

# Mill Stone (Better With Mods)

## Description

Converts input itemstacks into output itemstacks after being ground via rotation power for a given time.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.mill_stone/* Used as page default */ // [!code focus]
mods.betterwithmods.millstone
mods.betterwithmods.millStone
mods.betterwithmods.MillStone
mods.betterwithmods.mill
mods.betterwithmods.Mill
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.mill_stone.add(MillRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Mill Stone also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithmods.mill_stone.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    time(int)
    ticks(int)
    ```

- `int`. Sets the priority of the recipe in relation to other valid recipes for the given items. (Default `1`).

    ```groovy:no-line-numbers
    priority(int)
    ```

- `SoundEvent`. Sets what sound is played by the mill during the recipe.

    ```groovy:no-line-numbers
    soundEvent(SoundEvent)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.bulk.recipes.MillRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.mill_stone.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot') * 16)
    .register()

mods.betterwithmods.mill_stone.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:gold_ingot'), item('minecraft:gold_block'), item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.mill_stone.remove(MillRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithmods.mill_stone.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithmods.mill_stone.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.mill_stone.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.mill_stone.removeByInput(item('minecraft:netherrack'))
mods.betterwithmods.mill_stone.removeByOutput(item('minecraft:blaze_powder'))
mods.betterwithmods.mill_stone.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.mill_stone.streamRecipes()
    ```
