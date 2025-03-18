---
title: "Animator"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts an input item, Life amount from Life Crystals, and Fuel from Sulfur into an output itemstack, summoning an entity, a random item from a loottable, or summoning an entity and outputting an itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/Animator.java"
---

# Animator (The Betweenlands)

## Description

Converts an input item, Life amount from Life Crystals, and Fuel from Sulfur into an output itemstack, summoning an entity, a random item from a loottable, or summoning an entity and outputting an itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.betweenlands.animator
mods.betweenlands.Animator
mods.thebetweenlands.animator/* Used as page default */ // [!code focus]
mods.thebetweenlands.Animator
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.add(IAnimatorRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Animator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.animator.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- `int`. Sets the fuel consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    fuel(int)
    ```

- `int`. Sets the life consumed from the life crystal. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    life(int)
    ```

- `Class<? extends Entity>`. Sets the entity being spawned.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    entity(Class<? extends Entity>)
    ```

- `ResourceLocation`. Sets the entity to render, typically the same as the entity to be spawned.

    ```groovy:no-line-numbers
    render(ResourceLocation)
    ```

- `ResourceLocation`. Sets the LootTable used to generate outputs.

    ```groovy:no-line-numbers
    lootTable(ResourceLocation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.IAnimatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.animator.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .life(1)
    .fuel(1)
    .register()

mods.thebetweenlands.animator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .lootTable(resource('minecraft:entities/zombie'))
    .life(5)
    .fuel(1)
    .register()

mods.thebetweenlands.animator.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .entity(entity('minecraft:zombie').getEntityClass())
    .life(1)
    .fuel(5)
    .register()

mods.thebetweenlands.animator.recipeBuilder()
    .input(item('minecraft:diamond'))
    .entity(entity('minecraft:enderman'))
    .output(item('minecraft:clay'))
    .life(3)
    .fuel(10)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.remove(IAnimatorRecipe)
    ```

- Removes all entries that match the given entity:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByEntity(Class<? extends Entity>)
    ```

- Removes all entries that match the given entity:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByEntity(EntityEntry)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByInput(IIngredient)
    ```

- Removes all entries that output the given Loot Table:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByLootTable(ResourceLocation)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.animator.removeByEntity(entity('thebetweenlands:sporeling'))
mods.thebetweenlands.animator.removeByInput(item('thebetweenlands:bone_leggings'))
mods.thebetweenlands.animator.removeByLootTable(resource('thebetweenlands:animator/scroll'))
mods.thebetweenlands.animator.removeByOutput(item('thebetweenlands:items_misc:46'))
mods.thebetweenlands.animator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.animator.streamRecipes()
    ```
