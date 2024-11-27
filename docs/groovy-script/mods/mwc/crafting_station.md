---
title: "Crafting Station/Ammo Press"
titleTemplate: "Modern Warfare Cubed | CleanroomMC"
description: "Converts multiple items into another item, with a way to recover some of original resources when dismantled."
source_code_link: "https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/next/src/main/java/com/paneedah/mwc/groovyscript/script/CraftingStation.java"
---

# Crafting Station/Ammo Press (Modern Warfare Cubed)

## Description

Converts multiple items into another item, with a way to recover some of original resources when dismantled.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mwc.crafting_station/* Used as page default */ // [!code focus]
mods.mwc.craftingstation
mods.mwc.craftingStation
mods.mwc.CraftingStation
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crafting Station/Ammo Press also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.mwc.crafting_station.recipeBuilder() {open id="abstract"}
- `CraftingGroup`. Category of crafting recipe. Requires not null. (Default `GUN`).

    ```groovy:no-line-numbers
    setGroupGun()
    setGroupBullet()
    setGroupMagazine()
    setGroupNormalAttachment()
    setGroupModificationAttachment()
    setGroup(String)
    setGroup(CraftingGroup)
    ```

- `double`. Recover ratio of ingredient when dismantling item. Requires greater than or equal to 0. (Default `1.0`).

    ```groovy:no-line-numbers
    setYield(double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.paneedah.mwc.groovyscript.recipes.GSCrafting`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mwc.crafting_station.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.mwc.crafting_station.recipeBuilder()
    .setYield(0.5)
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Remove ALL recipes of Bullet Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllBullet()
    ```

- Remove ALL recipes of Gun Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllGun()
    ```

- Remove ALL recipes of Magazine Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllMagazine()
    ```

- Remove ALL recipes of Modification Attachment Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllModificationAttachment()
    ```

- Remove ALL recipes of Normal Attachment Category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllNormalAttachment()
    ```

- Removes recipe that outputs matching item of given `ingredient` from bullet category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeBullet(IIngredient)
    ```

- Removes recipe that outputs matching item of given `ingredient` from gun category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeGun(IIngredient)
    ```

- Removes Recipe that outputs given `ingredient` from given category. valid categories = "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", "MAGAZINE":

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeInGroup(IIngredient, String)
    ```

- Removes recipe that outputs matching item of given `ingredient` from magazine category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeMagazine(IIngredient)
    ```

- Removes recipe that outputs matching item of given `ingredient` from modification attachment category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeModificationAttachment(IIngredient)
    ```

- Removes recipe that outputs matching item of given `ingredient` from normal attachment category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeNormalAttachment(IIngredient)
    ```

- Removes Recipe that outputs given `ingredient` from all category:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.remove(IIngredient)
    ```

- Removes ALL recipes of given category. valid categories = "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", "MAGAZINE":

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllinGroup(CraftingGroup)
    ```

- Removes ALL recipes of given category. valid categories = "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", "MAGAZINE":

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllinGroup(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mwc.crafting_station.removeAllBullet()
mods.mwc.crafting_station.removeAllGun()
mods.mwc.crafting_station.removeAllMagazine()
mods.mwc.crafting_station.removeAllModificationAttachment()
mods.mwc.crafting_station.removeAllNormalAttachment()
mods.mwc.crafting_station.removeBullet(ore('oreDiamond'))
mods.mwc.crafting_station.removeGun(ore('oreDiamond'))
mods.mwc.crafting_station.removeInGroup(ore('oreDiamond'), 'ATTACHMENT_NORMAL')
mods.mwc.crafting_station.removeMagazine(ore('oreDiamond'))
mods.mwc.crafting_station.removeModificationAttachment(ore('oreDiamond'))
mods.mwc.crafting_station.removeNormalAttachment(ore('oreDiamond'))
mods.mwc.crafting_station.remove(ore('oreDiamond'))
mods.mwc.crafting_station.removeAllinGroup('ATTACHMENT_NORMAL')
mods.mwc.crafting_station.removeAll()
```

::::::::::
