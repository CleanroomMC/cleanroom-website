---
title: "Imbuing Station"
titleTemplate: "Random Things | CleanroomMC"
description: "Converts four itemstacks into an itemstack in the Random Things Imbuing Station."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/randomthings/Imbuing.java"
---

# Imbuing Station (Random Things)

## Description

Converts four itemstacks into an itemstack in the Random Things Imbuing Station.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.randomthings.imbuing/* Used as page default */ // [!code focus]
mods.randomthings.Imbuing
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.randomthings.imbuing.add(ImbuingRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Imbuing Station also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.randomthings.imbuing.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 3 and each input item used must be unique.

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

- `IIngredient`. Sets the center IIngredient. Requires not null.

    ```groovy:no-line-numbers
    mainInput(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lumien.randomthings.recipes.imbuing.ImbuingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.randomthings.imbuing.recipeBuilder()
    .mainInput(item('minecraft:clay'))
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:gold_block'))
    .output(item('minecraft:diamond') * 8)
    .register()

mods.randomthings.imbuing.recipeBuilder()
    .mainInput(item('minecraft:diamond'))
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.randomthings.imbuing.remove(ImbuingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.randomthings.imbuing.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.randomthings.imbuing.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.randomthings.imbuing.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.randomthings.imbuing.removeByInput(item('minecraft:cobblestone'))
mods.randomthings.imbuing.removeByInput(item('minecraft:coal'))
mods.randomthings.imbuing.removeByOutput(item('randomthings:imbue:3'))
mods.randomthings.imbuing.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.randomthings.imbuing.streamRecipes()
    ```
