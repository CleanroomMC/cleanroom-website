---
title: "Pyre"
titleTemplate: "Roots 3 | CleanroomMC"
description: "Converts 5 input items into the ouput after a period of time when the Pyre is lit on fire."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Pyre.java"
---

# Pyre (Roots 3)

## Description

Converts 5 input items into the ouput after a period of time when the Pyre is lit on fire.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.pyre/* Used as page default */ // [!code focus]
mods.roots.Pyre
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Pyre also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.roots.pyre.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 5.

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

- `int`. Sets the XP given when the recipe finishes in levels. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    xp(int)
    levels(int)
    ```

- `int`. Sets the time in ticks for the recipe to process. (Default `200`).

    ```groovy:no-line-numbers
    time(int)
    burnTime(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.PyreCraftingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.pyre.recipeBuilder()
    .name('clay_from_fire')
    .input(item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'))
    .output(item('minecraft:clay'))
    .xp(5)
    .time(1)
    .register()

mods.roots.pyre.recipeBuilder()
    .input(item('minecraft:gold_ingot'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:stone'),item('minecraft:stone'))
    .output(item('minecraft:diamond') * 32)
    .levels(5)
    .burnTime(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the Pyre recipe with the given name:

    ```groovy:no-line-numbers
    mods.roots.pyre.removeByName(ResourceLocation)
    ```

- Removes the Pyre recipe with the given output itemstack:

    ```groovy:no-line-numbers
    mods.roots.pyre.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.pyre.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.pyre.removeByName(resource('roots:infernal_bulb'))
mods.roots.pyre.removeByOutput(item('minecraft:gravel'))
mods.roots.pyre.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.pyre.streamRecipes()
    ```
