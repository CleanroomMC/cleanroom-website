---
title: "Industrial Blast Furnace"
titleTemplate: "Tech Reborn | CleanroomMC"
description: "Converts one or two itemstack inputs into one or two itemstack outputs after a given process time, requiring at least a given amount of heat and consuming energy per tick."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/BlastFurnace.java"
---

# Industrial Blast Furnace (Tech Reborn)

## Description

Converts one or two itemstack inputs into one or two itemstack outputs after a given process time, requiring at least a given amount of heat and consuming energy per tick.

:::::::::: details Info {open id="info"}
Heat is increased by applying Kanthal and Nichrome Coils, improving the quality of the Machine Casing, and filling the center of the multiblock with lava.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.techreborn.blast_furnace/* Used as page default */ // [!code focus]
mods.techreborn.blastfurnace
mods.techreborn.blastFurnace
mods.techreborn.BlastFurnace
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.blast_furnace.add(R)
    ```


### Recipe Builder

Just like other recipe types, the Industrial Blast Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.techreborn.blast_furnace.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the power consumed per tick. Requires greater than or equal to 0. (Default `128`).

    ```groovy:no-line-numbers
    perTick(int)
    ```

- `int`. Sets the heat required for the recipe to be crafted. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    neededHeat(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `techreborn.api.recipe.machines.BlastFurnaceRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.blast_furnace.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:diamond') * 2)
    .output(item('minecraft:gold_ingot'))
    .time(10)
    .perTick(100)
    .neededHeat(3800)
    .register()

mods.techreborn.blast_furnace.recipeBuilder()
    .input(item('minecraft:diamond') * 3, item('minecraft:diamond') * 2)
    .output(item('minecraft:clay') * 2)
    .time(5)
    .neededHeat(1500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.blast_furnace.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.techreborn.blast_furnace.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.techreborn.blast_furnace.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.techreborn.blast_furnace.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.blast_furnace.removeByInput(item('techreborn:dust:1'))
mods.techreborn.blast_furnace.removeByOutput(item('techreborn:ingot:12'))
mods.techreborn.blast_furnace.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.techreborn.blast_furnace.streamRecipes()
    ```
