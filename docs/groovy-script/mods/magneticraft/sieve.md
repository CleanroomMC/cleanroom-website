---
title: "Sieve"
titleTemplate: "Magneticraft | CleanroomMC"
description: "Converts an input itemstack into up to three output itemstacks, each with a separate chance in a Sieve Multiblock."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/Sieve.java"
---

# Sieve (Magneticraft)

## Description

Converts an input itemstack into up to three output itemstacks, each with a separate chance in a Sieve Multiblock.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.magneticraft.sieve/* Used as page default */ // [!code focus]
mods.magneticraft.Sieve
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.sieve.add(ISieveRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Sieve also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.magneticraft.sieve.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `FloatArrayList`. Sets the chance of the corresponding output itemstack to be created. Requires greater than 0, less than or equal to 100, and must have the same number of elements as there are outputs.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack, float)
    ```

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    duration(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.sifter.ISieveRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.sieve.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'), 0.5)
    .duration(50)
    .register()

mods.magneticraft.sieve.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'), 0.05)
    .output(item('minecraft:clay'))
    .duration(50)
    .register()

mods.magneticraft.sieve.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'), 0.5)
    .output(item('minecraft:clay'), 0.5)
    .output(item('minecraft:clay'), 0.5)
    .duration(1)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.sieve.remove(ISieveRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.magneticraft.sieve.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.magneticraft.sieve.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.magneticraft.sieve.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.sieve.removeByInput(item('minecraft:sand'))
mods.magneticraft.sieve.removeByOutput(item('minecraft:quartz'))
mods.magneticraft.sieve.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.magneticraft.sieve.streamRecipes()
    ```
