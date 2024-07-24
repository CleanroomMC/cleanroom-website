---
title: "Solidifier"
titleTemplate: "Cyclic | CleanroomMC"
description: "Converts up to 4 input itemstacks and an input fluidstack into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Solidifier.java"
---

# Solidifier (Cyclic)

## Description

Converts up to 4 input itemstacks and an input fluidstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.cyclicmagic.solidifier/* Used as page default */ // [!code focus]
mods.cyclicmagic.Solidifier
mods.cyclic.solidifier
mods.cyclic.Solidifier
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Solidifier also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.cyclicmagic.solidifier.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.solidifier.RecipeSolidifier`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.solidifier.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('water') * 175)
    .output(item('minecraft:gold_ingot') * 3)
    .register()

mods.cyclicmagic.solidifier.recipeBuilder()
    .input(ore('logWood'), ore('sand'), ore('gravel'), item('minecraft:diamond'))
    .fluidInput(fluid('lava') * 500)
    .output(item('minecraft:clay') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.cyclicmagic.solidifier.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.cyclicmagic.solidifier.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.cyclicmagic.solidifier.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.solidifier.removeByInput(item('minecraft:bucket'))
mods.cyclicmagic.solidifier.removeByInput(fluid('water'))
mods.cyclicmagic.solidifier.removeByOutput(item('cyclicmagic:crystallized_obsidian'))
mods.cyclicmagic.solidifier.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.cyclicmagic.solidifier.streamRecipes()
    ```
