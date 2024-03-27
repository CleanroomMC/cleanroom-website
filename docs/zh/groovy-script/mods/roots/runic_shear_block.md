---
title: "Runic Shear Block"
titleTemplate: "Roots 3 | CleanroomMC"
description: "Right clicking a Runic Shear on a block to convert it into a replacement block and drop items."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/RunicShearBlock.java"
---

# Runic Shear Block (Roots 3)

## Description

Right clicking a Runic Shear on a block to convert it into a replacement block and drop items.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.runic_shear_block/* Used as page default */ // [!code focus]
mods.roots.runicshearblock
mods.roots.runicShearBlock
mods.roots.RunicShearBlock
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Runic Shear Block also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.roots.runic_shear_block.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `BlockStatePredicate`. Sets the target input blockstate. Requires not null.

    ```groovy:no-line-numbers
    state(IBlockState)
    state(BlockStatePredicate)
    ```

- `ItemStack`. Sets the item representing the target input blockstate.

    ```groovy:no-line-numbers
    displayItem(ItemStack)
    ```

- `IBlockState`. Sets the blockstate replacing the input block. Requires not null.

    ```groovy:no-line-numbers
    replacementState(IBlockState)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.RunicShearRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.runic_shear_block.recipeBuilder()
    .name('clay_from_runic_diamond')
    .state(blockstate('minecraft:diamond_block'))
    .replacementState(blockstate('minecraft:air'))
    .output(item('minecraft:clay') * 64)
    .displayItem(item('minecraft:diamond') * 9)
    .register()

mods.roots.runic_shear_block.recipeBuilder()
    .state(mods.roots.predicates.stateBuilder().blockstate(blockstate('minecraft:yellow_flower:type=dandelion')).properties('type').register())
    .replacementState(blockstate('minecraft:red_flower:type=poppy'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the Runic Shear Block recipe with the given name:

    ```groovy:no-line-numbers
    mods.roots.runic_shear_block.removeByName(ResourceLocation)
    ```

- Removes the Runic Shear Block recipe with the given output itemstack:

    ```groovy:no-line-numbers
    mods.roots.runic_shear_block.removeByOutput(ItemStack)
    ```

- Removes the Runic Shear Block recipe with the given output IBlockState:

    ```groovy:no-line-numbers
    mods.roots.runic_shear_block.removeByState(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.runic_shear_block.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.runic_shear_block.removeByName(resource('roots:wildewheet'))
mods.roots.runic_shear_block.removeByOutput(item('roots:spirit_herb'))
mods.roots.runic_shear_block.removeByState(blockstate('minecraft:beetroots:age=3'))
mods.roots.runic_shear_block.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.runic_shear_block.streamRecipes()
    ```
