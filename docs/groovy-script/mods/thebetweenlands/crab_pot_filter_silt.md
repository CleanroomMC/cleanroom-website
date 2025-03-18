---
title: "Crab Pot Filter Silt"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts an input item into an output itemstack when a Silt Crab is placed inside a Crab Pot Filter."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/CrabPotFilterSilt.java"
---

# Crab Pot Filter Silt (The Betweenlands)

## Description

Converts an input item into an output itemstack when a Silt Crab is placed inside a Crab Pot Filter.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.betweenlands.crab_pot_filter_silt
mods.betweenlands.crabpotfiltersilt
mods.betweenlands.crabPotFilterSilt
mods.betweenlands.CrabPotFilterSilt
mods.thebetweenlands.crab_pot_filter_silt/* Used as page default */ // [!code focus]
mods.thebetweenlands.crabpotfiltersilt
mods.thebetweenlands.crabPotFilterSilt
mods.thebetweenlands.CrabPotFilterSilt
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_silt.add(ICrabPotFilterRecipeSilt)
    ```


### Recipe Builder

Just like other recipe types, the Crab Pot Filter Silt also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.crab_pot_filter_silt.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.ICrabPotFilterRecipeSilt`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.crab_pot_filter_silt.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.crab_pot_filter_silt.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_silt.remove(ICrabPotFilterRecipeSilt)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_silt.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_silt.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_silt.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.crab_pot_filter_silt.removeByInput(item('thebetweenlands:mud'))
mods.thebetweenlands.crab_pot_filter_silt.removeByOutput(item('thebetweenlands:mud'))
mods.thebetweenlands.crab_pot_filter_silt.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_silt.streamRecipes()
    ```
