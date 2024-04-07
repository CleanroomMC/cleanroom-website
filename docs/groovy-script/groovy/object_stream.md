---
title: Object Stream
---


# Object Stream

Object Stream is a feature we use in GroovyScript to help mass edit or remove recipes. It is a very powerful tool which can help with your modpack.

:::info Note {id="info"}
This is an advanced feature, since you will be interacting with recipe objects of mods directly. All of these mods don't use any of GroovyScripts `IIngredient`s. It can be very difficult to use, but can also be very powerful.
:::

You can usually call `.streamRecipes()` on a recipe registry to get an instance.

:::info For Example {id="example"}
```groovy
crafting.streamRecipes()
mods.draconicevolution.fusion.streamRecipes()
```
:::

## Methods
It has methods similar to the java `Stream` class.
- `trim()` removes any elements which might be null from the stream.

- `filter(Closure<Boolean>)` removes all recipes from the stream for which the closure returns `false`.
  :::info For Example {id="example"}
  ```groovy
  crafting.streamRecipes().filter { recipe ->
    return recipe.output in ore('ingotIron')
  }
  ```
  This removes all recipes from the stream which don't output an item with the oredict `ingotIron`.
  :::

- `forEach(Closure)` iterates over the remaining elements in the stream and applies the closure to each element.
  :::info For Example {id="example"}
  ```groovy
  crafting.streamRecipes().forEach { recipe ->
    log.info recipe.output
  }
  ```
  This prints the output of each recipe to the log.
  :::

- `findFirst()` returns the first non-null element in the stream. If the stream is empty an error is thrown.
  :::info For Example {id="example"}
  ```groovy
  crafting.streamRecipes().findFirst()
  ```
  This returns the first recipe from the stream.
  :::

- `getFirst()` returns the first non-null element in the stream. If the stream is empty `null` is returned.

- `removeAll()` removes all remaining recipes from the registry.
  :::info For Example {id="example"}
  ```groovy
  crafting.streamRecipes().removeAll() // removes every recipe
  crafting.streamRecipes()
    .filter({ recipe -> return recipe.output in ore('ingotIron')}) // filters recipes with iron ingot output
    .removeAll() // removes all these recipes with iron ingot output
  ```
  :::

- `removeFirst()` removes the first element in the stream from the registry.
  :::info For Example {id="example"}
  ```groovy
  crafting.streamRecipes().removeFirst()
  ```
  This removes the first recipe from the stream.
  :::

Additionally methods like `size()`, `isEmpty()` and `get(int index)` are available, similar to `List`.

As you can see in the `removeAll()` example you can chain method calls like a [builder](builder.md).
You can chain the following methods in any order and as often as you want:
- `forEach`
- `trim`
- `filter`
- `removeFirst`
- `removeAll`
