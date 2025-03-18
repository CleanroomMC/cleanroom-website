---
title: "Horse Press"
titleTemplate: "Horse Power | CleanroomMC"
description: "Converts an itemstack into another itemstack or a fluidstack by a horse running laps."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/horsepower/Press.java"
---

# Horse Press (Horse Power)

## Description

Converts an itemstack into another itemstack or a fluidstack by a horse running laps.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.horsepower.press/* Used as page default */ // [!code focus]
mods.horsepower.Press
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.horsepower.press.add(PressRecipe)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.horsepower.press.add(IIngredient, FluidStack)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.horsepower.press.add(IIngredient, ItemStack)
    ```


### Recipe Builder

Just like other recipe types, the Horse Press also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.horsepower.press.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `se.gory_moon.horsepower.recipes.PressRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.horsepower.press.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 5)
    .register()

mods.horsepower.press.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidOutput(fluid('lava') * 500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.horsepower.press.remove(PressRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.horsepower.press.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.horsepower.press.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.horsepower.press.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.horsepower.press.removeByInput(item('minecraft:wheat_seeds'))
mods.horsepower.press.removeByOutput(item('minecraft:dirt'))
mods.horsepower.press.removeByOutput(fluid('water'))
mods.horsepower.press.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.horsepower.press.streamRecipes()
    ```
