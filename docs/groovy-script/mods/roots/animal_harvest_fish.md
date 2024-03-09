---
title: "Animal Harvest Fish"
description: "Animal Harvest Fish is another effect of the Animal Harvest ritual that applies if there are water source blocks within the ritual range."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/AnimalHarvestFish.java"
---

# Animal Harvest Fish (Roots 3)

## Description

Animal Harvest Fish is another effect of the Animal Harvest ritual that applies if there are water source blocks within the ritual range.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.animal_harvest_fish/*(1)!*/
mods.roots.animalharvestfish
mods.roots.animalHarvestFish
mods.roots.AnimalHarvestFish
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Animal Harvest Fish also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.roots.animal_harvest_fish.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fish(ItemStack)
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the weight of the recipe to generate. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    weight(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.AnimalHarvestFishRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.animal_harvest_fish.recipeBuilder()
    .name('clay_fish')
    .weight(50)
    .output(item('minecraft:clay'))
    .register()

mods.roots.animal_harvest_fish.recipeBuilder()
    .weight(13)
    .fish(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes any Animal Harvest Fish recipe with the given fish output:

    ```groovy:no-line-numbers
    mods.roots.animal_harvest_fish.removeByFish(ItemStack)
    ```

- Removes the Animal Harvest Fish recipe with the given name:

    ```groovy:no-line-numbers
    mods.roots.animal_harvest_fish.removeByName(ResourceLocation)
    ```

- Removes any Animal Harvest Fish recipe with the given output:

    ```groovy:no-line-numbers
    mods.roots.animal_harvest_fish.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.animal_harvest_fish.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.animal_harvest_fish.removeByFish(item('minecraft:fish:2'))
mods.roots.animal_harvest_fish.removeByName(resource('roots:cod'))
mods.roots.animal_harvest_fish.removeByOutput(item('minecraft:fish:1'))
mods.roots.animal_harvest_fish.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.animal_harvest_fish.streamRecipes()
    ```
