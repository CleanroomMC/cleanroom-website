---
title: "Reaction Chamber"
titleTemplate: "Embers | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack in a Reaction Chamber."
source_code_link: "https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/ReactionChamber.java"
---

# Reaction Chamber (Embers)

## Description

Converts an input fluidstack into an output fluidstack in a Reaction Chamber.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.embers.reaction_chamber/* Used as page default */ // [!code focus]
mods.embers.reactionchamber
mods.embers.reactionChamber
mods.embers.ReactionChamber
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Reaction Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.embers.reaction_chamber.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

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

- `float`. Sets the red value of the color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy:no-line-numbers
    red(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

- `float`. Sets the blue value of the color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy:no-line-numbers
    blue(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

- `float`. Sets the green value of the color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy:no-line-numbers
    green(float)
    color(int)
    color(float...)
    particleColor(int)
    particleColor(float...)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.FluidReactionRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.reaction_chamber.recipeBuilder()
    .fluidInput(fluid('lava') * 10)
    .fluidOutput(fluid('steam') * 50)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.embers.reaction_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.embers.reaction_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.embers.reaction_chamber.removeByOutput(fluid('steam'))
mods.embers.reaction_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.embers.reaction_chamber.streamRecipes()
    ```
