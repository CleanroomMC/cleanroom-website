---
title: "Research"
titleTemplate: "Thaumcraft | CleanroomMC"
description: "Create or modify existing research entries, which contain helpful information and unlock recipes, and can be gated behind specific items or events."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/Research.java"
---

# Research (Thaumcraft)

## Description

Create or modify existing research entries, which contain helpful information and unlock recipes, and can be gated behind specific items or events.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.thaumcraft.research/* Used as page default */ // [!code focus]
mods.thaumcraft.Research
mods.tc.research
mods.tc.Research
mods.thaum.research
mods.thaum.Research
```


## Adding Recipes

- Adds Categories in the format `key`, `researchkey`, `formula`, `icon`, `background`:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addCategory(String, String, AspectList, String, String)
    ```

- Adds Categories in the format `key`, `researchkey`, `formula`, `icon`, `background`, `background2`:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addCategory(String, String, AspectList, String, String, String)
    ```

- Adds a new location to check for research:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addResearchLocation(ResourceLocation)
    ```

- Adds a new location to check for research:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addResearchLocation(String)
    ```

- Adds a new location to check for research:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addResearchLocation(String, String)
    ```

- Adds a new scannable block:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(Block)
    ```

- Adds a new scannable enchantment:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(Enchantment)
    ```

- Adds a new scannable material:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(Material)
    ```

- Adds a new scannable potion:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(Potion)
    ```

- Adds a new scannable block in the format `researchKey`, `block`:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(String, Block)
    ```

- Adds a new scannable entity in the format `researchKey`, `entityClass`, `inheritedClasses`:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(String, Class<?>, boolean)
    ```

- Adds a new scannable entity in the format `researchKey`, `entityClass`, `inheritedClasses`, `tags`:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(String, Class<?>, boolean, ThaumcraftApi.EntityTagsNBT)
    ```

- Adds a new scannable item in the format `researchKey`, `item`:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(String, ItemStack)
    ```

- Adds a new scannable material in the format `researchKey`, `material`:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.addScannable(String, Material)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.research.addResearchLocation(resource('thaumcraft:research/new.json'))
mods.thaumcraft.research.addScannable('KNOWLEDGETYPEHUMOR', item('minecraft:pumpkin'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Research also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.thaumcraft.research.researchCategoryBuilder() {open id="abstract"}
- `String`. Sets a unique research key.

    ```groovy:no-line-numbers
    key(String)
    ```

- `ResourceLocation`. Sets the icon to be used for the research category tab.

    ```groovy:no-line-numbers
    icon(String)
    icon(String, String)
    icon(ResourceLocation)
    ```

- `AspectList`. Sets the aspects required to gain knowledge in this category.

    ```groovy:no-line-numbers
    formulaAspect(AspectStack)
    formulaAspect(String, int)
    ```

- `ResourceLocation`. Sets the resource location of the background image to use for this category.

    ```groovy:no-line-numbers
    background(String)
    background(String, String)
    background(ResourceLocation)
    ```

- `ResourceLocation`. Sets the resource location of the foreground image that lies between the background and icons.

    ```groovy:no-line-numbers
    background2(String)
    background2(String, String)
    background2(ResourceLocation)
    ```

- `String`. Sets the research that the player needs to have completed before this category becomes visible. `null` causes it to always be visible.

    ```groovy:no-line-numbers
    researchKey(String)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thaumcraft.api.research.ResearchCategory`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.research.researchCategoryBuilder()
    .key('BASICS2')
    .researchKey('UNLOCKAUROMANCY')
    .formulaAspect(aspect('herba') * 5)
    .formulaAspect(aspect('ordo') * 5)
    .formulaAspect(aspect('perditio') * 5)
    .formulaAspect('aer', 5)
    .formulaAspect('ignis', 5)
    .formulaAspect(aspect('terra') * 5)
    .formulaAspect('aqua', 5)
    .icon(resource('thaumcraft:textures/aspects/humor.png'))
    .background(resource('thaumcraft:textures/gui/gui_research_back_1.jpg'))
    .background2(resource('thaumcraft:textures/gui/gui_research_back_over.png'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes a Research Category by the name:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.removeCategory(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thaumcraft.research.removeAllCategories()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.research.removeCategory('BASICS')
mods.thaumcraft.research.removeAllCategories()
```

::::::::::
