
# Operators


Groovy has many operators.
Some are reused for different purposes in different contexts.
In particular, many are used for [operator overloading](#operator-overloading), allowing the operator to be used on valid objects.

You can read more about operators on the [official documentation](https://docs.groovy-lang.org/latest/html/documentation/core-operators.html).


## Types of Operators


### Arithmetic


The basic math operators are the same as they always are.

| Symbol   | Name           | Operation                                |
|----------|----------------|------------------------------------------|
| `a + b`  | Addition       | add `a` and `b`                          |
| `a - b`  | Subtraction    | subtract `b` from `a`                    |
| `a / b`  | Division       | divide `a` by `b`                        |
| `a * b`  | Multiplication | multiple `a` by `b`                      |
| `a % b`  | Remainder      | get the remainder of dividing `a` by `b` |
| `a ** b` | Power          | `a` to the power of `b`                  |


### Compound Assignment


You can use several different operators in conjunction with an equal sign to update a variable.
This will also implicitly cast the output into the same type as `a`.

`a [op]= b` is equivalent to `a = a [op] b`.

| Symbol     | Name                 | Operation     |
|------------|----------------------|---------------|
| `a = b`    | Assignment           | `a = b`       |
| `a =+ b`   | Addition             | `a = a + b`   |
| `a =- b`   | Subtraction          | `a = a - b`   |
| `a =/ b`   | Division             | `a = a / b`   |
| `a =* b`   | Multiplication       | `a = a * b`   |
| `a =% b`   | Remainder            | `a = a % b`   |
| `a =** b`  | Power                | `a = a ** b`  |
| `a ?= b`   | Elvis                | `a = a ?: b`  |
| `a &= b`   | Bitwise And          | `a = a & b`   |
| `a \|= b`  | Bitwise OR           | `a = a \| b`  |
| `a <<= b`  | Left Shift           | `a = a << b`  |
| `a >>= b`  | Right Shift          | `a = a >> b`  |
| `a >>>= b` | Right Shift Unsigned | `a = a >>> b` |


#### Increment/Decrement


There are two shorthand ways to write `a = a + 1` and two to write `a = a - 1`.

::: info Warning {id="warning"}

The two ways differ in what value they return - `a++` returns the value of `a` *before* being increased,
while `++a` returns the value of `a` *after* being increased.
When interacting with these operators, to avoid confusion, you should use them as a standalone statement -

```groovy
def x = 5
x++
Code.run(x) // do this
Code.run(x++) // don't do this // [!code warning]
```

:::

| Symbol | Name              | Operation             |
|--------|-------------------|-----------------------|
| `a++`  | Postfix Increment | `return a; a = a + 1` |
| `a--`  | Postfix Decrement | `return a; a = a - 1` |
| `++a`  | Prefix Increment  | `a = a + 1; return a` |
| `--a`  | Prefix Decrement  | `a = a - 1; return a` |


### Equality


Compare two values with each other.

| Symbol    | Name                     | Operation                                   |
|-----------|--------------------------|---------------------------------------------|
| `a == b`  | Equals                   | true if `a` is the same as `b`              |
| `a != b`  | Not Equals               | true if `a` is not the same as `b`          |
| `a < b`   | Less Than                | true if `a` is less than `b`                |
| `a <= b`  | Less Than or Equal to    | true if `a` is less than or equal to `b`    |
| `a > b`   | Greater Than             | true if `a` is greater than `b`             |
| `a >= b`  | Greater Than or Equal to | true if `a` is greater than or equal to `b` |
| `a === b` | Identical                | true if `a` is identical to `b`             |
| `a !== b` | Not Identical            | true if `a` is not identical to `b`         |


### Logical


Returns a boolean value based on the outcome of the equation.
The AND and OR operators will short-circuit, and not run the right hand side if it is not needed.
This means you can do things like `bool && run()`, and `run()` will only be called if `bool` is true.

| Symbol     | Name        | Operation                          |
|------------|-------------|------------------------------------|
| `a && b`   | Logical And | true if both `a` and `b` are true  |
| `a \|\| b` | Logical Or  | true if either `a` or `b` are true |
| `!a`       | Logic Not   | true if `a` is false               |


### Bitwise


Bitwise operations are named as such because they directly manipulate bits.
Note that bitwise operators do *not* short-circuit, and will always check both sides of the equation.

| Symbol    | Name                 |
|-----------|----------------------|
| `a & b`   | Bitwise AND          |
| `a \| b`  | Bitwise OR           |
| `a ^ b`   | Bitwise XOR          |
| `a ~ b`   | Bitwise Negation     |
| `a << b`  | Left Shift           |
| `a >> b`  | Right Shift          |
| `a >>> b` | Right Shift Unsigned |


### Null Handling


There are some operators to help with handling `null`, and avoid `NullPointerException`s.

| Symbol      | Name            | Operation                                                                            |
|-------------|-----------------|--------------------------------------------------------------------------------------|
| `a ? b : c` | Ternary         | returns `b` if `a` is true and c if `a` is false                                     |
| `a ?: b`    | Elvis           | returns `b` if `a` is false, otherwise returns `a`                                   |
| `a?.b`      | Safe Navigation | used on an object, will return `null` if `a` is `null`, otherwise will return `b`    |
| `a?[b]`     | Safe Index      | used on an array, will return `null` if `a` is `null` or `b` is outside of the array |


### Field Access


| Symbol | Name                | Operation                                                            |
|--------|---------------------|----------------------------------------------------------------------|
| `a.b`  | Field access        | returns `getB` if the method exists, otherwise returns the field `b` |
| `a.@b` | Direct field access | returns the field `b` instead of the method `getB()`                 |


### Method Reference


| Symbol | Name             | Operation                                                   |
|--------|------------------|-------------------------------------------------------------|
| `a.&b` | Method pointer   | returns a reference to the method `b` instead of calling it |
| `a::b` | Method reference | functionally an alias of `a.&b`                             |


### Regex


| Symbol    | Name    | Operation                                                   |
|-----------|---------|-------------------------------------------------------------|
| `~a`      | Pattern | parses String `a` into a Regex Pattern                      |
| `a =~ b`  | Find    | runs `~b`, then creates a Matcher against String `a`        |
| `a ==~ b` | Match   | runs ` a =~ b`, then returns true if there were any matches |


### Spread


You can manipulate an array of objects

| Symbol | Name      | Operation                                                            |
|--------|-----------|----------------------------------------------------------------------|
| `a*.b` | Spread    | calls `b` on all items in array `a`                                  |
| `*a`   | Arguments | expands the array `a` into individual elements when calling a method |


### Range


You can create a range, typically a range of numbers, in a shorthand way.
This is typically used as part of a loop or getting a subset of a list.

| Symbol   | Name  | Operation                                                                            |
|----------|-------|--------------------------------------------------------------------------------------|
| `a..b`   | Range | Range from `a` to `b`, inclusive on both bounds                                      |
| `a<..b`  | Range | Range from `a` to `b`, exclusive on the lower bound and inclusive on the upper bound |
| `a..<b`  | Range | Range from `a` to `b`, inclusive on the lower bound and exclusive on the upper bound |
| `a<..<b` | Range | Range from `a` to `b`, exclusive on both bounds                                      |


### Syntax Sugar


| Symbol | Name    | Operation                              |
|--------|---------|----------------------------------------|
| `<>`   | Diamond | syntax sugar relating to generic types |


## Operator Overloading

Groovy has a mechanism where a symbol can be transformed into calling a method on an object.
This is a full table of these Operators, and what method they call.

| Symbol     | Method Called             |
|------------|---------------------------|
| `a + b`    | `a.plus(b)`               |
| `a - b`    | `a.minus(b)`              |
| `a * b`    | `a.multiply(b)`           |
| `a / b`    | `a.div(b)`                |
| `a % b`    | `a.mod(b)`                |
| `a ** b`   | `a.power(b)`              |
| `a \| b`   | `a.or(b)`                 |
| `a & b`    | `a.and(b)`                |
| `a ^ b`    | `a.xor(b)`                |
| `<=>`      | `a.compareTo(b)`          |
| `a == b`   | `a.equals(b)`             |
| `a[b]`     | `a.getAt(b)`              |
| `a[b] = c` | `a.putAt(b, c)`           |
| `a as b`   | `a.asType(b)`             |
| `a()`      | `a.call()`                |
| `a[b]`     | `a.getAt(b)`              |
| `a[b] = c` | `a.putAt(b, c)`           |
| `a in b`   | `b.isCase(a)`             |
| `a << b`   | `a.leftShift(b)`          |
| `a >> b`   | `a.rightShift(b)`         |
| `a >>> b`  | `a.rightShiftUnsigned(b)` |
| `a++`      | `a.next()`                |
| `a--`      | `a.previous()`            |
| `+a`       | `a.positive()`            |
| `-a`       | `a.negative()`            |
| `~a`       | `a.bitwiseNegate()`       |
