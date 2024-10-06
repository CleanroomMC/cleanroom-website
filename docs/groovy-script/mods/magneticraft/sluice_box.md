---
title: "Sluice Box"
titleTemplate: "Magneticraft | CleanroomMC"
description: "Converts an input itemstack into any number of output itemstacks each with a given chance. Consumes a bucket of water per batch, and can be crafted 10 at a time in a Sluice Box."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/SluiceBox.java"
---

# Sluice Box (Magneticraft)

## Description

Converts an input itemstack into any number of output itemstacks each with a given chance. Consumes a bucket of water per batch, and can be crafted 10 at a time in a Sluice Box.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.magneticraft.sluice_box/* Used as page default */ // [!code focus]
mods.magneticraft.sluicebox
mods.magneticraft.sluiceBox
mods.magneticraft.SluiceBox
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.sluice_box.add(ISluiceBoxRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Sluice Box also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.magneticraft.sluice_box.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `FloatArrayList`. Sets the chance of the corresponding output itemstack to be created. Requires greater than 0, less than or equal to 100, and must have the same number of elements as there are outputs.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack, float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.sluicebox.ISluiceBoxRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.sluice_box.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.magneticraft.sluice_box.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'), 0.5)
    .register()

mods.magneticraft.sluice_box.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'), 0.5)
    .output(item('minecraft:clay'), 0.3)
    .output(item('minecraft:clay'), 0.2)
    .output(item('minecraft:clay'), 0.1)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.sluice_box.remove(ISluiceBoxRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.magneticraft.sluice_box.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.magneticraft.sluice_box.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.magneticraft.sluice_box.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.sluice_box.removeByInput(item('minecraft:sand'))
mods.magneticraft.sluice_box.removeByOutput(item('minecraft:cobblestone'))
mods.magneticraft.sluice_box.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.magneticraft.sluice_box.streamRecipes()
    ```
