---
title: "Compacting Bin"
titleTemplate: "Pyrotech | CleanroomMC"
description: "When using a shovel it can convert items"
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/CompactingBin.java"
---

# Compacting Bin (Pyrotech)

## Description

When using a shovel it can convert items

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.compacting_bin/* Used as page default */ // [!code focus]
mods.pyrotech.compactingbin
mods.pyrotech.compactingBin
mods.pyrotech.CompactingBin
```


## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `hits`:

    ```groovy:no-line-numbers
    mods.pyrotech.compacting_bin.add(String, IIngredient, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.compacting_bin.add('iron_to_clay', ore('ingotIron') * 5, item('minecraft:clay_ball') * 20, 9)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Compacting Bin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.pyrotech.compacting_bin.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

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

- `int`. Sets how often the item needs to be hit. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    toolUses(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.CompactingBinRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.compacting_bin.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald'))
    .toolUses(5)
    .name('diamond_to_emerald_compacting_bin')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pyrotech.compacting_bin.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.compacting_bin.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.compacting_bin.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.compacting_bin.removeByInput(item('minecraft:snowball'))
mods.pyrotech.compacting_bin.removeByOutput(item('minecraft:bone_block'))
mods.pyrotech.compacting_bin.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.compacting_bin.streamRecipes()
    ```
