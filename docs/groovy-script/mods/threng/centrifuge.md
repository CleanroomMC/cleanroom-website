---
title: "Pulse Centrifuge"
titleTemplate: "LazyAE2 | CleanroomMC"
description: "Converts 1 input itemstack into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/lazyae2/Centrifuge.java"
---

# Pulse Centrifuge (LazyAE2)

## Description

Converts 1 input itemstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.threng.centrifuge/* Used as page default */ // [!code focus]
mods.threng.Centrifuge
mods.lazyae2.centrifuge
mods.lazyae2.Centrifuge
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.threng.centrifuge.add(PurifyRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Pulse Centrifuge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.threng.centrifuge.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.github.phantamanta44.threng.recipe.PurifyRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.threng.centrifuge.recipeBuilder()
    .input(ore('blockGlass'))
    .output(item('minecraft:diamond'))
    .register()

mods.threng.centrifuge.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.threng.centrifuge.remove(PurifyRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.threng.centrifuge.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.threng.centrifuge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.threng.centrifuge.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.threng.centrifuge.removeByInput(item('appliedenergistics2:material'))
mods.threng.centrifuge.removeByOutput(item('appliedenergistics2:material:4'))
mods.threng.centrifuge.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.threng.centrifuge.streamRecipes()
    ```
