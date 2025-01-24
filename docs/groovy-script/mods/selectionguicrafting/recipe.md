---
title: "Crafting Recipe"
titleTemplate: "Selection GUI Crafting | CleanroomMC"
description: "Creates a recipe that is shown in the specified category. Each recipe requires at least an input (placed in the offhand), tool (placed in the mainhand), and output. There can also be an optional catalyst (placed in the inventory). The recipe can have its own frame, sounds, particles, and progress bar. It also allows to specify how the sounds are played, if the recipe can be added to the crafting queue, how the output items are handed to the player, and how much durability is consumed, if the tool is a damageable item. The crafting time as well as a possible XP reward can be set as well."
source_code_link: "https://github.com/Ender-Development/selection-gui-crafting-continued/blob/master/src/main/java/io/enderdev/selectionguicrafting/integration/groovyscript/Recipe.java"
---

# Crafting Recipe (Selection GUI Crafting)

## Description

Creates a recipe that is shown in the specified category. Each recipe requires at least an input (placed in the offhand), tool (placed in the mainhand), and output. There can also be an optional catalyst (placed in the inventory). The recipe can have its own frame, sounds, particles, and progress bar. It also allows to specify how the sounds are played, if the recipe can be added to the crafting queue, how the output items are handed to the player, and how much durability is consumed, if the tool is a damageable item. The crafting time as well as a possible XP reward can be set as well.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.selectionguicrafting.recipe/* Used as page default */ // [!code focus]
mods.selectionguicrafting.Recipe
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crafting Recipe also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.selectionguicrafting.recipe.recipeBuilder() {open id="abstract"}
- `Integer`. The amount of XP that will be granted to the player when the recipe is crafted. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    xp(int)
    ```

- `Integer`. The time in ticks it takes to craft the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `ArrayList<GsTool>`. The tool that will be used to craft the recipe. Tool refers to the mainhand item. This doesn't need to be an item with durability. The first `float` value is the multiplier for the durability consumption. The second `float` value is the multiplier for the crafting time. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    tool(IIngredient)
    tool(IIngredient, float)
    tool(IIngredient, float, float)
    ```

- `ResourceLocation`. The path to the frame texture. Overrides the category frame. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/frame). (Default `selectionguicrafting:textures/gui/frame/default.png`).

    ```groovy:no-line-numbers
    frame(String)
    frame(ResourceLocation)
    ```

- `ArrayList<Ingredient>`. The input items that are required to craft the recipe. Input refers to the offhand item. You can add multiple inputs each with a different amount. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    ```

- `ArrayList<GsOutput>`. The output items that will be given to the player. You can add multiple outputs each with a different chance. The `float` value is the chance of the item being dropped. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack, float)
    ```

- `ArrayList<GsSound>`. The sounds that will be played when the recipe is crafted. Overrides the category sounds. The first `float` value is the volume, the second `float` value is the pitch of the sound.

    ```groovy:no-line-numbers
    sound(String, float, float)
    sound(SoundEvent, float, float)
    sound(ResourceLocation, float, float)
    ```

- `GsCatalyst`. The catalyst that will be used to craft the recipe. The catalyst is an optional additional input that must be present in the player's inventory. The `float` value is the chance of the catalyst being consumed. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    catalyst(IIngredient)
    catalyst(IIngredient, float)
    ```

- `String`. The category that the recipe belongs to. If the category doesn't exist, it will throw an error. Requires not null.

    ```groovy:no-line-numbers
    category(String)
    ```

- `ArrayList<GsParticle>`. The particles that will be spawned when the recipe is crafted. Overrides the category particles. The first `int` value is the amount of particles, the second `float` value is the speed of the particles.

    ```groovy:no-line-numbers
    particle(String, int, float)
    particle(EnumParticleTypes, int, float)
    ```

- `GsEnum.QueueType`. If the recipe can be queued. Overrides the category queueable. Allowed values are either: `true`, `false` or `'YES'`, `'NO'`.

    ```groovy:no-line-numbers
    queueable(String)
    queueable(GsEnum.QueueType)
    queueType(boolean)
    ```

- `GsEnum.SoundType`. How the sounds will be played. Overrides the category soundType. Allowed values are: `'RANDOM'` or `'COMBINED'`.

    ```groovy:no-line-numbers
    soundType(String)
    soundType(GsEnum.SoundType)
    ```

- `Integer`. The durability that will be consumed. Tool damage can be tweaked individually with the multiplier. This does nothing if the tool is a non damageable item. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    durability(int)
    ```

- `GsEnum.OutputType`. How the output will be handed to the player. Overrides the category outputType. Allowed values are: `'DROP'` or `'INVENTORY'`.

    ```groovy:no-line-numbers
    outputType(String)
    outputType(GsEnum.OutputType)
    ```

- `ResourceLocation`. The path to the progress bar texture. Overrides the category progressBar. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/bar). (Default `selectionguicrafting:textures/gui/progress/default.png`).

    ```groovy:no-line-numbers
    progressBar(String)
    progressBar(ResourceLocation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.enderdev.selectionguicrafting.registry.GsRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.selectionguicrafting.recipe.recipeBuilder()
    .category('dummy_category')
    .input(item('minecraft:stone') * 3)
    .output(item('minecraft:cobblestone') * 2, 0.5f)
    .tool(item('minecraft:wooden_pickaxe'), 1.0f)
    .time(200)
    .xp(1)
    .sound('minecraft:block.anvil.land', 1.0f, 1.0f)
    .register()

mods.selectionguicrafting.recipe.recipeBuilder()
    .category('blub')
    .input(item('minecraft:diamond'))
    .output(item('minecraft:wheat_seeds') * 5, 0.5f)
    .tool(item('minecraft:grass') * 5, 1.0f)
    .register()

mods.selectionguicrafting.recipe.recipeBuilder()
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

mods.selectionguicrafting.recipe.recipeBuilder()
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

mods.selectionguicrafting.recipe.recipeBuilder()
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

- Remove all recipes in a category:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.recipe.removeByCategory(String)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.recipe.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.recipe.removeByOutput(IIngredient)
    ```

- Remove all recipes that use a specific tool:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.recipe.removeByTool(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.recipe.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.selectionguicrafting.recipe.removeByCategory('dummy_category')
mods.selectionguicrafting.recipe.removeByInput(item('minecraft:cobblestone'))
mods.selectionguicrafting.recipe.removeByOutput(item('minecraft:stone'))
mods.selectionguicrafting.recipe.removeByTool(item('minecraft:wool'))
mods.selectionguicrafting.recipe.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.recipe.streamRecipes()
    ```
