---
title: "Chemical Infuser"
titleTemplate: "Mekanism | CleanroomMC"
description: "Combines two input gas stacks into a output gas stack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/ChemicalInfuser.java"
---

# Chemical Infuser (Mekanism)

## Description

Combines two input gas stacks into a output gas stack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.chemical_infuser/*(1)!*/
mods.mekanism.chemicalinfuser
mods.mekanism.chemicalInfuser
mods.mekanism.ChemicalInfuser
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

- Adds recipes in the format `leftInput`, `rightInput`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.chemical_infuser.add(GasStack, GasStack, GasStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.chemical_infuser.add(gas('copper') * 10, gas('iron'), gas('gold') * 15)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Chemical Infuser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.mekanism.chemical_infuser.recipeBuilder() {open id="abstract"}
- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 2.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.ChemicalInfuserRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.chemical_infuser.recipeBuilder()
    .gasInput(gas('copper') * 10, gas('iron'))
    .gasOutput(gas('gold') * 15)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.chemical_infuser.removeByInput(GasStack, GasStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.chemical_infuser.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.chemical_infuser.removeByInput(gas('hydrogen'), gas('chlorine'))
mods.mekanism.chemical_infuser.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.chemical_infuser.streamRecipes()
    ```
