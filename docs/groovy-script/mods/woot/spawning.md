---
title: "Spawning"
description: "Controls item/fluid costs of a given mob or the default cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/Spawning.java"
---

# Spawning (Woot)

## Description

Controls item/fluid costs of a given mob or the default cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.woot.spawning/*(1)!*/
mods.woot.Spawning
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds a default fluid requirement to mobs without a specific spawning recipe:

    ```groovy:no-line-numbers
    mods.woot.spawning.addDefaultFluid(FluidStack)
    ```

- Adds a default item requirement to mobs without a specific spawning recipe:

    ```groovy:no-line-numbers
    mods.woot.spawning.addDefaultItem(ItemStack)
    ```


### Recipe Builder

Just like other recipe types, the Spawning also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.woot.spawning.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 6.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 6.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `WootMobName`. Sets the entity being targeted. Requires either `name` to be defined and a valid name or `defaultSpawnRecipe` to be true.

    ```groovy:no-line-numbers
    name(String)
    name(EntityEntry)
    name(WootMobName)
    ```

- `boolean`. Sets if the default recipes are being targeted instead of a specific entity name. Requires either `name` to be defined and a valid name or `defaultSpawnRecipe` to be true. (Default `false`).

    ```groovy:no-line-numbers
    defaultSpawnRecipe()
    defaultSpawnRecipe(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `ipsis.woot.farming.ISpawnRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.woot.spawning.recipeBuilder()
    .name('minecraft:zombie')
    .input(item('minecraft:clay'))
    .fluidInput(fluid('water'))
    .register()

mods.woot.spawning.recipeBuilder()
    .defaultSpawnRecipe(true)
    .input(item('minecraft:gold_ingot'), item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe for the given entity:

    ```groovy:no-line-numbers
    mods.woot.spawning.remove(WootMobName)
    ```

- Removes the recipe for the given entity:

    ```groovy:no-line-numbers
    mods.woot.spawning.removeByEntity(EntityEntry)
    ```

- Removes the recipe for the given entity:

    ```groovy:no-line-numbers
    mods.woot.spawning.removeByEntity(String)
    ```

- Removes the recipe for the given entity:

    ```groovy:no-line-numbers
    mods.woot.spawning.removeByEntity(String, String)
    ```

- Removes the recipe for the given entity:

    ```groovy:no-line-numbers
    mods.woot.spawning.removeByEntity(WootMobName)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.woot.spawning.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.woot.spawning.remove(new WootMobName('minecraft:ender_dragon'))
mods.woot.spawning.removeByEntity(entity('minecraft:ender_dragon'))
mods.woot.spawning.removeByEntity('minecraft:ender_dragon')
mods.woot.spawning.removeByEntity('minecraft:ender_dragon', '')
mods.woot.spawning.removeByEntity(new WootMobName('minecraft:ender_dragon'))
mods.woot.spawning.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.woot.spawning.streamRecipes()
    ```
