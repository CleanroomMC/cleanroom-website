---
title: "Druid Altar"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts 4 input items into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/DruidAltar.java"
---

# Druid Altar (The Betweenlands)

## Description

Converts 4 input items into an output itemstack.

:::::::::: details Warning {open id="warning"}
The 4 sapling recipe to reactivate the Druid Altar recipe will always appear in JEI, even if it has been removed. Additionally, this recipe cannot be removed via `removeByInput` or `removeByOutput`.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.betweenlands.druid_altar
mods.betweenlands.druidaltar
mods.betweenlands.druidAltar
mods.betweenlands.DruidAltar
mods.thebetweenlands.druid_altar/* Used as page default */ // [!code focus]
mods.thebetweenlands.druidaltar
mods.thebetweenlands.druidAltar
mods.thebetweenlands.DruidAltar
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.druid_altar.add(IDruidAltarRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Druid Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.druid_altar.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 4.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.IDruidAltarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.druid_altar.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.druid_altar.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:gold_block'), item('minecraft:gold_ingot'), item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.druid_altar.remove(IDruidAltarRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.druid_altar.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.druid_altar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.druid_altar.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.druid_altar.removeByInput(item('thebetweenlands:swamp_talisman:1'))
mods.thebetweenlands.druid_altar.removeByOutput(item('thebetweenlands:swamp_talisman'))
mods.thebetweenlands.druid_altar.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.druid_altar.streamRecipes()
    ```
