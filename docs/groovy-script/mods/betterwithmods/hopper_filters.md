---
title: "Hopper Filters"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Items placed in the middle slot of the Filtered Hopper to restrict what is capable of passing through."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/HopperFilters.java"
---

# Hopper Filters (Better With Mods)

## Description

Items placed in the middle slot of the Filtered Hopper to restrict what is capable of passing through.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.hopper_filters/* Used as page default */ // [!code focus]
mods.betterwithmods.hopperfilters
mods.betterwithmods.hopperFilters
mods.betterwithmods.HopperFilters
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Hopper Filters also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.betterwithmods.hopper_filters.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the valid items allowed through the filter. Requires greater than or equal to 0 and less than or equal to Integer.MAX_VALUE.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `IIngredient`. Sets the filter itemstack. Requires not null.

    ```groovy:no-line-numbers
    filter(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.api.tile.IHopperFilter`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.hopper_filters.recipeBuilder()
    .name('too_weak_to_stop')
    .filter(item('minecraft:string'))
    .register()

mods.betterwithmods.hopper_filters.recipeBuilder()
    .name('groovyscript:clay_only')
    .filter(item('minecraft:clay'))
    .input(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all filters with the given filter item:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper_filters.removeByFilter(IIngredient)
    ```

- Removes all filters with the given items allowed through the filter:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper_filters.removeByFiltered(IIngredient)
    ```

- Removes the filter with the given name:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper_filters.removeByName(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper_filters.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.hopper_filters.removeByFilter(item('minecraft:trapdoor'))
mods.betterwithmods.hopper_filters.removeByName('betterwithmods:ladder')
mods.betterwithmods.hopper_filters.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper_filters.streamRecipes()
    ```
