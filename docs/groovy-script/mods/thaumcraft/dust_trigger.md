---
title: "Dust Trigger"
titleTemplate: "Thaumcraft | CleanroomMC"
description: "Converts a block in-world into an item, when interacting with it with Salis Mundus, potentially requiring a specific research to be completed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/DustTrigger.java"
---

# Dust Trigger (Thaumcraft)

## Description

Converts a block in-world into an item, when interacting with it with Salis Mundus, potentially requiring a specific research to be completed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.thaumcraft.dust_trigger/* Used as page default */ // [!code focus]
mods.thaumcraft.dusttrigger
mods.thaumcraft.dustTrigger
mods.thaumcraft.DustTrigger
mods.tc.dust_trigger
mods.tc.dusttrigger
mods.tc.dustTrigger
mods.tc.DustTrigger
mods.thaum.dust_trigger
mods.thaum.dusttrigger
mods.thaum.dustTrigger
mods.thaum.DustTrigger
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Dust Trigger also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thaumcraft.dust_trigger.triggerBuilder() {open id="abstract"}
- `String`. Sets the input as an ore. Requires either ore or target must be defined, but not both.

    ```groovy:no-line-numbers
    target(String)
    target(OreDictIngredient)
    ```

- `ItemStack`. Sets the output item, which will be dropped on the ground.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `Block`. Sets the input as a block. Requires either ore or target must be defined, but not both.

    ```groovy:no-line-numbers
    target(Block)
    ```

- `String`. Sets the research required to craft the recipe.

    ```groovy:no-line-numbers
    researchKey(String)
    ```

- First validates the builder, outputting errors to the log file if the validation failed, then registers the builder.

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.dust_trigger.triggerBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .target(block('minecraft:obsidian'))
    .output(item('minecraft:enchanting_table'))
    .register()

mods.thaumcraft.dust_trigger.triggerBuilder()
    .researchKey('UNLOCKALCHEMY@3')
    .target(ore('cropPumpkin'))
    .output(item('minecraft:lit_pumpkin'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.thaumcraft.dust_trigger.removeByOutput(ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.dust_trigger.removeByOutput(item('thaumcraft:arcane_workbench'))
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thaumcraft.dust_trigger.streamRecipes()
    ```
