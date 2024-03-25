---
title: "Description Category"
titleTemplate: "Just Enough Items | CleanroomMC"
description: "Modify the description of the input items, where the description is a unique JEI tab containing text."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Description.java"
---

# Description Category (Just Enough Items)

## Description

Modify the description of the input items, where the description is a unique JEI tab containing text.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.hei.description
mods.hei.Description
mods.jei.description/* Used as page default */ // [!code focus]
mods.jei.Description
```


## Adding Entries

- Adds the given description to the given ingredients, translating the description lines as needed:

    ```groovy:no-line-numbers
    mods.jei.description.add(IIngredient, List<String>)
    ```

- Adds the given description to the given ingredients, translating the description lines as needed:

    ```groovy:no-line-numbers
    mods.jei.description.add(IIngredient, String...)
    ```

- Adds the given description to the given ingredients, translating the description lines as needed:

    ```groovy:no-line-numbers
    mods.jei.description.add(List<IIngredient>, List<String>)
    ```

- Adds the given description to the given ingredients, translating the description lines as needed:

    ```groovy:no-line-numbers
    mods.jei.description.add(List<IIngredient>, String...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.description.add(item('minecraft:clay'), ['wow', 'this', 'is', 'neat'])
mods.jei.description.add(item('minecraft:gold_ingot'), 'groovyscript.recipe.fluid_recipe')
```

::::::::::

## Removing Entries

- Removes any description from the given ingredients:

    ```groovy:no-line-numbers
    mods.jei.description.remove(IIngredient...)
    ```

- Removes any description from the given ingredients:

    ```groovy:no-line-numbers
    mods.jei.description.remove(List<IIngredient>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.description.remove(item('thaumcraft:triple_meat_treat'))
```

::::::::::
