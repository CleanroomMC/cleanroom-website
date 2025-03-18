---
title: "Ritual"
titleTemplate: "Arcane World | CleanroomMC"
description: "Converts up to 5 input itemstacks into a wide number of possible effects, including spawning entities, opening a portal to a dungeon dimension to fight a mob, awarding an output itemstack, running commands, and even entirely customized effects."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/arcaneworld/RitualWrapper.java"
---

# Ritual (Arcane World)

## Description

Converts up to 5 input itemstacks into a wide number of possible effects, including spawning entities, opening a portal to a dungeon dimension to fight a mob, awarding an output itemstack, running commands, and even entirely customized effects.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.arcaneworld.ritual/* Used as page default */ // [!code focus]
mods.arcaneworld.Ritual
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Ritual also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.arcaneworld.ritual.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- `int`. Sets the amount of time that is passed when the Time Ritual is activated. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `Class<? extends Entity>`. Sets the entity spawned when the Arena or Summon Rituals are activated. Requires not null.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    entity(Class<? extends Entity>)
    ```

- `List<String>`. Sets the commands that will be run when the Command Ritual is activated. Requires not null.

    ```groovy:no-line-numbers
    command(String)
    command(String...)
    command(List<String>)
    ```

- `Closure<Void>`. Sets the effect that will happen when the Custom Ritual is run, with the Closure taking 4 parameters, `World world`, `BlockPos blockPos`, `EntityPlayer player`, and `ItemStack... itemStacks`. Requires not null.

    ```groovy:no-line-numbers
    onActivate(Closure<Void>)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.CUSTOM`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- `RitualWeather.WeatherType`. Sets the type of weather the world will change to when the Weather Ritual is activated. Requires not null.

    ```groovy:no-line-numbers
    weatherRain()
    weatherClear()
    weatherThunder()
    weatherType(RitualWeather.WeatherType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilder()
    .ritualCreateItem()
    .input(item('minecraft:stone') * 5, item('minecraft:diamond'), item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .translationKey('groovyscript.demo_output')
    .name('groovyscript:custom_name')
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderArena() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `Class<? extends Entity>`. Sets the entity spawned when the Arena or Summon Rituals are activated. Requires not null.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    entity(Class<? extends Entity>)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.ARENA`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderArena()
    .input(item('minecraft:stone'), item('minecraft:stone'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_arena')
    .entity(entity('minecraft:chicken'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderCommand() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `List<String>`. Sets the commands that will be run when the Command Ritual is activated. Requires not null.

    ```groovy:no-line-numbers
    command(String)
    command(String...)
    command(List<String>)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.COMMAND`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderCommand()
    .input(item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_command')
    .command('say hi',
             'give @p minecraft:coal 5')
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderCreateItem() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.CREATE_ITEM`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderCreateItem()
    .input(item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'))
    .translationKey('groovyscript.demo_create_item')
    .output(item('minecraft:diamond'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderCustom() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `Closure<Void>`. Sets the effect that will happen when the Custom Ritual is run, with the Closure taking 4 parameters, `World world`, `BlockPos blockPos`, `EntityPlayer player`, and `ItemStack... itemStacks`. Requires not null.

    ```groovy:no-line-numbers
    onActivate(Closure<Void>)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.CUSTOM`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderCustom()
    .input(item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:clay'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_custom')
    .onActivate({ World world, BlockPos blockPos, EntityPlayer player, ItemStack... itemStacks -> { log.info blockPos } })
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderDragonBreath() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.DRAGON_BREATH`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderDragonBreath()
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_dragon_breath')
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderDungeon() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.DUNGEON`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderDungeon()
    .input(item('minecraft:diamond'), item('minecraft:clay'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_dungeon')
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderSummon() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `Class<? extends Entity>`. Sets the entity spawned when the Arena or Summon Rituals are activated. Requires not null.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    entity(Class<? extends Entity>)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.SUMMON`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderSummon()
    .input(item('minecraft:stone'), item('minecraft:clay'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_summon')
    .entity(entity('minecraft:chicken'))
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderTime() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the amount of time that is passed when the Time Ritual is activated. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.TIME`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderTime()
    .input(item('minecraft:diamond'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_time')
    .time(5000)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.arcaneworld.ritual.recipeBuilderWeather() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String`. Sets the translation key used to localize the name of the ritual. Requires not null.

    ```groovy:no-line-numbers
    translationKey(String)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `RitualWrapper.RitualType`. Sets the mode of the ritual, different modes will require different values. (Default `RitualType.WEATHER`).

    ```groovy:no-line-numbers
    ritualTime()
    ritualArena()
    ritualCustom()
    ritualSummon()
    ritualCommand()
    ritualDungeon()
    ritualWeather()
    ritualCreateItem()
    ritualDragonBreath()
    ritualType(RitualWrapper.RitualType)
    ```

- `RitualWeather.WeatherType`. Sets the type of weather the world will change to when the Weather Ritual is activated. Requires not null.

    ```groovy:no-line-numbers
    weatherRain()
    weatherClear()
    weatherThunder()
    weatherType(RitualWeather.WeatherType)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `party.lemons.arcaneworld.crafting.ritual.Ritual`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.recipeBuilderWeather()
    .input(item('minecraft:diamond'), item('minecraft:gold_ingot'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_weather_clear')
    .weatherClear()
    .register()

mods.arcaneworld.ritual.recipeBuilderWeather()
    .input(item('minecraft:gold_ingot'), item('minecraft:diamond'), item('minecraft:clay'))
    .translationKey('groovyscript.demo_weather_rain')
    .weatherRain()
    .register()

mods.arcaneworld.ritual.recipeBuilderWeather()
    .input(item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:gold_ingot'))
    .translationKey('groovyscript.demo_weather_thunder')
    .weatherThunder()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.arcaneworld.ritual.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.arcaneworld.ritual.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.arcaneworld.ritual.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.arcaneworld.ritual.removeByInput(item('minecraft:gold_nugget'))
mods.arcaneworld.ritual.removeByOutput(item('arcaneworld:biome_crystal'))
mods.arcaneworld.ritual.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.arcaneworld.ritual.streamRecipes()
    ```
