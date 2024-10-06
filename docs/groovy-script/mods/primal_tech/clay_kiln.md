---
title: "Clay Kiln"
titleTemplate: "Primal Tech | CleanroomMC"
description: "Converts an input item into an output itemstack after a given amount of time. Requires the block below to be Minecraft Fire or a Primal Tech Flame Grilled Wopper. Takes some time to heat up before beginning to smelt items."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/primaltech/ClayKiln.java"
---

# Clay Kiln (Primal Tech)

## Description

Converts an input item into an output itemstack after a given amount of time. Requires the block below to be Minecraft Fire or a Primal Tech Flame Grilled Wopper. Takes some time to heat up before beginning to smelt items.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.primal_tech.clay_kiln/* Used as page default */ // [!code focus]
mods.primal_tech.claykiln
mods.primal_tech.clayKiln
mods.primal_tech.ClayKiln
mods.primaltech.clay_kiln
mods.primaltech.claykiln
mods.primaltech.clayKiln
mods.primaltech.ClayKiln
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.primal_tech.clay_kiln.add(ClayKilnRecipes)
    ```

- Adds recipes in the format `output`, `input`, `cookTime`:

    ```groovy:no-line-numbers
    mods.primal_tech.clay_kiln.add(ItemStack, IIngredient, int)
    ```


### Recipe Builder

Just like other recipe types, the Clay Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.primal_tech.clay_kiln.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks for the recipe to complete after the Clay Kiln is heated up enough. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    cookTime(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `primal_tech.recipes.ClayKilnRecipes`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.primal_tech.clay_kiln.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .cookTime(50)
    .register()

mods.primal_tech.clay_kiln.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 4)
    .cookTime(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.primal_tech.clay_kiln.remove(ClayKilnRecipes)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.primal_tech.clay_kiln.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.primal_tech.clay_kiln.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.primal_tech.clay_kiln.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.primal_tech.clay_kiln.removeByInput(item('minecraft:gravel'))
mods.primal_tech.clay_kiln.removeByOutput(item('primal_tech:charcoal_block'))
mods.primal_tech.clay_kiln.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.primal_tech.clay_kiln.streamRecipes()
    ```
