---
title: "Fluix Aggregation"
titleTemplate: "LazyAE2 | CleanroomMC"
description: "Converts up to 3 input itemstacks into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/lazyae2/Aggregator.java"
---

# Fluix Aggregation (LazyAE2)

## Description

Converts up to 3 input itemstacks into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.threng.aggregator/* Used as page default */ // [!code focus]
mods.threng.Aggregator
mods.lazyae2.aggregator
mods.lazyae2.Aggregator
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.threng.aggregator.add(AggRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Fluix Aggregation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.threng.aggregator.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.github.phantamanta44.threng.recipe.AggRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.threng.aggregator.recipeBuilder()
    .input(ore('blockGlass'), item('minecraft:diamond'))
    .output(item('minecraft:diamond') * 4)
    .register()

mods.threng.aggregator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.threng.aggregator.remove(AggRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.threng.aggregator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.threng.aggregator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.threng.aggregator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.threng.aggregator.removeByInput(item('appliedenergistics2:material:45'))
mods.threng.aggregator.removeByOutput(item('appliedenergistics2:material:7'))
mods.threng.aggregator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.threng.aggregator.streamRecipes()
    ```
