---
title: "Categories"
titleTemplate: "Just Enough Items | CleanroomMC"
description: "Modify the Categories visible in JEI, each of which contain recipes and are associated with specific blocks, typically machines."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Category.java"
---

# Categories (Just Enough Items)

## Description

Modify the Categories visible in JEI, each of which contain recipes and are associated with specific blocks, typically machines.

:::::::::: details Note {open id="note"}
Hidden Categories will still take up load time, and recipes contained within can still be processed. This only prevents seeing Categories.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.hei.category
mods.hei.Category
mods.jei.category/* Used as page default */ // [!code focus]
mods.jei.Category
```


## Removing Entries

- Hides the given category from JEI:

    ```groovy:no-line-numbers
    mods.jei.category.hideCategory(String)
    ```

- Hides the given category from JEI:

    ```groovy:no-line-numbers
    mods.jei.category.remove(String)
    ```

- Hides all categories from JEI:

    ```groovy:no-line-numbers
    mods.jei.category.hideAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.category.hideCategory('minecraft.fuel')
mods.jei.category.hideAll()
```

::::::::::
