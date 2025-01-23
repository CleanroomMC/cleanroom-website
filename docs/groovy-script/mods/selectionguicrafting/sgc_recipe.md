---
title: "Crafting Recipe"
titleTemplate: "Selection GUI Crafting | CleanroomMC"
description: "Creates a recipe that is shown in the specified category. It can requires an input, output and tool. You may also need a catalyst to craft the recipe."
source_code_link: "https://github.com/Ender-Development/selection-gui-crafting-continued/blob/master/src/main/java/io/enderdev/selectionguicrafting/integration/groovyscript/SgcRecipe.java"
---

# Crafting Recipe (Selection GUI Crafting)

## Description

Creates a recipe that is shown in the specified category. It can requires an input, output and tool. You may also need a catalyst to craft the recipe.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.selectionguicrafting.sgc_recipe/* Used as page default */ // [!code focus]
mods.selectionguicrafting.sgcrecipe
mods.selectionguicrafting.sgcRecipe
mods.selectionguicrafting.SgcRecipe
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crafting Recipe also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.selectionguicrafting.sgc_recipe.newRecipe() {open id="abstract"}
- `Integer`. The amount of XP that will be granted to the player when the recipe is crafted. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    xp(int)
    ```

- `Integer`. The time in ticks it takes to craft the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `ArrayList<GsTool>`. The tool that will be used to craft the recipe. Tool refers to the mainhand item. This doesn't need to be an item with durability. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    tool(IIngredient)
    tool(IIngredient, float)
    tool(IIngredient, float, float)
    ```

- `ResourceLocation`. The path to the frame texture. Overrides the category frame.

    ```groovy:no-line-numbers
    frame(String)
    ```

- `ArrayList<Ingredient>`. The input items that are required to craft the recipe. Input refers to the offhand item. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    ```

- `ArrayList<GsOutput>`. The output items that will be given to the player. You can add multiple outputs each with a different chance. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    output(IIngredient)
    output(IIngredient, float)
    ```

- `ArrayList<GsSound>`. The sounds that will be played when the recipe is crafted. Overrides the category sounds.

    ```groovy:no-line-numbers
    sound(String, float, float)
    ```

- `GsCatalyst`. The catalyst that will be used to craft the recipe. The catalyst is an optional additional input that must be present in the player's inventory. You're able to set the chance of the catalyst being consumed. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    catalyst(IIngredient)
    catalyst(IIngredient, float)
    ```

- `String`. The category that the recipe belongs to. Requires not null.

    ```groovy:no-line-numbers
    category(String)
    ```

- `ArrayList<GsParticle>`. The particles that will be spawned when the recipe is crafted. Overrides the category particles.

    ```groovy:no-line-numbers
    particle(String, int, float)
    ```

- `GsEnum.QueueType`. If the recipe can be queued. Overrides the category queue able. Allowed values are: 'true' or 'false'. DEFAULT is 'true'.

    ```groovy:no-line-numbers
    queueable(String)
    queueType(boolean)
    ```

- `GsEnum.SoundType`. How the sounds will be played. Overrides the category soundType. Allowed values are: 'RANDOM' or 'COMBINED'. DEFAULT is 'RANDOM'.

    ```groovy:no-line-numbers
    soundType(String)
    ```

- `Integer`. The durability that will be consumed. Tool damage can be tweaked individually with the multiplier. This does nothing it the tool is a non damageable item. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    durability(int)
    ```

- `GsEnum.OutputType`. How the output will be handed to the player. Overrides the category outputType. Allowed values are: 'DROP' or 'INVENTORY'. DEFAULT is 'DROP'.

    ```groovy:no-line-numbers
    outputType(String)
    ```

- `ResourceLocation`. The path to the progress bar texture. Overrides the category progressBar.

    ```groovy:no-line-numbers
    progressBar(String)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.enderdev.selectionguicrafting.registry.GsRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.selectionguicrafting.sgc_recipe.newRecipe()
    .category('dummy_category')
    .input(item('minecraft:stone') * 3)
    .output(item('minecraft:cobblestone') * 2, 0.5f)
    .tool(item('minecraft:wooden_pickaxe'), 1.0f)
    .time(200)
    .xp(1)
    .sound('minecraft:block.anvil.land', 1.0f, 1.0f)
    .register()

mods.selectionguicrafting.sgc_recipe.newRecipe()
    .category('blub')
    .input(item('minecraft:diamond'))
    .output(item('minecraft:wheat_seeds') * 5, 0.5f)
    .tool(item('minecraft:grass') * 5, 1.0f)
    .register()

mods.selectionguicrafting.sgc_recipe.newRecipe()
    .category('dummy_category')
    .input(item('minecraft:stone') * 32)
    .output(item('minecraft:diamond') * 50, 0.5f)
    .output(item('minecraft:clay') * 2, 0.1f)
    .tool(item('minecraft:wooden_pickaxe'), 1.0f)
    .tool(item('minecraft:diamond_pickaxe'), 10.0f, 10.0f)
    .durability(10)
    .time(200)
    .xp(1)
    .sound('minecraft:block.anvil.land', 1.0f, 1.0f)
    .register()

mods.selectionguicrafting.sgc_recipe.newRecipe()
    .category('dead')
    .input(item('minecraft:wheat_seeds') * 3)
    .output(item('minecraft:sand') * 2)
    .tool(item('minecraft:wooden_pickaxe'), 1.0f, 1.1f)
    .tool(item('minecraft:golden_pickaxe'), 0.5f, 1.5f)
    .catalyst(item('minecraft:apple') * 2, 0.9f)
    .time(40)
    .durability(1)
    .queueType(false)
    .outputType('INVENTORY')
    .xp(1)
    .register()

mods.selectionguicrafting.sgc_recipe.newRecipe()
    .category('dead')
    .input(item('minecraft:stick') * 3)
    .output(item('minecraft:sand') * 2)
    .tool(item('minecraft:wooden_pickaxe'), 1.0f, 1.1f)
    .tool(item('minecraft:golden_pickaxe'), 0.5f, 1.5f)
    .catalyst(item('minecraft:apple') * 2, 0.9f)
    .frame('selectionguicrafting:textures/gui/frame/iron.png')
    .time(40)
    .durability(1)
    .queueType(false)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- sgc.groovyscript.recipe.remove_by_category:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_recipe.removeByCategory(String)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_recipe.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_recipe.removeByOutput(IIngredient)
    ```

- sgc.groovyscript.recipe.remove_by_tool:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_recipe.removeByTool(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_recipe.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.selectionguicrafting.sgc_recipe.removeByCategory('dummy_category')
mods.selectionguicrafting.sgc_recipe.removeByInput(item('minecraft:cobblestone'))
mods.selectionguicrafting.sgc_recipe.removeByOutput(item('minecraft:stone'))
mods.selectionguicrafting.sgc_recipe.removeByTool(item('minecraft:wool'))
mods.selectionguicrafting.sgc_recipe.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_recipe.streamRecipes()
    ```
