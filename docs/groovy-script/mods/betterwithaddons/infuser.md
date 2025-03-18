---
title: "Ancestral Infusion Crafting"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts a custom crafting recipe an output itemstack, consuming Spirits from the Infused Soul Sand placed below the Ancestral Infuser if placed within the appropriate multiblock. The multiblock is either Soul Sand or Infused Soul Sand placed below the Ancestral Infuser and exclusively air blocks adjacent to the Infuser and Soul Sand blocks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Infuser.java"
---

# Ancestral Infusion Crafting (Better With Addons)

## Description

Converts a custom crafting recipe an output itemstack, consuming Spirits from the Infused Soul Sand placed below the Ancestral Infuser if placed within the appropriate multiblock. The multiblock is either Soul Sand or Infused Soul Sand placed below the Ancestral Infuser and exclusively air blocks adjacent to the Infuser and Soul Sand blocks.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithaddons.infuser/* Used as page default */ // [!code focus]
mods.betterwithaddons.Infuser
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.infuser.add(InfuserRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Ancestral Infusion Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithaddons.infuser.shapedBuilder() {open id="abstract"}
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

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 9, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

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

- `int`. Sets the amount of spirits consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    spirits(int)
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.infuser.InfuserRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.infuser.shapedBuilder()
    .output(item('minecraft:stone'))
    .matrix('BXX',
            'X B')
    .key('B', item('minecraft:stone'))
    .key('X', item('minecraft:gold_ingot'))
    .spirits(1)
    .mirrored()
    .register()

mods.betterwithaddons.infuser.shapedBuilder()
    .output(item('minecraft:diamond') * 32)
    .matrix([[item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')]])
    .spirits(6)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.betterwithaddons.infuser.shapelessBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `int`. Sets the amount of spirits consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    spirits(int)
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy:no-line-numbers
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy:no-line-numbers
    recipeAction(Closure<Void>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.infuser.InfuserRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.infuser.shapelessBuilder()
    .output(item('minecraft:clay') * 8)
    .input(item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'))
    .register()

mods.betterwithaddons.infuser.shapelessBuilder()
    .output(item('minecraft:clay') * 32)
    .input(item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'))
    .spirits(8)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.infuser.remove(InfuserRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.infuser.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.infuser.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.infuser.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.infuser.removeByInput(item('betterwithaddons:japanmat:16'))
mods.betterwithaddons.infuser.removeByOutput(item('betterwithaddons:ya'))
mods.betterwithaddons.infuser.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.infuser.streamRecipes()
    ```
