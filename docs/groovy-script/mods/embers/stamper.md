---
title: "Stamper"
titleTemplate: "Embers | CleanroomMC"
description: "Converts an input fluid into an output item with a provided stamp in a Stamper."
source_code_link: "https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/Stamper.java"
---

# Stamper (Embers)

## Description

Converts an input fluid into an output item with a provided stamp in a Stamper.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.embers.stamper/* Used as page default */ // [!code focus]
mods.embers.Stamper
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Stamper also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.embers.stamper.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `IIngredient`. Sets the stamp used for the recipe. Requires Stamp Required. (Default `IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    stamp(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.ItemStampingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.stamper.recipeBuilder()
    .stamp(item('minecraft:clay'))
    .fluidInput(fluid('water') * 100)
    .output(item('minecraft:brick'))
    .register()

mods.embers.stamper.recipeBuilder()
    .input(item('minecraft:gravel'))
    .stamp(item('minecraft:flint'))
    .output(item('minecraft:glass'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.embers.stamper.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.embers.stamper.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.embers.stamper.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.stamper.removeByInput(item('embers:shard_ember'))
mods.embers.stamper.removeByOutput(item('embers:plate_iron'))
mods.embers.stamper.removeByOutput(item('embers:dust_ash'))
mods.embers.stamper.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.embers.stamper.streamRecipes()
    ```
