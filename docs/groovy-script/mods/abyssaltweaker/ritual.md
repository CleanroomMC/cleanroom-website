---
title: "Necronomicon Ritual"
titleTemplate: "Abyssal Tweaker | CleanroomMC"
description: "Allows setting up rituals that can be executed with various tiers of Necronomicon."
source_code_link: "https://github.com/TeamDimensional/AbyssalTweaker/blob/master/src/main/java/com/teamdimensional/abyssaltweaker/compat/groovyscript/Ritual.java"
---

# Necronomicon Ritual (Abyssal Tweaker)

## Description

Allows setting up rituals that can be executed with various tiers of Necronomicon.

:::::::::: details Warning {open id="warning"}
For technical reasons the Ritual compatibility will not validate whether the ritual is set to execute in a valid dimension when it's registered. By default only Overworld and Abyssalcraft's dimensions are valid, and other dimensions have to be added through the config file.
::::::::::

:::::::::: details Warning {open id="warning"}
The mob summoning rituals do not display in JEI (but do display in the Necronomicon).
::::::::::

:::::::::: details Warning {open id="warning"}
The rituals in Necronomicon use the localization keys ac.ritual.ritualName (for the name) and ac.ritual.ritualName.desc (for the description, default empty). It is recommended to fill those through a language file.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.abyssaltweaker.ritual/* Used as page default */ // [!code focus]
mods.abyssaltweaker.Ritual
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Necronomicon Ritual also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.abyssaltweaker.ritual.recipeBuilder() {open id="abstract"}
- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the amount of Potential Energy the ritual consumes. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    pe(int)
    energy(int)
    ```

- `String`. Sets the ritual name, which has to be unique among all rituals. Requires not empty.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `int`. Sets the minimum book tier that can execute this recipe. Requires greater than or equal to 0 and less than or equal to 4. (Default `0`).

    ```groovy:no-line-numbers
    bookTier(int)
    bookTier(String)
    ```

- `int`. Sets the particle ID that is emitted from pedestals while this recipe is being executed (see also: EnumRitualParticle). Requires greater than or equal to 0 and less than 8. (Default `0`).

    ```groovy:no-line-numbers
    particle(int)
    ```

- `int`. Sets the dimension that this ritual can be performed in. (Default `any dimension`).

    ```groovy:no-line-numbers
    dimension(int)
    ```

- `boolean`. Sets whether the ritual requires a sacrifice. (Default `false`).

    ```groovy:no-line-numbers
    sacrifice(boolean)
    requiresSacrifice()
    ```

- `IIngredient`. Sets the center item needed for the recipe. Not applicable for Summoning rituals.

    ```groovy:no-line-numbers
    centerItem(IIngredient)
    ```

- `EntityEntry`. Sets the mob that will be summoned by the ritual.

    ```groovy:no-line-numbers
    summonedMob(EntityEntry)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shinoow.abyssalcraft.api.ritual.NecronomiconRitual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.ritual.recipeBuilder()
    .name('simpleRitual')
    .centerItem(item('minecraft:diamond'))
    .input(item('minecraft:diamond'))
    .output(item('minecraft:diamond_block'))
    .pe(100)
    .register()

mods.abyssaltweaker.ritual.recipeBuilder()
    .name('starInfusion')
    .centerItem(item('minecraft:clay'))
    .input(item('minecraft:diamond'), ore('ingotGold'), ore('ingotIron'))
    .output(item('minecraft:nether_star'))
    .pe(500)
    .requiresSacrifice()
    .bookTier(3)
    .dimension(50)
    .register()

mods.abyssaltweaker.ritual.recipeBuilder()
    .name('simpleCreation')
    .input(item('minecraft:iron_ingot'), item('minecraft:iron_ingot'), item('minecraft:iron_ingot'), item('minecraft:iron_ingot'))
    .output(item('minecraft:gold_ingot'))
    .pe(100)
    .register()

mods.abyssaltweaker.ritual.recipeBuilder()
    .name('zombieSummoning')
    .input(item('minecraft:rotten_flesh'), item('minecraft:iron_ingot'), item('minecraft:carrot'), item('minecraft:potato'))
    .summonedMob(entity('minecraft:zombie'))
    .pe(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the ritual by its center item:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.ritual.removeByCenter(IIngredient)
    ```

- Removes the ritual by its name:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.ritual.removeByName(String)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.ritual.removeByOutput(IIngredient)
    ```

- Removes the ritual by the mob it summons:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.ritual.removeBySummonedMob(EntityEntry)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.ritual.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.abyssaltweaker.ritual.removeByCenter(item('abyssalcraft:lifecrystal'))
mods.abyssaltweaker.ritual.removeByName('dreadInfusedGatewayKey')
mods.abyssaltweaker.ritual.removeByOutput(item('abyssalcraft:oc'))
mods.abyssaltweaker.ritual.removeBySummonedMob(entity('abyssalcraft:dragonboss'))
mods.abyssaltweaker.ritual.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.abyssaltweaker.ritual.streamRecipes()
    ```
