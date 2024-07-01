---
title: "Entity Melting"
titleTemplate: "Tinkers' Construct | CleanroomMC"
description: "Allows mobs to create a bit of fluid when hurt by the Smeltery."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/EntityMelting.java"
---

# Entity Melting (Tinkers' Construct)

## Description

Allows mobs to create a bit of fluid when hurt by the Smeltery.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.tconstruct.entity_melting/* Used as page default */ // [!code focus]
mods.tconstruct.entitymelting
mods.tconstruct.entityMelting
mods.tconstruct.EntityMelting
mods.tinkersconstruct.entity_melting
mods.tinkersconstruct.entitymelting
mods.tinkersconstruct.entityMelting
mods.tinkersconstruct.EntityMelting
mods.ticon.entity_melting
mods.ticon.entitymelting
mods.ticon.entityMelting
mods.ticon.EntityMelting
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Entity Melting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.tconstruct.entity_melting.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. The entity to melt. Requires not null.

    ```groovy:no-line-numbers
    input(String)
    input(EntityEntry)
    input(String, String)
    input(ResourceLocation)
    ```

- `FluidStack`. The fluid created each damage tick. Requires not null.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.mods.tinkersconstruct.recipe.EntityMeltingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.entity_melting.recipeBuilder()
    .fluidOutput(fluid('iron') * 500)
    .input(resource('minecraft:pig'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.tconstruct.entity_melting.removeByInput(EntityEntry)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.tconstruct.entity_melting.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.tconstruct.entity_melting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.entity_melting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.tconstruct.entity_melting.streamRecipes()
    ```
