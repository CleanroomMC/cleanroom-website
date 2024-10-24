---
title: "Rarity"
titleTemplate: "Minecraft | CleanroomMC"
description: "Control the rarity of the item, which typically is the name color, to any standard Rarity or any TextFormatting code."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Rarity.java"
---

# Rarity (Minecraft)

## Description

Control the rarity of the item, which typically is the name color, to any standard Rarity or any TextFormatting code.

:::::::::: details Info {open id="info"}
The default rarities are Common (White), Uncommon (Yellow), Rare (Aqua), and Epic (Light Purple).
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
rarity/* Used as page default */ // [!code focus]
Rarity
```


## Editing Values

- Sets the color of the given itemstack in the format `color`, `item`:

    ```groovy:no-line-numbers
    rarity.set(IRarity, Closure<Boolean>)
    ```

- Sets the color of the given itemstack in the format `color`, `item`:

    ```groovy:no-line-numbers
    rarity.set(IRarity, ItemStack)
    ```

- Sets the color of the given itemstack in the format `color`, `item`:

    ```groovy:no-line-numbers
    rarity.set(TextFormatting, Closure<Boolean>)
    ```

- Sets the color of the given itemstack in the format `color`, `item`:

    ```groovy:no-line-numbers
    rarity.set(TextFormatting, ItemStack)
    ```

- Sets the color of the given itemstack in the format `color`, `rarityName`, `item`:

    ```groovy:no-line-numbers
    rarity.set(TextFormatting, String, Closure<Boolean>)
    ```

- Sets the color of the given itemstack in the format `color`, `rarityName`, `item`:

    ```groovy:no-line-numbers
    rarity.set(TextFormatting, String, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
rarity.set(textformat('RESET'), item('minecraft:enchanted_book'))
rarity.set(textformat('AQUA'), item('minecraft:diamond'))
```

::::::::::
