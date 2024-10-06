---
title: "Pressure Chamber"
titleTemplate: "PneumaticCraft: Repressurized | CleanroomMC"
description: "Converts any number of input itemstacks into any number of output itemstacks, either generating Pressure or consuming Pressure from the Pressure Chamber."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/PressureChamber.java"
---

# Pressure Chamber (PneumaticCraft: Repressurized)

## Description

Converts any number of input itemstacks into any number of output itemstacks, either generating Pressure or consuming Pressure from the Pressure Chamber.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pneumaticcraft.pressure_chamber/* Used as page default */ // [!code focus]
mods.pneumaticcraft.pressurechamber
mods.pneumaticcraft.pressureChamber
mods.pneumaticcraft.PressureChamber
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.pressure_chamber.add(IPressureChamberRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Pressure Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.pneumaticcraft.pressure_chamber.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `float`. Sets the Pressure consumed to perform the craft, if negative will generate Pressure instead. (Default `0.0f`).

    ```groovy:no-line-numbers
    pressure(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.api.recipe.IPressureChamberRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.pressure_chamber.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:gold_ingot'))
    .pressure(4)
    .register()

mods.pneumaticcraft.pressure_chamber.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:gold_block'), item('minecraft:gold_nugget'), item('minecraft:diamond'), item('minecraft:diamond_block'), item('minecraft:obsidian'), item('minecraft:stone'), item('minecraft:stone:1'), item('minecraft:stone:2'), item('minecraft:stone:3'), item('minecraft:stone:4'), item('minecraft:stone:5'), item('minecraft:stone:6'))
    .output(item('minecraft:cobblestone'))
    .pressure(4)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.pressure_chamber.remove(IPressureChamberRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.pressure_chamber.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.pressure_chamber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.pressure_chamber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pneumaticcraft.pressure_chamber.removeByInput(item('minecraft:iron_block'))
mods.pneumaticcraft.pressure_chamber.removeByOutput(item('minecraft:diamond'))
mods.pneumaticcraft.pressure_chamber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pneumaticcraft.pressure_chamber.streamRecipes()
    ```
