---
title: "Imag Fusor"
titleTemplate: "AcademyCraft | CleanroomMC"
description: "Converts one item and defined amount of Imag phase liquid into one item."
source_code_link: "https://github.com/yor42/AcademyCraft/blob/master/src/main/java/cn/academy/support/groovyscript/modules/ImagFusor.java"
---

# Imag Fusor (AcademyCraft)

## Description

Converts one item and defined amount of Imag phase liquid into one item.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.academy.imag_fusor/* Used as page default */ // [!code focus]
mods.academy.imagfusor
mods.academy.imagFusor
mods.academy.ImagFusor
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.academy.imag_fusor.add(ImagFusorRecipes.IFRecipe)
    ```

- Adds recipes in the format `output`, `input`, `amount of phase liquid`:

    ```groovy:no-line-numbers
    mods.academy.imag_fusor.addRecipe(ItemStack, IIngredient, int)
    ```


## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.academy.imag_fusor.remove(ImagFusorRecipes.IFRecipe)
    ```

- Removes all entry of Imag Fusor:

    ```groovy:no-line-numbers
    mods.academy.imag_fusor.clearRecipe()
    ```

- Removes an entry matching the given `ItemStack`:

    ```groovy:no-line-numbers
    mods.academy.imag_fusor.removeRecipe(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.academy.imag_fusor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.academy.imag_fusor.clearRecipe()
mods.academy.imag_fusor.removeRecipe(item('academy:crystal_normal'))
mods.academy.imag_fusor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.academy.imag_fusor.streamRecipes()
    ```
