---
order: 800
---

# IIngredient

`IIngredient` is an interface that GroovyScript adds that is implemented by multiple classes.

It has certain abilities that apply to all implementations.


::: info Info {id="info"}

Any time you see `IIngredient` as a class, you can technically insert any of the [Implementations](#implementations),
but some may not work as expected depending on the circumstance.

As an example, in [Crafting Recipes](../helpers/crafting.md) a `FluidStack` `IIngredient` will be converted into a tank, bucket,
or any other container of the given fluid. In other recipes, it might be converted into only a bucket.

:::

## Implementations

There are a number of classes that implement `IIngredient`, but the primary ones are:

- [`OreDictIngredient`](../vanilla_object_mappers.md#ore)
- [`ItemStack`](../vanilla_object_mappers.md#itemstack)
- [`FluidStack`](../vanilla_object_mappers.md#liquid-and-fluid)
- [`OrIngredient`](#combining), which contains multiple `IIngredient`s
- Several other modded classes, including Mekanism's GasStack and a custom class to handle Thaumcraft Aspects.


## Amount

`IIngredient` extends `IResourceStack`, which allows controlling the amount easily.

It adds the method `withAmount(int)` and `multiply(int)` to modify the amount of the `IIngredient`.

Due to [Operator Overloading](../../groovy/operators.md#operator-overloading),
using an asterisk `*` will call the `multiply` method.

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
item('minecraft:diamond') * 5
item('minecraft:clay').multiply(64)
fluid('water') * 14000
ore('ingotIron').withAmount(16)
```
::::::::::


## Comparing

`IIngredient`s can be compared with other `IIngredients` to determine if they match or are contained by the other.

When interacting with any `IIngredient`, you can use `isCase(IIngredient)` to determine if the former contains the latter
and use `rightShift(IIngredient)` to determine if the former contains the latter ***and***
if the amount of the former is greater than the amount of the latter.

Due to [Operator Overloading](../../groovy/operators.md#operator-overloading),
`in` will call the `isCase` method and two right angle brackets `>>` will call the `rightShift` method.

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
ore('ingotIron') in item('minecraft:iron_ingot')                   // false
item('minecraft:iron_ingot') in ore('ingotIron')                   // true
item('minecraft:iron_ingot') >> item('minecraft:iron_ingot')       // true
item('minecraft:iron_ingot') >> (item('minecraft:iron_ingot') * 3) // false
```
::::::::::


## Mark

`IIngredient` extends `IMarkable`, which allows setting the `Iingredient` to have a specific String as a "mark"
to aid in [Crafting Recipes](../helpers/crafting.md).

When interacting with any `IIngredient`, you can use `mark(String)` to set the mark to the given String.
This is currently exclusively used for Crafting Table Recipe Functions.

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
item('minecraft:diamond').mark('its_a_diamond')
item('minecraft:clay').mark('special')
fluid('water').mark('container')
ore('ingotIron').mark('hello!')
```
::::::::::


## Combining

`IIngredient`s can be combined into a single `IIngredient` representing all contained `IIngredient` as part of the `OrIngredient` class.

When interacting with any `IIngredient`, you can use `or(IIngredient)` to join any number of `IIngredient`s together.

::: info Warning {id="warning"}
This creates and returns a *new* `IIngredient`, meaning any information such as [`mark`](#mark) must happen after
the `OrIngredient` is created.
:::

Due to [Operator Overloading](../../groovy/operators.md#operator-overloading),
using a pipe `|` will call the `or` method.

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
item('minecraft:diamond').or(item('minecraft:clay'))
fluid('water') | ore('ingotIron')
```
::::::::::
