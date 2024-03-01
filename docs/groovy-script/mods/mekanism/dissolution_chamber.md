---
title: "Dissolution Chamber"
description: "Converts an input itemstack into an output gasstack at the cost of 100mb of Sulfuric Acid."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/DissolutionChamber.java"
---

# Dissolution Chamber (Mekanism)

## Description

Converts an input itemstack into an output gasstack at the cost of 100mb of Sulfuric Acid.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.dissolution_chamber/*(1)!*/
mods.mekanism.dissolutionchamber
mods.mekanism.dissolutionChamber
mods.mekanism.DissolutionChamber
mods.mekanism.dissolver
mods.mekanism.Dissolver
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.add(IIngredient, GasStack)
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.mekanism.dissolution_chamber.add(item('minecraft:packed_ice'), gas('water'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Dissolution Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details ABSTRACT mods.mekanism.dissolution_chamber.recipeBuilder() {open}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.DissolutionRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.mekanism.dissolution_chamber.recipeBuilder()
    .input(item('minecraft:packed_ice'))
    .gasOutput(gas('water') * 2000)
    .register()
```

::::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.removeAll()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.mekanism.dissolution_chamber.removeByInput(item('mekanism:oreblock:0'))
mods.mekanism.dissolution_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.dissolution_chamber.streamRecipes()
    ```
