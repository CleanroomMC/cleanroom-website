---
title: "Explosion"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Converts an input item into an output item, with a chance to fail and destroy the item."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/Explosion.java"
---

# Explosion (PneumaticCraft: Repressurized)

## Description

Converts an input item into an output item, with a chance to fail and destroy the item.

:::::::::: details Tip {open id="tip"}
Consider using the inWorldCrafting Explosion compat instead!
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.explosion/* Used as page default */ // [!code focus]
mods.pneumaticcraft.Explosion
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.explosion.add(ExplosionCraftingRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Explosion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.explosion.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the failure rate of the recipe, where the item is simply destroyed instead of being converted. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    lossRate(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.ExplosionCraftingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.explosion.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .lossRate(40)
    .register()

mods.pneumaticcraft.explosion.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:obsidian'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.explosion.remove(ExplosionCraftingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.explosion.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.explosion.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.explosion.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.explosion.removeByInput(item('minecraft:iron_block'))
mods.pneumaticcraft.explosion.removeByOutput(item('pneumaticcraft:compressed_iron_block'))
mods.pneumaticcraft.explosion.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.explosion.streamRecipes()
    ```
