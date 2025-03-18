---
title: "Alicio Tree Foods"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input item into an amount of food for the tree to gradually consume, eventually summoning a random creature nearby."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/LureTree.java"
---

# Alicio Tree Foods (Better With Addons)

## Description

Converts an input item into an amount of food for the tree to gradually consume, eventually summoning a random creature nearby.

:::::::::: details Info {open id="info"}
The creature spawned will be a passive animal, and undesirable animals can be blacklisted. The blacklist has no entries by default.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.lure_tree/* Used as page default */ // [!code focus]
mods.betterwithaddons.luretree
mods.betterwithaddons.lureTree
mods.betterwithaddons.LureTree
```


## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.add(TileEntityLureTree.TreeFood)
    ```

- Adds the given Entity to the blacklist:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.addBlacklist(Class<? extends Entity>)
    ```

- Adds the given Entity to the blacklist:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.addBlacklist(EntityEntry)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.lure_tree.addBlacklist(entity('minecraft:chicken'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Alicio Tree Foods also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.lure_tree.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the value of the food. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    food(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.tileentity.TileEntityLureTree$TreeFood`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.lure_tree.recipeBuilder()
    .input(item('minecraft:diamond'))
    .food(1000)
    .register()

mods.betterwithaddons.lure_tree.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .food(4)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.remove(TileEntityLureTree.TreeFood)
    ```

- Removes the given Entity from the blacklist:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.removeBlacklist(Class<? extends Entity>)
    ```

- Removes the given Entity from the blacklist:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.removeBlacklist(EntityEntry)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.lure_tree.removeByInput(item('minecraft:rotten_flesh'))
mods.betterwithaddons.lure_tree.removeAll()
```

::::::::::

## Getting the value of entries

- Returns a list of all blacklisted classes that the Alicio Tree cannot spawn:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.getBlacklist()
    ```

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.lure_tree.streamRecipes()
    ```
