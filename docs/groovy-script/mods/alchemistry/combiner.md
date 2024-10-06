---
title: "Chemical Combiner"
titleTemplate: "Alchemistry | CleanroomMC"
description: "Converts up to 9 input itemstacks into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Combiner.java"
---

# Chemical Combiner (Alchemistry)

## Description

Converts up to 9 input itemstacks into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.alchemistry.combiner/* Used as page default */ // [!code focus]
mods.alchemistry.Combiner
mods.alchemistry.chemical_combiner
mods.alchemistry.chemicalcombiner
mods.alchemistry.chemicalCombiner
mods.alchemistry.ChemicalCombiner
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.alchemistry.combiner.add(CombinerRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Chemical Combiner also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.alchemistry.combiner.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

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

- `String`. Sets the required gamestage to add the recipe.

    ```groovy:no-line-numbers
    gamestage(String)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.CombinerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.combiner.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:gold_block') * 2)
    .register()

mods.alchemistry.combiner.recipeBuilder()
    .input(ItemStack.EMPTY, ItemStack.EMPTY, item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.alchemistry.combiner.remove(CombinerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.alchemistry.combiner.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.alchemistry.combiner.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.alchemistry.combiner.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.combiner.removeByInput(element('carbon'))
mods.alchemistry.combiner.removeByOutput(item('minecraft:glowstone'))
mods.alchemistry.combiner.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.alchemistry.combiner.streamRecipes()
    ```
