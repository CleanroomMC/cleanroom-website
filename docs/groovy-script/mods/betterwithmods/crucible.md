---
title: "Crucible"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Converts a large number of items into other items, with the ability to require specific amounts of heat."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Crucible.java"
---

# Crucible (Better With Mods)

## Description

Converts a large number of items into other items, with the ability to require specific amounts of heat.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.crucible/* Used as page default */ // [!code focus]
mods.betterwithmods.Crucible
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crucible also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.betterwithmods.crucible.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets if the Cauldron requires a normal fire (1) or a Stoked Fire (2) below it. (Default `1`).

    ```groovy:no-line-numbers
    heat(int)
    ```

- `int`. Sets the priority of the recipe in relation to other valid recipes for the given items. (Default `1`).

    ```groovy:no-line-numbers
    priority(int)
    ```

- `boolean`. Sets if the Cauldron requires any heat source below it. (Default `false`).

    ```groovy:no-line-numbers
    ignoreHeat()
    ignoreHeat(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.bulk.recipes.CookingPotRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.crucible.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .heat(2)
    .register()

mods.betterwithmods.crucible.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot') * 16)
    .ignoreHeat()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithmods.crucible.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithmods.crucible.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithmods.crucible.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.crucible.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.crucible.removeByInput(item('minecraft:gunpowder'))
mods.betterwithmods.crucible.removeByOutput(item('minecraft:gunpowder'))
mods.betterwithmods.crucible.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.crucible.streamRecipes()
    ```
