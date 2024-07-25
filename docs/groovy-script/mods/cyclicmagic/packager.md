---
title: "Packager"
titleTemplate: "Cyclic | CleanroomMC"
description: "Converts up to 6 input itemstacks into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Packager.java"
---

# Packager (Cyclic)

## Description

Converts up to 6 input itemstacks into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.cyclicmagic.packager/* Used as page default */ // [!code focus]
mods.cyclicmagic.Packager
mods.cyclic.packager
mods.cyclic.Packager
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Packager also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.cyclicmagic.packager.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.packager.RecipePackager`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.packager.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.cyclicmagic.packager.recipeBuilder()
    .input(ore('logWood'), ore('sand'), ore('gravel'), item('minecraft:diamond'), item('minecraft:diamond_block'), item('minecraft:gold_block'))
    .output(item('minecraft:clay') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.cyclicmagic.packager.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.cyclicmagic.packager.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.cyclicmagic.packager.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.packager.removeByInput(item('minecraft:grass'))
mods.cyclicmagic.packager.removeByOutput(item('minecraft:melon_block'))
mods.cyclicmagic.packager.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.cyclicmagic.packager.streamRecipes()
    ```
