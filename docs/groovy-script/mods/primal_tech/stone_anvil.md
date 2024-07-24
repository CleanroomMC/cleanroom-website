---
title: "Stone Anvil"
titleTemplate: "Primal Tech | CleanroomMC"
description: "Converts an input item into an output itemstack after being interacted with by a player using a Stone Mallet."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/primaltech/StoneAnvil.java"
---

# Stone Anvil (Primal Tech)

## Description

Converts an input item into an output itemstack after being interacted with by a player using a Stone Mallet.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.primal_tech.stone_anvil/* Used as page default */ // [!code focus]
mods.primal_tech.stoneanvil
mods.primal_tech.stoneAnvil
mods.primal_tech.StoneAnvil
mods.primaltech.stone_anvil
mods.primaltech.stoneanvil
mods.primaltech.stoneAnvil
mods.primaltech.StoneAnvil
```


## Adding Recipes

- Adds recipes in the format `output`, `input`:

    ```groovy:no-line-numbers
    mods.primal_tech.stone_anvil.add(ItemStack, IIngredient)
    ```


### Recipe Builder

Just like other recipe types, the Stone Anvil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.primal_tech.stone_anvil.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `primal_tech.recipes.StoneAnvilRecipes`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.primal_tech.stone_anvil.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.primal_tech.stone_anvil.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.primal_tech.stone_anvil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.primal_tech.stone_anvil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.primal_tech.stone_anvil.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.primal_tech.stone_anvil.removeByInput(item('primal_tech:flint_block'))
mods.primal_tech.stone_anvil.removeByOutput(item('minecraft:flint'))
mods.primal_tech.stone_anvil.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.primal_tech.stone_anvil.streamRecipes()
    ```
