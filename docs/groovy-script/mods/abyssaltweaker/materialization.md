---
title: "Materialization"
titleTemplate: "Abyssal Tweaker | CleanroomMC"
description: "Turns Crystals from a Crystal Bag into an output item."
source_code_link: "https://github.com/TeamDimensional/AbyssalTweaker/blob/master/src/main/java/com/teamdimensional/abyssaltweaker/compat/groovyscript/RegistryMaterialization.java"
---

# Materialization (Abyssal Tweaker)

## Description

Turns Crystals from a Crystal Bag into an output item.

:::::::::: details Warning {open id="warning"}
The Materializer compatibility will only take the first item that satisfies each ingredient into account. This is fine if ItemIngredients are used, but will not work with OrIngredients and the like.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.abyssaltweaker.materialization/* Used as page default */ // [!code focus]
mods.abyssaltweaker.Materialization
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Materialization also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.abyssaltweaker.materialization.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shinoow.abyssalcraft.api.recipe.Materialization`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.materialization.recipeBuilder()
    .input(item('abyssalcraft:coralium_crystal'))
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.materialization.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.materialization.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.materialization.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.materialization.removeByInput(item('abyssalcraft:phosphorus_crystal'))
mods.abyssaltweaker.materialization.removeByOutput(item('minecraft:bone'))
mods.abyssaltweaker.materialization.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.materialization.streamRecipes()
    ```
