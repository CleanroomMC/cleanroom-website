---
title: "Metal Former"
titleTemplate: "Aetherworks | CleanroomMC"
description: "Converts an input item in addition of an input fluid into an output item using the Aetherium Forge Metal Former."
source_code_link: "https://github.com/Ender-Development/Aetherworks-Extended-Life/blob/master/src/main/java/v0id/aw/compat/groovyscript/MetalFormer.java"
---

# Metal Former (Aetherworks)

## Description

Converts an input item in addition of an input fluid into an output item using the Aetherium Forge Metal Former.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.aetherworks.metal_former/* Used as page default */ // [!code focus]
mods.aetherworks.metalformer
mods.aetherworks.metalFormer
mods.aetherworks.MetalFormer
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Metal Former also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.aetherworks.metal_former.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the temperature the metal former requires at minimum to process the item. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    temperature(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `v0id.aw.common.recipe.MetalFormerRecipes$MetalFormerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aetherworks.metal_former.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:iron_nugget') * 9)
    .temperature(2000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.aetherworks.metal_former.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.aetherworks.metal_former.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.aetherworks.metal_former.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aetherworks.metal_former.removeByInput(item('minecraft:diamond'))
mods.aetherworks.metal_former.removeByOutput(item('aetherworks:item_resource', 4))
mods.aetherworks.metal_former.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.aetherworks.metal_former.streamRecipes()
    ```
