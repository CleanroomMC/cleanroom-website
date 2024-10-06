---
title: "Magician Table"
titleTemplate: "EssentialCraft 4 | CleanroomMC"
description: "A 5-slot processing machine using MRU. Can be upgraded with various plates to increase its speed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/MagicianTable.java"
---

# Magician Table (EssentialCraft 4)

## Description

A 5-slot processing machine using MRU. Can be upgraded with various plates to increase its speed.

:::::::::: details Warning {open id="warning"}
Certain OreDict entries might give unexpected results when used in the Magician Table as inputs. Known entries include: ingotGold, gemEnderPearl.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.ec4.magician_table
mods.ec4.magiciantable
mods.ec4.magicianTable
mods.ec4.MagicianTable
mods.essentialcraft.magician_table/* Used as page default */ // [!code focus]
mods.essentialcraft.magiciantable
mods.essentialcraft.magicianTable
mods.essentialcraft.MagicianTable
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.essentialcraft.magician_table.add(MagicianTableRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Magician Table also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.essentialcraft.magician_table.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- `int`. Sets the base MRU cost for this recipe. This cost also equals the time needed to execute the recipe in ticks. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    mru(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `essentialcraft.api.MagicianTableRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.magician_table.recipeBuilder()
    .input(item('minecraft:diamond'), ore('ingotGold'), ore('ingotGold'), ore('stickWood'), ore('stickWood'))
    .output(item('minecraft:iron_ingot'))
    .mru(500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.essentialcraft.magician_table.remove(MagicianTableRecipe)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.essentialcraft.magician_table.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.essentialcraft.magician_table.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.magician_table.removeByOutput(item('essentialcraft:genitem'))
mods.essentialcraft.magician_table.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.essentialcraft.magician_table.streamRecipes()
    ```
