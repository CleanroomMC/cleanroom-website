---
title: "Plastic Mixer"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Converts a fluidstack and an item with a variable damage value into each other, requiring temperature to operate the process, optionally consuming dye, and allowing either only melting or only solidifying."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/PlasticMixer.java"
---

# Plastic Mixer (PneumaticCraft: Repressurized)

## Description

Converts a fluidstack and an item with a variable damage value into each other, requiring temperature to operate the process, optionally consuming dye, and allowing either only melting or only solidifying.

:::::::::: details Warning {open id="warning"}
Items with metadata 15 will never consume dye, even if the option is enabled.
::::::::::

:::::::::: details Danger {open id="danger"}
Only one meta value can be used for a recipe per fluid, and the meta value will be applied to the item.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.plastic_mixer/* Used as page default */ // [!code focus]
mods.pneumaticcraft.plasticmixer
mods.pneumaticcraft.plasticMixer
mods.pneumaticcraft.PlasticMixer
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.plastic_mixer.add(PlasticMixerRegistry.PlasticMixerRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Plastic Mixer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.plastic_mixer.recipeBuilder() {open id="abstract"}
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

- `int`. Sets the meta value for selecting the recipe, only one meta value can be used for a fluid. (Default `0`).

    ```groovy:no-line-numbers
    meta(int)
    ```

- `boolean`. Sets if the recipe consumes a random dye. (Default `false`).

    ```groovy:no-line-numbers
    useDye()
    useDye(boolean)
    ```

- `boolean`. Sets if the recipe allows melting the output item back into the input fluid. (Default `false`).

    ```groovy:no-line-numbers
    allowMelting()
    allowMelting(boolean)
    ```

- `boolean`. Sets if the recipe allows solidifying the input fluid into the output item. (Default `false`).

    ```groovy:no-line-numbers
    allowSolidifying()
    allowSolidifying(boolean)
    ```

- `int`. Sets the required temperature in Kelvin to melt or solidify the recipe. (Default `0`).

    ```groovy:no-line-numbers
    requiredTemperature(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.PlasticMixerRegistry$PlasticMixerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.plastic_mixer.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .output(item('minecraft:clay'))
    .allowMelting()
    .allowSolidifying()
    .requiredTemperature(323)
    .register()

mods.pneumaticcraft.plastic_mixer.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .output(item('minecraft:sapling'))
    .allowSolidifying()
    .requiredTemperature(298)
    .meta(-1)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.plastic_mixer.remove(PlasticMixerRegistry.PlasticMixerRecipe)
    ```

- Removes all recipes with the given fluid input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.plastic_mixer.removeByFluid(IIngredient)
    ```

- Removes all recipes with the given item output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.plastic_mixer.removeByItem(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.plastic_mixer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.plastic_mixer.removeByFluid(fluid('plastic'))
mods.pneumaticcraft.plastic_mixer.removeByItem(item('pneumaticcraft:plastic'))
mods.pneumaticcraft.plastic_mixer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.plastic_mixer.streamRecipes()
    ```
