---
title: "Casting Basin"
titleTemplate: "Tinkers' Construct | CleanroomMC"
description: "Pours out fluid into a basin to solidify it into a solid, optionally with a cast itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/CastingBasin.java"
---

# Casting Basin (Tinkers' Construct)

## Description

Pours out fluid into a basin to solidify it into a solid, optionally with a cast itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.tconstruct.casting_basin/* Used as page default */ // [!code focus]
mods.tconstruct.castingbasin
mods.tconstruct.castingBasin
mods.tconstruct.CastingBasin
mods.tconstruct.basin
mods.tconstruct.Basin
mods.tinkersconstruct.casting_basin
mods.tinkersconstruct.castingbasin
mods.tinkersconstruct.castingBasin
mods.tinkersconstruct.CastingBasin
mods.tinkersconstruct.basin
mods.tinkersconstruct.Basin
mods.ticon.casting_basin
mods.ticon.castingbasin
mods.ticon.castingBasin
mods.ticon.CastingBasin
mods.ticon.basin
mods.ticon.Basin
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Casting Basin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.tconstruct.casting_basin.recipeBuilder() {open id="abstract"}
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
mods.tconstruct.casting_basin.recipeBuilder()
    .fluidInput(fluid('water'))
    .output(item('minecraft:dirt'))
    .cast(item('minecraft:cobblestone'))
    .coolingTime(40)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that use the given item as a cast:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_basin.removeByCast(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_basin.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_basin.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_basin.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.casting_basin.removeByCast(item('minecraft:planks:0'))
mods.tconstruct.casting_basin.removeByInput(fluid('clay'))
mods.tconstruct.casting_basin.removeByOutput(item('minecraft:iron_block'))
mods.tconstruct.casting_basin.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.tconstruct.casting_basin.streamRecipes()
    ```
