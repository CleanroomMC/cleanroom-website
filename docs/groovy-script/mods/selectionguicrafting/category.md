---
title: "Crafting Category"
titleTemplate: "Selection GUI Crafting | CleanroomMC"
description: "All recipes in the mod are divided into categories. Each category has its own set of recipes. Each category can have its own texture for the background, border, frame, decoration, and progress bar. The category can also have its own sounds and particles. It also allows to specify how the sounds are played, if recipes in the category can be added to the crafting queue and how the output items are handed to the player."
source_code_link: "https://github.com/Ender-Development/selection-gui-crafting-continued/blob/master/src/main/java/io/enderdev/selectionguicrafting/integration/groovyscript/Category.java"
---

# Crafting Category (Selection GUI Crafting)

## Description

All recipes in the mod are divided into categories. Each category has its own set of recipes. Each category can have its own texture for the background, border, frame, decoration, and progress bar. The category can also have its own sounds and particles. It also allows to specify how the sounds are played, if recipes in the category can be added to the crafting queue and how the output items are handed to the player.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.selectionguicrafting.category/* Used as page default */ // [!code focus]
mods.selectionguicrafting.Category
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crafting Category also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.selectionguicrafting.category.categoryBuilder() {open id="abstract"}
- `String`. The Category ID, must be unique. Requires not null.

    ```groovy:no-line-numbers
    id(String)
    ```

- `ResourceLocation`. The path to the frame texture. The resource must be loaded via external methods. Can be overridden by the recipe. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/frame). (Default `selectionguicrafting:textures/gui/frame/default.png`).

    ```groovy:no-line-numbers
    frame(String)
    frame(ResourceLocation)
    ```

- `ResourceLocation`. The path to the border texture. The resource must be loaded via external methods. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/background). (Default `selectionguicrafting:textures/gui/background/default.png`).

    ```groovy:no-line-numbers
    border(String)
    border(ResourceLocation)
    ```

- `ArrayList<GsSound>`. The sounds that will be played when the recipe is crafted. Can be overridden by the recipe.  The first `float` value is the volume, the second `float` value is the pitch of the sound.

    ```groovy:no-line-numbers
    sound(String, float, float)
    sound(SoundEvent, float, float)
    sound(ResourceLocation, float, float)
    ```

- `ArrayList<GsParticle>`. The particles that will be spawned when the recipe is crafted. Can be overridden by the recipe. The first `int` value is the amount of particles, the second `float` value is the speed of the particles.

    ```groovy:no-line-numbers
    particle(String, int, float)
    particle(EnumParticleTypes, int, float)
    ```

- `GsEnum.QueueType`. If the recipes in this category can be queued. Can be overridden by the recipe. Allowed values are: `true`, `false` or `'YES'`, `'NO'`. (Default `'YES'`).

    ```groovy:no-line-numbers
    queueType(String)
    queueType(boolean)
    queueType(GsEnum.QueueType)
    ```

- `GsEnum.SoundType`. How the sounds will be played. Can be overridden by the recipe. Allowed values are: `'RANDOM'` or `'COMBINED'`. (Default `'RANDOM'`).

    ```groovy:no-line-numbers
    soundType(String)
    soundType(GsEnum.SoundType)
    ```

- `ResourceLocation`. The path to the background texture. The resource must be loaded via external methods. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/background). (Default `selectionguicrafting:textures/gui/background/default.png`).

    ```groovy:no-line-numbers
    background(String)
    background(ResourceLocation)
    ```

- `ResourceLocation`. The path to the decoration texture. The resource must be loaded via external methods. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/decor). (Default `selectionguicrafting:textures/gui/decor/default.png`).

    ```groovy:no-line-numbers
    decoration(String)
    decoration(ResourceLocation)
    ```

- `GsEnum.OutputType`. How the output will be handed to the player. Can be overridden by the recipe. Allowed values are: `'DROP'` or `'INVENTORY'`. (Default `'DROP'`).

    ```groovy:no-line-numbers
    outputType(String)
    outputType(GsEnum.OutputType)
    ```

- `String`. The display name of the category that will be shown in the GUI. This can either be a string or a translation key if you want to make your Display Name translatable. Requires not null.

    ```groovy:no-line-numbers
    displayName(String)
    ```

- `ResourceLocation`. The path to the progress bar texture. The resource must be loaded via external methods. Can be overridden by the recipe. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/bar). (Default `selectionguicrafting:textures/gui/progress/default.png`).

    ```groovy:no-line-numbers
    bar(String)
    bar(ResourceLocation)
    ```

- `GsEnum.BackgroundType`. How the background will be rendered. The resource must be loaded via external methods. Allowed values are: `'SINGLE_STRETCH'`, `'TILE'`, or `'SINGLE_CUT'`. `TILE` uses a 16x16 texture and repeats it. `SINGLE_STRETCH` stretches the texture ratio to fill the screen. `SINGLE_CUT` stretches the texture while keeping the aspect ratio and cuts of anything that goes outside the gui. The texture is centered on the x and y axis. (Default `'TILE'`).

    ```groovy:no-line-numbers
    backgroundType(String)
    backgroundType(GsEnum.BackgroundType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.enderdev.selectionguicrafting.registry.GsCategory`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.selectionguicrafting.category.categoryBuilder()
    .id('dummy_category')
    .displayName('Your first Category')
    .background('selectionguicrafting:textures/gui/background/wood.png')
    .register()

mods.selectionguicrafting.category.categoryBuilder()
    .id('blub')
    .displayName('Pick your recipe')
    .background('selectionguicrafting:textures/gui/background/lake.png')
    .backgroundType('SINGLE_CUT')
    .register()

mods.selectionguicrafting.category.categoryBuilder()
    .id('dead')
    .displayName('This is another dummy category to test')
    .background('selectionguicrafting:textures/gui/background/deadlands.png')
    .decoration('selectionguicrafting:textures/gui/decor/gold.png')
    .border('selectionguicrafting:textures/gui/background/wood.png')
    .backgroundType('SINGLE_CUT')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Remove a category by its name:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.category.removeByName(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.category.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.selectionguicrafting.category.removeByName('dummy_category_1')
mods.selectionguicrafting.category.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.category.streamCategories()
    ```
