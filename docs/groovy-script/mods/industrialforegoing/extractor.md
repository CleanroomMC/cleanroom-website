---
title: "Latex Extractor"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts an input block in-world into a fluidstack over time, eventually breaking the block."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/Extractor.java"
---

# Latex Extractor (Industrial Foregoing)

## Description

Converts an input block in-world into a fluidstack over time, eventually breaking the block.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.industrialforegoing.extractor/* Used as page default */ // [!code focus]
mods.industrialforegoing.Extractor
mods.industrialforegoing.tree_fluid_extractor
mods.industrialforegoing.treefluidextractor
mods.industrialforegoing.treeFluidExtractor
mods.industrialforegoing.TreeFluidExtractor
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.extractor.add(ExtractorEntry)
    ```

- Adds a Latex Extractor recipe in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.extractor.add(ItemStack, FluidStack)
    ```

- Adds a Latex Extractor recipe in the format `input`, `output`, `breakChance`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.extractor.add(ItemStack, FluidStack, float)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.extractor.add(item('minecraft:clay'), fluid('lava') * 50)
mods.industrialforegoing.extractor.add(item('minecraft:stone'), fluid('water') * 100, 1)
```

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.extractor.remove(ExtractorEntry)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.extractor.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.extractor.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.extractor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.extractor.removeByInput(item('minecraft:log2:1'))
mods.industrialforegoing.extractor.removeByOutput(fluid('latex'))
mods.industrialforegoing.extractor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.extractor.streamRecipes()
    ```
