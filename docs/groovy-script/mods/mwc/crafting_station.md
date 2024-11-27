---
title: "MWC Crafting"
titleTemplate: "Modern Warfare Cubed | CleanroomMC"
description: "Converts multiple items into another item, with a way to recover some of original resources when dismantled. recipes with group ``BULLET, MAGAZINE, GRENADE`` can be only crafted via Ammo Press, while recipes with ``GUN, ATTACHMENT_NORMAL, ATTACHMENT_MODIFICATION`` categories can only be crafted with Crafting Station."
source_code_link: "https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/next/src/main/java/com/paneedah/mwc/groovyscript/script/CraftingStation.java"
---

# MWC Crafting (Modern Warfare Cubed)

## Description

Converts multiple items into another item, with a way to recover some of original resources when dismantled. recipes with group ``BULLET, MAGAZINE, GRENADE`` can be only crafted via Ammo Press, while recipes with ``GUN, ATTACHMENT_NORMAL, ATTACHMENT_MODIFICATION`` categories can only be crafted with Crafting Station.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mwc.crafting_station/* Used as page default */ // [!code focus]
mods.mwc.craftingstation
mods.mwc.craftingStation
mods.mwc.CraftingStation
mods.mwc.ammo_press
mods.mwc.ammopress
mods.mwc.ammoPress
mods.mwc.AmmoPress
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the MWC Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.mwc.crafting_station.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires less than or equal to 27.

    ```groovy:no-line-numbers
    input(IIngredient...)
    input(IIngredient, double)
    input(double, IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `CraftingGroup`. Category of crafting recipe. Requires not null. (Default `GUN`).

    ```groovy:no-line-numbers
    setGroupGun()
    setGroupBullet()
    setGroupGrenade()
    setGroupMagazine()
    setGroupNormalAttachment()
    setGroupModificationAttachment()
    setGroup(CraftingGroup)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.paneedah.mwc.groovyscript.recipes.GSCrafting`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mwc.crafting_station.recipeBuilder()
    .input(item('minecraft:clay'), 1)
    .output(item('minecraft:diamond'))
    .register()

mods.mwc.crafting_station.recipeBuilder()
    .input(item('minecraft:gold_ingot', 0.5))
    .output(item('minecraft:clay') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Remove all recipes of Bullet Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllBullet()
    ```

- groovyscript.wiki.mwc.crafting_station.removeAllGrenade:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllGrenade()
    ```

- Remove all recipes of Gun Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllGun()
    ```

- Remove all recipes of Magazine Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllMagazine()
    ```

- Remove all recipes of Modification Attachment Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllModificationAttachment()
    ```

- Remove all recipes of Normal Attachment Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllNormalAttachment()
    ```

- groovyscript.wiki.mwc.crafting_station.removeByBullet:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByBullet(IIngredient)
    ```

- groovyscript.wiki.mwc.crafting_station.removeByGrenade:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByGrenade(IIngredient)
    ```

- groovyscript.wiki.mwc.crafting_station.removeByGun:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByGun(IIngredient)
    ```

- groovyscript.wiki.mwc.crafting_station.removeByMagazine:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByMagazine(IIngredient)
    ```

- groovyscript.wiki.mwc.crafting_station.removeByModificationAttachment:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByModificationAttachment(IIngredient)
    ```

- groovyscript.wiki.mwc.crafting_station.removeByNormalAttachment:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByNormalAttachment(IIngredient)
    ```

- Removes Recipe that outputs given `ingredient` from given category. valid categories = "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", "MAGAZINE", "GRENADE":

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeInGroup(IIngredient, CraftingGroup)
    ```

- Removes recipe that outputs given `ingredient` from all categories:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.remove(IIngredient)
    ```

- groovyscript.wiki.mwc.crafting_station.removeAllInGroup:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllInGroup(CraftingGroup)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mwc.crafting_station.removeAllBullet()
mods.mwc.crafting_station.removeAllGrenade()
mods.mwc.crafting_station.removeAllGun()
mods.mwc.crafting_station.removeAllMagazine()
mods.mwc.crafting_station.removeAllModificationAttachment()
mods.mwc.crafting_station.removeAllNormalAttachment()
mods.mwc.crafting_station.removeByBullet(ore('oreDiamond'))
mods.mwc.crafting_station.removeByGrenade(ore('oreDiamond'))
mods.mwc.crafting_station.removeByGun(ore('oreDiamond'))
mods.mwc.crafting_station.removeByMagazine(ore('oreDiamond'))
mods.mwc.crafting_station.removeByModificationAttachment(ore('oreDiamond'))
mods.mwc.crafting_station.removeByNormalAttachment(ore('oreDiamond'))
mods.mwc.crafting_station.remove(ore('oreDiamond'))
mods.mwc.crafting_station.removeAll()
```

::::::::::
