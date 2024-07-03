---
title: "Predicates"
titleTemplate: "Roots 3 | CleanroomMC"
description: "Predicates are used in Transmution and RunicShearBlock. They either match all blockstates of a block, or all blockstates that have the given properties that match the input blockstate."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Predicates.java"
---

# Predicates (Roots 3)

## Description

Predicates are used in Transmution and RunicShearBlock. They either match all blockstates of a block, or all blockstates that have the given properties that match the input blockstate.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.roots.predicates/* Used as page default */ // [!code focus]
mods.roots.Predicates
```


## Adding Entries

### Recipe Builder

Just like other recipe types, the Predicates also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.roots.predicates.stateBuilder() {open id="abstract"}
- `boolean`. Sets if the predicate checks the block above for validation. Requires that only at most one of either `above` or `below` may be true. (Default `false`).

    ```groovy:no-line-numbers
    above()
    ```

- `boolean`. Sets if the predicate checks the block below for validation. Requires that only at most one of either `above` or `below` may be true. (Default `false`).

    ```groovy:no-line-numbers
    below()
    ```

- `IBlockState`. Sets the IBlockState compared against. Requires not null.

    ```groovy:no-line-numbers
    block(Block)
    blockstate(IBlockState)
    ```

- `Collection<String>`. Sets what properties of the blockstate are checked, where any properties not checked are. Requires that each property must be a valid property of the provided `blockstate`.

    ```groovy:no-line-numbers
    properties(String...)
    properties(Collection<String>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.transmutation.MatchingStates`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.roots.predicates.stateBuilder()
    .blockstate(blockstate('minecraft:red_flower'))
    .register()

mods.roots.predicates.stateBuilder()
    .block(block('minecraft:red_flower'))
    .register()

mods.roots.predicates.stateBuilder()
    .blockstate(blockstate('minecraft:red_flower:type=poppy'))
    .properties('type')
    .register()

mods.roots.predicates.stateBuilder()
    .blockstate(blockstate('minecraft:log:axis=z:variant=oak'))
    .properties('axis')
    .above()
    .register()

mods.roots.predicates.stateBuilder()
    .blockstate(blockstate('minecraft:log'))
    .below()
    .register()
```

:::::::::

::::::::::
