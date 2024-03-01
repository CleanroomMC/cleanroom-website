---
title: "Lexicon Knowledge"
description: "Creates a new type of knowledge that Lexica Botania entries may be gated with. Can only be created."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Knowledge.java"
---

# Lexicon Knowledge (Botania)

## Description

Creates a new type of knowledge that Lexica Botania entries may be gated with. Can only be created.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.knowledge/*(1)!*/
mods.botania.Knowledge
```

1. This identifier will be used as the default for examples on this page

## Adding Entries

- Adds entries in the format `id`, `formatting`:

    ```groovy:no-line-numbers
    mods.botania.knowledge.add(String, TextFormatting)
    ```

- Adds entries in the format `id`, `formatting`, `autoUnlock`:

    ```groovy:no-line-numbers
    mods.botania.knowledge.add(String, TextFormatting, boolean)
    ```

:::::::::: details EXAMPLE {open}
```groovy:no-line-numbers
mods.botania.knowledge.add('newType', TextFormatting.RED, true)
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry:

    ```groovy:no-line-numbers
    mods.botania.knowledge.streamKnowledgeTypes()
    ```
