---
title: "Furnace"
titleTemplate: "Minecraft | CleanroomMC"
description: "Converts an input item into an output itemstack after a set amount of time, with the ability to give experience and using fuel to run."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Furnace.java"
---

# Furnace (Minecraft)

## Description

Converts an input item into an output itemstack after a set amount of time, with the ability to give experience and using fuel to run.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
furnace/* Used as page default */ // [!code focus]
Furnace
```


## Adding Recipes

- Adds a recipe in the format `input`, `output`:

    ```groovy:no-line-numbers
    furnace.add(IIngredient, ItemStack)
    ```

- Adds a recipe in the format `input`, `output`, `experience`:

    ```groovy:no-line-numbers
    furnace.add(IIngredient, ItemStack, float)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
furnace.add(ore('ingotIron'), item('minecraft:diamond'))
furnace.add(item('minecraft:nether_star'), item('minecraft:clay') * 64, 13)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details furnace.recipeBuilder() {open id="abstract"}
- `float`. Sets the experience rewarded for smelting the given input. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    exp(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.vanilla.Furnace$Recipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
furnace.recipeBuilder()
    .input(ore('ingotGold'))
    .output(item('minecraft:nether_star'))
    .exp(0.5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    furnace.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    furnace.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    furnace.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
furnace.removeByInput(item('minecraft:clay'))
furnace.removeByOutput(item('minecraft:brick'))
furnace.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    furnace.streamRecipes()
    ```
