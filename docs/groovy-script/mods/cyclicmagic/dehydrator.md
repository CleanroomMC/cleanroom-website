---
title: "DeHydrator"
titleTemplate: "Cyclic | CleanroomMC"
description: "Converts an input itemstack into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Dehydrator.java"
---

# DeHydrator (Cyclic)

## Description

Converts an input itemstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.cyclicmagic.dehydrator/* Used as page default */ // [!code focus]
mods.cyclicmagic.Dehydrator
mods.cyclic.dehydrator
mods.cyclic.Dehydrator
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the DeHydrator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.cyclicmagic.dehydrator.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the amount of time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `10`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the amount of water produced by the DeHydrator on completing a recipe. Requires greater than or equal to 0. (Default `100`).

    ```groovy:no-line-numbers
    water(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.dehydrator.RecipeDeHydrate`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.dehydrator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.cyclicmagic.dehydrator.recipeBuilder()
    .input(ore('logWood'))
    .output(item('minecraft:clay') * 8)
    .time(100)
    .water(30)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.cyclicmagic.dehydrator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.cyclicmagic.dehydrator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.cyclicmagic.dehydrator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.dehydrator.removeByInput(item('minecraft:clay'))
mods.cyclicmagic.dehydrator.removeByOutput(item('minecraft:deadbush'))
mods.cyclicmagic.dehydrator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.cyclicmagic.dehydrator.streamRecipes()
    ```
