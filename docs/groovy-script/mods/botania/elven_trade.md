---
title: "Elven Trade"
titleTemplate: "Botania | CleanroomMC"
description: "Convert in any number of item inputs into an item output."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/ElvenTrade.java"
---

# Elven Trade (Botania)

## Description

Convert in any number of item inputs into an item output.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.elven_trade/* Used as page default */ // [!code focus]
mods.botania.elventrade
mods.botania.elvenTrade
mods.botania.ElvenTrade
```


## Adding Recipes

- Adds recipes in the format `output`, `inputs`:

    ```groovy:no-line-numbers
    mods.botania.elven_trade.add(ItemStack, IIngredient[])
    ```

- Adds recipes in the format `output`, `inputs`:

    ```groovy:no-line-numbers
    mods.botania.elven_trade.add(ItemStack[], IIngredient[])
    ```


### Recipe Builder

Just like other recipe types, the Elven Trade also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.botania.elven_trade.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 99.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 99.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeElvenTrade`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.elven_trade.recipeBuilder()
    .input(ore('ingotGold'), ore('ingotIron'))
    .output(item('botania:manaresource:7'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.elven_trade.removeByInputs(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botania.elven_trade.removeByOutputs(ItemStack...)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania.elven_trade.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.elven_trade.removeByInputs(ore('ingotManasteel'))
mods.botania.elven_trade.removeByOutputs(item('botania:dreamwood'))
mods.botania.elven_trade.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania.elven_trade.streamRecipes()
    ```
