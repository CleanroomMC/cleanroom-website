---
title: "Purification Chamber"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input itemstack and gasstack into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/PurificationChamber.java"
---

# Purification Chamber (Mekanism)

## Description

Converts an input itemstack and gasstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.purification_chamber/* Used as page default */ // [!code focus]
mods.mekanism.purificationchamber
mods.mekanism.purificationChamber
mods.mekanism.PurificationChamber
mods.mekanism.purifier
mods.mekanism.Purifier
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `gasInput`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.purification_chamber.add(IIngredient, GasStack, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.purification_chamber.add(item('minecraft:diamond'), gas('oxygen'), item('minecraft:nether_star'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Purification Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.mekanism.purification_chamber.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.PurificationRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.purification_chamber.recipeBuilder()
    .input(item('minecraft:diamond'))
    .gasInput(gas('deuterium'))
    .output(item('minecraft:nether_star'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.purification_chamber.removeByInput(IIngredient, GasStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.purification_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.purification_chamber.removeByInput(item('mekanism:oreblock:0'), gas('oxygen'))
mods.mekanism.purification_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.purification_chamber.streamRecipes()
    ```
