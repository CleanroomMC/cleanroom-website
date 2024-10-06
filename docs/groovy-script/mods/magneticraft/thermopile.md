---
title: "Thermopile"
titleTemplate: "Magneticraft | CleanroomMC"
description: "The Thermopile generates energy from temperature differences modified by the thermal resistances of the block. This lets you generate energy when placed on either side of a Thermopile."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/Thermopile.java"
---

# Thermopile (Magneticraft)

## Description

The Thermopile generates energy from temperature differences modified by the thermal resistances of the block. This lets you generate energy when placed on either side of a Thermopile.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.magneticraft.thermopile/* Used as page default */ // [!code focus]
mods.magneticraft.Thermopile
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.thermopile.add(IThermopileRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Thermopile also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.magneticraft.thermopile.recipeBuilder() {open id="abstract"}
- `IBlockState`. Sets the IBlockState being used. Requires not null.

    ```groovy:no-line-numbers
    state(IBlockState)
    ```

- `float`. Sets the temperature of the block. (Default `0.0f`).

    ```groovy:no-line-numbers
    temperature(float)
    ```

- `float`. Sets the thermal resistance of the block. (Default `0.0f`).

    ```groovy:no-line-numbers
    conductivity(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.generators.thermopile.IThermopileRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.thermopile.recipeBuilder()
    .state(blockstate('minecraft:clay'))
    .conductivity(10)
    .temperature(500)
    .register()

mods.magneticraft.thermopile.recipeBuilder()
    .state(blockstate('minecraft:diamond_block'))
    .conductivity(70)
    .temperature(700)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.magneticraft.thermopile.remove(IThermopileRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.magneticraft.thermopile.removeByInput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.magneticraft.thermopile.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.magneticraft.thermopile.removeByInput(blockstate('minecraft:ice'))
mods.magneticraft.thermopile.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.magneticraft.thermopile.streamRecipes()
    ```
