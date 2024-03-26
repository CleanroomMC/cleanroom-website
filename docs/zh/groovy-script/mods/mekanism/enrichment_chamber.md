---
title: "Enrichment Chamber"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input itemstack into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/EnrichmentChamber.java"
---

# Enrichment Chamber (Mekanism)

## Description

Converts an input itemstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.enrichment_chamber/* Used as page default */ // [!code focus]
mods.mekanism.enrichmentchamber
mods.mekanism.enrichmentChamber
mods.mekanism.EnrichmentChamber
mods.mekanism.enricher
mods.mekanism.Enricher
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.enrichment_chamber.add(IIngredient, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.enrichment_chamber.add(item('minecraft:clay_ball'), item('minecraft:nether_star'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Enrichment Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.mekanism.enrichment_chamber.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.EnrichmentRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.enrichment_chamber.recipeBuilder()
    .input(item('minecraft:clay_ball'))
    .output(item('minecraft:nether_star'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.enrichment_chamber.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.enrichment_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.enrichment_chamber.removeByInput(item('minecraft:diamond'))
mods.mekanism.enrichment_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.enrichment_chamber.streamRecipes()
    ```
