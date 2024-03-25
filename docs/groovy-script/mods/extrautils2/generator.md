---
title: "Generators"
titleTemplate: "Extra Utilities 2 | CleanroomMC"
description: "Converts up to two input itemstacks and an input fluidstack into energy over time."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Generator.java"
---

# Generators (Extra Utilities 2)

## Description

Converts up to two input itemstacks and an input fluidstack into energy over time.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.extrautils2.generator/* Used as page default */ // [!code focus]
mods.extrautils2.Generator
mods.extrautilities2.generator
mods.extrautilities2.Generator
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Generators also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.extrautils2.generator.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `int`. Sets the total energy produced by the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

- `Machine`. Sets the generator the recipe is added to. Some generators require different numbers of input itemstacks or fluidstacks. Requires not null.

    ```groovy:no-line-numbers
    generator(String)
    generator(Machine)
    generator(ResourceLocation)
    ```

- `int`. Sets the energy produced per tick by the recipe. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    energyPerTick(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.rwtema.extrautils2.api.machine.IMachineRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrautils2.generator.recipeBuilder()
    .generator('extrautils2:generator_pink')
    .input(item('minecraft:clay'))
    .energy(1000)
    .energyPerTick(100)
    .register()

mods.extrautils2.generator.recipeBuilder()
    .generator('extrautils2:generator_slime')
    .input(item('minecraft:clay') * 3)
    .input(item('minecraft:gold_ingot'))
    .energy(1000000)
    .energyPerTick(100)
    .register()

mods.extrautils2.generator.recipeBuilder()
    .generator('extrautils2:generator_redstone')
    .input(item('minecraft:clay') * 3)
    .fluidInput(fluid('water') * 300)
    .energy(1000)
    .energyPerTick(100)
    .register()

mods.extrautils2.generator.recipeBuilder()
    .generator('extrautils2:generator_lava')
    .fluidInput(fluid('water') * 300)
    .energy(100)
    .energyPerTick(1000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes a Generator recipe in the format `generator`, `fluidstack`:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.remove(Machine, FluidStack)
    ```

- Removes a Generator recipe in the format `generator`, `itemstack`:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.remove(Machine, ItemStack)
    ```

- Removes a Generator recipe in the format `generator`, `fluidstack`:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.remove(ResourceLocation, FluidStack)
    ```

- Removes a Generator recipe in the format `generator`, `itemstack`:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.remove(ResourceLocation, ItemStack)
    ```

- Removes a Generator recipe in the format `generator`, `fluidstack`:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.remove(String, FluidStack)
    ```

- Removes a Generator recipe in the format `generator`, `itemstack`:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.remove(String, ItemStack)
    ```

- Removes all recipes with given generator:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.removeByGenerator(Machine)
    ```

- Removes all recipes with given generator:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.removeByGenerator(ResourceLocation)
    ```

- Removes all recipes with given generator:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.removeByGenerator(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.extrautils2.generator.remove('extrautils2:generator_lava', fluid('lava'))
mods.extrautils2.generator.remove('extrautils2:generator_culinary', item('minecraft:apple'))
mods.extrautils2.generator.removeByGenerator('extrautils2:generator_death')
mods.extrautils2.generator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.extrautils2.generator.streamRecipes()
    ```
