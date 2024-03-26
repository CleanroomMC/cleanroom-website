---
title: "Bark Carving"
titleTemplate: "Roots 3 | CleanroomMC"
description: "Bark Carving is a special set of alternate drops for blocks when broken with an item containing the tool type 'knife'. Amount dropped is up to 2 + fortune/looting level higher than the set amount."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/BarkCarving.java"
---

# Bark Carving (Roots 3)

## Description

Bark Carving is a special set of alternate drops for blocks when broken with an item containing the tool type 'knife'. Amount dropped is up to 2 + fortune/looting level higher than the set amount.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.bark_carving/* Used as page default */ // [!code focus]
mods.roots.barkcarving
mods.roots.barkCarving
mods.roots.BarkCarving
mods.roots.bark
mods.roots.Bark
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Bark Carving also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.roots.bark_carving.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IBlockState)
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    blockstate(IBlockState)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.BarkRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.bark_carving.recipeBuilder()
    .name('gold_bark')
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()

mods.roots.bark_carving.recipeBuilder()
    .blockstate(blockstate('minecraft:gold_block'))
    .output(item('minecraft:diamond'))
    .register()

mods.roots.bark_carving.recipeBuilder()
    .input(blockstate('minecraft:diamond_block'))
    .output(item('minecraft:clay') * 10)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the Bark Carving recipe with the given input itemstack:

    ```groovy:no-line-numbers
    mods.roots.bark_carving.removeByBlock(ItemStack)
    ```

- Removes the Bark Carving recipe with the given input itemstack:

    ```groovy:no-line-numbers
    mods.roots.bark_carving.removeByInput(ItemStack)
    ```

- Removes the Bark Carving recipe with the given name:

    ```groovy:no-line-numbers
    mods.roots.bark_carving.removeByName(ResourceLocation)
    ```

- Removes the Bark Carving recipe with the given output itemstack:

    ```groovy:no-line-numbers
    mods.roots.bark_carving.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.bark_carving.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.bark_carving.removeByBlock(item('minecraft:log:1'))
mods.roots.bark_carving.removeByInput(item('minecraft:log'))
mods.roots.bark_carving.removeByName(resource('roots:wildwood'))
mods.roots.bark_carving.removeByOutput(item('roots:bark_dark_oak'))
mods.roots.bark_carving.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.bark_carving.streamRecipes()
    ```
