---
title: "Combiner"
titleTemplate: "Mekanism | CleanroomMC"
description: "Combines an input itemstack with an extra itemstack to create an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Combiner.java"
---

# Combiner (Mekanism)

## Description

Combines an input itemstack with an extra itemstack to create an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.combiner/* Used as page default */ // [!code focus]
mods.mekanism.Combiner
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `extra`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.combiner.add(IIngredient, ItemStack, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.combiner.add(ore('gemQuartz') * 8, item('minecraft:netherrack'), item('minecraft:quartz_ore'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Combiner also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.mekanism.combiner.recipeBuilder() {open id="abstract"}
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

- `ItemStack`. Sets the extra input item, defaults to Cobblestone. (Default `new ItemStack(Blocks.COBBLESTONE)`).

    ```groovy:no-line-numbers
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.CombinerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.combiner.recipeBuilder()
    .input(ore('gemQuartz') * 8)
    .extra(item('minecraft:netherrack'))
    .output(item('minecraft:quartz_ore'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.combiner.removeByInput(IIngredient, ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.combiner.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.combiner.removeByInput(item('minecraft:flint'), item('minecraft:cobblestone'))
mods.mekanism.combiner.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.combiner.streamRecipes()
    ```
