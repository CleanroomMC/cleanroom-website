---
title: "Modifiers"
titleTemplate: "Roots 3 | CleanroomMC"
description: "Controls what spell modifiers are enabled and can be used."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Modifiers.java"
---

# Modifiers (Roots 3)

## Description

Controls what spell modifiers are enabled and can be used.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.modifiers/* Used as page default */ // [!code focus]
mods.roots.Modifiers
```


## Adding Entries

- Enable the disabled modifier:

    ```groovy:no-line-numbers
    mods.roots.modifiers.enable(Modifier)
    ```

- Enable any disabled modifiers with the given resource location:

    ```groovy:no-line-numbers
    mods.roots.modifiers.enable(ResourceLocation)
    ```

- Enable all disabled modifiers for the given spell:

    ```groovy:no-line-numbers
    mods.roots.modifiers.enable(SpellBase)
    ```

- Enable any disabled modifiers with the given string as a resource location, defaulting to a namespace of `roots` if not provided:

    ```groovy:no-line-numbers
    mods.roots.modifiers.enable(String)
    ```

- Enable all disabled modifiers:

    ```groovy:no-line-numbers
    mods.roots.modifiers.enableAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.modifiers.enable(modifier('roots:weakened_response'))
mods.roots.modifiers.enable(resource('roots:animal_savior'))
mods.roots.modifiers.enable('extended_geas')
mods.roots.modifiers.enableAll()
```

::::::::::

## Removing Entries

- Disable the enabled modifier:

    ```groovy:no-line-numbers
    mods.roots.modifiers.disable(Modifier)
    ```

- Disable any enabled modifiers with the given resource location:

    ```groovy:no-line-numbers
    mods.roots.modifiers.disable(ResourceLocation)
    ```

- Disable all enabled modifiers for the given spell:

    ```groovy:no-line-numbers
    mods.roots.modifiers.disable(SpellBase)
    ```

- Disable any enabled modifiers with the given string as a resource location, defaulting to a namespace of `roots` if not provided:

    ```groovy:no-line-numbers
    mods.roots.modifiers.disable(String)
    ```

- Disable all enabled modifiers:

    ```groovy:no-line-numbers
    mods.roots.modifiers.disableAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.modifiers.disable(spell('spell_geas'))
mods.roots.modifiers.disableAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.modifiers.streamRecipes()
    ```
