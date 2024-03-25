---
title: "Ingredient Sidebar"
titleTemplate: "Just Enough Items | CleanroomMC"
description: "Modify what ingredients show up in the search menu sidebar."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Ingredient.java"
---

# Ingredient Sidebar (Just Enough Items)

## Description

Modify what ingredients show up in the search menu sidebar.

:::::::::: details Note {open id="note"}
Hidden ingredients will still take up load time, and recipes to create them can still be done. This only prevents seeing the ingredients in JEI.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.hei.ingredient
mods.hei.Ingredient
mods.hei.sidebar
mods.hei.Sidebar
mods.jei.ingredient/* Used as page default */ // [!code focus]
mods.jei.Ingredient
mods.jei.sidebar
mods.jei.Sidebar
```


## Adding Entries

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.add(IIngredient)
    ```

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.add(IIngredient...)
    ```

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.add(IIngredientType<?>, Collection<Object>)
    ```

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.add(IIngredientType<?>, Object...)
    ```

- Adds the given ingredient with its given NBT data to JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.add(Iterable<IIngredient>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.ingredient.add(item('minecraft:stone:1').withNbt([display:[Name:'Special Granite']]))
mods.jei.ingredient.add(VanillaTypes.ITEM, item('minecraft:bed').withNbt([display:[Name:'Beds come in 16 different colors!']]))
```

::::::::::

## Removing Entries

- Hides the ingredient from JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.hide(IIngredient)
    ```

- Hides the ingredient from JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.hide(IIngredient...)
    ```

- Hides the ingredient from JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.hide(IIngredientType<?>, Collection<Object>)
    ```

- Hides the ingredient from JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.hide(IIngredientType<?>, Object...)
    ```

- Hides the ingredient from JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.hide(Iterable<IIngredient>)
    ```

- Hides all ingredients of the given type:

    ```groovy:no-line-numbers
    mods.jei.ingredient.hideByType(IIngredientType<?>)
    ```

- Removes the vanilla crafting recipe for the given ItemStack and hides the item from JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.removeAndHide(IIngredient)
    ```

- Removes the vanilla crafting recipe for the given ItemStack and hides the item from JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.removeAndHide(IIngredient...)
    ```

- Removes the vanilla crafting recipe for the given ItemStack and hides the item from JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.removeAndHide(Iterable<IIngredient>)
    ```

- Alias for `removeAndHide`:

    ```groovy:no-line-numbers
    mods.jei.ingredient.yeet(IIngredient)
    ```

- Alias for `removeAndHide`:

    ```groovy:no-line-numbers
    mods.jei.ingredient.yeet(IIngredient...)
    ```

- Alias for `removeAndHide`:

    ```groovy:no-line-numbers
    mods.jei.ingredient.yeet(Iterable<IIngredient>)
    ```

- Hides all ingredients of all types from the sidebar. Functionally disables JEI:

    ```groovy:no-line-numbers
    mods.jei.ingredient.hideAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.ingredient.hide(fluid('water'))
mods.jei.ingredient.hide(item('minecraft:stone:1'), item('minecraft:stone:3'))
mods.jei.ingredient.hide(VanillaTypes.ITEM, item('minecraft:bed:*'))
mods.jei.ingredient.hide(mekanism.client.jei.MekanismJEI.TYPE_GAS, gas('tritium'))
mods.jei.ingredient.hideByType(com.buuz135.thaumicjei.ThaumcraftJEIPlugin.ASPECT_LIST)
mods.jei.ingredient.hideByType(mekanism.client.jei.MekanismJEI.TYPE_GAS)
mods.jei.ingredient.hideByType(VanillaTypes.ITEM)
mods.jei.ingredient.hideByType(VanillaTypes.ENCHANT)
mods.jei.ingredient.hideByType(VanillaTypes.FLUID)
mods.jei.ingredient.hideAll()
```

::::::::::
