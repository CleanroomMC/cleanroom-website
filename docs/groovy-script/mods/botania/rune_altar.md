---
title: "Rune Altar"
titleTemplate: "Botania | CleanroomMC"
description: "Converts a items inputs into an item output at the cost of mana when a Livingrock item is thrown atop the altar and right clicked with a Wand of the Forest."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/RuneAltar.java"
---

# Rune Altar (Botania)

## Description

Converts a items inputs into an item output at the cost of mana when a Livingrock item is thrown atop the altar and right clicked with a Wand of the Forest.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.rune_altar/* Used as page default */ // [!code focus]
mods.botania.runealtar
mods.botania.runeAltar
mods.botania.RuneAltar
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.botania.rune_altar.add(RecipeRuneAltar)
    ```

- Adds recipes in the format `output`, `mana`, `inputs`:

    ```groovy:no-line-numbers
    mods.botania.rune_altar.add(ItemStack, int, IIngredient...)
    ```


### Recipe Builder

Just like other recipe types, the Rune Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.botania.rune_altar.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1 and that `input` IIngredients cannot contain Botania's Livingrock Item.

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

- `int`. Sets the mana cost of processing the recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    mana(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeRuneAltar`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.rune_altar.recipeBuilder()
    .input(ore('gemEmerald'), item('minecraft:apple'))
    .output(item('minecraft:diamond'))
    .mana(500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.botania.rune_altar.remove(RecipeRuneAltar)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.rune_altar.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.rune_altar.removeByInputs(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botania.rune_altar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania.rune_altar.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.rune_altar.removeByInput(ore('runeEarthB'))
mods.botania.rune_altar.removeByInputs(ore('feather'), ore('string'))
mods.botania.rune_altar.removeByOutput(item('botania:rune:1'))
mods.botania.rune_altar.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania.rune_altar.streamRecipes()
    ```
