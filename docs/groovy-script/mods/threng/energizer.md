---
title: "Crystal Energization"
titleTemplate: "LazyAE2 | CleanroomMC"
description: "Converts 1 input itemstack into an output itemstack, consuming a set amount of energy."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/lazyae2/Energizer.java"
---

# Crystal Energization (LazyAE2)

## Description

Converts 1 input itemstack into an output itemstack, consuming a set amount of energy.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.threng.energizer/* Used as page default */ // [!code focus]
mods.threng.Energizer
mods.lazyae2.energizer
mods.lazyae2.Energizer
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crystal Energization also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.threng.energizer.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the amount of energy consumed by the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.github.phantamanta44.threng.recipe.EnergizeRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.threng.energizer.recipeBuilder()
    .input(ore('blockGlass'))
    .energy(50)
    .output(item('minecraft:diamond'))
    .register()

mods.threng.energizer.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .energy(10000)
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.threng.energizer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.threng.energizer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.threng.energizer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.threng.energizer.removeByInput(item('appliedenergistics2:material'))
mods.threng.energizer.removeByOutput(item('appliedenergistics2:material:1'))
mods.threng.energizer.removeAll()
```

::::::::::
