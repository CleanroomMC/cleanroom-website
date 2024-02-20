# Cleanroom

This is where the entire site is stored, and to keep the repository tidy, please contribute as follows.

## How to contribute

1. Setup project

```sh
pnpm i
```

For develop server, run `pnpm dev`.

2. Setup cz-git

If you don't know what this is, check out [here](https://cz-git.qbb.sh/guide/#as-global-use).

TL;DR

```sh
npm install -g cz-git commitizen
echo '{ "path": "cz-git", "$schema": "https://cdn.jsdelivr.net/gh/Zhengqbbb/cz-git@1.8.0/docs/public/schema/cz-git.json" }' > ~/.czrc
```

replace ~/.czrc to
```json
{
    "path": "cz-git",
    "$schema": "https://cdn.jsdelivr.net/gh/Zhengqbbb/cz-git@1.7.0/docs/public/schema/cz-git.json",
    "markBreakingChangeMode": true
}
```

3. Additional Formats

- DropDown

```markdown
// after frontmatter
<script lang="ts" setup>
import DropDown from "../../components/DropDown.vue"
</script>

// something

<DropDown>
<template #label>

`replaceByName()`

</template>
<template #content>

See the [Crafting page](https://groovyscript-docs.readthedocs.io/en/latest/groovyscript/minecraft/crafting/) for details about these.

</template>
</DropDown>
```