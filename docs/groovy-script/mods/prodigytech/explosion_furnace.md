---
title: "Explosion Furnace"
titleTemplate: "Prodigy Tech | CleanroomMC"
description: "Uses an explosive, a dampener, and an optional reagent to convert items. The power value of all recipes, all explosives, and all dampeners should be close to avoid an efficiency loss."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/ExplosionFurnace.java"
---

# Explosion Furnace (Prodigy Tech)

## Description

Uses an explosive, a dampener, and an optional reagent to convert items. The power value of all recipes, all explosives, and all dampeners should be close to avoid an efficiency loss.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.prodigytech.explosion_furnace/* Used as page default */ // [!code focus]
mods.prodigytech.explosionfurnace
mods.prodigytech.explosionFurnace
mods.prodigytech.ExplosionFurnace
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace.add(ExplosionFurnaceManager.ExplosionFurnaceRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Explosion Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.prodigytech.explosion_furnace.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

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

- `int`. Sets the power used by this recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    power(int)
    ```

- `int`. Sets the number of input items that can be converted with 1 reagent. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    craftPerReagent(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.ExplosionFurnaceManager$ExplosionFurnaceRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.explosion_furnace.recipeBuilder()
    .input(ore('ingotGold'), item('minecraft:diamond'))
    .craftPerReagent(8)
    .power(160)
    .output(item('minecraft:emerald_block'))
    .register()

mods.prodigytech.explosion_furnace.recipeBuilder()
    .input(item('minecraft:stone'))
    .power(160)
    .output(item('minecraft:glowstone'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace.remove(ExplosionFurnaceManager.ExplosionFurnaceRecipe)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.explosion_furnace.removeByOutput(item('prodigytech:ferramic_ingot'))
mods.prodigytech.explosion_furnace.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.prodigytech.explosion_furnace.streamRecipes()
    ```
