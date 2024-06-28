---
title: "Alchemy Condenser"
titleTemplate: "Rustic | CleanroomMC"
description: "Converts some number of input itemstacks and a fluidstack into a single output stack after a time in a small multiblock structure, with a basic and advanced tier."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/rustic/Alchemy.java"
---

# Alchemy Condenser (Rustic)

## Description

Converts some number of input itemstacks and a fluidstack into a single output stack after a time in a small multiblock structure, with a basic and advanced tier.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.rustic.alchemy/* Used as page default */ // [!code focus]
mods.rustic.Alchemy
mods.rustic.condenser
mods.rustic.Condenser
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Alchemy Condenser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.rustic.alchemy.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2 or 3.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1. (Default `fluid('water') * 125`).

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    effect(PotionEffect)
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe will take. (Default `400`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `IIngredient`. Sets the itemstack used in the bottle slot. (Default `IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    bottle(IIngredient)
    ```

- `boolean`. Sets if the recipe occurs in the normal Condenser or the Advanced Condenser. (Default `false`).

    ```groovy:no-line-numbers
    advanced()
    advanced(boolean)
    ```

- `IIngredient`. Sets the additional item input modifier, used exclusively in the Advanced Condenser. (Default `IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    modifier(IIngredient)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `rustic.common.crafting.ICondenserRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.rustic.alchemy.recipeBuilder()
    .input(item('minecraft:stone'), item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .time(20)
    .register()

mods.rustic.alchemy.recipeBuilder()
    .input(item('minecraft:stone'), item('minecraft:gold_ingot'), item('minecraft:diamond'))
    .bottle(item('minecraft:torch'))
    .advanced()
    .effect(new PotionEffect(potion('minecraft:night_vision'), 3600, 1))
    .register()

mods.rustic.alchemy.recipeBuilder()
    .input(item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'))
    .modifier(item('minecraft:clay'))
    .fluidInput(fluid('lava') * 500)
    .advanced()
    .output(item('minecraft:diamond'))
    .register()

mods.rustic.alchemy.recipeBuilder()
    .input(item('minecraft:cobblestone'), item('minecraft:cobblestone'))
    .fluidInput(fluid('lava') * 25)
    .bottle(item('minecraft:bucket'))
    .output(item('minecraft:lava_bucket'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.rustic.alchemy.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.rustic.alchemy.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.rustic.alchemy.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.rustic.alchemy.removeByInput(item('minecraft:sugar'))
mods.rustic.alchemy.removeByOutput(item('rustic:elixir').withNbt(['ElixirEffects': [['Effect': 'minecraft:night_vision', 'Duration': 3600, 'Amplifier': 0]]]))
mods.rustic.alchemy.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.rustic.alchemy.streamRecipes()
    ```
