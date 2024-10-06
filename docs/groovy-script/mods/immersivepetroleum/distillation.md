---
title: "Distillation Tower"
titleTemplate: "Immersive Petroleum | CleanroomMC"
description: "Converts an input fluidstack into any number of output fluidstacks and any number of output itemstacks, with each itemstack having the ability to have a custom chance, using energy and taking time."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivepetroleum/Distillation.java"
---

# Distillation Tower (Immersive Petroleum)

## Description

Converts an input fluidstack into any number of output fluidstacks and any number of output itemstacks, with each itemstack having the ability to have a custom chance, using energy and taking time.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.immersivepetroleum.distillation/* Used as page default */ // [!code focus]
mods.immersivepetroleum.Distillation
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.distillation.add(DistillationRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Distillation Tower also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.immersivepetroleum.distillation.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the duration in ticks the recipe takes. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `FloatArrayList`. Sets the chance the corresponding entry in `output` will be output. Requires greater than or equal to 0.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack, float)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `flaxbeard.immersivepetroleum.api.crafting.DistillationRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivepetroleum.distillation.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('water') * 50, fluid('lava') * 30)
    .output(item('minecraft:diamond'), 0.5)
    .output(item('minecraft:clay'), 0.2)
    .output(item('minecraft:diamond'), 0.1)
    .output(item('minecraft:clay'), 0.5)
    .output(item('minecraft:diamond') * 5, 0.01)
    .time(5)
    .energy(1000)
    .register()

mods.immersivepetroleum.distillation.recipeBuilder()
    .fluidInput(fluid('lava') * 5)
    .output(item('minecraft:diamond'))
    .time(1)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.distillation.remove(DistillationRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.distillation.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.distillation.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.distillation.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersivepetroleum.distillation.removeByInput(fluid('oil'))
mods.immersivepetroleum.distillation.removeByOutput(item('immersivepetroleum:material'))
mods.immersivepetroleum.distillation.removeByOutput(fluid('lubricant'))
mods.immersivepetroleum.distillation.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersivepetroleum.distillation.streamRecipes()
    ```
