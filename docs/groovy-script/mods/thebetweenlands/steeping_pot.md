---
title: "Steeping Pot"
titleTemplate: "The Betweenlands | CleanroomMC"
description: "Converts a 1,000mb of fluid into either 1,000mb of a fluid, an output itemstack, or both, consuming up to 4 items from a Silk Bundle placed inside the Steeping Pot to do so. The Silk Bundle is converted into a Dirty Silk Bundle in the process. The Silk Bundle can only hold specific items, which are also configurable."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/SteepingPot.java"
---

# Steeping Pot (The Betweenlands)

## Description

Converts a 1,000mb of fluid into either 1,000mb of a fluid, an output itemstack, or both, consuming up to 4 items from a Silk Bundle placed inside the Steeping Pot to do so. The Silk Bundle is converted into a Dirty Silk Bundle in the process. The Silk Bundle can only hold specific items, which are also configurable.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.betweenlands.steeping_pot
mods.betweenlands.steepingpot
mods.betweenlands.steepingPot
mods.betweenlands.SteepingPot
mods.thebetweenlands.steeping_pot/* Used as page default */ // [!code focus]
mods.thebetweenlands.steepingpot
mods.thebetweenlands.steepingPot
mods.thebetweenlands.SteepingPot
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.add(SteepingPotRecipes)
    ```

- Adds the given ItemStack to the accepted item list for the Silk Bundle:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.addAcceptedItem(ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.steeping_pot.addAcceptedItem(item('minecraft:gold_block'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Steeping Pot also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thebetweenlands.steeping_pot.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the color of the output and the type of output if the fluidOutput is `dye_fluid` or `drinkable_brew`. Requires greater than or equal to 0 and less than or equal to 15. (Default `0`).

    ```groovy:no-line-numbers
    meta(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.common.recipe.misc.SteepingPotRecipes`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.steeping_pot.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .fluidInput(fluid('lava'))
    .fluidOutput(fluid('water'))
    .register()

mods.thebetweenlands.steeping_pot.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('lava'))
    .fluidOutput(fluid('dye_fluid'))
    .meta(5)
    .register()

mods.thebetweenlands.steeping_pot.recipeBuilder()
    .input(item('minecraft:emerald'))
    .fluidInput(fluid('lava'))
    .fluidOutput(fluid('water'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.remove(SteepingPotRecipes)
    ```

- Removes the given ItemStack from the accepted item list for the Silk Bundle:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.removeAcceptedItem(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.removeAll()
    ```

- Removes all entries from the accepted item list for the Silk Bundle:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.removeAllAcceptedItem()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thebetweenlands.steeping_pot.removeAcceptedItem(item('thebetweenlands:items_crushed:5'))
mods.thebetweenlands.steeping_pot.removeByInput(item('thebetweenlands:items_crushed:13'))
mods.thebetweenlands.steeping_pot.removeByInput(fluid('clean_water'))
mods.thebetweenlands.steeping_pot.removeByOutput(item('thebetweenlands:limestone'))
mods.thebetweenlands.steeping_pot.removeByOutput(fluid('dye_fluid').withNbt(['type': 14]))
mods.thebetweenlands.steeping_pot.removeAll()
mods.thebetweenlands.steeping_pot.removeAllAcceptedItem()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thebetweenlands.steeping_pot.streamRecipes()
    ```
