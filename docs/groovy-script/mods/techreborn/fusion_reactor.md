---
title: "Fusion Reactor"
titleTemplate: "Tech Reborn | CleanroomMC"
description: "Converts two itemstack inputs into an itemstack output after a given process time, requiring a cost to start the recipe and either generating or consuming power while the recipe runs."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/FusionReactor.java"
---

# Fusion Reactor (Tech Reborn)

## Description

Converts two itemstack inputs into an itemstack output after a given process time, requiring a cost to start the recipe and either generating or consuming power while the recipe runs.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.techreborn.fusion_reactor/* Used as page default */ // [!code focus]
mods.techreborn.fusionreactor
mods.techreborn.fusionReactor
mods.techreborn.FusionReactor
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Fusion Reactor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.techreborn.fusion_reactor.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- `int`. Sets the minimum size required to start the recipe. Requires greater than or equal to 0 and less than or equal to 50. (Default `0`).

    ```groovy:no-line-numbers
    size(int)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the amount of power consumed to. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    start(int)
    ```

- `int`. Sets the FE consumed or generated per tick. (Default `0`).

    ```groovy:no-line-numbers
    perTick(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `techreborn.api.reactor.FusionReactorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.fusion_reactor.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:diamond') * 2)
    .output(item('minecraft:gold_ingot'))
    .time(10)
    .perTick(-25000)
    .start(200)
    .size(30)
    .register()

mods.techreborn.fusion_reactor.recipeBuilder()
    .input(item('minecraft:diamond') * 3, item('minecraft:diamond') * 2)
    .output(item('minecraft:clay') * 2)
    .time(5)
    .perTick(30000)
    .start(1000000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.techreborn.fusion_reactor.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.techreborn.fusion_reactor.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.techreborn.fusion_reactor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.fusion_reactor.removeByInput(item('techreborn:part:17'))
mods.techreborn.fusion_reactor.removeByOutput(item('techreborn:ore:1'))
mods.techreborn.fusion_reactor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.techreborn.fusion_reactor.streamRecipes()
    ```
