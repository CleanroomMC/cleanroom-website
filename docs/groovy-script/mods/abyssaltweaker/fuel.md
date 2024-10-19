---
title: "Fuel"
titleTemplate: "Abyssal Tweaker | CleanroomMC"
description: "Allows configuring the items that can be used as Transmutator and/or Crystallizer fuels."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/teamdimensional/abyssaltweaker/compat/groovyscript/Fuel.java"
---

# Fuel (Abyssal Tweaker)

## Description

Allows configuring the items that can be used as Transmutator and/or Crystallizer fuels.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.abyssaltweaker.fuel/* Used as page default */ // [!code focus]
mods.abyssaltweaker.Fuel
```


## Adding Entries

- Adds a Crystallizer fuel:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.fuel.addCrystallizer(IIngredient, int)
    ```

- Adds a Transmutator fuel:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.fuel.addTransmutator(IIngredient, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.fuel.addCrystallizer(item('minecraft:stone'), 50)
mods.abyssaltweaker.fuel.addTransmutator(item('minecraft:cobblestone'), 50)
```

::::::::::

## Removing Entries

- Removes a Crystallizer fuel:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.fuel.removeCrystallizer(IIngredient)
    ```

- Removes a Transmutator fuel:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.fuel.removeTransmutator(IIngredient)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.fuel.removeCrystallizer(item('abyssalcraft:dreadshard'))
mods.abyssaltweaker.fuel.removeTransmutator(item('minecraft:blaze_rod'))
```

::::::::::
