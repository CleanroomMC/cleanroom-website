---
title: "Work bench"
titleTemplate: "Additional Enchanted Miner | CleanroomMC"
description: "Workbench for crafting items using electricity."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/additionalenchantedminer/WorkBenchPlus.java"
---

# Work bench (Additional Enchanted Miner)

## Description

Workbench for crafting items using electricity.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.quarryplus.work_bench_plus/* Used as page default */ // [!code focus]
mods.quarryplus.workbenchplus
mods.quarryplus.workBenchPlus
mods.quarryplus.WorkBenchPlus
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Work bench also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.quarryplus.work_bench_plus.recipeBuilder() {open id="abstract"}
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

- `double`. groovyscript.wiki.quarryplus.work_bench_plus.energy.value. Requires greater than 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    energy(double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.yogpc.qp.recipe.IngredientRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.quarryplus.work_bench_plus.recipeBuilder()
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
    mods.quarryplus.work_bench_plus.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.quarryplus.work_bench_plus.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.quarryplus.work_bench_plus.removeByOutput(item('quarryplus:quarry'))
mods.quarryplus.work_bench_plus.removeAll()
```

::::::::::
