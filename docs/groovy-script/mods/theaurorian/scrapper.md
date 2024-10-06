---
title: "Scrapper"
titleTemplate: "The Aurorian | CleanroomMC"
description: "Turns an input item into an output item. Can be sped up by placing a Crystal on top of it. The crystal has a chance to break every time a recipe is executed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/theaurorian/Scrapper.java"
---

# Scrapper (The Aurorian)

## Description

Turns an input item into an output item. Can be sped up by placing a Crystal on top of it. The crystal has a chance to break every time a recipe is executed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.aurorian.scrapper
mods.aurorian.Scrapper
mods.theaurorian.scrapper/* Used as page default */ // [!code focus]
mods.theaurorian.Scrapper
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.theaurorian.scrapper.add(ScrapperRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Scrapper also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.theaurorian.scrapper.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shiroroku.theaurorian.Recipes.ScrapperRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.theaurorian.scrapper.recipeBuilder()
    .input(item('minecraft:stone_sword'))
    .output(item('minecraft:cobblestone'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.theaurorian.scrapper.remove(ScrapperRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.theaurorian.scrapper.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.theaurorian.scrapper.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.theaurorian.scrapper.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.theaurorian.scrapper.removeByInput(item('minecraft:iron_sword'))
mods.theaurorian.scrapper.removeByOutput(item('theaurorian:scrapaurorianite'))
mods.theaurorian.scrapper.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.theaurorian.scrapper.streamRecipes()
    ```
