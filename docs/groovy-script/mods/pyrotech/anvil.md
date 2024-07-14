---
title: "Anvil"
titleTemplate: "Pyrotech | CleanroomMC"
description: "When using hammer or pickaxe it can convert items"
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/Anvil.java"
---

# Anvil (Pyrotech)

## Description

When using hammer or pickaxe it can convert items

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.anvil/* Used as page default */ // [!code focus]
mods.pyrotech.Anvil
```


## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `hits`, `tier`, `type`:

    ```groovy:no-line-numbers
    mods.pyrotech.anvil.add(String, IIngredient, ItemStack, int, String, String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.anvil.add('iron_to_clay', ore('ingotIron') * 5, item('minecraft:clay_ball') * 20, 9, 'granite', 'hammer')
```

::::::::::

### Recipe Builder

Just like other recipe types, the Anvil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pyrotech.anvil.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

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

- `int`. Sets how often the item needs to be hit. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    hits(int)
    ```

- `AnvilRecipe.EnumTier`. Sets the tier of the required anvil (Granite, Ironclad, Obsidian).

    ```groovy:no-line-numbers
    tier(AnvilRecipe.EnumTier)
    tierGranite()
    tierIronclad()
    tierObsidian()
    ```

- `AnvilRecipe.EnumType`. Sets the type of tool required (Hammer, Pickaxe).

    ```groovy:no-line-numbers
    type(AnvilRecipe.EnumType)
    typeHammer()
    typePickaxe()
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.AnvilRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.anvil.recipeBuilder()
    .input(item('minecraft:diamond') * 4)
    .output(item('minecraft:emerald') * 2)
    .hits(5)
    .typeHammer()
    .tierGranite()
    .name('diamond_to_emerald_granite_anvil')
    .register()

mods.pyrotech.anvil.recipeBuilder()
    .input(item('minecraft:diamond') * 8)
    .output(item('minecraft:nether_star') * 1)
    .hits(10)
    .typePickaxe()
    .tierIronclad()
    .name('diamond_to_nether_star_ironclad_anvil')
    .register()

mods.pyrotech.anvil.recipeBuilder()
    .input(item('minecraft:diamond') * 4)
    .output(item('minecraft:gold_ingot') * 16)
    .hits(5)
    .typePickaxe()
    .tierObsidian()
    .name('diamond_to_gold_obsidian_anvil')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.anvil.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.anvil.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.anvil.removeByOutput(item('minecraft:stone_slab', 3))
mods.pyrotech.anvil.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.anvil.streamRecipes()
    ```
