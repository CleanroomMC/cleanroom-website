---
title: "Wire Mill"
titleTemplate: "Tech Reborn | CleanroomMC"
description: "Converts an itemstack input into an itemstack output after a given process time, consuming energy per tick."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/WireMill.java"
---

# Wire Mill (Tech Reborn)

## Description

Converts an itemstack input into an itemstack output after a given process time, consuming energy per tick.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.techreborn.wire_mill/* Used as page default */ // [!code focus]
mods.techreborn.wiremill
mods.techreborn.wireMill
mods.techreborn.WireMill
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.wire_mill.add(R)
    ```


### Recipe Builder

Just like other recipe types, the Wire Mill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.techreborn.wire_mill.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the power consumed per tick. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    perTick(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `reborncore.api.praescriptum.recipes.Recipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.wire_mill.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .time(10)
    .perTick(100)
    .register()

mods.techreborn.wire_mill.recipeBuilder()
    .input(item('minecraft:diamond') * 3)
    .output(item('minecraft:clay') * 2)
    .time(5)
    .perTick(32)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.wire_mill.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.techreborn.wire_mill.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.techreborn.wire_mill.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.techreborn.wire_mill.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.wire_mill.removeByInput(item('minecraft:gold_ingot'))
mods.techreborn.wire_mill.removeByOutput(item('techreborn:cable'))
mods.techreborn.wire_mill.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.techreborn.wire_mill.streamRecipes()
    ```
