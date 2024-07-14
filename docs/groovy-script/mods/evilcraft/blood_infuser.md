---
title: "Blood Infuser"
titleTemplate: "EvilCraft | CleanroomMC"
description: "Consumes an item, some fluid, and requires a given tier of Promise of Tenacity to produce the output and some experience after a duration."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/evilcraft/BloodInfuser.java"
---

# Blood Infuser (EvilCraft)

## Description

Consumes an item, some fluid, and requires a given tier of Promise of Tenacity to produce the output and some experience after a duration.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.evilcraft.blood_infuser/* Used as page default */ // [!code focus]
mods.evilcraft.bloodinfuser
mods.evilcraft.bloodInfuser
mods.evilcraft.BloodInfuser
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Blood Infuser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.evilcraft.blood_infuser.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    blood(int)
    fluidInput(int)
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `float`. Sets the experience gained by taking the output item out of the Blood Infuser. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    xp(float)
    ```

- `int`. Sets the tier of the recipe, determined by the Promise of Tenacity contained within the upgrade slots of the machine. Requires greater than or equal to 0 and less than or equal to 3. (Default `0`).

    ```groovy:no-line-numbers
    tier(int)
    ```

- `int`. Sets the base time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    duration(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.cyclops.cyclopscore.recipe.custom.api.IRecipe<org.cyclops.evilcraft.core.recipe.custom.IngredientFluidStackAndTierRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.IngredientRecipeComponent, org.cyclops.evilcraft.core.recipe.custom.DurationXpRecipeProperties>`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.evilcraft.blood_infuser.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .fluidInput(fluid('evilcraftblood') * 1000)
    .tier(3)
    .duration(100)
    .xp(10000)
    .register()

mods.evilcraft.blood_infuser.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .fluidInput(100000)
    .register()

mods.evilcraft.blood_infuser.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay') * 4)
    .fluidInput(5000)
    .tier(1)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.evilcraft.blood_infuser.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.evilcraft.blood_infuser.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.evilcraft.blood_infuser.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.evilcraft.blood_infuser.removeByInput(item('evilcraft:dark_gem'))
mods.evilcraft.blood_infuser.removeByOutput(item('minecraft:leather'))
mods.evilcraft.blood_infuser.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.evilcraft.blood_infuser.streamRecipes()
    ```
