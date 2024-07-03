---
title: "Laser Drill"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts power into ores, with a given weight, between a minimum and maximum Y value, in any whitelisted biome or not in any blacklisted biome, and with a specific color of laser lens impacting the probability."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/LaserDrill.java"
---

# Laser Drill (Industrial Foregoing)

## Description

Converts power into ores, with a given weight, between a minimum and maximum Y value, in any whitelisted biome or not in any blacklisted biome, and with a specific color of laser lens impacting the probability.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.industrialforegoing.laser_drill/* Used as page default */ // [!code focus]
mods.industrialforegoing.laserdrill
mods.industrialforegoing.laserDrill
mods.industrialforegoing.LaserDrill
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Laser Drill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.industrialforegoing.laser_drill.recipeBuilder() {open id="abstract"}
- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the maximum Y the output can be found at. Requires less than or equal to 255. (Default `255`).

    ```groovy:no-line-numbers
    maxY(int)
    ```

- `int`. Sets the minimum Y the output can be found at. Requires less than or equal to 255. (Default `0`).

    ```groovy:no-line-numbers
    minY(int)
    ```

- `int`. Sets the chance the output is generated. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    weight(int)
    ```

- `int`. Sets the metadata of the lens that impacts the weight probability, which determines the color of the lens. (Default `0`).

    ```groovy:no-line-numbers
    lensMeta(int)
    ```

- `List<Biome>`. Sets the biomes the output cannot be generated in.

    ```groovy:no-line-numbers
    blacklist(Biome)
    blacklist(Biome...)
    blacklist(Collection<Biome>)
    ```

- `List<Biome>`. Sets the biomes the output can be generated in.

    ```groovy:no-line-numbers
    whitelist(Biome)
    whitelist(Biome...)
    whitelist(Collection<Biome>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.buuz135.industrial.api.recipe.LaserDrillEntry$LaserDrillEntryExtended`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.laser_drill.recipeBuilder()
    .output(item('minecraft:clay'))
    .lensMeta(5)
    .weight(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all ores with the given biome blacklisted:

    ```groovy:no-line-numbers
    mods.industrialforegoing.laser_drill.removeByBlacklist(Biome)
    ```

- Removes all ores with the given lens meta:

    ```groovy:no-line-numbers
    mods.industrialforegoing.laser_drill.removeByLens(int)
    ```

- Removes all ores with the given lens meta:

    ```groovy:no-line-numbers
    mods.industrialforegoing.laser_drill.removeByLens(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.laser_drill.removeByOutput(IIngredient)
    ```

- Removes all ores with the given biome whitelisted:

    ```groovy:no-line-numbers
    mods.industrialforegoing.laser_drill.removeByWhitelist(Biome)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.laser_drill.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.laser_drill.removeByBlacklist(biome('minecraft:sky'))
mods.industrialforegoing.laser_drill.removeByLens(5)
mods.industrialforegoing.laser_drill.removeByLens(item('industrialforegoing:laser_lens:5'))
mods.industrialforegoing.laser_drill.removeByOutput(item('minecraft:coal_ore'))
mods.industrialforegoing.laser_drill.removeByWhitelist(biome('minecraft:hell'))
mods.industrialforegoing.laser_drill.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.laser_drill.streamRecipes()
    ```
