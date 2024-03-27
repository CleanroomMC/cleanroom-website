---
title: "Tartaric Forge"
titleTemplate: "Blood Magic: Alchemical Wizardry | CleanroomMC"
description: "Converts up to 4 input items into an output itemstack, requiring a Tartaric gem with a minimum amount of souls, and consuming some."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bloodmagic/TartaricForge.java"
---

# Tartaric Forge (Blood Magic: Alchemical Wizardry)

## Description

Converts up to 4 input items into an output itemstack, requiring a Tartaric gem with a minimum amount of souls, and consuming some.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.bm.tartaric_forge
mods.bm.tartaricforge
mods.bm.tartaricForge
mods.bm.TartaricForge
mods.bloodmagic.tartaric_forge/* Used as page default */ // [!code focus]
mods.bloodmagic.tartaricforge
mods.bloodmagic.tartaricForge
mods.bloodmagic.TartaricForge
```


## Adding Recipes

- Adds recipes in the format `input`, `output`, `minimumSouls`, `soulDrain`:

    ```groovy:no-line-numbers
    mods.bloodmagic.tartaric_forge.add(NonNullList<Ingredient>, ItemStack, double, double)
    ```


### Recipe Builder

Just like other recipe types, the Tartaric Forge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.bloodmagic.tartaric_forge.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

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

- `double`. Sets how much Demonic Will is drained from the Tartaric Gem when the craft is completed. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    drain(int)
    soulDrain(double)
    ```

- `double`. Sets how much Demonic Will is required in the Tartaric Gem to start the craft. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    minimumSouls(double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `WayofTime.bloodmagic.api.impl.recipe.RecipeTartaricForge`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bloodmagic.tartaric_forge.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .soulDrain(5)
    .minimumSouls(10)
    .register()

mods.bloodmagic.tartaric_forge.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .drain(200)
    .minimumSouls(500)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bloodmagic.tartaric_forge.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bloodmagic.tartaric_forge.removeByInput(NonNullList<IIngredient>)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bloodmagic.tartaric_forge.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bloodmagic.tartaric_forge.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bloodmagic.tartaric_forge.removeByInput(item('minecraft:cauldron'), item('minecraft:stone'), item('minecraft:dye:4'), item('minecraft:diamond'))
mods.bloodmagic.tartaric_forge.removeByInput(item('minecraft:gunpowder'), item('minecraft:redstone'))
mods.bloodmagic.tartaric_forge.removeByOutput(item('bloodmagic:demon_crystal'))
mods.bloodmagic.tartaric_forge.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bloodmagic.tartaric_forge.streamRecipes()
    ```
