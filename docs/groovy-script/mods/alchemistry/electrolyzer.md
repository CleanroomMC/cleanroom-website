---
title: "Electrolyzer"
titleTemplate: "Alchemistry | CleanroomMC"
description: "Converts an input fluidstack into up to 4 output itemstacks, with the 3rd and 4th output itemstacks being able to have chances applied to them. May require a catalyst input itemstack, which may also have a chance to be consumed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Electrolyzer.java"
---

# Electrolyzer (Alchemistry)

## Description

Converts an input fluidstack into up to 4 output itemstacks, with the 3rd and 4th output itemstacks being able to have chances applied to them. May require a catalyst input itemstack, which may also have a chance to be consumed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.alchemistry.electrolyzer/* Used as page default */ // [!code focus]
mods.alchemistry.Electrolyzer
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Electrolyzer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.alchemistry.electrolyzer.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(IIngredient, int)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `IntArrayList`. Sets the output chance of the 3rd and 4th output itemstacks. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy:no-line-numbers
    chance(int)
    chance(int...)
    chance(Collection<Integer>)
    ```

- `int`. Sets the chance the catalyst input itemstack has to be consumed. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy:no-line-numbers
    consumptionChance(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.ElectrolyzerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.electrolyzer.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .output(item('minecraft:clay'))
    .register()

mods.alchemistry.electrolyzer.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .input(item('minecraft:gold_ingot'))
    .consumptionChance(100)
    .output(item('minecraft:gold_nugget') * 4)
    .output(item('minecraft:gold_nugget') * 4)
    .output(item('minecraft:gold_nugget') * 4)
    .output(item('minecraft:gold_nugget') * 4)
    .chance(50)
    .chance(50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.alchemistry.electrolyzer.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.alchemistry.electrolyzer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.alchemistry.electrolyzer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.alchemistry.electrolyzer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.alchemistry.electrolyzer.removeByInput(fluid('water'))
mods.alchemistry.electrolyzer.removeByInput(element('calcium_carbonate'))
mods.alchemistry.electrolyzer.removeByOutput(element('chlorine'))
mods.alchemistry.electrolyzer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.alchemistry.electrolyzer.streamRecipes()
    ```
