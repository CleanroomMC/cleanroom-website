---
title: "Ritual of the Forest"
titleTemplate: "Nature's Aura | CleanroomMC"
description: "Converts multiple input items into an output itemstack after a duration when a sapling grows in the middle of a multiblock structure."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/naturesaura/Ritual.java"
---

# Ritual of the Forest (Nature's Aura)

## Description

Converts multiple input items into an output itemstack after a duration when a sapling grows in the middle of a multiblock structure.

:::::::::: details Warning {open id="warning"}
The sapling used must extended `BlockSapling` for the recipe to function properly.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.naturesaura.ritual/* Used as page default */ // [!code focus]
mods.naturesaura.Ritual
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Ritual of the Forest also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.naturesaura.ritual.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 8.

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

- `int`. Sets the time the recipe takes to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `IIngredient`. Sets the sapling used. Requires not null.

    ```groovy:no-line-numbers
    sapling(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.naturesaura.api.recipes.TreeRitualRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.naturesaura.ritual.recipeBuilder()
    .name('demo')
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .time(100)
    .sapling(item('minecraft:sapling:1'))
    .register()

mods.naturesaura.ritual.recipeBuilder()
    .name(resource('example:demo'))
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .time(15)
    .sapling(item('minecraft:sapling:1'))
    .register()

mods.naturesaura.ritual.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:clay'))
    .output(item('minecraft:diamond') * 16)
    .time(20)
    .sapling(item('minecraft:sapling:3'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.naturesaura.ritual.removeByInput(IIngredient)
    ```

- Removes the Ritual of the Forest recipe with the given name:

    ```groovy:no-line-numbers
    mods.naturesaura.ritual.removeByName(ResourceLocation)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.naturesaura.ritual.removeByOutput(IIngredient)
    ```

- Removes all Rituals of the Forest using the given sapling:

    ```groovy:no-line-numbers
    mods.naturesaura.ritual.removeBySapling(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.naturesaura.ritual.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.naturesaura.ritual.removeByInput(item('naturesaura:infused_stone'))
mods.naturesaura.ritual.removeByName(resource('naturesaura:eye_improved'))
mods.naturesaura.ritual.removeByOutput(item('naturesaura:eye'))
mods.naturesaura.ritual.removeBySapling(item('minecraft:sapling:3'))
mods.naturesaura.ritual.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.naturesaura.ritual.streamRecipes()
    ```
