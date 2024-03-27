---
title: "Analysing Chamber"
titleTemplate: "Calculator | CleanroomMC"
description: "Takes a non-analysed Circuit and analyses it, converting it into usable Stable or Analysed Circuit. Will produce power and item outputs based on randomly generated NBT data."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/AnalysingChamber.java"
---

# Analysing Chamber (Calculator)

## Description

Takes a non-analysed Circuit and analyses it, converting it into usable Stable or Analysed Circuit. Will produce power and item outputs based on randomly generated NBT data.

:::::::::: details Note {open id="note"}
When a void upgrade is installed in the Analysing Chamber, slots 1 and 2 will be voided as trash, but 3, 4, 5, and 6 will continue giving outputs.
::::::::::

:::::::::: info Warning {id="warning"}
JEI incorrectly represents the chance to obtain an output. 6% is actually 2%, 0.2% is actually 1%, 0.1% is correct, 0.02% is actually 0.05%, 0.001% is correct, and 0% is actually 0.005%.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.analysing_chamber/* Used as page default */ // [!code focus]
mods.calculator.analysingchamber
mods.calculator.analysingChamber
mods.calculator.AnalysingChamber
mods.calculator.analyzing_chamber
mods.calculator.analyzingchamber
mods.calculator.analyzingChamber
mods.calculator.AnalyzingChamber
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Analysing Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.calculator.analysing_chamber.recipeBuilder() {open id="abstract"}
- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. What pool the output is in. Requires greater than or equal to 1 and less than or equal to 6. (Default `0`).

    ```groovy:no-line-numbers
    slot(int)
    ```

- `int`. Specific number to be rolled to gain the output. Duplicate numbers are *not* validated, and will not be output.. Requires greater than or equal to 1 and less than or equal to 20000. (Default `0`).

    ```groovy:no-line-numbers
    location(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.CalculatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.analysing_chamber.recipeBuilder()
    .slot(6)
    .location(1)
    .output(item('minecraft:diamond'))
    .register()

mods.calculator.analysing_chamber.recipeBuilder()
    .slot(1)
    .location(18)
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.analysing_chamber.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.analysing_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.analysing_chamber.removeByInput(item('sonarcore:reinforceddirtblock'))
mods.calculator.analysing_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.analysing_chamber.streamRecipes()
    ```
