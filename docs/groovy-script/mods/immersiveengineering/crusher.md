---
title: "Crusher"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts an input itemstack into an output itemstack with optional additional chanced item outputs, consuming energy."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Crusher.java"
---

# Crusher (Immersive Engineering)

## Description

Converts an input itemstack into an output itemstack with optional additional chanced item outputs, consuming energy.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.ie.crusher
mods.ie.Crusher
mods.immersiveengineering.crusher/* Used as page default */ // [!code focus]
mods.immersiveengineering.Crusher
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersiveengineering.crusher.add(CrusherRecipe)
    ```

- Adds recipes in the format `output`, `input`, `energy`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.crusher.add(ItemStack, IIngredient, int)
    ```


### Recipe Builder

Just like other recipe types, the Crusher also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersiveengineering.crusher.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the amount of power consumed to complete the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- `List<ItemStack>`. Sets the additional items output by the recipe, if any. Requires exactly equal to the number of elements in `secondaryOutputChances`.

    ```groovy:no-line-numbers
    secondaryOutput(ItemStack)
    secondaryOutput(ItemStack, float)
    ```

- `FloatArrayList`. Sets the chance of the respective additional items output by the recipe. Requires exactly equal to the number of elements in `secondaryOutputItems`.

    ```groovy:no-line-numbers
    secondaryOutput(ItemStack)
    secondaryOutput(ItemStack, float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.CrusherRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.crusher.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .energy(100)
    .register()

mods.immersiveengineering.crusher.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:diamond'))
    .secondaryOutput(item('minecraft:gold_ingot'))
    .secondaryOutput(item('minecraft:gold_ingot'), 0.3)
    .energy(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersiveengineering.crusher.remove(CrusherRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.crusher.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.crusher.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.crusher.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.crusher.removeByInput(item('immersiveengineering:material:7'))
mods.immersiveengineering.crusher.removeByOutput(item('minecraft:sand'))
mods.immersiveengineering.crusher.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.crusher.streamRecipes()
    ```
