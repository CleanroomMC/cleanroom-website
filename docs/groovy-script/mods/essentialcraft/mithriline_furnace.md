---
title: "Mithriline Furnace"
titleTemplate: "EssentialCraft 4 | CleanroomMC"
description: "Converts various items into other items using ESPE."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/MithrilineFurnace.java"
---

# Mithriline Furnace (EssentialCraft 4)

## Description

Converts various items into other items using ESPE.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.ec4.mithriline_furnace
mods.ec4.mithrilinefurnace
mods.ec4.mithrilineFurnace
mods.ec4.MithrilineFurnace
mods.essentialcraft.mithriline_furnace/* Used as page default */ // [!code focus]
mods.essentialcraft.mithrilinefurnace
mods.essentialcraft.mithrilineFurnace
mods.essentialcraft.MithrilineFurnace
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Mithriline Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.essentialcraft.mithriline_furnace.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the ESPE cost for this recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    espe(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `essentialcraft.api.MithrilineFurnaceRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.mithriline_furnace.recipeBuilder()
    .input(item('minecraft:coal_block') * 3)
    .output(item('minecraft:diamond_block'))
    .espe(500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.essentialcraft.mithriline_furnace.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.essentialcraft.mithriline_furnace.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.essentialcraft.mithriline_furnace.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.mithriline_furnace.removeByInput(ore('dustGlowstone'))
mods.essentialcraft.mithriline_furnace.removeByOutput(item('minecraft:emerald'))
mods.essentialcraft.mithriline_furnace.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.essentialcraft.mithriline_furnace.streamRecipes()
    ```
