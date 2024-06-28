---
title: "Protein Reactor"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts an input item into Protein, with the amount of Protein generated being based on the number of concurrent conversion processes inside the Protein Reactor."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/ProteinReactor.java"
---

# Protein Reactor (Industrial Foregoing)

## Description

Converts an input item into Protein, with the amount of Protein generated being based on the number of concurrent conversion processes inside the Protein Reactor.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.industrialforegoing.protein_reactor/* Used as page default */ // [!code focus]
mods.industrialforegoing.proteinreactor
mods.industrialforegoing.proteinReactor
mods.industrialforegoing.ProteinReactor
```


## Adding Recipes

- Adds a Protein Reactor recipe in the format `input`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.protein_reactor.add(ItemStack)
    ```

- Adds a Protein Reactor recipe in the format `input`, `nbtCheck`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.protein_reactor.add(ItemStack, Predicate<NBTTagCompound>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.protein_reactor.add(item('minecraft:clay'))
```

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.protein_reactor.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.protein_reactor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.protein_reactor.removeByInput(item('minecraft:porkchop'))
mods.industrialforegoing.protein_reactor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.protein_reactor.streamRecipes()
    ```
