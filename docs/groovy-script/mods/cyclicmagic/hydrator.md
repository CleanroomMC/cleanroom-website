---
title: "Hydrator"
titleTemplate: "Cyclic | CleanroomMC"
description: "Converts up to 4 input itemstacks and some amount of water into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Hydrator.java"
---

# Hydrator (Cyclic)

## Description

Converts up to 4 input itemstacks and some amount of water into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.cyclicmagic.hydrator/* Used as page default */ // [!code focus]
mods.cyclicmagic.Hydrator
mods.cyclic.hydrator
mods.cyclic.Hydrator
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Hydrator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.cyclicmagic.hydrator.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

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

- `int`. Sets the amount of water consumed by the Hydrator to complete a recipe. Requires greater than or equal to 0. (Default `25`).

    ```groovy:no-line-numbers
    water(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.hydrator.RecipeHydrate`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.hydrator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.cyclicmagic.hydrator.recipeBuilder()
    .input(ore('logWood'), ore('sand'), ore('gravel'), item('minecraft:diamond'))
    .output(item('minecraft:clay') * 8)
    .water(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.cyclicmagic.hydrator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.cyclicmagic.hydrator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.cyclicmagic.hydrator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.cyclicmagic.hydrator.removeByInput(item('minecraft:dirt'))
mods.cyclicmagic.hydrator.removeByOutput(item('minecraft:clay_ball'))
mods.cyclicmagic.hydrator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.cyclicmagic.hydrator.streamRecipes()
    ```
