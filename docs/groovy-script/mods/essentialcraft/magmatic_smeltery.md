---
title: "Magmatic Smeltery"
titleTemplate: "EssentialCraft 4 | CleanroomMC"
description: "A machine used to quadruple ores using MRU and lava. Also adds the same recipes for Magmatic Furnace, which is used to double ores using MRU."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/MagmaticSmeltery.java"
---

# Magmatic Smeltery (EssentialCraft 4)

## Description

A machine used to quadruple ores using MRU and lava. Also adds the same recipes for Magmatic Furnace, which is used to double ores using MRU.

:::::::::: details Warning {open id="warning"}
Magmatic Smeltery does not have a JEI handler. This means its recipes will not be displayed in JEI and have to be tested manually.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.ec4.magmatic_smeltery
mods.ec4.magmaticsmeltery
mods.ec4.magmaticSmeltery
mods.ec4.MagmaticSmeltery
mods.essentialcraft.magmatic_smeltery/* Used as page default */ // [!code focus]
mods.essentialcraft.magmaticsmeltery
mods.essentialcraft.magmaticSmeltery
mods.essentialcraft.MagmaticSmeltery
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Magmatic Smeltery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.essentialcraft.magmatic_smeltery.recipeBuilder() {open id="abstract"}
- `int`. Sets the overlay color for the Magmatic Alloy item of this ore. Requires greater than or equal to 0 and less than or equal to the hexadecimal number `0xffffff`. (Default `0`).

    ```groovy:no-line-numbers
    color(int)
    ```

- `String`. Sets the OreDict name of the input item. Requires exactly 1.

    ```groovy:no-line-numbers
    input(String)
    input(OreDictIngredient)
    ```

- `int`. Sets the output factor of the recipe. Magmatic Furnace will smelt the input item into this many Magmatic Alloys, Magmatic Smeltery will give double this many Magmatic Alloys, and Alloys will always be smelted into 2x of the output item. Requires greater than or equal to 1. (Default `1`).

    ```groovy:no-line-numbers
    factor(int)
    ```

- `String`. Sets the OreDict name of the output item. Requires exactly 1.

    ```groovy:no-line-numbers
    output(String)
    output(OreDictIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `essentialcraft.api.OreSmeltingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.magmatic_smeltery.recipeBuilder()
    .input('blockIron')
    .output('ingotGold')
    .factor(3)
    .color(0x0000ff)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.essentialcraft.magmatic_smeltery.removeByInput(OreDictIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.essentialcraft.magmatic_smeltery.removeByInput(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.essentialcraft.magmatic_smeltery.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.essentialcraft.magmatic_smeltery.removeByInput(ore('oreIron'))
mods.essentialcraft.magmatic_smeltery.removeByInput('oreDiamond')
mods.essentialcraft.magmatic_smeltery.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.essentialcraft.magmatic_smeltery.streamRecipes()
    ```
