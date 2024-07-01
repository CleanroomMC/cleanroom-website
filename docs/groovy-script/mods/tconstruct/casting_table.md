---
title: "Casting Table"
titleTemplate: "Tinkers' Construct | CleanroomMC"
description: "Pours out fluid onto a table to solidify it into a solid, optionally with a cast itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/CastingTable.java"
---

# Casting Table (Tinkers' Construct)

## Description

Pours out fluid onto a table to solidify it into a solid, optionally with a cast itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.tconstruct.casting_table/* Used as page default */ // [!code focus]
mods.tconstruct.castingtable
mods.tconstruct.castingTable
mods.tconstruct.CastingTable
mods.tconstruct.table
mods.tconstruct.Table
mods.tinkersconstruct.casting_table
mods.tinkersconstruct.castingtable
mods.tinkersconstruct.castingTable
mods.tinkersconstruct.CastingTable
mods.tinkersconstruct.table
mods.tinkersconstruct.Table
mods.ticon.casting_table
mods.ticon.castingtable
mods.ticon.castingTable
mods.ticon.CastingTable
mods.ticon.table
mods.ticon.Table
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Casting Table also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.tconstruct.casting_table.recipeBuilder() {open id="abstract"}
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

- `IIngredient`. The item to use as a cast. null for no cast.

    ```groovy:no-line-numbers
    cast(IIngredient)
    ```

- `int`. The time in ticks it takes for the recipe to complete. Requires greater than or equal to 1. (Default `200`).

    ```groovy:no-line-numbers
    coolingTime(int)
    ```

- `boolean`. Whether the cast item is destroyed. (Default `false`).

    ```groovy:no-line-numbers
    consumesCast()
    consumesCast(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `slimeknights.tconstruct.library.smeltery.ICastingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.casting_table.recipeBuilder()
    .fluidInput(fluid('lava') * 50)
    .output(item('minecraft:diamond'))
    .coolingTime(750)
    .consumesCast(true)
    .cast(ore('gemEmerald'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that use the given item as a cast:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_table.removeByCast(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_table.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_table.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_table.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.casting_table.removeByCast(item('minecraft:bucket'))
mods.tconstruct.casting_table.removeByInput(fluid('iron'))
mods.tconstruct.casting_table.removeByOutput(item('minecraft:gold_ingot'))
mods.tconstruct.casting_table.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_table.streamRecipes()
    ```
