---
title: "Alloying"
titleTemplate: "Tinkers' Construct | CleanroomMC"
description: "Modifies what fluids can be mixed together in the Smeltery."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/Alloying.java"
---

# Alloying (Tinkers' Construct)

## Description

Modifies what fluids can be mixed together in the Smeltery.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.tconstruct.alloying/* Used as page default */ // [!code focus]
mods.tconstruct.Alloying
mods.tinkersconstruct.alloying
mods.tinkersconstruct.Alloying
mods.ticon.alloying
mods.ticon.Alloying
```


## Adding Recipes

- Adds a new recipe in the format `output`, `inputs`:

    ```groovy:no-line-numbers
    mods.tconstruct.alloying.add(FluidStack, FluidStack...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.alloying.add(fluid('lava') * 144, fluid('water') * 500, fluid('iron') * 5, fluid('clay') * 60)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Alloying also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.tconstruct.alloying.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 2 and less than or equal to Integer.MAX_VALUE.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `slimeknights.tconstruct.library.smeltery.AlloyRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.alloying.recipeBuilder()
    .fluidOutput(fluid('iron') * 3)
    .fluidInput(fluid('clay') * 1,fluid('lava') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given inputs:

    ```groovy:no-line-numbers
    mods.tconstruct.alloying.removeByInputs(FluidStack...)
    ```

- Removes all recipes that match the given output and the given inputs:

    ```groovy:no-line-numbers
    mods.tconstruct.alloying.removeByInputsAndOutput(FluidStack, FluidStack...)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.tconstruct.alloying.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.tconstruct.alloying.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.alloying.removeByInputs(fluid('cobalt')*2,fluid('ardite')*2)
mods.tconstruct.alloying.removeByInputsAndOutput(fluid('knightslime')*72,fluid('iron')*72,fluid('stone')*144,fluid('purpleslime')*125)
mods.tconstruct.alloying.removeByOutput(fluid('pigiron'))
mods.tconstruct.alloying.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.tconstruct.alloying.streamRecipes()
    ```
