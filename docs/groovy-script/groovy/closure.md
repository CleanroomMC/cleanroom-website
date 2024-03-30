---
title: Closures
---

# Closures

Closures are like lambdas in java, but slightly different.

## For beginners

You may know what a method is. A method is a set order of instructions you can call. For example:

```groovy:no-line-numbers
def print_numbers(int n) {
    for (def i : 0..n) {
        log.info(i)
    }
}
```

This method prints numbers from 0 to a given number to the log.

```groovy:no-line-numbers
print_numbers(5)
```

This will now output

```:no-line-numbers
0
1
2
3
4
```

You can call that method as often as you want with any number input.

Now closures are methods, but you can carry them around. Example:

```groovy:no-line-numbers
def print_numbers = { int n -> /*(1)!*/
    for (def i : 0..n) {
        log.info(i)
    }
}
```

1. Most of the time the type is optional, so here it would become `{ n -> ...`

This closure does the same thing as the method above, but it's a variable instead of a method. Just like any other
variable you can pass it to other methods. (See [Events](../minecraft/events/index.md)).
You can invoke this closure the same way you do with a method:

```groovy:no-line-numbers
print_numbers(3)
```

## Implicit Arguments
Inside a closure you can always refer to the first argument with `it`.

::: info For example {id="example"}
```groovy
def closure = {
    println(it)
}

closure('Hello World')
```
This will print `Hello World` since we pass that as an argument to the function. Inside the closure we use `it` to refer to that argument.
:::

## Variable Environments
This is not a official name. Internally they are called delegates. Basically groovy allows you to attach objects to closures.
You can then use any property of that object in the closure directly.

::: info For example {id="example"}
```groovy
def closure = { output, input ->
    addShaped(output, input) // normally this wouldn't work, but since we add 'crafting' as a variable environment we can use all it's methods
}

closure.delegate = crafting // crafting is a global variable in GroovyScript
closure.resolveStrategy = Closure.DELEGATE_FIRST // find variables in the delegate first

closure(item('minecraft:diamond'), [[item('minecraft:gold_ingot')]])
```
:::

Sometimes this feature is used in GroovyScript to make scripts look simpler.
