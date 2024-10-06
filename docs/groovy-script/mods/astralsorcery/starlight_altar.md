---
title: "Starlight Altar"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Allows creation of shaped recipes in the Astral Sorcery Crafting Altar chain."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/starlightaltar/StarlightAltar.java"
---

# Starlight Altar (Astral Sorcery)

## Description

Allows creation of shaped recipes in the Astral Sorcery Crafting Altar chain.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.astralsorcery.starlight_altar/* Used as page default */ // [!code focus]
mods.astralsorcery.starlightaltar
mods.astralsorcery.starlightAltar
mods.astralsorcery.StarlightAltar
mods.astral.starlight_altar
mods.astral.starlightaltar
mods.astral.starlightAltar
mods.astral.StarlightAltar
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Starlight Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.astralsorcery.starlight_altar.discoveryRecipeBuilder() {open id="abstract"}
- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 9, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    shape(List<List<IIngredient>>)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `String`. Sets the name of the recipe, should be unique.

    ```groovy:no-line-numbers
    name(String)
    ```

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `1`).

    ```groovy:no-line-numbers
    craftTime(int)
    ```

- `int`. Sets the amount of starlight the recipe requires. Has a cap based on the table tier, of 1000, 2000, 4000, 8000 for Luminous, Starlight, Celestial, and Iridescent respectively. Requires greater than or equal to 1 and less than or equal to 1000. (Default `1`).

    ```groovy:no-line-numbers
    starlight(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.altar.AbstractAltarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.starlight_altar.discoveryRecipeBuilder()
    .output(item('minecraft:water_bucket'))
    .row('   ')
    .row(' B ')
    .row('   ')
    .key('B', item('minecraft:bucket'))
    .starlight(500)
    .craftTime(10)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.astralsorcery.starlight_altar.attunementRecipeBuilder() {open id="abstract"}
- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 13, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    shape(List<List<IIngredient>>)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `String`. Sets the name of the recipe, should be unique.

    ```groovy:no-line-numbers
    name(String)
    ```

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `1`).

    ```groovy:no-line-numbers
    craftTime(int)
    ```

- `int`. Sets the amount of starlight the recipe requires. Has a cap based on the table tier, of 1000, 2000, 4000, 8000 for Luminous, Starlight, Celestial, and Iridescent respectively. Requires greater than or equal to 1 and less than or equal to 2000. (Default `1`).

    ```groovy:no-line-numbers
    starlight(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.altar.AbstractAltarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```



::::::::::

:::::::::: details mods.astralsorcery.starlight_altar.constellationRecipeBuilder() {open id="abstract"}
- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 21, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    shape(List<List<IIngredient>>)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `String`. Sets the name of the recipe, should be unique.

    ```groovy:no-line-numbers
    name(String)
    ```

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `1`).

    ```groovy:no-line-numbers
    craftTime(int)
    ```

- `int`. Sets the amount of starlight the recipe requires. Has a cap based on the table tier, of 1000, 2000, 4000, 8000 for Luminous, Starlight, Celestial, and Iridescent respectively. Requires greater than or equal to 1 and less than or equal to 4000. (Default `1`).

    ```groovy:no-line-numbers
    starlight(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.altar.AbstractAltarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.starlight_altar.constellationRecipeBuilder()
    .output(item('minecraft:pumpkin'))
    .matrix('ss ss',
            's   s',
            '  d  ',
            's   s',
            'ss ss')
    .key('s', item('minecraft:pumpkin_seeds'))
    .key('d', ore('dirt'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.astralsorcery.starlight_altar.traitRecipeBuilder() {open id="abstract"}
- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 25, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    shape(List<List<IIngredient>>)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `String`. Sets the name of the recipe, should be unique.

    ```groovy:no-line-numbers
    name(String)
    ```

- `int`. Sets how long the craft will take to complete in ticks. Requires greater than 0. (Default `1`).

    ```groovy:no-line-numbers
    craftTime(int)
    ```

- `List<IIngredient>`. Sets items placed on nearby relays once the recipe starts. Must be placed manually. Requires greater than or equal to 0 and less than or equal to 24.

    ```groovy:no-line-numbers
    outerInput(IIngredient)
    outerInput(IIngredient...)
    outerInput(Collection<IIngredient>)
    ```

- `int`. Sets the amount of starlight the recipe requires. Has a cap based on the table tier, of 1000, 2000, 4000, 8000 for Luminous, Starlight, Celestial, and Iridescent respectively. Requires greater than or equal to 1 and less than or equal to 8000. (Default `1`).

    ```groovy:no-line-numbers
    starlight(int)
    ```

- `IConstellation`. Sets the required Constellation for the Rock Crystal to be attuned to. Only applies to Iridescent Altars.

    ```groovy:no-line-numbers
    constellation(IConstellation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.altar.AbstractAltarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.starlight_altar.traitRecipeBuilder()
    .output(item('astralsorcery:itemrockcrystalsimple').setSize(300).setPurity(50).setCutting(50))
    .matrix('sssss',
            'sgggs',
            'sgdgs',
            'sgggs',
            'sssss')
    .key('s', item('minecraft:pumpkin'))
    .key('g', ore('treeLeaves'))
    .key('d', item('minecraft:diamond_block'))
    .outerInput(item('astralsorcery:blockmarble'))
    .outerInput(ore('ingotAstralStarmetal'))
    .outerInput(fluid('astralsorcery.liquidstarlight') * 1000)
    .outerInput(ore('treeSapling'))
    .constellation(constellation('discidia'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output in all Altar tiers:

    ```groovy:no-line-numbers
    mods.astralsorcery.starlight_altar.removeByOutput(ItemStack)
    ```

- Removes all recipes that match the given output in only the specified Altar tier, in the format `output`, `altarLevel`:

    ```groovy:no-line-numbers
    mods.astralsorcery.starlight_altar.removeByOutput(ItemStack, TileAltar.AltarLevel)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.starlight_altar.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.starlight_altar.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.starlight_altar.streamRecipes()
    ```
