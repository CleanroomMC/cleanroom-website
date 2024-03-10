---
title: "Spells"
titleTemplate: "Roots 3 | CleanroomMC"
description: "Controls the recipe for the given spell, the sound, all properties, the base cost, and each modifier's cost."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Spells.java"
---

# Spells (Roots 3)

## Description

Controls the recipe for the given spell, the sound, all properties, the base cost, and each modifier's cost.

:::::::::: details Warning {open id="warning"}
This compat is not fully documented. Some or all of its features are not present on the wiki. View the source code to gain an accurate understanding of the compat.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.spells/* Used as page default */ // [!code focus]
mods.roots.Spells
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Spells also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../groovy/builder.md) out.

:::::::::: details mods.roots.spells.costBuilder() {open id="abstract"}
- `List<IModifierCost>`. Sets a list of all cost types used to construct a complex Cost object.

    ```groovy:no-line-numbers
    cost(CostType)
    cost(CostType, double)
    cost(CostType, Herb, double)
    cost(CostType, double, IModifierCore)
    cost(CostType, IModifierCore, double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `java.util.Map<epicsquid.roots.modifiers.CostType, epicsquid.roots.modifiers.IModifierCost>`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.spells.costBuilder()
    .register()

mods.roots.spells.costBuilder()
    .cost(cost('additional_cost'), herb('dewgonia'), 0.25)
    .register()

mods.roots.spells.costBuilder()
    .cost(cost('additional_cost'), herb('spirit_herb'), 0.1)
    .cost(cost('all_cost_multiplier'), null, -0.125)
    .register()
```

:::::::::

::::::::::

:::::::::: details mods.roots.spells.recipeBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `SpellBase`. Sets the spell being modified. Requires not null.

    ```groovy:no-line-numbers
    spell(SpellBase)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.spell.SpellBase$SpellRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.spells.recipeBuilder()
    .spell(spell('spell_fey_light'))
    .input(item('minecraft:clay'), item('minecraft:diamond'), item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::
