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

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.academy.metal_former.addEtchRecipe(item('minecraft:stonebrick'), item('minecraft:stonebrick', 3))
mods.academy.metal_former.addInciseRecipe(block('minecraft:cobblestone'), item('minecraft:stone_slab', 3))
mods.academy.metal_former.addPlateRecipe(ore('ingotIron'), item('academy:reinforced_iron_plate'))
mods.academy.metal_former.addRefineRecipe(ore('oreDiamond'), item('minecraft:diamond') * 64)
```

::::::::::

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

- Removes all etching entry of metal former:

    ```groovy:no-line-numbers
    mods.academy.metal_former.clearRefine()
    ```

- Removes an entry matching the given `ItemStack` from etching recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removeEtchByInput(ItemStack)
    ```

- Removes an entry matching the given `ItemStack` from incise recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removeInciseByInput(ItemStack)
    ```

- Removes an entry matching the given `ItemStack` from plate recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removePlateByInput(ItemStack)
    ```

- Removes an entry matching the given `ItemStack` from refine recipes:

    ```groovy:no-line-numbers
    mods.academy.metal_former.removeRefineByInput(ItemStack)
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
mods.academy.metal_former.clearRefine()
mods.academy.metal_former.removeEtchByInput(ore('oreDiamond'))
mods.academy.metal_former.removeInciseByInput(ore('oreDiamond'))
mods.academy.metal_former.removePlateByInput(ore('oreDiamond'))
mods.academy.metal_former.removeRefineByInput(ore('oreDiamond'))
mods.academy.metal_former.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.academy.metal_former.streamRecipes()
    ```
