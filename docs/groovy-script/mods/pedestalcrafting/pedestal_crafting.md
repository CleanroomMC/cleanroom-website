---
title: "Pedestal Crafting"
titleTemplate: "Pedestal Crafting | CleanroomMC"
description: "Converts a number of 2+ inputs into a single output item. The recipe can be customized with various particles."
source_code_link: "https://github.com/Ender-Development/PedestalCrafting-Patched/blob/master/src/main/java/me/axieum/mcmod/pedestalcrafting/compat/groovyscript/PedestalCrafting.java"
---

# Pedestal Crafting (Pedestal Crafting)

## Description

Converts a number of 2+ inputs into a single output item. The recipe can be customized with various particles.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pedestalcrafting.pedestal_crafting/* Used as page default */ // [!code focus]
mods.pedestalcrafting.pedestalcrafting
mods.pedestalcrafting.pedestalCrafting
mods.pedestalcrafting.PedestalCrafting
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Pedestal Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pedestalcrafting.pedestal_crafting.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

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

- `int`. The number of ticks the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    ticks(Integer)
    ```

- `IIngredient`. The center item that is used in the crafting process.

    ```groovy:no-line-numbers
    center(IIngredient)
    ```

- `Map<EnumParticleTypes, Integer>`. Adds a particle effect to the crafting process. The first argument is the particle name, the second argument is the amount of the particles appearing. Names can be referenced from the [Minecraft Wiki](https://minecraft.wiki/w/Java_Edition_Flattening#Particle_IDs) or [DigMinecraft](https://www.digminecraft.com/lists/particle_list_pc_1_12.php).

    ```groovy:no-line-numbers
    addCraftingParticle(String, int)
    addCraftingParticle(EnumParticleTypes, int)
    ```

- `Map<EnumParticleTypes, Integer>`. Adds a particle effect that appears above the core after the crafting process is completed. The first argument is the particle name, the second argument is the amount of the particles appearing. Names can be referenced from the [Minecraft Wiki](https://minecraft.wiki/w/Java_Edition_Flattening#Particle_IDs) or [DigMinecraft](https://www.digminecraft.com/lists/particle_list_pc_1_12.php).

    ```groovy:no-line-numbers
    addPostCraftCoreParticle(String, int)
    addPostCraftCoreParticle(EnumParticleTypes, int)
    ```

- `Map<EnumParticleTypes, Integer>`. Adds a particle effect that appears above each pedestal after the crafting process is completed. The first argument is the particle name, the second argument is the amount of the particles appearing. Names can be referenced from the [Minecraft Wiki](https://minecraft.wiki/w/Java_Edition_Flattening#Particle_IDs) or [DigMinecraft](https://www.digminecraft.com/lists/particle_list_pc_1_12.php).

    ```groovy:no-line-numbers
    addPostCraftPedestalParticle(String, int)
    addPostCraftPedestalParticle(EnumParticleTypes, int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.axieum.mcmod.pedestalcrafting.recipe.PedestalRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pedestalcrafting.pedestal_crafting.recipeBuilder()
    .center(ore('oreIron'))
    .input(ore('stickWood'),ore('plankWood'),ore('logWood'),item('minecraft:stick'))
    .output(item('minecraft:diamond'))
    .ticks(100)
    .register()

mods.pedestalcrafting.pedestal_crafting.recipeBuilder()
    .center(ore('oreGold'))
    .input(item('minecraft:chest'),item('minecraft:piston'))
    .output(item('minecraft:emerald'))
    .ticks(100)
    .addCraftingParticle('fireworkSpark', 10)
    .register()

mods.pedestalcrafting.pedestal_crafting.recipeBuilder()
    .center(ore('oreDiamond'))
    .input(item('minecraft:hopper'),item('minecraft:chest'))
    .output(item('minecraft:stone'))
    .ticks(100)
    .addCraftingParticle('bubble', 10)
    .addPostCraftCoreParticle('suspended', 10)
    .register()

mods.pedestalcrafting.pedestal_crafting.recipeBuilder()
    .center(ore('oreRedstone'))
    .input(item('minecraft:cobblestone'), ore('ingotGold'))
    .output(item('minecraft:redstone'))
    .ticks(100)
    .addCraftingParticle('instantSpell', 10)
    .addPostCraftCoreParticle('dripLava', 10)
    .addPostCraftPedestalParticle('portal', 10)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pedestalcrafting.pedestal_crafting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pedestalcrafting.pedestal_crafting.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pedestalcrafting.pedestal_crafting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pedestalcrafting.pedestal_crafting.removeByInput(item('minecraft:redstone_block'))
mods.pedestalcrafting.pedestal_crafting.removeByOutput(item('minecraft:stick'))
mods.pedestalcrafting.pedestal_crafting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pedestalcrafting.pedestal_crafting.streamRecipes()
    ```
