
# Reloading


GroovyScript recipes can be reloaded without having to do a full restart.
Any script file using the `postInit` loader can be reloaded.

::: info Danger {id="danger"}

Some compat may not properly implement reloading, and will not be reloaded properly or may have errors while reloading.

:::

To reload GroovyScript, either:

- Run the `/gs reload` command
- Use the keybind, by default bound to `CTRL+R`


## Class Caching

For performance reasons, script classes are cached.
In some situations, they may not be properly reloaded in-game.
You can delete the cache to force these classes to be reloaded.

- Run the `/gs deleteScriptCache` command and then reload normally


## Add Custom Reloading

For reloading to be added, each compat needs to be explicit handled by GroovyScript.

However, you can add your own custom class and implement reloading for your recipes even if GroovyScript doesn't have support for the given recipes natively.
To do so, first make a new file in `classes` with the class containing an `add`, `remove`, and an `onReload` method.
It should have an instance created inside it for access purposes.

::: info DemoRegistry {id="example"}
```groovy
class DemoRegistry extends VirtualizedRegistry<DemoRecipe> {

    DemoRegistry instance = new DemoRegistry()

    @Override
    void onReload() {
        DemoHolder.DemoRecipeList.removeAll(removeScripted());
        DemoHolder.DemoRecipeList.addAll(restoreFromBackup());
    }

    void add(DemoRecipe recipe) {
        addScripted(recipe);
        DemoHolder.DemoRecipeList.add(recipe);
    }

    void remove(DemoRecipe recipe) {
        addBackup(recipe);
        DemoHolder.DemoRecipeList.remove(recipe);
    }
}
```
:::

Then, make a file and set it to have a high priority via the [`runConfig.json`](./run_config.md#postinit)'s `postInit` setting.
Inside that file, import any classes you are adding custom reloading for, and place the `onReload` call after checking `isReloading` is true.

```groovy
import classes.DemoRegistry

if (!isReloading()) return

DemoRegistry.instance.onReload()
```

Finally, any time you would add a recipe to or remove a recipe from `DemoHolder.DemoRecipeList`,
ensure it is manipulated via `DemoRegistry.instance`.
