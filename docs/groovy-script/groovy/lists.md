---
order: 400
---

# Lists

Lists are data types that can hold multiple values of a certain type.

Lists are dynamically sized. So that means if we create a list of 0 length, we can still add elements to it.

There are multiple ways to create lists. The elements of a list are ordered, so the order won't change randomly.

```groovy:no-line-numbers
// most simple list, size = 0
// the type is always ArrayList
def simpleList = []
def list = new ArrayList() // this is the same as above

def anotherList = ['He', 'llo', ' w', 'or', 'ld!'] // we can put values into the list, all of the same type
```

## Getting values

Elements of a list can be accessed via `get` or the `[]` operator.
You can also use the safe index operator `?[]` to try to get the value while avoiding a `NullPointerException`.

Lists index start at 0.


```groovy:no-line-numbers
def list = [9, 8, 7, 6, 5, 4, 3, 2, 1]
println(list[0]) // 9
println(list.get(0)) // 9
println(list[3]) // prints the 4th element: 6
println(list[-1]) // prints the last element: 1
println(list[-2]) // prints the 2nd last element: 2
```

You can also get a range of elements by using the `..` operator.

```groovy:no-line-numbers
def list = [9, 8, 7, 6, 5, 4, 3, 2, 1]
def subList = list[2..5] // [7, 6, 5, 4]
// reversing the indexes results in a reversed list
def subLis2 = list[5..2] // [4, 5, 6, 7]
// -1 is greater because it refers to the last elements, so its not reversed
def subList3 = list[2..-1] // [7, 6, 5, 4, 3, 2, 1]
```

## Modifying lists

Lists can be modified by using `set()`, `add()` and `remove()`.
We can also use the `[]` and `<<` operators

```groovy:no-line-numbers
def list = []
list.add(1) // adds 1 to the lest
// list is now [1]
list << 3 // adds 3 to the list
list << 9
// [1, 3, 9]
list.set(1, 5) // sets the element at index 1 to 5
list[1] = 5 // same thing as above
// [1, 5, 9]
list.remove(0) // removes the first element
// [5, 9]
```

## Spread Operator

Using the [Spread Operator](./operators.md#spread) you can call methods or access fields on an all objects inside a list.

```groovy
class Demo {
    def value
}
def list = [new Demo(value: 1), new Demo(value: 2), new Demo(value: 4), new Demo(value: 8)]
def values = list*.value // gets the value field of each Demo object in the list
// [1, 2, 4, 8]
```

A similar mechanism can be used to spread the elements of a list across multiple parameters of a function.

```groovy
def f(a, b, c, d) {
    (a + b) * (c + d)
}
def list = [1, 2, 4, 8]
def value = f(*list) // spread the list into the valid arguments
// 36
```

Or to spread the elements of a list across another list.

```groovy
def list = [1, 2, 4, 8]
def newList = [0, *list, 16]
// [0, 1, 2, 4, 8, 16]
```
