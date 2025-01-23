---
title: "Crafting Category"
titleTemplate: "Selection GUI Crafting | CleanroomMC"
description: "All recipes in the mod are divided into categories. Each category has its own set of recipes."
source_code_link: "https://github.com/Ender-Development/selection-gui-crafting-continued/blob/master/src/main/java/io/enderdev/selectionguicrafting/integration/groovyscript/SgcCategory.java"
---

# Crafting Category (Selection GUI Crafting)

## Description

All recipes in the mod are divided into categories. Each category has its own set of recipes.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.selectionguicrafting.sgc_category/* Used as page default */ // [!code focus]
mods.selectionguicrafting.sgccategory
mods.selectionguicrafting.sgcCategory
mods.selectionguicrafting.SgcCategory
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crafting Category also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.selectionguicrafting.sgc_category.newCategory() {open id="abstract"}
- `String`. The Category ID, must be unique. The resource must be loaded via external methods. Requires not null.

    ```groovy:no-line-numbers
    id(String)
    ```

- `ResourceLocation`. The path to the frame texture. The resource must be loaded via external methods. Can be overridden by the recipe.

    ```groovy:no-line-numbers
    frame(String)
    ```

- `ResourceLocation`. The path to the border texture. The resource must be loaded via external methods.

    ```groovy:no-line-numbers
    border(String)
    ```

- `ArrayList<GsSound>`. The sounds that will be played when the recipe is crafted. Can be overridden by the recipe.

    ```groovy:no-line-numbers
    sound(String, float, float)
    ```

- `ArrayList<GsParticle>`. The particles that will be spawned when the recipe is crafted. Can be overridden by the recipe.

    ```groovy:no-line-numbers
    particle(String, int, float)
    ```

- `GsEnum.QueueType`. If the recipes in this category can be queued. Can be overridden by the recipe. Allowed values are: 'true' or 'false'. DEFAULT is 'true'.

    ```groovy:no-line-numbers
    queueType(String)
    queueType(boolean)
    ```

- `GsEnum.SoundType`. How the sounds will be played. Can be overridden by the recipe. Allowed values are: 'RANDOM' or 'COMBINED'. DEFAULT is 'RANDOM'.

    ```groovy:no-line-numbers
    soundType(String)
    ```

- `ResourceLocation`. The path to the background texture. The resource must be loaded via external methods.

    ```groovy:no-line-numbers
    background(String)
    ```

- `ResourceLocation`. The path to the decoration texture. The resource must be loaded via external methods.

    ```groovy:no-line-numbers
    decoration(String)
    ```

- `GsEnum.OutputType`. How the output will be handed to the player. Can be overridden by the recipe. Allowed values are: 'DROP' or 'INVENTORY'. DEFAULT is 'DROP'.

    ```groovy:no-line-numbers
    outputType(String)
    ```

- `String`. The display name of the category that will be shown in the GUI. Requires not null.

    ```groovy:no-line-numbers
    displayName(String)
    ```

- `ResourceLocation`. The path to the progress bar texture. The resource must be loaded via external methods. Can be overridden by the recipe.

    ```groovy:no-line-numbers
    bar(String)
    ```

- `GsEnum.BackgroundType`. How the background will be rendered. The resource must be loaded via external methods. Allowed values are: 'SINGLE_STRETCH' , 'TILE' or 'SINGLE_CUT'. DEFAULT is 'TILE'. 'TILE' uses a 16x16 texture and repeats it. 'SINGLE_STRETCH' stretches the texture ratio to fill the screen. 'SINGLE_CUT' stretches the texture while keeping the aspect ratio and cuts of anything that goes outside the gui. The texture is centered on the x and y axis.

    ```groovy:no-line-numbers
    backgroundType(String)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.enderdev.selectionguicrafting.registry.GsCategory`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.selectionguicrafting.sgc_category.newCategory()
    .id('dummy_category')
    .displayName('Your first Category')
    .background('selectionguicrafting:textures/gui/background/wood.png')
    .register()

mods.selectionguicrafting.sgc_category.newCategory()
    .id('blub')
    .displayName('Pick your recipe')
    .background('selectionguicrafting:textures/gui/background/lake.png')
    .backgroundType('SINGLE_CUT')
    .register()

mods.selectionguicrafting.sgc_category.newCategory()
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

- sgc.groovyscript.category.remove_by_name:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_category.removeByName(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_category.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.selectionguicrafting.sgc_category.removeByName('dummy_category_1')
mods.selectionguicrafting.sgc_category.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.selectionguicrafting.sgc_category.streamCategories()
    ```
