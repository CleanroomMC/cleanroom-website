---
order: 1000
---

# Groovy Basics

This will introduce you to the basics of Groovy.
Afterwards, either use the sidebar to navigate to additional pages on this wiki,
or use the external links in [Further Reading](#further-reading).

## Comments

Comments are lines which provide information to the reader, but are not run and will be ignored by the compiler.
They can be created in two different ways.

### Single Line Comment

Single Line Comments comment out everything placed after them on the line they are on.

```groovy:no-line-numbers
// Two forward slashes
Code.run() // and the entire line afterwards will be commented
```

### Multi-Line Comment

Multi-Line Comments comment out everything between the start an end points.


```groovy:no-line-numbers
/* a single forward slash followed by an asterisk, closed via an asterisk followed by a forward slash */
/*Comment out everything between the start and end,

have any amount of empty space inside, and can stop in the middle of a line */ Code.run()
Code.run(a, b, /* can even go in the middle of a line */ c, d)
```

::: info Danger {id="danger"}

Multiline Comments must be closed prior to the end of the file, or the file will not be parsed correctly.

:::

## Variables

Variables can hold data with a specific type.
They can be created with the keyword `def` or by using the desired type directly.
After that comes the name.
A variable will usually start with a lower case letter.
At the end is the value.
If you used `def` then the value will define the type.

```groovy:no-line-numbers
def num  = 10  // dynamically typed
int num2 = 100 // strongly typed
```

If you want to reassign an already declared variable, simply remove the `def` or other keyword.

```groovy
def num = 5
num = 10
```

## Datatypes

There are two different kinds of datatypes: primitive and complex.

### Primitive types

Primitive types can never be `null`.
They always have a value.
Primitive types are: `int`, `long`, `byte`, `short`, `float`, `double`, `char`, and `boolean`.

A boolean can be `true` or `false`, but nothing else.
You can read more about what values a number can be on the specific [Number](./numbers.md) page.

### Complex types

Complex types are all types that are not primitive.
Every object falls under this category.
Primitive types also have boxed complex types.

## Functions

A function is a set of instructions that can be called with a single line.

### Defining Functions

```groovy
// function which takes a single parameter and returns nothing
def f(x) {
    println(x)
}

// function which takes two parameters and returns their sum
def sum(x, y) {
    return x + y
}

// specifying types is optional
// if used, it will error if passed invalid types
def sum2(int x, int y) {
    return x + y
}

// return can be omitted from the final line
def sum3(x, y) {
    println(x)
    println(y)
    x + y
}
```

### Calling functions

We'll take the functions from above.

```groovy:no-line-numbers
f(10) // calls the function with the parameter 10
f(sum(4, 16)) // calls f with the result of sum
```

## Imports

If you want to use any classes short name you need to import the full class name.
Most of javas classes are imported by default.

```groovy:no-line-numbers
import my.package.MyClass // import a single class
import my.other.package.* // import all classes from a package

import static my.package.MyClass.FIELD // static field import
import static my.package.MyClass.function // static function import
import static my.other.package.MyOtherClass.* // import all static functions from the class

import my.package.MyClass as MC // import aliasing
import static my.package.MyClass.function as f // static import aliasing
```

## Further Reading

If there's something more advanced you'd like to learn, take a look at the [Official Groovy Documentation](https://groovy-lang.org/documentation.html).

Some useful Groovy Documentation pages:

- [Syntax](https://groovy-lang.org/syntax.html)
- [Operators](https://groovy-lang.org/operators.html)
- [Closures](https://groovy-lang.org/closures.html)
- [Semantics](https://groovy-lang.org/semantics.html)
