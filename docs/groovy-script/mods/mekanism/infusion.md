---
title: "Infusion"
titleTemplate: "Mekanism | CleanroomMC"
description: "Add new infusion types and itemstacks to those types."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Infusion.java"
---

# Infusion (Mekanism)

## Description

Add new infusion types and itemstacks to those types.

:::::::::: info Danger {id="danger"}
To register a texture to be used by an Infusion Type, you have to add the following event listener to a PreInit file. `event_manager.listen { TextureStitchEvent.Pre event -> event.getMap().registerSprite(resource('placeholdername:blocks/example')) }`, where 'assets/placeholdername/textures/blocks/example.png' is the location of the desired texture.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.infusion/* Used as page default */ // [!code focus]
mods.mekanism.Infusion
```


## Adding Entries

- Creates an Infusion Type with the given name and texture:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.addType(String, ResourceLocation)
    ```

- Creates an Infusion Type with the given name and texture:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.addType(String, String)
    ```

- Adds IIngredients to the provided Infusion Type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.add(InfuseType, int, Collection<IIngredient>)
    ```

- Adds IIngredients to the provided Infusion Type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.add(InfuseType, int, IIngredient...)
    ```

- Adds IIngredients to the provided Infusion Type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.add(InfuseType, int, ItemStack)
    ```

- Adds IIngredients to the provided Infusion Type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.add(String, int, Collection<IIngredient>)
    ```

- Adds IIngredients to the provided Infusion Type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.add(String, int, IIngredient...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.infusion.addType('groovy_example', resource('placeholdername:blocks/mekanism_infusion_texture'))
mods.mekanism.infusion.add(infusionType('diamond'), 100, item('minecraft:clay'))
mods.mekanism.infusion.add(infusionType('carbon'), 100, item('minecraft:gold_ingot'))
mods.mekanism.infusion.add('groovy_example', 10, item('minecraft:ice'))
mods.mekanism.infusion.add('groovy_example', 20, item('minecraft:packed_ice'))
```

::::::::::

## Removing Entries

- Removes IIngredients from any Infusion Type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.remove(Collection<IIngredient>)
    ```

- Removes IIngredients from any Infusion Type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.remove(IIngredient)
    ```

- Removes IIngredients from any Infusion Type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.remove(IIngredient...)
    ```

- Removes any Infusion Type that matches the given type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.removeByType(InfuseType)
    ```

- Removes any Infusion Type that matches the given type:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.removeByType(String)
    ```

- Removes an Infusion Type and all corresponding items:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.removeType(String)
    ```

- Removes all Infusion Types:

    ```groovy:no-line-numbers
    mods.mekanism.infusion.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.infusion.remove(ore('dustDiamond'))
mods.mekanism.infusion.removeByType(infusionType('carbon'))
mods.mekanism.infusion.removeByType(infusionType('diamond'))
mods.mekanism.infusion.removeAll()
```

::::::::::
