---
title: "Fluid Dictionary Converter"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts one fluid into another fluid at a given ratio."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/FluidDictionary.java"
---

# Fluid Dictionary Converter (Industrial Foregoing)

## Description

Converts one fluid into another fluid at a given ratio.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.industrialforegoing.fluid_dictionary/* Used as page default */ // [!code focus]
mods.industrialforegoing.fluiddictionary
mods.industrialforegoing.fluidDictionary
mods.industrialforegoing.FluidDictionary
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.add(FluidDictionaryEntry)
    ```

- Adds a Fluid Dictionary Converter recipe in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.add(FluidStack, FluidStack)
    ```

- Adds a Fluid Dictionary Converter recipe in the format `input`, `output`, `ratio`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.add(FluidStack, FluidStack, double)
    ```

- Adds a Fluid Dictionary Converter recipe in the format `input`, `output`, `ratio`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.add(String, String, double)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.fluid_dictionary.add(fluid('biofuel'), fluid('latex'),)
mods.industrialforegoing.fluid_dictionary.add(fluid('latex'), fluid('biofuel'),)
mods.industrialforegoing.fluid_dictionary.add(fluid('essence'), fluid('latex'), 2)
mods.industrialforegoing.fluid_dictionary.add(fluid('latex'), fluid('essence'), 0.5)
```

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.remove(FluidDictionaryEntry)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.removeByInput(String)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.removeByOutput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.removeByOutput(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.fluid_dictionary.removeByInput(fluid('essence'))
mods.industrialforegoing.fluid_dictionary.removeByOutput(fluid(essence'))
mods.industrialforegoing.fluid_dictionary.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.fluid_dictionary.streamRecipes()
    ```
