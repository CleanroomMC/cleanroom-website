---
title: "Altar of Birthing"
titleTemplate: "Nature's Aura | CleanroomMC"
description: "Converts multiple input itemstacks into a summoned entity, costing aura and taking time."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/naturesaura/Spawning.java"
---

# Altar of Birthing (Nature's Aura)

## Description

Converts multiple input itemstacks into a summoned entity, costing aura and taking time.

:::::::::: details Warning {open id="warning"}
While more than 4 items can function as the input of a Altar of Birthing recipe, only the first 4 are shown in JEI.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.naturesaura.spawning/* Used as page default */ // [!code focus]
mods.naturesaura.Spawning
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Altar of Birthing also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.naturesaura.spawning.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to Integer.MAX_VALUE.

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

- `int`. Sets how much aura the recipe drains from the environment. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    aura(int)
    ```

- `int`. Sets the time the recipe takes to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `ResourceLocation`. Sets the entity spawned. Requires not null.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    entity(ResourceLocation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.naturesaura.api.recipes.AnimalSpawnerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.naturesaura.spawning.recipeBuilder()
    .name('demo')
    .input(item('minecraft:clay'))
    .entity(entity('minecraft:bat'))
    .aura(100)
    .time(100)
    .register()

mods.naturesaura.spawning.recipeBuilder()
    .name(resource('example:demo'))
    .input(item('minecraft:mutton'))
    .entity(entity('minecraft:wolf'))
    .aura(30)
    .time(5)
    .register()

mods.naturesaura.spawning.recipeBuilder()
    .input(item('minecraft:bone'), item('minecraft:dye:15') * 4)
    .entity(resource('minecraft:skeleton'))
    .aura(10)
    .time(10)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all Altar of Birthing recipes that summon the given entity:

    ```groovy:no-line-numbers
    mods.naturesaura.spawning.removeByEntity(EntityEntry)
    ```

- Removes all Altar of Birthing recipes that summon the given entity:

    ```groovy:no-line-numbers
    mods.naturesaura.spawning.removeByEntity(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.naturesaura.spawning.removeByInput(IIngredient)
    ```

- Removes the Altar of Birthing recipe with the given name:

    ```groovy:no-line-numbers
    mods.naturesaura.spawning.removeByName(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.naturesaura.spawning.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.naturesaura.spawning.removeByEntity(entity('minecraft:polar_bear'))
mods.naturesaura.spawning.removeByEntity(resource('minecraft:cave_spider'))
mods.naturesaura.spawning.removeByInput(item('minecraft:bone'))
mods.naturesaura.spawning.removeByName(resource('naturesaura:cow'))
mods.naturesaura.spawning.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.naturesaura.spawning.streamRecipes()
    ```
