---
title: "Fabrication Chamber"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts Stable and Analysed Circuits into output itemstacks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/FabricationChamber.java"
---

# Fabrication Chamber (Calculator)

## Description

Converts Stable and Analysed Circuits into output itemstacks.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.fabrication_chamber/* Used as page default */ // [!code focus]
mods.calculator.fabricationchamber
mods.calculator.fabricationChamber
mods.calculator.FabricationChamber
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Fabrication Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.calculator.fabrication_chamber.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to Integer.MAX_VALUE.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.FabricationSonarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.fabrication_chamber.recipeBuilder()
    .input(item('calculator:circuitboard:8').withNbt([Stable: 0, Analysed: 1]))
    .output(item('minecraft:diamond'))
    .register()

mods.calculator.fabrication_chamber.recipeBuilder()
    .input(item('calculator:circuitboard:0').withNbt([Stable: 0, Analysed: true]), item('calculator:circuitboard:1').withNbt([Stable: 0, Analysed: true]), item('calculator:circuitboard:2').withNbt([Stable: 0, Analysed: true]), item('calculator:circuitboard:3').withNbt([Stable: 0, Analysed: true]), item('calculator:circuitboard:4').withNbt([Stable: 0, Analysed: true]))
    .input(item('calculator:circuitboard:0').withNbt([Stable: 1, Analysed: true]), item('calculator:circuitboard:1').withNbt([Stable: 1, Analysed: true]), item('calculator:circuitboard:2').withNbt([Stable: 1, Analysed: true]), item('calculator:circuitboard:3').withNbt([Stable: 1, Analysed: true]), item('calculator:circuitboard:4').withNbt([Stable: 1, Analysed: true]))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.fabrication_chamber.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.calculator.fabrication_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.fabrication_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.fabrication_chamber.removeByInput(item('calculator:circuitboard:8').withNbt([Stable: 0, Analysed: 1]))
mods.calculator.fabrication_chamber.removeByOutput(item('calculator:calculatorassembly'))
mods.calculator.fabrication_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.fabrication_chamber.streamRecipes()
    ```
