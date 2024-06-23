---
title: "Fermentation Station"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts an input fluidstack into an output fluidstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/OreFermenter.java"
---

# Fermentation Station (Industrial Foregoing)

## Description

Converts an input fluidstack into an output fluidstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.industrialforegoing.ore_fermenter/* Used as page default */ // [!code focus]
mods.industrialforegoing.orefermenter
mods.industrialforegoing.oreFermenter
mods.industrialforegoing.OreFermenter
mods.industrialforegoing.fermentation
mods.industrialforegoing.Fermentation
```


## Adding Recipes

- Adds a Fermentation Station recipe in the format `input`, `output`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_fermenter.add(FluidStack, FluidStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.ore_fermenter.add(fluid('if.ore_fluid_raw').withNbt(['Ore': 'oreGold']), fluid('if.ore_fluid_fermented').withNbt(['Ore': 'oreGold']) * 2)
```

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_fermenter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_fermenter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_fermenter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.ore_fermenter.removeByInput(fluid('if.ore_fluid_raw').withNbt([Ore: 'oreRedstone']))
mods.industrialforegoing.ore_fermenter.removeByOutput(fluid('if.ore_fluid_fermented').withNbt([Ore: 'oreRedstone']))
mods.industrialforegoing.ore_fermenter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_fermenter.streamRecipes()
    ```
