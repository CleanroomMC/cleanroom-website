---
title: "Lexicon Category"
titleTemplate: "Botania | CleanroomMC"
description: "Category creates a new entry on the front page of the Lexica Botania."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Lexicon.java"
---

# Lexicon Category (Botania)

## Description

Category creates a new entry on the front page of the Lexica Botania.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.category/* Used as page default */ // [!code focus]
mods.botania.Category
```


## Adding Entries

- Adds a Category to the Lexica Botania in the format `name`, `icon` and a priority of 5:

    ```groovy:no-line-numbers
    mods.botania.category.add(String, ResourceLocation)
    ```

- Adds a Category to the Lexica Botania in the format `name`, `icon`, `priority`:

    ```groovy:no-line-numbers
    mods.botania.category.add(String, ResourceLocation, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.category.add('test', resource('minecraft:textures/items/apple.png'))
mods.botania.category.add('first', resource('minecraft:textures/items/clay_ball.png'), 100)
```

::::::::::

## Removing Entries

- Removes a Category matching the given name:

    ```groovy:no-line-numbers
    mods.botania.category.remove(String)
    ```

- Removes a Category matching the given name:

    ```groovy:no-line-numbers
    mods.botania.category.removeCategory(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania.category.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.category.remove('botania.category.alfhomancy')
mods.botania.category.removeCategory('botania.category.misc')
mods.botania.category.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania.category.streamCategories()
    ```
