---
title: "Transmutation"
titleTemplate: "Abyssal Tweaker | CleanroomMC"
description: "Turns an input ItemStack into an output ItemStack."
source_code_link: "https://github.com/TeamDimensional/AbyssalTweaker/blob/master/src/main/java/com/teamdimensional/abyssaltweaker/compat/groovyscript/RegistryTransmutation.java"
---

# Transmutation (Abyssal Tweaker)

## Description

Turns an input ItemStack into an output ItemStack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.abyssaltweaker.transmutation/* Used as page default */ // [!code focus]
mods.abyssaltweaker.Transmutation
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Transmutation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.abyssaltweaker.transmutation.recipeBuilder() {open id="abstract"}
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

- `float`. Sets the XP amount output that is given out when the recipe is executed. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    xp(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shinoow.abyssalcraft.api.recipe.Transmutation`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.transmutation.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .xp(0.5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.transmutation.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.transmutation.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.transmutation.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.transmutation.removeByInput(item('minecraft:diamond'))
mods.abyssaltweaker.transmutation.removeByOutput(item('minecraft:flint'))
mods.abyssaltweaker.transmutation.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.transmutation.streamRecipes()
    ```
