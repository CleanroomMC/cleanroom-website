---
title: "Arcane Workbench"
description: "A special crafting table, allowing additional requirements in the form of Vis Crystals, Vis, and having a specific research."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/arcane/ArcaneWorkbench.java"
---

# Arcane Workbench (Thaumcraft)

## Description

A special crafting table, allowing additional requirements in the form of Vis Crystals, Vis, and having a specific research.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.thaumcraft.arcane_workbench/*(1)!*/
mods.thaumcraft.arcaneworkbench
mods.thaumcraft.arcaneWorkbench
mods.thaumcraft.ArcaneWorkbench
mods.tc.arcane_workbench
mods.tc.arcaneworkbench
mods.tc.arcaneWorkbench
mods.tc.ArcaneWorkbench
mods.thaum.arcane_workbench
mods.thaum.arcaneworkbench
mods.thaum.arcaneWorkbench
mods.thaum.ArcaneWorkbench
```

1. This identifier will be used as the default for examples on this page

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Arcane Workbench also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../../groovy/builder.md) out.

:::::::::: details mods.thaumcraft.arcane_workbench.shapedBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1 and less than or equal to 9. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    shape(List<List<IIngredient>>)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `int`. Sets the Vis taken from the aura of the chunk containing the Workbench, or a 3x3 chunk area if the Workbench Charged is installed. Can be reduced by armor and baubles. (Default `0`).

    ```groovy:no-line-numbers
    vis(int)
    ```

- `AspectList`. Sets the Aspect Crystals consumed. Requires that every Aspect can only be one of the main 6 (`aer`, `ignis`, `aqua`, `terra`, `ordo`, `perditio`), and to a maximum of 64 each.

    ```groovy:no-line-numbers
    aspect(String)
    aspect(AspectStack)
    aspect(String, int)
    ```

- `byte`. Sets if the recipe is removed. A value of 1 removes by the output, and a value of 2 removes by the resource location. (Default `0`).

    ```groovy:no-line-numbers
    replace()
    ```

- `boolean`. Sets if the recipe is horizontally mirrored. (Default `false`).

    ```groovy:no-line-numbers
    mirrored()
    mirrored(boolean)
    ```

- `String`. Sets the research required to craft the recipe.

    ```groovy:no-line-numbers
    researchKey(String)
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy:no-line-numbers
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy:no-line-numbers
    recipeAction(Closure<Void>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.arcane_workbench.shapedBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .output(item('minecraft:pumpkin'))
    .row('SS ')
    .row('   ')
    .row('   ')
    .key('S', item('minecraft:pumpkin_seeds'))
    .aspect('terra')
    .vis(5)
    .register()

mods.thaumcraft.arcane_workbench.shapedBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .output(item('minecraft:clay'))
    .matrix('SS ',
            '   ',
            '   ')
    .key('S', item('minecraft:pumpkin'))
    .aspect(aspect('terra'))
    .vis(5)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.thaumcraft.arcane_workbench.shapelessBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `int`. Sets the Vis taken from the aura of the chunk containing the Workbench, or a 3x3 chunk area if the Workbench Charged is installed. Can be reduced by armor and baubles. (Default `0`).

    ```groovy:no-line-numbers
    vis(int)
    ```

- `AspectList`. Sets the Aspect Crystals consumed. Requires that every Aspect can only be one of the main 6 (`aer`, `ignis`, `aqua`, `terra`, `ordo`, `perditio`), and to a maximum of 64 each.

    ```groovy:no-line-numbers
    aspect(String)
    aspect(AspectStack)
    aspect(String, int)
    ```

- `byte`. Sets if the recipe is removed. A value of 1 removes by the output, and a value of 2 removes by the resource location. (Default `0`).

    ```groovy:no-line-numbers
    replace()
    ```

- `String`. Sets the research required to craft the recipe.

    ```groovy:no-line-numbers
    researchKey(String)
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy:no-line-numbers
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy:no-line-numbers
    recipeAction(Closure<Void>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.arcane_workbench.shapelessBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .input(item('minecraft:pumpkin'))
    .input(item('minecraft:stick'))
    .input(item('minecraft:stick'))
    .output(item('thaumcraft:void_hoe'))
    .vis(0)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe with the matching name:

    ```groovy:no-line-numbers
    mods.thaumcraft.arcane_workbench.remove(String)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thaumcraft.arcane_workbench.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thaumcraft.arcane_workbench.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.arcane_workbench.removeByOutput(item('thaumcraft:mechanism_simple'))
mods.thaumcraft.arcane_workbench.removeAll()
```

::::::::::
