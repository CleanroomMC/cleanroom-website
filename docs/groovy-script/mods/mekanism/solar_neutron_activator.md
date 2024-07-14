---
title: "Solar Neutron Activator"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input gasstack into an output gasstack while exposed to the sun."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/SolarNeutronActivator.java"
---

# Solar Neutron Activator (Mekanism)

## Description

Converts an input gasstack into an output gasstack while exposed to the sun.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.solar_neutron_activator/* Used as page default */ // [!code focus]
mods.mekanism.solarneutronactivator
mods.mekanism.solarNeutronActivator
mods.mekanism.SolarNeutronActivator
mods.mekanism.SNA
mods.mekanism.sna
```


## Adding Recipes

- Adds recipes in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.solar_neutron_activator.add(GasStack, GasStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.solar_neutron_activator.add(gas('water'), gas('hydrogen'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Solar Neutron Activator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.mekanism.solar_neutron_activator.recipeBuilder() {open id="abstract"}
- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.SolarNeutronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.solar_neutron_activator.recipeBuilder()
    .gasInput(gas('water'))
    .gasOutput(gas('hydrogen'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.solar_neutron_activator.removeByInput(GasStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.solar_neutron_activator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.solar_neutron_activator.removeByInput(gas('lithium'))
mods.mekanism.solar_neutron_activator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.solar_neutron_activator.streamRecipes()
    ```
