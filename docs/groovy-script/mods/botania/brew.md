---
title: "Brew Effect"
titleTemplate: "Botania | CleanroomMC"
description: "Creates a custom brew, but not a recipe for the brew."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Brew.java"
---

# Brew Effect (Botania)

## Description

Creates a custom brew, but not a recipe for the brew.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.brew/* Used as page default */ // [!code focus]
mods.botania.Brew
```


## Adding Entries

### Recipe Builder

Just like other recipe types, the Brew Effect also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.botania.brew.brewBuilder() {open id="abstract"}
- `String`. Sets a unique key for the effect. Requires not null.

    ```groovy:no-line-numbers
    key(String)
    ```

- `String`. Sets the name of the effect.

    ```groovy:no-line-numbers
    name(String)
    ```

- `int`. Sets the base mana cost to make the brew. The Tainted Blood Pendant and Incense Stick recipes will cost 10 times as much mana. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    cost(int)
    mana(int)
    ```

- `int`. Sets the color of effect. Requires not null. (Default `0xFFFFFF`).

    ```groovy:no-line-numbers
    color(int)
    ```

- `List<PotionEffect>`. Sets the potion effects, quantity, and duration of each when consuming the potion. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    effect(PotionEffect)
    effect(PotionEffect...)
    effect(Collection<PotionEffect>)
    ```

- `boolean`. Sets if the brew can be infused on a Incense Stick, making it apply the effect persistently in a long-lasting AOE. (Default `true`).

    ```groovy:no-line-numbers
    incense()
    incense(boolean)
    ```

- `boolean`. Sets if the custom brew can be infused on a Tainted Blood Pendant, making it a persistent effect at the cost of mana. (Default `true`).

    ```groovy:no-line-numbers
    bloodPendant()
    bloodPendant(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.brew.Brew`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.brew.brewBuilder()
    .key('groovy_example_brew')
    .name('Groovy Brew')
    .color(0x00FFFF)
    .cost(100)
    .effect(new PotionEffect(potion('minecraft:strength'), 1800, 3), new PotionEffect(potion('minecraft:speed'), 1800, 2), new PotionEffect(potion('minecraft:weakness'), 3600, 1))
    .incense(true)
    .bloodPendant(true)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the given brew matching the brew key:

    ```groovy:no-line-numbers
    mods.botania.brew.remove(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania.brew.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.brew.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every brew in the brew registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania.brew.streamBrews()
    ```
