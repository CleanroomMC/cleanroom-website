---
title: "Radiating Chamber"
titleTemplate: "EssentialCraft 4 | CleanroomMC"
description: "Combines two items together using MRU to obtain a third item. Can optionally require a specific range of MRU balance to execute the recipe."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/RadiatingChamber.java"
---

# Radiating Chamber (EssentialCraft 4)

## Description

Combines two items together using MRU to obtain a third item. Can optionally require a specific range of MRU balance to execute the recipe.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.ec4.radiating_chamber
mods.ec4.radiatingchamber
mods.ec4.radiatingChamber
mods.ec4.RadiatingChamber
mods.essentialcraft.radiating_chamber/* Used as page default */ // [!code focus]
mods.essentialcraft.radiatingchamber
mods.essentialcraft.radiatingChamber
mods.essentialcraft.RadiatingChamber
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Radiating Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.essentialcraft.radiating_chamber.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

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

- `int`. Sets the time needed to execute this recipe, in ticks. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `float`. Sets the amount of MRU spent by the Chamber each tick. The total MRU can be calculated as `time * mruPerTick`. Requires greater than or equal to 1. (Default `1.0f`).

    ```groovy:no-line-numbers
    mruPerTick(float)
    ```

- `float`. Sets the minimum balance required for this recipe. Requires greater than or equal to 0.0f and less than or equal to 2.0f. (Default `0.0f`).

    ```groovy:no-line-numbers
    lowerBalance(float)
    ```

- `float`. Sets the maximum balance required for this recipe. Requires greater than or equal to 0.0f and less than or equal to 2.0f. (Default `2.0f`).

    ```groovy:no-line-numbers
    upperBalance(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `essentialcraft.api.RadiatingChamberRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.radiating_chamber.recipeBuilder()
    .input(item('minecraft:nether_star'), item('minecraft:stone'))
    .output(item('minecraft:beacon'))
    .time(100)
    .mruPerTick(10.0f)
    .upperBalance(1.5f)
    .lowerBalance(0.25f)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.essentialcraft.radiating_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.essentialcraft.radiating_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.radiating_chamber.removeByOutput(item('essentialcraft:genitem', 42))
mods.essentialcraft.radiating_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.essentialcraft.radiating_chamber.streamRecipes()
    ```
