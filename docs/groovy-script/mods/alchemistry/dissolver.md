---
title: "Chemical Dissolver"
titleTemplate: "Alchemistry | CleanroomMC"
description: "Converts an input itemstack into any number of output itemstacks, divided in any manner between different chances, with the ability to run multiple rolls to produce additional outputs."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Dissolver.java"
---

# Chemical Dissolver (Alchemistry)

## Description

Converts an input itemstack into any number of output itemstacks, divided in any manner between different chances, with the ability to run multiple rolls to produce additional outputs.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.alchemistry.dissolver/* Used as page default */ // [!code focus]
mods.alchemistry.Dissolver
mods.alchemistry.chemical_dissolver
mods.alchemistry.chemicaldissolver
mods.alchemistry.chemicalDissolver
mods.alchemistry.ChemicalDissolver
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.alchemistry.dissolver.add(DissolverRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Chemical Dissolver also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.alchemistry.dissolver.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `int`. Sets the number of rolls to produce outputs. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    rolls(int)
    ```

- `boolean`. Sets if the recipe will also create a Chemical Combiner to invert the process. Only properly works on some recipes. (Default `false`).

    ```groovy:no-line-numbers
    reversible()
    reversible(boolean)
    ```

- `List<ProbabilityGroup>`. Sets the probability sets rolled to produce output. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    output(Collection)
    output(ItemStack[])
    output(ItemStack...)
    output(Collection<ItemStack>)
    probabilityOutput(ItemStack...)
    probabilityOutput(double, ItemStack...)
    probabilityOutput(Collection<ItemStack>)
    probabilityOutput(double, Collection<ItemStack>)
    ```

- `boolean`. Sets if there is guaranteed to always be one and exactly one set output, or if each set is rolled individually. (Default `false`).

    ```groovy:no-line-numbers
    relativeProbability()
    relativeProbability(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.DissolverRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.dissolver.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .probabilityOutput(item('minecraft:clay'))
    .reversible()
    .rolls(1)
    .register()

mods.alchemistry.dissolver.recipeBuilder()
    .input(item('minecraft:diamond'))
    .probabilityOutput(30, item('minecraft:clay'))
    .probabilityOutput(30, item('minecraft:clay'))
    .probabilityOutput(30, item('minecraft:clay'))
    .rolls(10)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.alchemistry.dissolver.remove(DissolverRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.alchemistry.dissolver.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.alchemistry.dissolver.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.dissolver.removeByInput(item('alchemistry:compound:1'))
mods.alchemistry.dissolver.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.alchemistry.dissolver.streamRecipes()
    ```
