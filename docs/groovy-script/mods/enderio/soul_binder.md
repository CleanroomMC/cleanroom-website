---
title: "Soulbinder"
titleTemplate: "Ender IO | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, requiring one of several entities in soul vials, using energy and giving XP. Must have a unique name. To function properly, the input entities must be allowed in Soul Vials."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/SoulBinder.java"
---

# Soulbinder (Ender IO)

## Description

Converts an input itemstack into an output itemstack, requiring one of several entities in soul vials, using energy and giving XP. Must have a unique name. To function properly, the input entities must be allowed in Soul Vials.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.enderio.soul_binder/* Used as page default */ // [!code focus]
mods.enderio.soulbinder
mods.enderio.soulBinder
mods.enderio.SoulBinder
mods.eio.soul_binder
mods.eio.soulbinder
mods.eio.soulBinder
mods.eio.SoulBinder
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Soulbinder also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.enderio.soul_binder.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the experience levels required to start the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    xp(int)
    ```

- `String`. Sets the unique identifier of the recipe.

    ```groovy:no-line-numbers
    name(String)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- `NNList<ResourceLocation>`. Sets the valid entities. Entities must be allowed in Soul Vials. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    entity(EntityEntry...)
    entity(Collection<EntityEntry>)
    entitySoul(String)
    entitySoul(String...)
    entitySoul(Collection<String>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `crazypants.enderio.base.recipe.soul.BasicSoulBinderRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.soul_binder.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .entity(entity('minecraft:zombie'), entity('minecraft:enderman'))
    .name('groovy_example')
    .energy(1000)
    .xp(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.enderio.soul_binder.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.enderio.soul_binder.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.soul_binder.remove(item('enderio:item_material:17'))
mods.enderio.soul_binder.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.enderio.soul_binder.streamRecipes()
    ```
