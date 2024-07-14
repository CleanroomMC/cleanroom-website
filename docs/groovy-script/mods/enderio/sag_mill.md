---
title: "Sag Mill"
titleTemplate: "Ender IO | CleanroomMC"
description: "Convert an input itemstack into up to 4 output itemstacks with chances, using energy. Output can be boosted by Grinding Balls based on set bonusType. Can be set to require at least SIMPLE, NORMAL, or ENHANCED tiers, or to IGNORE the tier. SIMPLE and IGNORE are effectively the same."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/SagMill.java"
---

# Sag Mill (Ender IO)

## Description

Convert an input itemstack into up to 4 output itemstacks with chances, using energy. Output can be boosted by Grinding Balls based on set bonusType. Can be set to require at least SIMPLE, NORMAL, or ENHANCED tiers, or to IGNORE the tier. SIMPLE and IGNORE are effectively the same.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.enderio.sag_mill/* Used as page default */ // [!code focus]
mods.enderio.sagmill
mods.enderio.sagMill
mods.enderio.SagMill
mods.enderio.sag
mods.enderio.Sag
mods.enderio.SAGMill
mods.eio.sag_mill
mods.eio.sagmill
mods.eio.sagMill
mods.eio.SagMill
mods.eio.sag
mods.eio.Sag
mods.eio.SAGMill
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Sag Mill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.enderio.sag_mill.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `RecipeLevel`. Sets the minimum required machine tier of the recipe. (Default `RecipeLevel.IGNORE`).

    ```groovy:no-line-numbers
    tierAny()
    tierNormal()
    tierSimple()
    tierEnhanced()
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- `FloatList`. Sets the chance the given output of each output slot.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack, float)
    ```

- `RecipeBonusType`. Sets the type of bonus a Grinding Ball can apply. (Default `RecipeBonusType.NONE`).

    ```groovy:no-line-numbers
    bonusTypeNone()
    bonusTypeChance()
    bonusTypeMultiply()
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `crazypants.enderio.base.recipe.Recipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.sag_mill.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:diamond') * 4)
    .output(item('minecraft:clay_ball') * 2, 0.7)
    .output(item('minecraft:gold_ingot'), 0.1)
    .output(item('minecraft:gold_ingot'), 0.1)
    .bonusTypeMultiply()
    .energy(1000)
    .tierEnhanced()
    .register()

mods.enderio.sag_mill.recipeBuilder()
    .input(item('minecraft:clay_ball'))
    .output(item('minecraft:diamond') * 4)
    .output(item('minecraft:gold_ingot'), 0.1)
    .bonusTypeChance()
    .tierNormal()
    .register()

mods.enderio.sag_mill.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'), 0.1)
    .bonusTypeNone()
    .tierSimple()
    .register()

mods.enderio.sag_mill.recipeBuilder()
    .input(item('minecraft:nether_star'))
    .output(item('minecraft:clay_ball') * 2, 0.7)
    .output(item('minecraft:gold_ingot'), 0.1)
    .tierAny()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.enderio.sag_mill.removeByInput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.enderio.sag_mill.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.sag_mill.removeByInput(item('minecraft:wheat'))
mods.enderio.sag_mill.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.enderio.sag_mill.streamRecipes()
    ```
