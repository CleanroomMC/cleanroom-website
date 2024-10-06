---
title: "Aspect Creator"
titleTemplate: "Thaumcraft | CleanroomMC"
description: "Creates a custom Aspect."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/aspect/Aspect.java"
---

# Aspect Creator (Thaumcraft)

## Description

Creates a custom Aspect.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.thaumcraft.aspect/* Used as page default */ // [!code focus]
mods.thaumcraft.Aspect
mods.tc.aspect
mods.tc.Aspect
mods.thaum.aspect
mods.thaum.Aspect
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Aspect Creator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.thaumcraft.aspect.aspectBuilder() {open id="abstract"}
- `String`. Sets the name of the new Aspect. Requires not null and the name must be a unique string.

    ```groovy:no-line-numbers
    tag(String)
    ```

- `int`. Sets the blend value of the Aspect. (Default `1`).

    ```groovy:no-line-numbers
    blend(int)
    ```

- `ResourceLocation`. Sets the resource location of the image used to represent the Aspect.

    ```groovy:no-line-numbers
    image(String)
    image(String, String)
    image(ResourceLocation)
    ```

- `int`. Sets the color formatting code used. (Default `0`).

    ```groovy:no-line-numbers
    chatColor(int)
    ```

- `AspectList`. Sets the other Aspects that make up this Aspect. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy:no-line-numbers
    component(String)
    component(AspectStack)
    component(String, int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thaumcraft.api.aspects.Aspect`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.aspect.aspectBuilder()
    .tag('clay')
    .chatColor(0xD5D4EC)
    .image(resource('placeholdername:textures/items/clay_2.png'))
    .register()

mods.thaumcraft.aspect.aspectBuilder()
    .tag('snack')
    .chatColor(0xD5D4EC)
    .component(aspect('cognitio'))
    .component('clay')
    .image(resource('placeholdername:textures/items/snack.png'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thaumcraft.aspect.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.aspect.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thaumcraft.aspect.streamRecipes()
    ```
