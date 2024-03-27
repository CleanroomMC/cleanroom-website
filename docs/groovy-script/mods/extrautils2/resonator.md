---
title: "Resonator"
titleTemplate: "Extra Utilities 2 | CleanroomMC"
description: "Converts and input itemstack into an output itemstack, consuming Grid Power from the Owner's GP network. Can also require an active Rainbow Generator."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Resonator.java"
---

# Resonator (Extra Utilities 2)

## Description

Converts and input itemstack into an output itemstack, consuming Grid Power from the Owner's GP network. Can also require an active Rainbow Generator.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.extrautils2.resonator/* Used as page default */ // [!code focus]
mods.extrautils2.Resonator
mods.extrautilities2.resonator
mods.extrautilities2.Resonator
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Resonator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.extrautils2.resonator.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the total Grid Power required for the recipe in 1/100ths of a single GP (int 1000 = 10 GP). Requires greater than or equal to 100. (Default `0`).

    ```groovy:no-line-numbers
    cost(int)
    energy(int)
    ```

- `boolean`. Sets if the output itemstack should gain an NBT tag attaching the player who placed the Resonator to the itemstack. Notably used for Red Coal, to determine the bonus burn time from Grid Power. (Default `false`).

    ```groovy:no-line-numbers
    ownerTag()
    ownerTag(boolean)
    ```

- `Closure<Boolean>`. Sets the function used to determine if the recipe should run, with the Closure taking 3 paramenters, `TileEntity resonator`, `int frequency`, `ItemStack input` and returning a `boolean`.

    ```groovy:no-line-numbers
    rainbow()
    shouldProgress(Closure<Boolean>)
    ```

- `String`. Sets the text in JEI displaying an additional requirement for the recipe to run.

    ```groovy:no-line-numbers
    rainbow()
    requirementText(String)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.rwtema.extrautils2.api.resonator.IResonatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrautils2.resonator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .rainbow()
    .energy(1000)
    .register()

mods.extrautils2.resonator.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:clay') * 5)
    .energy(100)
    .register()

mods.extrautils2.resonator.recipeBuilder()
    .input(item('minecraft:redstone'))
    .output(item('extrautils2:ingredients:4'))
    .ownerTag()
    .energy(5000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.extrautils2.resonator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.extrautils2.resonator.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.extrautils2.resonator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrautils2.resonator.removeByInput(item('minecraft:quartz_block'))
mods.extrautils2.resonator.removeByOutput(item('extrautils2:ingredients:4'))
mods.extrautils2.resonator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.extrautils2.resonator.streamRecipes()
    ```
