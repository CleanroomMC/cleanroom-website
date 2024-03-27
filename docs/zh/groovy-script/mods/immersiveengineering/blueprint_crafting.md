---
title: "Blueprint Crafting"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts any number of input itemstacks into an output itemstack, using a blueprint with the category nbt tag as a catalyst."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/BlueprintCrafting.java"
---

# Blueprint Crafting (Immersive Engineering)

## Description

Converts any number of input itemstacks into an output itemstack, using a blueprint with the category nbt tag as a catalyst.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {7}
mods.ie.blueprint_crafting
mods.ie.blueprintcrafting
mods.ie.blueprintCrafting
mods.ie.BlueprintCrafting
mods.ie.blueprint
mods.ie.Blueprint
mods.immersiveengineering.blueprint_crafting/* Used as page default */ // [!code focus]
mods.immersiveengineering.blueprintcrafting
mods.immersiveengineering.blueprintCrafting
mods.immersiveengineering.BlueprintCrafting
mods.immersiveengineering.blueprint
mods.immersiveengineering.Blueprint
```


## Adding Recipes

- Adds recipes in the format `output`, `input`, `fluidInput`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blueprint_crafting.add(String, ItemStack, List<IIngredient>)
    ```


### Recipe Builder

Just like other recipe types, the Blueprint Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.immersiveengineering.blueprint_crafting.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to Integer.MAX_VALUE.

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

- `String`. Sets the required blueprint. Default blueprint options are `components`, `molds`, `bullet`, `specialBullet`, and `electrode`.

    ```groovy:no-line-numbers
    category(String)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.BlueprintCraftingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.blueprint_crafting.recipeBuilder()
    .input(item('minecraft:diamond'), ore('ingotGold'))
    .output(item('minecraft:clay'))
    .category('groovy')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Default blueprint categories are `components`, `molds`, `bullet`, `specialBullet`, and `electrode`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blueprint_crafting.removeByCategory(String)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blueprint_crafting.removeByInput(String, ItemStack...)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blueprint_crafting.removeByOutput(String, ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blueprint_crafting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.blueprint_crafting.removeByCategory('electrode')
mods.immersiveengineering.blueprint_crafting.removeByInput('components', item('immersiveengineering:metal:38'), item('immersiveengineering:metal:38'), item('immersiveengineering:metal'))
mods.immersiveengineering.blueprint_crafting.removeByOutput('components', item('immersiveengineering:material:8'))
mods.immersiveengineering.blueprint_crafting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blueprint_crafting.streamRecipes()
    ```

- Default blueprint categories are `components`, `molds`, `bullet`, `specialBullet`, and `electrode`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.blueprint_crafting.streamRecipesByCategory(String)
    ```
