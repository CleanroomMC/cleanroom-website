---
title: "Pacifist"
titleTemplate: "Roots 3 | CleanroomMC"
description: "Pacifist is a list of entities which killing will give the player the advancement 'Untrue Pacifist'."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Pacifist.java"
---

# Pacifist (Roots 3)

## Description

Pacifist is a list of entities which killing will give the player the advancement 'Untrue Pacifist'.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.pacifist/* Used as page default */ // [!code focus]
mods.roots.Pacifist
```


## Adding Entries

### Recipe Builder

Just like other recipe types, the Pacifist also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.roots.pacifist.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `Class<? extends Entity>`. Sets the target entity. Requires not null.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.PacifistEntry`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.pacifist.recipeBuilder()
    .name('wither_skeleton_pacifist')
    .entity(entity('minecraft:wither_skeleton'))
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the Pacifist entry with the given Entity class:

    ```groovy:no-line-numbers
    mods.roots.pacifist.removeByClass(Class<? extends Entity>)
    ```

- Removes the Pacifist entry for the given Entity:

    ```groovy:no-line-numbers
    mods.roots.pacifist.removeByEntity(EntityEntry)
    ```

- Removes the Pacifist entry with the given name:

    ```groovy:no-line-numbers
    mods.roots.pacifist.removeByName(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.pacifist.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.pacifist.removeByEntity(entity('minecraft:cow'))
mods.roots.pacifist.removeByName(resource('minecraft:chicken'))
mods.roots.pacifist.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.pacifist.streamRecipes()
    ```
