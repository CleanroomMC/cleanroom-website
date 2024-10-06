---
title: "ME Circuit Etching"
titleTemplate: "LazyAE2 | CleanroomMC"
description: "Converts up to 3 input itemstacks from specific slots into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/lazyae2/Etcher.java"
---

# ME Circuit Etching (LazyAE2)

## Description

Converts up to 3 input itemstacks from specific slots into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.threng.etcher/* Used as page default */ // [!code focus]
mods.threng.Etcher
mods.lazyae2.etcher
mods.lazyae2.Etcher
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.threng.etcher.add(EtchRecipe)
    ```


### Recipe Builder

Just like other recipe types, the ME Circuit Etching also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.threng.etcher.recipeBuilder() {open id="abstract"}
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

- `IIngredient`. Sets the top slot of the recipe. (Default `IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    top(IIngredient)
    ```

- `IIngredient`. Sets the bottom slot of the recipe. (Default `IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    bottom(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.github.phantamanta44.threng.recipe.EtchRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.threng.etcher.recipeBuilder()
    .input(ore('blockGlass'))
    .top(item('minecraft:diamond'))
    .bottom(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 5)
    .register()

mods.threng.etcher.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.threng.etcher.remove(EtchRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.threng.etcher.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.threng.etcher.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.threng.etcher.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.threng.etcher.removeByInput(item('minecraft:diamond'))
mods.threng.etcher.removeByOutput(item('appliedenergistics2:material:22'))
mods.threng.etcher.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.threng.etcher.streamRecipes()
    ```
