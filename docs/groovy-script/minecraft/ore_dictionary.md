# Ore Dictionary

::: info Warning {id="warning"}
Requires version 0.3.0+
:::

GroovyScript also allows you to remove and add ore dictionaries to items and reload them.

## Getting an ore dict ingredient
Ore dict ingredients can be used in any recipe that accepts `IIngredient`.
::: info Example {id="example"}

```groovy:no-line-numbers
ore('ingotCopper') // returns all copper ingots
ore('ingot*') // wildcards are also valid (returns all ingots)
```

:::

## Adding ore dicts

All three methods are do exactly the same thing.

::: info Example {id="example"}

```groovy:no-line-numbers
oreDict.add("amogus", item('minecraft:iron_ingot'))

item('minecraft:iron_ingot').addOreDict(ore('amogus'))

ore('amogus').add(item('minecraft:iron_ingot'))
```

:::

## Removing ore dicts

All three methods are do exactly the same thing.

::: info Example {id="example"}

```groovy:no-line-numbers
oreDict.remove("ingotIron", item('minecraft:iron_ingot'))

item('minecraft:iron_ingot').removeOreDict(ore('ingotIron'))

ore('ingotIron').remove(item('minecraft:iron_ingot'))
```

:::

## Other

You can get all items from an ore dict.
Both ways do the same thing.

::: info Example {id="example"}

```groovy:no-line-numbers
oreDict.getItems('ingotIron')
oreDict['ingotIron']
```

:::

Checking if an item is in an ore dictionary

::: info Example {id="example"}

```groovy:no-line-numbers
item('minecraft:iron_ingot') in ore('ingotIron') // returns true
```

:::

Getting the first item from an ore dictionary

::: info Example {id="example"}

```groovy:no-line-numbers
ore('ingotIron').first
ore('ingotIron')[0]
```

:::

Iterating over all items in an ore dictionary

::: info Example {id="example"}

```groovy:no-line-numbers
for (def ironIngot : ore('ingotIron')) {
    ...
}
```

:::
