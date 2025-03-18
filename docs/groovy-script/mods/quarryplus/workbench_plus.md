---
title: "Workbench Plus"
titleTemplate: "Additional Enchanted Miner | CleanroomMC"
description: "Converts up to 27 itemstacks into an output itemstack at the cost of power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/additionalenchantedminer/WorkbenchPlus.java"
---

# Workbench Plus (Additional Enchanted Miner)

## Description

Converts up to 27 itemstacks into an output itemstack at the cost of power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.quarryplus.workbench_plus/* Used as page default */ // [!code focus]
mods.quarryplus.workbenchplus
mods.quarryplus.workbenchPlus
mods.quarryplus.WorkbenchPlus
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Workbench Plus also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.quarryplus.workbench_plus.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 27.

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

- `double`. Sets the amount of energy consumed to craft the recipe. Requires greater than 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    energy(double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.yogpc.qp.recipe.IngredientRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.quarryplus.workbench_plus.recipeBuilder()
    .output(item('minecraft:nether_star'))
    .input(item('minecraft:diamond'),item('minecraft:gold_ingot'))
    .energy(10000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.quarryplus.workbench_plus.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.quarryplus.workbench_plus.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.quarryplus.workbench_plus.removeByOutput(item('quarryplus:quarry'))
mods.quarryplus.workbench_plus.removeAll()
```

::::::::::
