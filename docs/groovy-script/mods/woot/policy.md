---
title: "Policy"
titleTemplate: "Woot | CleanroomMC"
description: "Controls what entities can be farmed for what items via an entity blacklist, mod blacklist, item output blacklist, item output mod blacklist, and a mob whitelist."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/Policy.java"
---

# Policy (Woot)

## Description

Controls what entities can be farmed for what items via an entity blacklist, mod blacklist, item output blacklist, item output mod blacklist, and a mob whitelist.

:::::::::: details Warning {open id="warning"}
If the whitelist contains any entities, any entities not in the whitelist are banned (rendering EntityModBlacklist and EntityBlacklist superfluous). GenerateOnlyList contains all entities which cannot be captured via shard, meaning the controller would need to be obtained a different way.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.woot.policy/* Used as page default */ // [!code focus]
mods.woot.Policy
```


## Adding Recipes

- Prevents the given entity from being captured and spawned:

    ```groovy:no-line-numbers
    mods.woot.policy.addToEntityBlacklist(String)
    ```

- Prevents the given entity from being captured and spawned:

    ```groovy:no-line-numbers
    mods.woot.policy.addToEntityBlacklist(WootMobName)
    ```

- Prevents entities from the given mod from being captured and spawned:

    ```groovy:no-line-numbers
    mods.woot.policy.addToEntityModBlacklist(String)
    ```

- Prevents all entities not on the list from being spawned, overriding EntityBlacklist and EntityModBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.addToEntityWhitelist(String)
    ```

- Prevents all entities not on the list from being spawned, overriding EntityBlacklist and EntityModBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.addToEntityWhitelist(WootMobName)
    ```

- Prevents entities from being captured via shard, but doesn't prevent spawning:

    ```groovy:no-line-numbers
    mods.woot.policy.addToGenerateOnlyList(String)
    ```

- Prevents entities from being captured via shard, but doesn't prevent spawning:

    ```groovy:no-line-numbers
    mods.woot.policy.addToGenerateOnlyList(WootMobName)
    ```

- Prevents the given item from being dropped by any entity:

    ```groovy:no-line-numbers
    mods.woot.policy.addToItemBlacklist(ItemStack)
    ```

- Prevents items from the given mod from being dropped by any entity:

    ```groovy:no-line-numbers
    mods.woot.policy.addToItemModBlacklist(String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.woot.policy.addToEntityBlacklist('minecraft:witch')
mods.woot.policy.addToEntityModBlacklist('minecraft')
mods.woot.policy.addToEntityWhitelist('minecraft:zombie')
mods.woot.policy.addToGenerateOnlyList('minecraft:skeleton')
mods.woot.policy.addToItemBlacklist(item('minecraft:gunpowder'))
mods.woot.policy.addToItemModBlacklist('woot')
```

::::::::::

## Removing Recipes

- Removes the given entity from the EntityBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromEntityBlacklist(String)
    ```

- Removes the given entity from the EntityBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromEntityBlacklist(WootMobName)
    ```

- Removes the given mod from the EntityModBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromEntityModBlacklist(String)
    ```

- Removes given entity from the EntityWhitelist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromEntityWhitelist(String)
    ```

- Removes given entity from the EntityWhitelist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromEntityWhitelist(WootMobName)
    ```

- Removes the given entity from the GenerateOnlyList:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromGenerateOnlyList(String)
    ```

- Removes the given entity from the GenerateOnlyList:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromGenerateOnlyList(WootMobName)
    ```

- Removes the given item from the ItemBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromItemBlacklist(ItemStack)
    ```

- Removes the given mod from the ItemModBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeFromItemModBlacklist(String)
    ```

- Removes all entities from the EntityBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeAllFromEntityBlacklist()
    ```

- Removes all mods from the EntityModBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeAllFromEntityModBlacklist()
    ```

- Removes all entities from the EntityWhitelist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeAllFromEntityWhitelist()
    ```

- Removes all entities from the GenerateOnlyList:

    ```groovy:no-line-numbers
    mods.woot.policy.removeAllFromGenerateOnlyList()
    ```

- Removes all items from the ItemBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeAllFromItemBlacklist()
    ```

- Removes all mods from the ItemModBlacklist:

    ```groovy:no-line-numbers
    mods.woot.policy.removeAllFromItemModBlacklist()
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.woot.policy.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.woot.policy.removeFromEntityBlacklist('twilightforest:naga')
mods.woot.policy.removeFromEntityModBlacklist('botania')
mods.woot.policy.removeFromEntityWhitelist('minecraft:wither_skeleton')
mods.woot.policy.removeFromGenerateOnlyList('minecraft:wither_skeleton')
mods.woot.policy.removeFromItemBlacklist(item('minecraft:sugar'))
mods.woot.policy.removeFromItemModBlacklist('minecraft')
mods.woot.policy.removeAllFromEntityBlacklist()
mods.woot.policy.removeAllFromEntityModBlacklist()
mods.woot.policy.removeAllFromEntityWhitelist()
mods.woot.policy.removeAllFromGenerateOnlyList()
mods.woot.policy.removeAllFromItemBlacklist()
mods.woot.policy.removeAllFromItemModBlacklist()
mods.woot.policy.removeAll()
```

::::::::::
