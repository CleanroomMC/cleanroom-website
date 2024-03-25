---
title: "Furnace"
titleTemplate: "Extra Utilities 2 | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, consuming energy."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Furnace.java"
---

# Furnace (Extra Utilities 2)

## Description

Converts an input itemstack into an output itemstack, consuming energy.

:::::::::: info Warning {id="warning"}
When removing items, keep in mind that the default registry mostly contains INPUT items allowing any metadata. This means you cannot do `item('minecraft:emerald_ore')` and instead must do `item('minecraft:emerald_ore:*')`
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.extrautils2.furnace/* Used as page default */ // [!code focus]
mods.extrautils2.Furnace
mods.extrautilities2.furnace
mods.extrautilities2.Furnace
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.extrautils2.furnace.recipeBuilder() {open id="abstract"}
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
mods.extrautils2.furnace.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
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
    mods.extrautils2.furnace.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.extrautils2.furnace.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrautils2.furnace.removeByInput(item('minecraft:emerald_ore:*'))
mods.extrautils2.furnace.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.extrautils2.furnace.streamRecipes()
    ```
