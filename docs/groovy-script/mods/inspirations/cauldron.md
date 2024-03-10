---
title: "Cauldron"
titleTemplate: "Inspirations | CleanroomMC"
description: "Converts up to 1 itemstack and up to 1 fluid into up to 1 itemstack or up to 1 fluid, with a boiling boolean and variable amount of fluid consumed or produced."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/inspirations/Cauldron.java"
---

# Cauldron (Inspirations)

## Description

Converts up to 1 itemstack and up to 1 fluid into up to 1 itemstack or up to 1 fluid, with a boiling boolean and variable amount of fluid consumed or produced.

:::::::::: details Note {open id="note"}
Cauldrons have a cap of either 3 or 4 levels, depending on the config.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.inspirations.cauldron/* Used as page default */ // [!code focus]
mods.inspirations.Cauldron
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Cauldron also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.inspirations.cauldron.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
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

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `EnumDyeColor`. Sets the dye color fluid required for the input. Requires not null.

    ```groovy:no-line-numbers
    dye(String)
    dye(EnumDyeColor)
    ```

- `Cauldron.RecipeBuilder.RecipeType`. Sets what type of recipe is being processed.

    ```groovy:no-line-numbers
    dye()
    mix()
    fill()
    type(String)
    type(Cauldron.RecipeBuilder.RecipeType)
    potion()
    brewing()
    standard()
    transform()
    ```

- `SoundEvent`. Sets the sound played when the recipe is crafted. Requires not null.

    ```groovy:no-line-numbers
    sound(String)
    sound(SoundEvent)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy:no-line-numbers
    levels(int)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy:no-line-numbers
    boiling()
    boiling(Boolean)
    ```

- `PotionType`. Sets the input potion type. Requires not null.

    ```groovy:no-line-numbers
    inputPotion(PotionType)
    ```

- `PotionType`. Sets the output potion type. Requires not null.

    ```groovy:no-line-numbers
    outputPotion(PotionType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.recipeBuilder()
    .standard()
    .input(item('minecraft:gold_ingot'))
    .fluidInput(fluid('lava'))
    .output(item('minecraft:clay'))
    .boiling()
    .sound(sound('minecraft:block.anvil.destroy'))
    .levels(3)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.inspirations.cauldron.recipeBuilderBrewing() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `PotionType`. Sets the input potion type. Requires not null.

    ```groovy:no-line-numbers
    inputPotion(PotionType)
    ```

- `PotionType`. Sets the output potion type. Requires not null.

    ```groovy:no-line-numbers
    outputPotion(PotionType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.recipeBuilderBrewing()
    .input(item('minecraft:diamond_block'))
    .inputPotion(potionType('minecraft:fire_resistance'))
    .outputPotion(potionType('minecraft:strength'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.inspirations.cauldron.recipeBuilderDye() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `EnumDyeColor`. Sets the dye color fluid required for the input. Requires not null.

    ```groovy:no-line-numbers
    dye(String)
    dye(EnumDyeColor)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy:no-line-numbers
    levels(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.recipeBuilderDye()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:diamond_block'))
    .dye('blue')
    .levels(2)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.inspirations.cauldron.recipeBuilderFill() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
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

- `SoundEvent`. Sets the sound played when the recipe is crafted. Requires not null.

    ```groovy:no-line-numbers
    sound(String)
    sound(SoundEvent)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy:no-line-numbers
    boiling()
    boiling(Boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.recipeBuilderFill()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .fluidInput(fluid('milk'))
    .sound(sound('minecraft:block.anvil.destroy'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.inspirations.cauldron.recipeBuilderMix() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 2.

    ```groovy:no-line-numbers
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.recipeBuilderMix()
    .output(item('minecraft:clay'))
    .fluidInput(fluid('milk'), fluid('lava'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.inspirations.cauldron.recipeBuilderPotion() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy:no-line-numbers
    levels(int)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy:no-line-numbers
    boiling()
    boiling(Boolean)
    ```

- `PotionType`. Sets the input potion type. Requires exactly 0 and exactly 1.

    ```groovy:no-line-numbers
    inputPotion(PotionType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.recipeBuilderPotion()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:diamond_block'))
    .inputPotion(potionType('minecraft:fire_resistance'))
    .levels(2)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.inspirations.cauldron.recipeBuilderStandard() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
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

- `SoundEvent`. Sets the sound played when the recipe is crafted. Requires not null.

    ```groovy:no-line-numbers
    sound(String)
    sound(SoundEvent)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy:no-line-numbers
    levels(int)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy:no-line-numbers
    boiling()
    boiling(Boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.recipeBuilderStandard()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .fluidInput(fluid('lava'))
    .levels(3)
    .sound(sound('minecraft:block.anvil.destroy'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.inspirations.cauldron.recipeBuilderTransform() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

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

- `SoundEvent`. Sets the sound played when the recipe is crafted. Requires not null.

    ```groovy:no-line-numbers
    sound(String)
    sound(SoundEvent)
    ```

- `int`. Sets the level of fluid in the cauldron, where each bottle is a single level. Requires greater than or equal to 0 and less than or equal to `InspirationsRegistry.getCauldronMax()`. (Default `0`).

    ```groovy:no-line-numbers
    levels(int)
    ```

- `Boolean`. Sets if the cauldon must be boiling, requiring fire or another heat source beneath. (Default `false`).

    ```groovy:no-line-numbers
    boiling()
    boiling(Boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `knightminer.inspirations.library.recipe.cauldron.ICauldronRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.recipeBuilderTransform()
    .input(item('minecraft:stone:3'))
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('milk'))
    .levels(2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes with the given fluid input:

    ```groovy:no-line-numbers
    mods.inspirations.cauldron.removeByFluidInput(Fluid)
    ```

- Removes all recipes with the given fluid input:

    ```groovy:no-line-numbers
    mods.inspirations.cauldron.removeByFluidInput(FluidStack)
    ```

- Removes all recipes with the given fluid output:

    ```groovy:no-line-numbers
    mods.inspirations.cauldron.removeByFluidOutput(Fluid)
    ```

- Removes all recipes with the given fluid output:

    ```groovy:no-line-numbers
    mods.inspirations.cauldron.removeByFluidOutput(FluidStack)
    ```

- Removes all recipes with the given item input:

    ```groovy:no-line-numbers
    mods.inspirations.cauldron.removeByInput(IIngredient)
    ```

- Removes all recipes with the given item output:

    ```groovy:no-line-numbers
    mods.inspirations.cauldron.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.inspirations.cauldron.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.inspirations.cauldron.removeByFluidInput(fluid('mushroom_stew'))
mods.inspirations.cauldron.removeByFluidOutput(fluid('beetroot_soup'))
mods.inspirations.cauldron.removeByInput(item('minecraft:ghast_tear'))
mods.inspirations.cauldron.removeByOutput(item('minecraft:piston'))
mods.inspirations.cauldron.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.inspirations.cauldron.streamRecipes()
    ```
