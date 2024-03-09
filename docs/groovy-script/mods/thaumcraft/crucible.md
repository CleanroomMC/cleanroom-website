---
title: "Crucible"
titleTemplate: "Thaumcraft | CleanroomMC"
description: "Combines an item with any number of Aspects to drop an output itemstack, potentially requiring a specific research to be completed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/Crucible.java"
---

# Crucible (Thaumcraft)

## Description

Combines an item with any number of Aspects to drop an output itemstack, potentially requiring a specific research to be completed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.thaumcraft.crucible/*(1)!*/
mods.thaumcraft.Crucible
mods.tc.crucible
mods.tc.Crucible
mods.thaum.crucible
mods.thaum.Crucible
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `researchKey`, `result`, `catalyst`, `tags`:

    ```groovy:no-line-numbers
    mods.thaumcraft.crucible.add(String, ItemStack, IIngredient, AspectList)
    ```


### Recipe Builder

Just like other recipe types, the Crucible also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.thaumcraft.crucible.recipeBuilder() {open id="abstract"}
- `AspectList`. Sets the Aspects and amounts required to convert. Requires greater than 0.

    ```groovy:no-line-numbers
    aspect(AspectStack)
    aspect(String, int)
    ```

- `IIngredient`. Sets the input item. Requires not null.

    ```groovy:no-line-numbers
    catalyst(IIngredient)
    ```

- `String`. Sets the research required to craft the recipe.

    ```groovy:no-line-numbers
    researchKey(String)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thaumcraft.api.crafting.CrucibleRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.crucible.recipeBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .catalyst(item('minecraft:rotten_flesh'))
    .output(item('minecraft:gold_ingot'))
    .aspect(aspect('metallum') * 10)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thaumcraft.crucible.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thaumcraft.crucible.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.crucible.removeByOutput(item('minecraft:gunpowder'))
mods.thaumcraft.crucible.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thaumcraft.crucible.streamRecipes()
    ```
