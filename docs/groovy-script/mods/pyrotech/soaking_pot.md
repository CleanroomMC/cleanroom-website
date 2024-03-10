---
title: "Soaking Pot"
titleTemplate: "Pyrotech | CleanroomMC"
description: "Converts an item into a new one by soaking it in a liquid. Can require a campfire"
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/SoakingPot.java"
---

# Soaking Pot (Pyrotech)

## Description

Converts an item into a new one by soaking it in a liquid. Can require a campfire

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.soaking_pot/* Used as page default */ // [!code focus]
mods.pyrotech.soakingpot
mods.pyrotech.soakingPot
mods.pyrotech.SoakingPot
```


## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `time`:

    ```groovy:no-line-numbers
    mods.pyrotech.soaking_pot.add(String, IIngredient, FluidStack, ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.soaking_pot.add('dirt_to_apple', item('minecraft:dirt'), fluid('water'), item('minecraft:apple'), 1200)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Soaking Pot also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.pyrotech.soaking_pot.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

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

- `int`. Sets the time required for the recipe to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `boolean`. Sets if a campfire is required underneath. (Default `false`).

    ```groovy:no-line-numbers
    campfireRequired(boolean)
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.soaking_pot.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('amongium') * 125)
    .output(item('minecraft:emerald'))
    .time(400)
    .campfireRequired(true)
    .name('diamond_to_emerald_with_amongium_soaking_pot')
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pyrotech.soaking_pot.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.soaking_pot.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.soaking_pot.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.soaking_pot.removeByOutput(item('pyrotech:material', 54))
mods.pyrotech.soaking_pot.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.soaking_pot.streamRecipes()
    ```
