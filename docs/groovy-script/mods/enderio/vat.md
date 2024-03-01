---
title: "Vat"
description: "Converts an input fluidstack into an output itemstack at a rate based on up 2 itemstack inputs, and using power. Can be set to require at least NORMAL or ENHANCED tiers, or to IGNORE the tier. NORMAL and IGNORE are effectively the same."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/Vat.java"
---

# Vat (Ender IO)

## Description

Converts an input fluidstack into an output itemstack at a rate based on up 2 itemstack inputs, and using power. Can be set to require at least NORMAL or ENHANCED tiers, or to IGNORE the tier. NORMAL and IGNORE are effectively the same.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.enderio.vat/*(1)!*/
mods.enderio.Vat
mods.eio.vat
mods.eio.Vat
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Vat also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details ABSTRACT mods.enderio.vat.recipeBuilder() {open}
- `FluidStack`. Sets the input fluid. Requires not null.

    ```groovy:no-line-numbers
    input(FluidStack)
    ```

- `RecipeLevel`. Sets the minimum required machine tier of the recipe. (Default `RecipeLevel.IGNORE`).

    ```groovy:no-line-numbers
    tierAny()
    tierNormal()
    tierEnhanced()
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- `FluidStack`. Sets the output fluid. Requires not null.

    ```groovy:no-line-numbers
    output(FluidStack)
    ```

- `IngredientList<IIngredient>`. Sets the valid input items for the left side.

    ```groovy:no-line-numbers
    itemInputLeft(IIngredient, float)
    ```

- `IngredientList<IIngredient>`. Sets the valid input items for the right side.

    ```groovy:no-line-numbers
    itemInputRight(IIngredient, float)
    ```

- `FloatList`. Sets the multiplier applied to the respective input item on the left side.

    ```groovy:no-line-numbers
    itemInputLeft(IIngredient, float)
    ```

- `FloatList`. Sets the multiplier applied to the respective input item on the right side.

    ```groovy:no-line-numbers
    itemInputRight(IIngredient, float)
    ```

- `float`. Sets the base amount of fluid output. Requires greater than 0. (Default `1`).

    ```groovy:no-line-numbers
    baseMultiplier(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `crazypants.enderio.base.recipe.Recipe`).

    ```groovy:no-line-numbers
    register()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.enderio.vat.recipeBuilder()
    .input(fluid('lava'))
    .output(fluid('hootch'))
    .baseMultiplier(2)
    .itemInputLeft(item('minecraft:clay'), 2)
    .itemInputLeft(item('minecraft:clay_ball'), 0.5)
    .itemInputRight(item('minecraft:diamond'), 5)
    .itemInputRight(item('minecraft:diamond_block'), 50)
    .itemInputRight(item('minecraft:gold_block'), 10)
    .itemInputRight(item('minecraft:gold_ingot'), 1)
    .itemInputRight(item('minecraft:gold_nugget'), 0.1)
    .energy(1000)
    .tierEnhanced()
    .register()

mods.enderio.vat.recipeBuilder()
    .input(fluid('hootch') * 100)
    .output(fluid('water') * 50)
    .itemInputLeft(item('minecraft:clay_ball'), 1)
    .itemInputRight(item('minecraft:diamond'), 1)
    .energy(1000)
    .tierNormal()
    .register()

mods.enderio.vat.recipeBuilder()
    .input(fluid('water'))
    .output(fluid('hootch'))
    .itemInputLeft(item('minecraft:clay'), 2)
    .itemInputLeft(item('minecraft:clay_ball'), 0.5)
    .itemInputRight(item('minecraft:diamond'), 5)
    .itemInputRight(item('minecraft:gold_ingot'), 1)
    .energy(1000)
    .tierAny()
    .register()
```

::::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.enderio.vat.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.enderio.vat.removeAll()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.enderio.vat.remove(fluid('nutrient_distillation'))
mods.enderio.vat.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.enderio.vat.streamRecipes()
    ```
