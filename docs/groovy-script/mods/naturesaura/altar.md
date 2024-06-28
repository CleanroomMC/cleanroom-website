---
title: "Natural Altar Infusion"
titleTemplate: "Nature's Aura | CleanroomMC"
description: "Converts an input itemstack into an itemstack in a multiblock structure, with an optional catalyst block, costing aura and taking a configurable duration."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/naturesaura/Altar.java"
---

# Natural Altar Infusion (Nature's Aura)

## Description

Converts an input itemstack into an itemstack in a multiblock structure, with an optional catalyst block, costing aura and taking a configurable duration.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.naturesaura.altar/* Used as page default */ // [!code focus]
mods.naturesaura.Altar
mods.naturesaura.infusion
mods.naturesaura.Infusion
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Natural Altar Infusion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.naturesaura.altar.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- `int`. Sets how much aura the recipe drains from the environment. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    aura(int)
    ```

- `int`. Sets the time the recipe takes to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `IIngredient`. Sets the catalyst item. Requires not null. (Default `IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    catalyst(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.naturesaura.api.recipes.AltarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.naturesaura.altar.recipeBuilder()
    .name('demo')
    .input(item('minecraft:clay'))
    .catalyst(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .aura(100)
    .time(100)
    .register()

mods.naturesaura.altar.recipeBuilder()
    .name(resource('example:demo'))
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot') * 8)
    .aura(30)
    .time(5)
    .register()

mods.naturesaura.altar.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .catalyst(item('minecraft:clay'))
    .aura(50)
    .time(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given catalyst:

    ```groovy:no-line-numbers
    mods.naturesaura.altar.removeByCatalyst(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.naturesaura.altar.removeByInput(IIngredient)
    ```

- Removes the Natural Altar Infusion recipe with the given name:

    ```groovy:no-line-numbers
    mods.naturesaura.altar.removeByName(ResourceLocation)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.naturesaura.altar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.naturesaura.altar.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.naturesaura.altar.removeByCatalyst(item('naturesaura:crushing_catalyst'))
mods.naturesaura.altar.removeByInput(item('minecraft:rotten_flesh'))
mods.naturesaura.altar.removeByName(resource('naturesaura:infused_iron'))
mods.naturesaura.altar.removeByOutput(item('minecraft:soul_sand'))
mods.naturesaura.altar.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.naturesaura.altar.streamRecipes()
    ```
