---
title: "Flower Generation"
titleTemplate: "Roots 3 | CleanroomMC"
description: "When running the Flower Growth Ritual, allowed flowers will generate in the area if they can be placed on the given soil block. Additionally, using the spell Growth Infusion's Floral Reproduction modifier will duplicate the flower, regardless of the soil block."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/FlowerGeneration.java"
---

# Flower Generation (Roots 3)

## Description

When running the Flower Growth Ritual, allowed flowers will generate in the area if they can be placed on the given soil block. Additionally, using the spell Growth Infusion's Floral Reproduction modifier will duplicate the flower, regardless of the soil block.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.flower_generation/* Used as page default */ // [!code focus]
mods.roots.flowergeneration
mods.roots.flowerGeneration
mods.roots.FlowerGeneration
```


## Adding Entries

### Recipe Builder

Just like other recipe types, the Flower Generation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.roots.flower_generation.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IBlockState`. Sets the flower blockstate. Requires not null.

    ```groovy:no-line-numbers
    flower(Block, int)
    flower(IBlockState)
    ```

- `List<Ingredient>`. Sets the list of allowed blocks beneath the flower, where an empty list allows any block, in the form of an IIngredient that is converted into a IBlockState.

    ```groovy:no-line-numbers
    allowedSoils(IIngredient)
    allowedSoils(IIngredient...)
    allowedSoils(Collection<IIngredient>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.FlowerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.flower_generation.recipeBuilder()
    .name('clay_flower')
    .flower(blockstate('minecraft:clay'))
    .register()

mods.roots.flower_generation.recipeBuilder()
    .flower(blockstate('minecraft:gold_block'))
    .allowedSoils(item('minecraft:dirt'), item('minecraft:sandstone'))
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes all Flower Generation entries with the given Block:

    ```groovy:no-line-numbers
    mods.roots.flower_generation.removeByFlower(Block)
    ```

- Removes the Flower Generation entry with the given Block and int metadata:

    ```groovy:no-line-numbers
    mods.roots.flower_generation.removeByFlower(Block, int)
    ```

- Removes the Flower Generation entry with the given IBlockState:

    ```groovy:no-line-numbers
    mods.roots.flower_generation.removeByFlower(IBlockState)
    ```

- Removes the Flower Generation entry with the given ItemStack converted into an IBlockState:

    ```groovy:no-line-numbers
    mods.roots.flower_generation.removeByFlower(ItemStack)
    ```

- Removes the Flower Generation entry with the given name:

    ```groovy:no-line-numbers
    mods.roots.flower_generation.removeByName(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.flower_generation.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.flower_generation.removeByFlower(block('minecraft:red_flower'))
mods.roots.flower_generation.removeByFlower(block('minecraft:red_flower'), 1)
mods.roots.flower_generation.removeByFlower(blockstate('minecraft:red_flower:2'))
mods.roots.flower_generation.removeByFlower(item('minecraft:red_flower:3'))
mods.roots.flower_generation.removeByName(resource('roots:dandelion'))
mods.roots.flower_generation.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.flower_generation.streamRecipes()
    ```
