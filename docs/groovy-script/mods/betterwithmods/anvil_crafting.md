---
title: "Anvil Crafting"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Similar to a normal crafting table, but 4x4 instead."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/AnvilCrafting.java"
---

# Anvil Crafting (Better With Mods)

## Description

Similar to a normal crafting table, but 4x4 instead.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.anvil_crafting/* Used as page default */ // [!code focus]
mods.betterwithmods.anvilcrafting
mods.betterwithmods.anvilCrafting
mods.betterwithmods.AnvilCrafting
mods.betterwithmods.soulforged_steel_anvil
mods.betterwithmods.soulforgedsteelanvil
mods.betterwithmods.soulforgedSteelAnvil
mods.betterwithmods.SoulforgedSteelAnvil
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Anvil Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithmods.anvil_crafting.shapedBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1 and less than or equal to 16. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    shape(List<List<IIngredient>>)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `boolean`. Sets if the recipe is horizontally mirrored. (Default `false`).

    ```groovy:no-line-numbers
    mirrored()
    mirrored(boolean)
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy:no-line-numbers
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy:no-line-numbers
    recipeAction(Closure<Void>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.anvil_crafting.shapedBuilder()
    .output(item('minecraft:diamond') * 32)
    .matrix([[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),null],
            [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),null],
            [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),null],
            [null,null,null,item('minecraft:gold_ingot').transform({ _ -> item('minecraft:diamond') })]])
    .register()

mods.betterwithmods.anvil_crafting.shapedBuilder()
    .output(item('minecraft:diamond'))
    .matrix('BXXX')
    .mirrored()
    .key('B', item('minecraft:stone'))
    .key('X', item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.betterwithmods.anvil_crafting.shapelessBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1 and less than or equal to 16.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy:no-line-numbers
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy:no-line-numbers
    recipeAction(Closure<Void>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.anvil_crafting.shapelessBuilder()
    .name(resource('example:anvil_clay'))
    .output(item('minecraft:clay'))
    .input([item('minecraft:cobblestone'), item('minecraft:gold_ingot')])
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithmods.anvil_crafting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithmods.anvil_crafting.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.anvil_crafting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.anvil_crafting.removeByInput(item('minecraft:redstone'))
mods.betterwithmods.anvil_crafting.removeByOutput(item('betterwithmods:steel_block'))
mods.betterwithmods.anvil_crafting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.anvil_crafting.streamRecipes()
    ```
