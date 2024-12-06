---
title: "MWC Crafting"
titleTemplate: "Modern Warfare Cubed | CleanroomMC"
description: "Converts multiple items into another item, with a way to recover some of original resources when dismantled. Recipes with group `BULLET, MAGAZINE, GRENADE` can be only crafted via Ammo Press, while recipes with `GUN, ATTACHMENT_NORMAL, ATTACHMENT_MODIFICATION` categories can only be crafted with Crafting Station."
source_code_link: "https://github.com/Cubed-Development/Modern-Warfare-Cubed/blob/next/src/main/java/com/paneedah/mwc/groovyscript/script/CraftingStation.java"
---

# MWC Crafting (Modern Warfare Cubed)

## Description

Converts multiple items into another item, with a way to recover some of original resources when dismantled. Recipes with group `BULLET, MAGAZINE, GRENADE` can be only crafted via Ammo Press, while recipes with `GUN, ATTACHMENT_NORMAL, ATTACHMENT_MODIFICATION` categories can only be crafted with Crafting Station.

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
    setGroup(String)
    setGroup(CraftingGroup)
    ```

- `List<CraftingEntry>`. Input entries of the recipe, `double` is refund yield of the ingredient. Requires greater than 0.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(double, IIngredient)
    input(double, IIngredient...)
    input(Collection<IIngredient>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.paneedah.mwc.groovyscript.recipes.GSCraftingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mwc.crafting_station.recipeBuilder()
    .input(1, item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.mwc.crafting_station.recipeBuilder()
    .input(0.5, item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Remove all recipes with the category of Bullet:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllBullet()
    ```

- Remove all recipes with the category of Grenade:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllGrenade()
    ```

- Remove all recipes with the category of Gun:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllGun()
    ```

- Remove all recipes with the category of Magazine:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllMagazine()
    ```

- Remove all recipes with the category of Modification Attachment:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllModificationAttachment()
    ```

- Remove all recipes with the category of Normal Attachment:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeAllNormalAttachment()
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Bullet:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeBulletByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Grenade:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeGrenadeByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Gun:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeGunByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Magazine:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeMagazineByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Modification Attachment:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeModificationAttachmentByOutput(IIngredient)
    ```

- Removes all recipes that match the given output `ingredient` and are in the category Normal Attachment:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeNormalAttachmentByOutput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByOutput(IIngredient)
    ```

- Removes all recipes that output the given `ingredient` and given category. Valid categories are "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", "MAGAZINE", and "GRENADE":

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeInGroupByOutput(IIngredient, CraftingGroup)
    ```

- Removes all recipes that output the given `ingredient` and given category. Valid categories are "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", "MAGAZINE", and "GRENADE":

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeInGroupByOutput(IIngredient, String)
    ```

- Removes all recipes that match the given category. Valid categories are "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", and "MAGAZINE":

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByGroup(CraftingGroup)
    ```

- Removes all recipes that match the given category. Valid categories are "GUN", "ATTACHMENT_NORMAL", "ATTACHMENT_MODIFICATION", "BULLET", and "MAGAZINE":

    ```groovy:no-line-numbers
    mods.mwc.crafting_station.removeByGroup(String)
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
mods.mwc.crafting_station.removeBulletByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeGrenadeByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeGunByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeMagazineByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeModificationAttachmentByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeNormalAttachmentByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeByOutput(ore('oreDiamond'))
mods.mwc.crafting_station.removeAll()
```

::::::::::
