---
title: "Drying Basin"
titleTemplate: "Rustic | CleanroomMC"
description: "Converts fluids into itemstacks over time."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/rustic/EvaporatingBasin.java"
---

# Drying Basin (Rustic)

## Description

Converts fluids into itemstacks over time.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.rustic.evaporating_basin/* Used as page default */ // [!code focus]
mods.rustic.evaporatingbasin
mods.rustic.evaporatingBasin
mods.rustic.EvaporatingBasin
mods.rustic.drying_basin
mods.rustic.dryingbasin
mods.rustic.dryingBasin
mods.rustic.DryingBasin
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Drying Basin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.rustic.evaporating_basin.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the time in ticks the recipe will take. (Default `fluidInput amount`).

    ```groovy:no-line-numbers
    time(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `rustic.common.crafting.IEvaporatingBasinRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.rustic.evaporating_basin.recipeBuilder()
    .fluidInput(fluid('water') * 200)
    .output(item('minecraft:clay'))
    .register()

mods.rustic.evaporating_basin.recipeBuilder()
    .fluidInput(fluid('lava') * 50)
    .output(item('minecraft:iron_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.rustic.evaporating_basin.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.rustic.evaporating_basin.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.rustic.evaporating_basin.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.rustic.evaporating_basin.removeByInput(fluid('ironberryjuice'))
mods.rustic.evaporating_basin.removeByOutput(item('rustic:dust_tiny_iron'))
mods.rustic.evaporating_basin.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.rustic.evaporating_basin.streamRecipes()
    ```
