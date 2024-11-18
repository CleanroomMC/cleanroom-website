---
title: "Metal Former"
titleTemplate: "AcademyCraft | CleanroomMC"
description: "Converts an item into another item, according to the mode of the machine."
source_code_link: "https://github.com/yor42/AcademyCraft/blob/master/src/main/java/cn/academy/support/groovyscript/modules/MetalFormer.java"
---

# Metal Former (AcademyCraft)

## Description

Converts an item into another item, according to the mode of the machine.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.academy.metal_former/* Used as page default */ // [!code focus]
mods.academy.metalformer
mods.academy.metalFormer
mods.academy.MetalFormer
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.academy.metal_former.add(MetalFormerRecipes.RecipeObject)
    ```

- Adds etching recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.academy.metal_former.addEtchRecipe(IIngredient, ItemStack)
    ```

- Adds incising recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.academy.metal_former.addInciseRecipe(IIngredient, ItemStack)
    ```

- Adds plating recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.academy.metal_former.addPlateRecipe(IIngredient, ItemStack)
    ```

- Adds refining recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.academy.metal_former.addRefineRecipe(IIngredient, ItemStack)
    ```


## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.academy.metal_former.remove(MetalFormerRecipes.RecipeObject)
    ```

- Removes all etching entry of metal former:

    ```groovy:no-line-numbers
    mods.academy.metal_former.clearEtch()
    ```

- Removes all etching entry of metal former:

    ```groovy:no-line-numbers
    mods.academy.metal_former.clearIncise()
    ```

- Removes all etching entry of metal former:

    ```groovy:no-line-numbers
    mods.academy.metal_former.clearPlate()
    ```

- Removes all entry of metal former:

    ```groovy:no-line-numbers
    mods.academy.metal_former.clearRecipe()
    ```

- Removes all etching entry of metal former:

    ```groovy:no-line-numbers
    mods.academy.metal_former.clearRefine()
    ```

- Removes an entry matching the given `ItemStack` from etching recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removeEtchbyInput(ItemStack)
    ```

- Removes an entry matching the given `ItemStack` from incise recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removeIncisebyInput(ItemStack)
    ```

- Removes an entry matching the given `ItemStack` from plate recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removePlatebyInput(ItemStack)
    ```

- Removes an entry matching the given `ItemStack` from refine recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removeRefinebyInput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.academy.metal_former.clearEtch()
mods.academy.metal_former.clearIncise()
mods.academy.metal_former.clearPlate()
mods.academy.metal_former.clearRecipe()
mods.academy.metal_former.clearRefine()
mods.academy.metal_former.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.academy.metal_former.streamRecipes()
    ```
