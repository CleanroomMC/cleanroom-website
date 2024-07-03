---
title: "Enchanter"
titleTemplate: "Extra Utilities 2 | CleanroomMC"
description: "Converts two input itemstacks into an output itemstack, consuming energy and require nearby enchantment power providers."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Enchanter.java"
---

# Enchanter (Extra Utilities 2)

## Description

Converts two input itemstacks into an output itemstack, consuming energy and require nearby enchantment power providers.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.extrautils2.enchanter/* Used as page default */ // [!code focus]
mods.extrautils2.Enchanter
mods.extrautilities2.enchanter
mods.extrautilities2.Enchanter
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Enchanter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.extrautils2.enchanter.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks the recipe takes. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.rwtema.extrautils2.api.machine.IMachineRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrautils2.enchanter.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .energy(1000)
    .time(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.extrautils2.enchanter.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.extrautils2.enchanter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrautils2.enchanter.removeByInput(item('minecraft:bookshelf'))
mods.extrautils2.enchanter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.extrautils2.enchanter.streamRecipes()
    ```
