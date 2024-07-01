---
title: "Summon Creature"
titleTemplate: "Roots 3 | CleanroomMC"
description: "When running a Summon Creature Ritual, the input items placed on Catalyst Plate will summon the target entity."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/SummonCreature.java"
---

# Summon Creature (Roots 3)

## Description

When running a Summon Creature Ritual, the input items placed on Catalyst Plate will summon the target entity.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.summon_creature/* Used as page default */ // [!code focus]
mods.roots.summoncreature
mods.roots.summonCreature
mods.roots.SummonCreature
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Summon Creature also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../introduction/builder.md) out.

:::::::::: details mods.roots.summon_creature.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 10.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `Class<? extends EntityLivingBase>`. Sets the target entity. Requires not null.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.SummonCreatureRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.summon_creature.recipeBuilder()
    .name('wither_skeleton_from_clay')
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .entity(entity('minecraft:wither_skeleton'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the Summon Creature recipe for the given Entity:

    ```groovy:no-line-numbers
    mods.roots.summon_creature.removeByEntity(Class<? extends EntityLivingBase>)
    ```

- Removes the Summon Creature recipe for the given Entity:

    ```groovy:no-line-numbers
    mods.roots.summon_creature.removeByEntity(EntityEntry)
    ```

- Removes the Summon Creature recipe with the given name:

    ```groovy:no-line-numbers
    mods.roots.summon_creature.removeByName(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.roots.summon_creature.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.summon_creature.removeByEntity(entity('minecraft:chicken'))
mods.roots.summon_creature.removeByName(resource('roots:cow'))
mods.roots.summon_creature.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.roots.summon_creature.streamRecipes()
    ```
