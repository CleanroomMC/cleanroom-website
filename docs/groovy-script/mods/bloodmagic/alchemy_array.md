---
title: "Alchemy Array"
titleTemplate: "Blood Magic: Alchemical Wizardry | CleanroomMC"
description: "Converts two items into an output itemstack by using Arcane Ashes in-world. Has a configurable texture for the animation."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bloodmagic/AlchemyArray.java"
---

# Alchemy Array (Blood Magic: Alchemical Wizardry)

## Description

Converts two items into an output itemstack by using Arcane Ashes in-world. Has a configurable texture for the animation.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.bm.alchemy_array
mods.bm.alchemyarray
mods.bm.alchemyArray
mods.bm.AlchemyArray
mods.bloodmagic.alchemy_array/*(1)!*/
mods.bloodmagic.alchemyarray
mods.bloodmagic.alchemyArray
mods.bloodmagic.AlchemyArray
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `input`, `catalyst`, `output`, `circleTexture`:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.add(Ingredient, Ingredient, ItemStack)
    ```

- Adds recipes in the format `input`, `catalyst`, `output`, optional `circleTexture`:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.add(Ingredient, Ingredient, ItemStack, ResourceLocation)
    ```

- Adds recipes in the format `input`, `catalyst`, `output`, optional `circleTexture`:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.add(Ingredient, Ingredient, ItemStack, String)
    ```


### Recipe Builder

Just like other recipe types, the Alchemy Array also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.bloodmagic.alchemy_array.recipeBuilder() {open id="abstract"}
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

- `ResourceLocation`. Sets the animation texture.

    ```groovy:no-line-numbers
    texture(String)
    texture(ResourceLocation)
    ```

- `IIngredient`. Sets the catalyst.

    ```groovy:no-line-numbers
    catalyst(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `WayofTime.bloodmagic.api.impl.recipe.RecipeAlchemyArray`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bloodmagic.alchemy_array.recipeBuilder()
    .input(item('minecraft:diamond'))
    .catalyst(item('bloodmagic:slate:1'))
    .output(item('minecraft:gold_ingot'))
    .texture('bloodmagic:textures/models/AlchemyArrays/LightSigil.png')
    .register()

mods.bloodmagic.alchemy_array.recipeBuilder()
    .input(item('minecraft:clay'))
    .catalyst(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given catalyst:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.removeByCatalyst(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.removeByInput(IIngredient)
    ```

- This removes all recipes that match the given input and Catalyst:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.removeByInputAndCatalyst(IIngredient, IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bloodmagic.alchemy_array.removeByCatalyst(item('bloodmagic:slate:2'))
mods.bloodmagic.alchemy_array.removeByInput(item('bloodmagic:component:13'))
mods.bloodmagic.alchemy_array.removeByInputAndCatalyst(item('bloodmagic:component:7'), item('bloodmagic:slate:1'))
mods.bloodmagic.alchemy_array.removeByOutput(item('bloodmagic:sigil_void'))
mods.bloodmagic.alchemy_array.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bloodmagic.alchemy_array.streamRecipes()
    ```
