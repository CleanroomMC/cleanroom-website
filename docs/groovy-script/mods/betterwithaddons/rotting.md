---
title: "Rotting Food"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input item into an output itemstack after the given time has passed. Has the ability to customize the terminology used to indicate the age."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Rotting.java"
---

# Rotting Food (Better With Addons)

## Description

Converts an input item into an output itemstack after the given time has passed. Has the ability to customize the terminology used to indicate the age.

:::::::::: details Warning {open id="warning"}
When an item (regardless of metadata) is the input of any entry in the Rotting map, all items will gain a new NBT tag with the day they were obtained. This may be them annoying to interact with.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.rotting/* Used as page default */ // [!code focus]
mods.betterwithaddons.Rotting
```


## Adding Entries

- Adds the given entry to the Rotting map:

    ```groovy:no-line-numbers
    mods.betterwithaddons.rotting.add(RotHandler.RotInfo)
    ```


### Recipe Builder

Just like other recipe types, the Rotting Food also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.rotting.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `String`. Sets the base key for the lang keys used to localize the stage the rotting is at. Requires not null. (Default `food`).

    ```groovy:no-line-numbers
    key(String)
    ```

- `long`. Sets how long the item takes to rot. Requires greater than or equal to 1. (Default `InteractionBWA.MISC_ROT_TIME`).

    ```groovy:no-line-numbers
    time(long)
    ```

- `ItemStack`. Sets the item the rotted item turns into when the time has passed. Requires not empty. (Default `new ItemStack(ModItems.ROTTEN_FOOD)`).

    ```groovy:no-line-numbers
    rotted(ItemStack)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.handler.RotHandler$RotInfo`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.rotting.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .register()

mods.betterwithaddons.rotting.recipeBuilder()
    .input(item('placeholdername:snack'))
    .time(100)
    .key('groovy_example')
    .rotted(item('minecraft:clay') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Adds the given entry to the Rotting map:

    ```groovy:no-line-numbers
    mods.betterwithaddons.rotting.add(Map.Entry<Item, RotHandler.RotInfo>)
    ```

- Removes the given entry from the Rotting map:

    ```groovy:no-line-numbers
    mods.betterwithaddons.rotting.remove(Map.Entry<Item, RotHandler.RotInfo>)
    ```

- Removes the given entry from the Rotting map:

    ```groovy:no-line-numbers
    mods.betterwithaddons.rotting.remove(RotHandler.RotInfo)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.rotting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.rotting.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.rotting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.rotting.removeByInput(item('betterwithaddons:food_cooked_rice'))
mods.betterwithaddons.rotting.removeByOutput(item('minecraft:rotten_flesh'))
mods.betterwithaddons.rotting.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.rotting.streamRecipes()
    ```
