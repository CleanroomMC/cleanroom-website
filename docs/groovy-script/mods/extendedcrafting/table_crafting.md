---
title: "Table Crafting"
titleTemplate: "Extended Crafting | CleanroomMC"
description: "A normal crafting recipe, but requiring either a specific tier, or at least a given tier, from 3x3 to 9x9."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extendedcrafting/TableCrafting.java"
---

# Table Crafting (Extended Crafting)

## Description

A normal crafting recipe, but requiring either a specific tier, or at least a given tier, from 3x3 to 9x9.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.extendedcrafting.table_crafting/* Used as page default */ // [!code focus]
mods.extendedcrafting.tablecrafting
mods.extendedcrafting.tableCrafting
mods.extendedcrafting.TableCrafting
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.add(ITieredRecipe)
    ```

- Adds a shaped crafting recipe in the format `tier`, `output`, `input`:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.addShaped(int, ItemStack, List<List<IIngredient>>)
    ```

- Adds a shaped crafting recipe in the format `output`, `input`:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.addShaped(ItemStack, List<List<IIngredient>>)
    ```

- Adds a shapeless crafting recipe in the format `tier`, `output`, `input`:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.addShapeless(int, ItemStack, List<IIngredient>)
    ```

- Adds a shapeless crafting recipe in the format `output`, `input`:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.addShapeless(ItemStack, List<IIngredient>)
    ```


### Recipe Builder

Just like other recipe types, the Table Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.extendedcrafting.table_crafting.shapedBuilder() {open id="abstract"}
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

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 81, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

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

- `int`. Sets the tier of table required, with 0 indicating any table size that can fit the recipe. Requires greater than or equal to 0 and less than or equal to 4. (Default `0`).

    ```groovy:no-line-numbers
    tier(int)
    tierAny()
    tierBasic()
    tierElite()
    tierAdvanced()
    tierUltimate()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.blakebr0.extendedcrafting.crafting.table.ITieredRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extendedcrafting.table_crafting.shapedBuilder()
    .output(item('minecraft:stone') * 64)
    .matrix('DLLLLLDDD',
            '  DNIGIND',
            'DDDNIGIND',
            '  DLLLLLD')
    .key('D', item('minecraft:diamond'))
    .key('L', item('minecraft:redstone'))
    .key('N', item('minecraft:stone'))
    .key('I', item('minecraft:iron_ingot'))
    .key('G', item('minecraft:gold_ingot'))
    .tierUltimate()
    .register()

mods.extendedcrafting.table_crafting.shapedBuilder()
    .tierAdvanced()
    .output(item('minecraft:stone') * 8)
    .matrix('BXX')
    .mirrored()
    .key('B', item('minecraft:stone'))
    .key('X', item('minecraft:gold_ingot'))
    .register()

mods.extendedcrafting.table_crafting.shapedBuilder()
    .tierAny()
    .output(item('minecraft:diamond'))
    .matrix('BXXXBX')
    .mirrored()
    .key('B', item('minecraft:stone'))
    .key('X', item('minecraft:gold_ingot'))
    .register()

mods.extendedcrafting.table_crafting.shapedBuilder()
    .matrix([[item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')]])
    .output(item('minecraft:gold_ingot') * 64)
    .tier(4)
    .register()

mods.extendedcrafting.table_crafting.shapedBuilder()
    .matrix([[item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
            [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')]])
    .output(item('minecraft:gold_ingot') * 64)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.extendedcrafting.table_crafting.shapelessBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1 and less than or equal to 81.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `int`. Sets the tier of table required, with 0 indicating any table size that can fit the recipe. Requires greater than or equal to 0 and less than or equal to 4. (Default `0`).

    ```groovy:no-line-numbers
    tier(int)
    tierAny()
    tierBasic()
    tierElite()
    tierAdvanced()
    tierUltimate()
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy:no-line-numbers
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy:no-line-numbers
    recipeAction(Closure<Void>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.blakebr0.extendedcrafting.crafting.table.ITieredRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extendedcrafting.table_crafting.shapelessBuilder()
    .output(item('minecraft:stone') * 64)
    .input(item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.remove(ITieredRecipe)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extendedcrafting.table_crafting.removeByOutput(item('extendedcrafting:singularity_ultimate'))
mods.extendedcrafting.table_crafting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.extendedcrafting.table_crafting.streamRecipes()
    ```
