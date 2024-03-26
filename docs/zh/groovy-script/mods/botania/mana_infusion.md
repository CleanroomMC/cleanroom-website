---
title: "Mana Infusion"
titleTemplate: "Botania | CleanroomMC"
description: "Toss an item into a mana pool with an optional catalyst blockstate below the pool."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/ManaInfusion.java"
---

# Mana Infusion (Botania)

## Description

Toss an item into a mana pool with an optional catalyst blockstate below the pool.

:::::::::: details Warning {open id="warning"}
A mana cost greater than 10,000 cannot be converted in a Diluted Mana Pools and a mana cost greater than 1,000,000 cannot be converted in a normal Mana Pool. Both the Fabulous Mana Pool and The Everlasting Guilty Pool have the same capacity as a normal Mana Pool.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.mana_infusion/* Used as page default */ // [!code focus]
mods.botania.manainfusion
mods.botania.manaInfusion
mods.botania.ManaInfusion
```


## Adding Recipes

- Adds recipes in the format `output`, `input`, `mana`:

    ```groovy:no-line-numbers
    mods.botania.mana_infusion.add(ItemStack, IIngredient, int)
    ```


### Recipe Builder

Just like other recipe types, the Mana Infusion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.botania.mana_infusion.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the mana cost of converting the item. Requires greater than or equal to 1. (Default `100`).

    ```groovy:no-line-numbers
    mana(int)
    ```

- `IBlockState`. Sets the IBlockState required below the mana pool.

    ```groovy:no-line-numbers
    catalyst(IBlockState)
    useAlchemy()
    useConjuration()
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeManaInfusion`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.mana_infusion.recipeBuilder()
    .input(ore('ingotGold'))
    .output(item('botania:manaresource', 1))
    .mana(500)
    .catalyst(blockstate('minecraft:stone'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes with the given IBlockState catalyst:

    ```groovy:no-line-numbers
    mods.botania.mana_infusion.removeByCatalyst(IBlockState)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.mana_infusion.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botania.mana_infusion.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania.mana_infusion.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.mana_infusion.removeByCatalyst(blockstate('botania:alchemycatalyst'))
mods.botania.mana_infusion.removeByInput(item('minecraft:ender_pearl'))
mods.botania.mana_infusion.removeByOutput(item('botania:managlass'))
mods.botania.mana_infusion.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania.mana_infusion.streamRecipes()
    ```
