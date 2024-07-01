---
title: "Tanning Rack"
titleTemplate: "Pyrotech | CleanroomMC"
description: "Converts an item over time into a new one"
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/TanningRack.java"
---

# Tanning Rack (Pyrotech)

## Description

Converts an item over time into a new one

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.tanning_rack/* Used as page default */ // [!code focus]
mods.pyrotech.tanningrack
mods.pyrotech.tanningRack
mods.pyrotech.TanningRack
```


## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `dryTime`, `failureItem`:

    ```groovy:no-line-numbers
    mods.pyrotech.tanning_rack.add(String, IIngredient, ItemStack, int, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.tanning_rack.add('apple_to_dirt', item('minecraft:apple'), item('minecraft:dirt'), 1200, item('minecraft:clay_ball'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Tanning Rack also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.pyrotech.tanning_rack.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time required for the recipe to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    dryTime(int)
    ```

- `ItemStack`. Sets the output when the recipe failed.

    ```groovy:no-line-numbers
    failureItem(ItemStack)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.TanningRackRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.tanning_rack.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:gold_ingot'))
    .dryTime(260)
    .name('iron_to_gold_drying_rack')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pyrotech.tanning_rack.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.tanning_rack.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.tanning_rack.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.tanning_rack.removeByInput(item('minecraft:wheat'))
mods.pyrotech.tanning_rack.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.tanning_rack.streamRecipes()
    ```
