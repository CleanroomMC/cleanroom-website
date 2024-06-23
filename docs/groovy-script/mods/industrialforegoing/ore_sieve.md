---
title: "Fluid Sieving Machine"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts an input itemstack and input fluidstack into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/OreSieve.java"
---

# Fluid Sieving Machine (Industrial Foregoing)

## Description

Converts an input itemstack and input fluidstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.industrialforegoing.ore_sieve/* Used as page default */ // [!code focus]
mods.industrialforegoing.oresieve
mods.industrialforegoing.oreSieve
mods.industrialforegoing.OreSieve
mods.industrialforegoing.fluid_sieving
mods.industrialforegoing.fluidsieving
mods.industrialforegoing.fluidSieving
mods.industrialforegoing.FluidSieving
```


## Adding Recipes

- Adds a Fluid Sieving Machine recipe in the format `input`, `output`, `sieveItem`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.add(FluidStack, ItemStack, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.ore_sieve.add(fluid('if.ore_fluid_fermented').withNbt(['Ore': 'oreGold']) * 100, item('minecraft:nether_star') * 2, item('minecraft:clay'))
mods.industrialforegoing.ore_sieve.add(fluid('lava') * 5, item('minecraft:gold_ingot'), item('minecraft:clay'))
```

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.ore_sieve.removeByInput(item('minecraft:sand'))
mods.industrialforegoing.ore_sieve.removeByInput(fluid('if.pink_slime'))
mods.industrialforegoing.ore_sieve.removeByOutput(item('industrialforegoing:pink_slime_ingot)
mods.industrialforegoing.ore_sieve.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.streamRecipes()
    ```
