---
title: "Melter"
titleTemplate: "Cyclic | CleanroomMC"
description: "Converts up to 4 input itemstacks into an output itemstack, while being placed above lava."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Melter.java"
---

# Melter (Cyclic)

## Description

Converts up to 4 input itemstacks into an output itemstack, while being placed above lava.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.cyclicmagic.melter/* Used as page default */ // [!code focus]
mods.cyclicmagic.Melter
mods.cyclic.melter
mods.cyclic.Melter
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.cyclicmagic.melter.add(RecipeMelter)
    ```


### Recipe Builder

Just like other recipe types, the Melter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.cyclicmagic.melter.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.melter.RecipeMelter`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.melter.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .fluidOutput(fluid('water') * 175)
    .register()

mods.cyclicmagic.melter.recipeBuilder()
    .input(ore('logWood'), ore('sand'), ore('gravel'), item('minecraft:diamond'))
    .fluidOutput(fluid('lava') * 500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.cyclicmagic.melter.remove(RecipeMelter)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.cyclicmagic.melter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.cyclicmagic.melter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.cyclicmagic.melter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.melter.removeByInput(item('minecraft:snow'))
mods.cyclicmagic.melter.removeByOutput(fluid('amber'))
mods.cyclicmagic.melter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.cyclicmagic.melter.streamRecipes()
    ```
