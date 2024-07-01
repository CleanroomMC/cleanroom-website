---
title: "Crushing Tub"
titleTemplate: "Rustic | CleanroomMC"
description: "Convert items into a fluidstacks and optionally itemstacks when any entity, typically a player, lands atop it."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/rustic/CrushingTub.java"
---

# Crushing Tub (Rustic)

## Description

Convert items into a fluidstacks and optionally itemstacks when any entity, typically a player, lands atop it.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.rustic.crushing_tub/* Used as page default */ // [!code focus]
mods.rustic.crushingtub
mods.rustic.crushingTub
mods.rustic.CrushingTub
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crushing Tub also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.rustic.crushing_tub.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `ItemStack`. Sets the itemstack output in addition to the fluid.

    ```groovy:no-line-numbers
    byproduct(ItemStack)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `rustic.common.crafting.ICrushingTubRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.rustic.crushing_tub.recipeBuilder()
    .input(item('minecraft:stone'))
    .fluidOutput(fluid('lava') * 50)
    .register()

mods.rustic.crushing_tub.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('lava') * 20)
    .byproduct(item('minecraft:gold_ingot') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.rustic.crushing_tub.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.rustic.crushing_tub.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.rustic.crushing_tub.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.rustic.crushing_tub.removeByInput(item('rustic:wildberries'))
mods.rustic.crushing_tub.removeByOutput(fluid('ironberryjuice'))
mods.rustic.crushing_tub.removeByOutput(item('minecraft:sugar'))
mods.rustic.crushing_tub.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.rustic.crushing_tub.streamRecipes()
    ```
