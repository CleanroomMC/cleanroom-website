---
title: "Gem Cutting Table"
titleTemplate: "Arcane Archives | CleanroomMC"
description: "Converts any number of itemstacks into a single output itemstack via selecting the desired output itemstack in the GUI."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/arcanearchives/GemCuttingTable.java"
---

# Gem Cutting Table (Arcane Archives)

## Description

Converts any number of itemstacks into a single output itemstack via selecting the desired output itemstack in the GUI.

:::::::::: details Warning {open id="warning"}
While more than 8 items can function as the input of a Stygian Iron Anvil recipe, only the first 8 are shown in JEI.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.arcanearchives.gem_cutting_table/* Used as page default */ // [!code focus]
mods.arcanearchives.gemcuttingtable
mods.arcanearchives.gemCuttingTable
mods.arcanearchives.GemCuttingTable
mods.arcanearchives.GCT
mods.arcanearchives.gct
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Gem Cutting Table also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.arcanearchives.gem_cutting_table.recipeBuilder() {open id="abstract"}
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.aranaira.arcanearchives.api.IGCTRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcanearchives.gem_cutting_table.recipeBuilder()
    .name('clay_craft')
    .input(item('minecraft:stone') * 64)
    .output(item('minecraft:clay'))
    .register()

mods.arcanearchives.gem_cutting_table.recipeBuilder()
    .input(item('minecraft:stone'),item('minecraft:gold_ingot'),item('minecraft:gold_nugget'))
    .output(item('minecraft:clay') * 4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.arcanearchives.gem_cutting_table.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.arcanearchives.gem_cutting_table.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.arcanearchives.gem_cutting_table.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcanearchives.gem_cutting_table.removeByInput(item('minecraft:gold_nugget'))
mods.arcanearchives.gem_cutting_table.removeByOutput(item('arcanearchives:shaped_quartz'))
mods.arcanearchives.gem_cutting_table.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.arcanearchives.gem_cutting_table.streamRecipes()
    ```
