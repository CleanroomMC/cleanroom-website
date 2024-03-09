---
title: "Environmental Accumulator"
description: "Consumes an item to give an output, possibly changing the weather. Has a cooldown time or a blood cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/evilcraft/EnvironmentalAccumulator.java"
---

# Environmental Accumulator (EvilCraft)

## Description

Consumes an item to give an output, possibly changing the weather. Has a cooldown time or a blood cost.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.evilcraft.environmental_accumulator/*(1)!*/
mods.evilcraft.environmentalaccumulator
mods.evilcraft.environmentalAccumulator
mods.evilcraft.EnvironmentalAccumulator
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Environmental Accumulator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.evilcraft.environmental_accumulator.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the base time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `EnvironmentalAccumulatorConfig.defaultProcessItemTickCount`).

    ```groovy:no-line-numbers
    duration(int)
    ```

- `int`. Sets the time in ticks required before another recipe can be run in this Environmental Accumulator. Also controls the amount of `fluid('evilcraftblood')` consumed by the Sanguinary Environmental Accumulator. Requires greater than or equal to 0. (Default `EnvironmentalAccumulatorConfig.defaultTickCooldown`).

    ```groovy:no-line-numbers
    cooldown(int)
    cooldowntime(int)
    ```

- `WeatherType`. Sets the weather type required to start the recipe. Requires not null.

    ```groovy:no-line-numbers
    inputWeather(String)
    inputWeather(WeatherType)
    ```

- `WeatherType`. Sets the weather type the world is changed to when the recipe is completed. Requires not null.

    ```groovy:no-line-numbers
    outputWeather(String)
    outputWeather(WeatherType)
    ```

- `double`. Sets how fast the item visually rotates while crafting. Requires greater than or equal to 0. (Default `EnvironmentalAccumulatorConfig.defaultProcessItemSpeed`).

    ```groovy:no-line-numbers
    speed(double)
    processingspeed(double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.cyclops.cyclopscore.recipe.custom.api.IRecipe<org.cyclops.evilcraft.core.recipe.custom.EnvironmentalAccumulatorRecipeComponent, org.cyclops.evilcraft.core.recipe.custom.EnvironmentalAccumulatorRecipeComponent, org.cyclops.evilcraft.core.recipe.custom.EnvironmentalAccumulatorRecipeProperties>`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.evilcraft.environmental_accumulator.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:clay') * 2)
    .inputWeather(weather('clear'))
    .outputWeather(weather('rain'))
    .processingspeed(1)
    .cooldowntime(1000)
    .duration(10)
    .register()

mods.evilcraft.environmental_accumulator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .inputWeather(weather('rain'))
    .outputWeather(weather('lightning'))
    .speed(10)
    .cooldown(1)
    .register()

mods.evilcraft.environmental_accumulator.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay') * 16)
    .inputWeather(weather('lightning'))
    .outputWeather(weather('lightning'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.evilcraft.environmental_accumulator.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.evilcraft.environmental_accumulator.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.evilcraft.environmental_accumulator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.evilcraft.environmental_accumulator.removeByInput(item('evilcraft:exalted_crafter:1'))
mods.evilcraft.environmental_accumulator.removeByOutput(item('evilcraft:exalted_crafter:2'))
mods.evilcraft.environmental_accumulator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.evilcraft.environmental_accumulator.streamRecipes()
    ```
