---
title: "Mortar"
titleTemplate: "Advanced Mortars | CleanroomMC"
description: "Uses any number of specific types of Mortars to convert multiple items into a single output with a possible chance output after a number of player interactions."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/advancedmortars/Mortar.java"
---

# Mortar (Advanced Mortars)

## Description

Uses any number of specific types of Mortars to convert multiple items into a single output with a possible chance output after a number of player interactions.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.advancedmortars.mortar/* Used as page default */ // [!code focus]
mods.advancedmortars.Mortar
```


## Adding Recipes

- Adds recipes in the format `types`, `output`, `duration`, `secondaryOutput`, `secondaryOutputChance`, `inputs`:

    ```groovy:no-line-numbers
    mods.advancedmortars.mortar.add(List<String>, ItemStack, int, ItemStack, float, List<IIngredient>)
    ```

- Adds recipes in the format `types`, `output`, `duration`, `inputs`:

    ```groovy:no-line-numbers
    mods.advancedmortars.mortar.add(List<String>, ItemStack, int, List<IIngredient>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.advancedmortars.mortar.add(['iron', 'wood'], item('minecraft:tnt') * 5, 4, item('minecraft:tnt'), 0.7, [ore('ingotIron'), ore('ingotIron'), ore('ingotIron'), ore('ingotIron'),ore('ingotIron'), ore('ingotIron'), ore('ingotIron'), ore('ingotIron')])
mods.advancedmortars.mortar.add(['stone'], item('minecraft:diamond') * 4, 4, [ore('ingotGold')])
mods.advancedmortars.mortar.add(['stone'], item('minecraft:tnt'), 4, [ore('ingotGold')])
```

::::::::::

### Recipe Builder

Just like other recipe types, the Mortar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.advancedmortars.mortar.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 8.

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

- `List<String>`. Sets what types of Mortar are allowed to craft the recipe. Requires a list of Strings that are `EnumMortarType` entries.

    ```groovy:no-line-numbers
    gold()
    iron()
    type(String...)
    type(List<String>)
    wood()
    stone()
    diamond()
    emerald()
    obsidian()
    ```

- `int`. Sets how many interactions are required to process the recipe. (Default `0`).

    ```groovy:no-line-numbers
    duration(int)
    ```

- `ItemStack`. Sets the additional output itemstack. (Default `ItemStack.EMPTY`).

    ```groovy:no-line-numbers
    secondaryOutput(ItemStack)
    secondaryOutput(ItemStack, float)
    ```

- `float`. Sets the chance of the additional output itemstack being output. (Default `1.0f`).

    ```groovy:no-line-numbers
    secondaryOutput(ItemStack, float)
    secondaryOutputChance(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.advancedmortars.modules.mortar.recipe.RecipeMortar`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.advancedmortars.mortar.recipeBuilder()
    .type('stone')
    .duration(2)
    .output(item('minecraft:grass'))
    .input(item('minecraft:dirt'))
    .register()

mods.advancedmortars.mortar.recipeBuilder()
    .type('emerald')
    .duration(4)
    .output(item('minecraft:wheat_seeds') * 16)
    .secondaryOutput(item('minecraft:melon_seeds'))
    .input(ore('cropWheat'))
    .register()

mods.advancedmortars.mortar.recipeBuilder()
    .type('obsidian')
    .duration(8)
    .output(item('minecraft:wheat_seeds') * 16)
    .secondaryOutput(item('minecraft:melon_seeds'), 0.5)
    .input(ore('cropWheat'))
    .register()
```

:::::::::

::::::::::
