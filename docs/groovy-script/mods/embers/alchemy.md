---
title: "Alchemy"
titleTemplate: "Embers | CleanroomMC"
description: "Convert input items into an output item on a Exchange Tablet."
source_code_link: "https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/Alchemy.java"
---

# Alchemy (Embers)

## Description

Convert input items into an output item on a Exchange Tablet.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.embers.alchemy/* Used as page default */ // [!code focus]
mods.embers.Alchemy
```


## Editing Values

- Returns the name of the aspect of an item:

    ```groovy:no-line-numbers
    mods.embers.alchemy.getAspect(IIngredient)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.alchemy.getAspect(item('embers:aspectus_iron'))
```

::::::::::

## Adding Recipes

- Register the given Aspect with the given IIngredient:

    ```groovy:no-line-numbers
    mods.embers.alchemy.addAspect(String, IIngredient)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.alchemy.addAspect('copper',item('minecraft:gold_ingot'))
mods.embers.alchemy.addAspect('glass',item('minecraft:glass'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Alchemy also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.embers.alchemy.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- `AspectList.AspectRangeList`. Sets what aspects are part of the recipe and their minimum/maximum value. Requires not empty.

    ```groovy:no-line-numbers
    setAspect(String, int, int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.AlchemyRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.alchemy.recipeBuilder()
    .input(item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'))
    .output(item('minecraft:gravel'))
    .setAspect('dawnstone', 2, 17)
    .setAspect('glass', 1, 8)
    .register()

mods.embers.alchemy.recipeBuilder()
    .input(item('minecraft:gravel'),ore('dyeGreen'),ore('dyeGreen'),ore('dyeGreen'),item('minecraft:rotten_flesh'))
    .output(item('minecraft:grass'))
    .setAspect('iron', 2, 17)
    .setAspect('copper', 1, 8)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Remove the given Aspect:

    ```groovy:no-line-numbers
    mods.embers.alchemy.removeAspect(String)
    ```

- Removes all recipes with the center item matching the given IIngredient:

    ```groovy:no-line-numbers
    mods.embers.alchemy.removeByCenter(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.embers.alchemy.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.embers.alchemy.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.alchemy.removeAspect('copper')
mods.embers.alchemy.removeByCenter(item('minecraft:wool'))
mods.embers.alchemy.removeByOutput(item('embers:ember_pipe'))
mods.embers.alchemy.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.embers.alchemy.streamRecipes()
    ```
