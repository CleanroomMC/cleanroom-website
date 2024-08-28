---
title: "Mixer"
titleTemplate: "Embers | CleanroomMC"
description: "Converts up to 3 input fluidstacks into an output fluidstack in a Mixer."
source_code_link: "https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/Mixer.java"
---

# Mixer (Embers)

## Description

Converts up to 3 input fluidstacks into an output fluidstack in a Mixer.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.embers.mixer/* Used as page default */ // [!code focus]
mods.embers.Mixer
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Mixer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.embers.mixer.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 2 and less than or equal to 3.

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

- `double`. If the Mixer is powered by an Mechanical Actuator (install Mystical Mechanics), how much ember the machine still uses in addition to being powered mechanical. 0 means it uses no ember. The default is 0.5, which mean it uses half the ember it would normally use. 1.5 means it uses 50% more ember. Requires greater than or equal to 0. (Default `0.5`).

    ```groovy:no-line-numbers
    powerRatio(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.FluidMixingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.mixer.recipeBuilder()
    .fluidInput(fluid('water') * 100, fluid('lava') * 100)
    .fluidOutput(fluid('dawnstone') * 100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.embers.mixer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.embers.mixer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.mixer.removeByOutput(fluid('dawnstone'))
mods.embers.mixer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.embers.mixer.streamRecipes()
    ```
