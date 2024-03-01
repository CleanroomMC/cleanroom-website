---
title: "Smelting Bonus"
description: "Additional item output when smelting a given item in the Infernal Furnace Multiblock."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/SmeltingBonus.java"
---

# Smelting Bonus (Thaumcraft)

## Description

Additional item output when smelting a given item in the Infernal Furnace Multiblock.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.thaumcraft.smelting_bonus/*(1)!*/
mods.thaumcraft.smeltingbonus
mods.thaumcraft.smeltingBonus
mods.thaumcraft.SmeltingBonus
mods.tc.smelting_bonus
mods.tc.smeltingbonus
mods.tc.smeltingBonus
mods.tc.SmeltingBonus
mods.thaum.smelting_bonus
mods.thaum.smeltingbonus
mods.thaum.smeltingBonus
mods.thaum.SmeltingBonus
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `in`, `out`, with chance having a default value of `0.33F`:

    ```groovy:no-line-numbers
    mods.thaumcraft.smelting_bonus.add(IIngredient, ItemStack)
    ```

- Adds recipes in the format `in`, `out`, `chance`:

    ```groovy:no-line-numbers
    mods.thaumcraft.smelting_bonus.add(IIngredient, ItemStack, float)
    ```


### Recipe Builder

Just like other recipe types, the Smelting Bonus also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details ABSTRACT mods.thaumcraft.smelting_bonus.recipeBuilder() {open}
- `IIngredient`. Sets the input of the smelting operation. Requires not null.

    ```groovy:no-line-numbers
    input(IIngredient)
    ```

- `ItemStack`. Sets the bonus item to be produced from the smelting operation. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `float`. Sets the chance of `out` being produced from the smelting operation per attached Arcane Bellows + 1. (Default `0.33F`).

    ```groovy:no-line-numbers
    chance(float)
    ```

- First validates the builder, outputting errors to the log file if the validation failed, then registers the builder.

    ```groovy:no-line-numbers
    register()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.thaumcraft.smelting_bonus.recipeBuilder()
    .input(item('minecraft:cobblestone'))
    .output(item('minecraft:stone_button'))
    .chance(0.2F)
    .register()

mods.thaumcraft.smelting_bonus.recipeBuilder()
    .input(ore('stone'))
    .output(item('minecraft:obsidian'))
    .register()
```

::::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thaumcraft.smelting_bonus.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thaumcraft.smelting_bonus.removeAll()
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.thaumcraft.smelting_bonus.removeByOutput(item('minecraft:gold_nugget'))
mods.thaumcraft.smelting_bonus.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thaumcraft.smelting_bonus.streamRecipes()
    ```
