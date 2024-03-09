---
title: "Meteor"
titleTemplate: "Blood Magic: Alchemical Wizardry | CleanroomMC"
description: "Throwing an input catalyst atop an activated Mark of the Falling Tower Ritual will spawn a meteor made of the given components, size, explosion strength, and Life Essence cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bloodmagic/Meteor.java"
---

# Meteor (Blood Magic: Alchemical Wizardry)

## Description

Throwing an input catalyst atop an activated Mark of the Falling Tower Ritual will spawn a meteor made of the given components, size, explosion strength, and Life Essence cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.bm.meteor
mods.bm.Meteor
mods.bloodmagic.meteor/*(1)!*/
mods.bloodmagic.Meteor
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `catalyst`, `componentList`, `explosionStrength`, `radius`, `cost`:

    ```groovy:no-line-numbers
    mods.bloodmagic.meteor.add(ItemStack, List<MeteorComponent>, float, int, int)
    ```


### Recipe Builder

Just like other recipe types, the Meteor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.bloodmagic.meteor.recipeBuilder() {open id="abstract"}
- `int`. Sets the amount of Life Essence drained from the Blood Network to spawn the meteor. Requires greater than or equal to 0. (Default `1000000`).

    ```groovy:no-line-numbers
    cost(int)
    ```

- `int`. Sets the radius of the meteor. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    radius(int)
    ```

- `ItemStack`. Sets the catalyst that must be thrown atop the Master Ritual Stone to spawn the meteor.

    ```groovy:no-line-numbers
    catalyst(ItemStack)
    catalystStack(ItemStack)
    ```

- `List<MeteorComponent>`. Sets the blocks that make up the meteor, and what weight each block has to generate.

    ```groovy:no-line-numbers
    component(int, String)
    component(String, int)
    component(int, OreDictIngredient)
    component(OreDictIngredient, int)
    ```

- `float`. Sets the strength of the explosion caused when the meteor is spawned. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    explosionStrength(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `WayofTime.bloodmagic.meteor.Meteor`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bloodmagic.meteor.recipeBuilder()
    .catalyst(item('minecraft:gold_ingot'))
    .component(ore('oreIron'), 10)
    .component(ore('oreDiamond'), 10)
    .component(ore('stone'), 70)
    .radius(7)
    .explosionStrength(10)
    .cost(1000)
    .register()

mods.bloodmagic.meteor.recipeBuilder()
    .catalyst(item('minecraft:clay'))
    .component('blockClay', 10)
    .radius(20)
    .explosionStrength(20)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bloodmagic.meteor.remove(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bloodmagic.meteor.removeByCatalyst(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bloodmagic.meteor.removeByInput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bloodmagic.meteor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bloodmagic.meteor.remove(item('minecraft:diamond_block'))
mods.bloodmagic.meteor.removeByCatalyst(item('minecraft:iron_block'))
mods.bloodmagic.meteor.removeByInput(item('minecraft:gold_block'))
mods.bloodmagic.meteor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bloodmagic.meteor.streamRecipes()
    ```
