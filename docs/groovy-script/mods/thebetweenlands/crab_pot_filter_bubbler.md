---
title: "Crab Pot Filter Bubbler"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts an input item into an output itemstack when a Bubbler Crab is placed inside a Crab Pot Filter."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/CrabPotFilterBubbler.java"
---

# Crab Pot Filter Bubbler (The Betweenlands)

## Description

Converts an input item into an output itemstack when a Bubbler Crab is placed inside a Crab Pot Filter.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.betweenlands.crab_pot_filter_bubbler
mods.betweenlands.crabpotfilterbubbler
mods.betweenlands.crabPotFilterBubbler
mods.betweenlands.CrabPotFilterBubbler
mods.thebetweenlands.crab_pot_filter_bubbler/* Used as page default */ // [!code focus]
mods.thebetweenlands.crabpotfilterbubbler
mods.thebetweenlands.crabPotFilterBubbler
mods.thebetweenlands.CrabPotFilterBubbler
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_bubbler.add(ICrabPotFilterRecipeBubbler)
    ```


### Recipe Builder

Just like other recipe types, the Crab Pot Filter Bubbler also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.crab_pot_filter_bubbler.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.ICrabPotFilterRecipeBubbler`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.crab_pot_filter_bubbler.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.crab_pot_filter_bubbler.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_bubbler.remove(ICrabPotFilterRecipeBubbler)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_bubbler.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_bubbler.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_bubbler.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.crab_pot_filter_bubbler.removeByInput(item('thebetweenlands:silt'))
mods.thebetweenlands.crab_pot_filter_bubbler.removeByOutput(item('thebetweenlands:swamp_dirt'))
mods.thebetweenlands.crab_pot_filter_bubbler.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.crab_pot_filter_bubbler.streamRecipes()
    ```
