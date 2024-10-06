---
title: "Stygian Iron Anvil"
titleTemplate: "Woot | CleanroomMC"
description: "Has a catalyst (which may or may not be consumed) placed on the anvil, with the input items thrown atop the base."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/StygianIronAnvil.java"
---

# Stygian Iron Anvil (Woot)

## Description

Has a catalyst (which may or may not be consumed) placed on the anvil, with the input items thrown atop the base.

:::::::::: details Note {open id="note"}
The anvil must be above a Magma Block and then right clicked with a Hammer, converting the input items into the output item.
::::::::::

:::::::::: details Warning {open id="warning"}
While more than 6 items can function as the input of a Stygian Iron Anvil recipe, only the first 6 are shown in JEI.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.woot.stygian_iron_anvil/* Used as page default */ // [!code focus]
mods.woot.stygianironanvil
mods.woot.stygianIronAnvil
mods.woot.StygianIronAnvil
mods.woot.anvil
mods.woot.Anvil
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.woot.stygian_iron_anvil.add(IAnvilRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Stygian Iron Anvil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.woot.stygian_iron_anvil.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

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

- `ItemStack`. Sets the itemstack used for the base. Requires not isEmpty. (Default `ItemStack.EMPTY`).

    ```groovy:no-line-numbers
    base(ItemStack)
    ```

- `boolean`. Sets if the base is used as a catalyst and not consumed. (Default `false`).

    ```groovy:no-line-numbers
    preserveBase()
    preserveBase(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `ipsis.woot.crafting.IAnvilRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.woot.stygian_iron_anvil.recipeBuilder()
    .input(item('minecraft:diamond'),item('minecraft:diamond'),item('minecraft:diamond'))
    .base(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .preserveBase(true)
    .register()

mods.woot.stygian_iron_anvil.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:gold_ingot'), item('minecraft:iron_ingot'), item('minecraft:diamond_block'), item('minecraft:gold_block'), item('minecraft:iron_bars'), item('minecraft:magma'))
    .base(item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .preserveBase()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.woot.stygian_iron_anvil.remove(IAnvilRecipe)
    ```

- Removes all recipes that match the given base item:

    ```groovy:no-line-numbers
    mods.woot.stygian_iron_anvil.removeByBase(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.woot.stygian_iron_anvil.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.woot.stygian_iron_anvil.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.woot.stygian_iron_anvil.removeByBase(item('minecraft:iron_bars'))
mods.woot.stygian_iron_anvil.removeByOutput(item('woot:stygianironplate'))
mods.woot.stygian_iron_anvil.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.woot.stygian_iron_anvil.streamRecipes()
    ```
