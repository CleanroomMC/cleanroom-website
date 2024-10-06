---
title: "Washing Factory"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts an input itemstack and input fluidstack into an output fluidstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/OreRaw.java"
---

# Washing Factory (Industrial Foregoing)

## Description

Converts an input itemstack and input fluidstack into an output fluidstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.industrialforegoing.ore_raw/* Used as page default */ // [!code focus]
mods.industrialforegoing.oreraw
mods.industrialforegoing.oreRaw
mods.industrialforegoing.OreRaw
mods.industrialforegoing.washing
mods.industrialforegoing.Washing
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.add(OreFluidEntryRaw)
    ```

- Adds a Washing Factory recipe in the format `ore`, `input`, `output`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.add(OreDictIngredient, FluidStack, FluidStack)
    ```

- Adds a Washing Factory recipe in the format `ore`, `input`, `output`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.add(String, FluidStack, FluidStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.ore_raw.add(ore('oreGold'), fluid('meat') * 200, fluid('if.ore_fluid_raw').withNbt(['Ore': 'oreGold']) * 300)
mods.industrialforegoing.ore_raw.add(ore('stone'), fluid('water') * 1000, fluid('lava') * 50)
```

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.remove(OreFluidEntryRaw)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given ore:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.removeByOre(OreDictIngredient)
    ```

- Removes all recipes that match the given ore:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.removeByOre(String)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.ore_raw.removeByInput(fluid('meat'))
mods.industrialforegoing.ore_raw.removeByOre(ore('oreRedstone'))
mods.industrialforegoing.ore_raw.removeByOre('oreRedstone')
mods.industrialforegoing.ore_raw.removeByOutput(fluid('if.ore_fluid_raw').withNbt(['Ore': 'oreRedstone']),)
mods.industrialforegoing.ore_raw.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_raw.streamRecipes()
    ```
