---
title: "Crystallization"
titleTemplate: "Abyssal Tweaker | CleanroomMC"
description: "Converts an input ItemStack into one or two ItemStacks, consuming Crystallizer fuel."
source_code_link: "https://github.com/TeamDimensional/AbyssalTweaker/blob/master/src/main/java/com/teamdimensional/abyssaltweaker/compat/groovyscript/RegistryCrystallization.java"
---

# Crystallization (Abyssal Tweaker)

## Description

Converts an input ItemStack into one or two ItemStacks, consuming Crystallizer fuel.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.abyssaltweaker.crystallization/* Used as page default */ // [!code focus]
mods.abyssaltweaker.Crystallization
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crystallization also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.abyssaltweaker.crystallization.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `float`. Sets the XP amount output that is given out when the recipe is executed. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    xp(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shinoow.abyssalcraft.api.recipe.Crystallization`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.crystallization.recipeBuilder()
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
    mods.abyssaltweaker.crystallization.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.crystallization.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.crystallization.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.crystallization.removeByInput(item('minecraft:blaze_powder'))
mods.abyssaltweaker.crystallization.removeByOutput(item('abyssalcraft:copper_crystal'))
mods.abyssaltweaker.crystallization.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.crystallization.streamRecipes()
    ```
