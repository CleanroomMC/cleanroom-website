
# Numbers

Groovy has multiple different formats that numbers can be in.
Most of these are primitive, but there are also two objects for extremely large numbers.


## Types

By default, when you create a number it will try to create it in a specific type.

To explicitly create a number of a specific type, use `as [type]` when declaring it, cast to the type via `([type])`, or use the associated suffix after the number.
The suffix may be uppercase or lowercase.

If you declare the variable via `def`, the type will be communicated based on the number limit or explicit casts.

### Whole numbers

|     Type     | Suffix  | Limits                                   |
|:------------:|:-------:|------------------------------------------|
|    `byte`    |         | from -2^7 to 2^7 - 1 (-256 - 255)        |
|   `short`    |         | from -2^15 to 2^15 - 1 (-32768 - 32767)  |
|    `int`     | `i`/`I` | from -2^31 to 2^31 - 1                   |
|    `long`    | `l`/`L` | from -2^63 to 2^63 - 1                   |
| `BigInteger` | `g`/`G` | has no limit, but increasing memory cost |

### Decimal numbers

|     Type     | Suffix  | Limits                                   |
|:------------:|:-------:|------------------------------------------|
|   `float`    | `f`/`F` | stored in 32 bits                        |
|   `double`   | `d`/`D` | stored in 64 bits                        |
| `BigDecimal` | `g`/`G` | has no limit, but increasing memory cost |


### Examples

```groovy:no-line-numbers
def byteValue    = 10 as byte  // byte
def shortValue   = 10 as short // short
def intValue     = 10          // int
def longValue    = 10l         // long
def longValue    = 2147483648  // long
def bigIntValue  = 10g         // BigInteger
def floatValue   = 1.0f        // float
def doubleValue  = 1.0d        // double
def decimalValue = 1.0         // BigDecimal
```

Or you can use the given type when declaring the variable to convert the number to be of that type, if possible.

```groovy:no-line-numbers
byte byteValue          = 10
short shortValue        = 10
int intValue            = 10
long longValue          = 10
BigInteger bigIntValue  = 10
float floatValue        = 10
double doubleValue      = 10
BigDecimal decimalValue = 10
```

### Conversion

Numbers will automatically be converted between types as required.

When created, numbers will automatically be created as a specific type unless specified. These types are:

```groovy
def num0 = 1.5                       // BigDecimal
def num1 = 10                        // int
def num2 = 2_147_483_647             // this is the maximum int value
def num3 = 2_147_483_648             // since this cannnot be an int, it is declared as a long
def num4 = 9_223_372_036_854_775_807 // maximum long value
def num5 = 9_223_372_036_854_775_808 // since this cannnot be a long, it is declared as a BigInteger
```

::: info Note {id="note"}

In most cases, when declaring a non-whole number, you want to use a `float` or `double`.
While it can be converted into those types automatically when required,
using a `BigDecimal` takes up more memory and converting it is more expensive than simply using the `f` or `d` suffix.

:::


## Format

The same number can be written in multiple different ways.
Regardless of the way it is written, you can use the suffix [type](#types).


::: info Warning {id="warning"}

When declaring a number, do not use `0`s as padding on the front, as it may cause the number to be interpreted as an [octal](#octal) number.

:::

#### Underscores

For readability, you can use underscores in any position besides the first to act as readability enhancers.

```groovy:no-line-numbers
def million1 = 1000000
def million2 = 1_000_000 // exactly the same number, but much more readable!
```

#### Binary

Using the prefix `0b`, followed by exclusively by `01`, you can represent a number in binary.

```groovy:no-line-numbers
def num0 = 0b10101111 // 175
def num1 = 0b11       // 3
```

#### Octal

Using the prefix `0`, followed exclusively by `01234567`, you can represent a number in octal.

```groovy:no-line-numbers
def num0 = 077 // 63
def num1 = 011 // 3
```

#### Hexadecimal

Using the prefix `0x`, followed exclusively by `0123456789abcdef`, you can represent a number in hexadecimal.

This format is frequently used to represent colors.

```groovy:no-line-numbers
def num0 = 0x77     // 119
def num1 = 0x11     // 17
def num2 = 0xffffff // 16,777,215
```


## Arithmetic


### Basics

As you would in any other language, you can use the addition `+`, subtraction `-`, division `/`, multiplication `*`, remainder `%`, and power `**` operators.

You are also able to use `+=`, `-=`, `/=`, `*=`, `%=`, and `**=` when setting an already declared variable to a new value.

### Operator Overloading

Groovy has a special procedure called [Operator Overloading](./operators.md#operator-overloading).

This allows math to occur between objects like `BigNumber` and `BigDecimal` easily, whereas in native Java this is impossible.

```groovy
BigDecimal num0 = 1.5
println num0 * 5 // will print 7.5
```
