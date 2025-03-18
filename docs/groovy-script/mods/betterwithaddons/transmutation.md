---
title: "Ancestral Infusion Transmutation"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input item into an output itemstack, consuming Spirits from the Infused Soul Sand placed below the Ancestral Infuser if placed within the appropriate multiblock. The multiblock is either Soul Sand or Infused Soul Sand placed below the Ancestral Infuser and exclusively air blocks adjacent to the Infuser and Soul Sand blocks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Transmutation.java"
---

# Ancestral Infusion Transmutation (Better With Addons)

## Description

Converts an input item into an output itemstack, consuming Spirits from the Infused Soul Sand placed below the Ancestral Infuser if placed within the appropriate multiblock. The multiblock is either Soul Sand or Infused Soul Sand placed below the Ancestral Infuser and exclusively air blocks adjacent to the Infuser and Soul Sand blocks.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.transmutation/* Used as page default */ // [!code focus]
mods.betterwithaddons.Transmutation
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.transmutation.add(TransmutationRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Ancestral Infusion Transmutation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.transmutation.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the amount of spirits consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    spirits(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.infuser.TransmutationRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.transmutation.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .spirits(0)
    .register()

mods.betterwithaddons.transmutation.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .spirits(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.transmutation.remove(TransmutationRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.transmutation.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.transmutation.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.transmutation.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.transmutation.removeByInput(item('minecraft:reeds'))
mods.betterwithaddons.transmutation.removeByOutput(item('betterwithaddons:crop_rice'))
mods.betterwithaddons.transmutation.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.transmutation.streamRecipes()
    ```
