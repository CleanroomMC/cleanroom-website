# Cleanroom

This is where the entire site is stored, and to keep the repository tidy, please contribute as follows.

## How to Contribute

1. Clone the GitHub.
2. Install [`pnpm`](https://pnpm.io/).
3. Run `pnpm i` on the project to download the required development dependencies to `node_modules`.
4. Run `pnpm dev` to launch the localhost server.
5. Run `pnpm build` to confirm that all links are valid.
6. Thank you for contributing!



### Optional Steps

Setup cz-git

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
