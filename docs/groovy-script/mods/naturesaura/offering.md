---
title: "Offering to the Gods"
titleTemplate: "Nature's Aura | CleanroomMC"
description: "Converts up to 16 times the input itemstack into output itemstacks by consuming a catalyst item from the ground in a multiblock structure."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/naturesaura/Offering.java"
---

# Offering to the Gods (Nature's Aura)

## Description

Converts up to 16 times the input itemstack into output itemstacks by consuming a catalyst item from the ground in a multiblock structure.

:::::::::: details Note {open id="note"}
The Offering Table can hold up to 16 items, and will try to run the recipe as many times as possible for a single catalyst item.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.naturesaura.offering/* Used as page default */ // [!code focus]
mods.naturesaura.Offering
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Offering to the Gods also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.naturesaura.offering.recipeBuilder() {open id="abstract"}
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

- `IIngredient`. Sets the catalyst item. Requires not null.

    ```groovy:no-line-numbers
    catalyst(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.naturesaura.api.recipes.OfferingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.naturesaura.offering.recipeBuilder()
    .name('demo')
    .input(item('minecraft:diamond'))
    .catalyst(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot') * 8)
    .register()

mods.naturesaura.offering.recipeBuilder()
    .name(resource('example:demo'))
    .input(item('minecraft:clay'))
    .catalyst(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 8)
    .register()

mods.naturesaura.offering.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 10)
    .catalyst(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given catalyst:

    ```groovy:no-line-numbers
    mods.naturesaura.offering.removeByCatalyst(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.naturesaura.offering.removeByInput(IIngredient)
    ```

- Removes the Offering to the Gods recipe with the given name:

    ```groovy:no-line-numbers
    mods.naturesaura.offering.removeByName(ResourceLocation)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.naturesaura.offering.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.naturesaura.offering.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.naturesaura.offering.removeByCatalyst(item('naturesaura:calling_spirit'))
mods.naturesaura.offering.removeByInput(item('minecraft:nether_star'))
mods.naturesaura.offering.removeByName(resource('naturesaura:token_euphoria'))
mods.naturesaura.offering.removeByOutput(item('naturesaura:sky_ingot'))
mods.naturesaura.offering.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.naturesaura.offering.streamRecipes()
    ```
