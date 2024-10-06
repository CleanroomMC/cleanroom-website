---
title: "Refractory Kiln"
titleTemplate: "Pyrotech | CleanroomMC"
description: "Converts an item into a new one by burning it. Has a chance to fail."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/BrickKiln.java"
---

# Refractory Kiln (Pyrotech)

## Description

Converts an item into a new one by burning it. Has a chance to fail.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.brick_kiln/* Used as page default */ // [!code focus]
mods.pyrotech.brickkiln
mods.pyrotech.brickKiln
mods.pyrotech.BrickKiln
```


## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `burnTime`, `failureChance`, `failureOutput`:

    ```groovy:no-line-numbers
    mods.pyrotech.brick_kiln.add(String, IIngredient, ItemStack, int, float, ItemStack...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.brick_kiln.add('clay_to_iron_brick', item('minecraft:clay_ball') * 5, item('minecraft:iron_ingot'), 1200, 0.5f, item('minecraft:dirt'), item('minecraft:cobblestone'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Refractory Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pyrotech.brick_kiln.recipeBuilder() {open id="abstract"}
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
    burnTime(int)
    ```

- `float`. Sets the chance to fail the recipe. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    failureChance(float)
    ```

- `ItemStackList`. Sets the output when the recipe failed.

    ```groovy:no-line-numbers
    failureOutput(ItemStack)
    failureOutput(ItemStack...)
    failureOutput(Iterable<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.machine.recipe.BrickKilnRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.brick_kiln.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:gold_ingot'))
    .burnTime(400)
    .failureChance(1f)
    .failureOutput(item('minecraft:wheat'), item('minecraft:carrot'), item('minecraft:sponge'))
    .name('iron_to_gold_kiln_with_failure_items_brick')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pyrotech.brick_kiln.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.brick_kiln.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.brick_kiln.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.brick_kiln.removeByOutput(item('pyrotech:bucket_clay'))
mods.pyrotech.brick_kiln.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.brick_kiln.streamRecipes()
    ```
