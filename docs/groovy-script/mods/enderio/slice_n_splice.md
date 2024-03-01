---
title: "Slice N Splice"
description: "Convert up to 6 input itemstacks into an output itemstack, using energy and giving XP."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/SliceNSplice.java"
---

# Slice N Splice (Ender IO)

## Description

Convert up to 6 input itemstacks into an output itemstack, using energy and giving XP.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.enderio.slice_n_splice/*(1)!*/
mods.enderio.slicensplice
mods.enderio.sliceNSplice
mods.enderio.SliceNSplice
mods.enderio.slice_and_splice
mods.enderio.sliceandsplice
mods.enderio.sliceAndSplice
mods.enderio.SliceAndSplice
mods.eio.slice_n_splice
mods.eio.slicensplice
mods.eio.sliceNSplice
mods.eio.SliceNSplice
mods.eio.slice_and_splice
mods.eio.sliceandsplice
mods.eio.sliceAndSplice
mods.eio.SliceAndSplice
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `output`, `input`, `energy`:

    ```groovy:no-line-numbers
    mods.enderio.slice_n_splice.add(ItemStack, List<IIngredient>, int)
    ```


### Recipe Builder

Just like other recipe types, the Slice N Splice also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details ABSTRACT mods.enderio.slice_n_splice.recipeBuilder() {open}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

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

- `float`. Sets the experience gained by taking the output item out of the Slice N Splice. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    xp(float)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `crazypants.enderio.base.recipe.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.enderio.slice_n_splice.recipeBuilder()
    .input(item('minecraft:clay'), null, item('minecraft:clay'))
    .input(null, item('minecraft:clay'), null)
    .output(item('minecraft:gold_ingot'))
    .energy(1000)
    .xp(5)
    .register()
```

::::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.enderio.slice_n_splice.remove(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.enderio.slice_n_splice.removeByInput(List<ItemStack>)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.enderio.slice_n_splice.removeAll()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.enderio.slice_n_splice.remove(item('enderio:item_material:40'))
mods.enderio.slice_n_splice.removeByInput([item('enderio:item_alloy_ingot:7'), item('enderio:block_enderman_skull'), item('enderio:item_alloy_ingot:7'), item('minecraft:potion').withNbt(['Potion': 'minecraft:water']), item('enderio:item_basic_capacitor'), item('minecraft:potion').withNbt(['Potion': 'minecraft:water'])])
mods.enderio.slice_n_splice.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.enderio.slice_n_splice.streamRecipes()
    ```
