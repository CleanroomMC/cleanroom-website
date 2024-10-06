---
title: "Filtered Hopper"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Recipes for the Filtered Hopper to process. The filter targeted must allow the input item in to function."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Hopper.java"
---

# Filtered Hopper (Better With Mods)

## Description

Recipes for the Filtered Hopper to process. The filter targeted must allow the input item in to function.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.hopper/* Used as page default */ // [!code focus]
mods.betterwithmods.Hopper
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper.add(HopperInteractions.HopperRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Filtered Hopper also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.betterwithmods.hopper.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the name of the filter used for the recipe, the input item must be capable of passing through the filter to be processed. Requires not null.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `ItemStackList`. Sets the items dropped in-world when the recipe is processed. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy:no-line-numbers
    inWorldItemOutput(ItemStack)
    inWorldItemOutput(ItemStack...)
    inWorldItemOutput(Collection<ItemStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.HopperInteractions$HopperRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.hopper.recipeBuilder()
    .name('betterwithmods:iron_bar')
    .input(ore('sand'))
    .output(item('minecraft:clay'))
    .inWorldItemOutput(item('minecraft:gold_ingot'))
    .register()

mods.betterwithmods.hopper.recipeBuilder()
    .name('betterwithmods:wicker')
    .input(item('minecraft:clay'))
    .inWorldItemOutput(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper.remove(HopperInteractions.HopperRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.hopper.removeByInput(item('minecraft:gunpowder'))
mods.betterwithmods.hopper.removeByOutput(item('minecraft:gunpowder'))
mods.betterwithmods.hopper.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.hopper.streamRecipes()
    ```
