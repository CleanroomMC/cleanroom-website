
# Differences from Java

Groovy language grammar is derived from Java grammar,
with various enhancements in the form of specific constructs and allowing additional simplifications.

In most cases, the difference is optional, and writing the code in the way one would write Java would have no issues.
The main exception to this is [Strings](#strings).

This page will illustrate some of the more significant differences in an easy to compare manner.

You can read more about the differences on the [official documentation](https://groovy-lang.org/differences.html).


## Semicolons

Semicolons are the end of a line are optional.

::: code-group

```java
Code.run();
```

```groovy
Code.run()
```

:::

## Parentheses

Parentheses around parameters are optional when there is no ambiguity.

::: code-group

```java
Code.run('example');
Code.run(Code.nested('example'));
println('hello');
```

```groovy
Code.run 'example'
Code.run Code.nested('example')
println 'hello'
```

:::

## Variable Declaration

Prior to Java 10, you had to declare a variable using the variable type.
After Java 10, using the keyword `var`, you could declare a variable using `var` without having to specify the type ahead of time.

In Groovy, you can use `def` to accomplish the same thing.

::: code-group

```java
String name = "hello";
int num = 5;
```

```groovy
def name = "hello"
def num = 5
```

:::

## Arrays

In Java, arrays are declared via curly braces `{}` surrounding the variable.

In Groovy, unless using the explicit array creation syntax, you need to use square braces `[]` instead.

::: code-group

```java
int[] array = {1, 2, 3};
int[] array2 = new int[] {1, 2, 3};
```

```groovy
def array = [1, 2, 3]
def array2 = new int[] {1, 2, 3}
```

:::

## Maps

In Java, there is no shorthand way to create a map.

In Groovy, you can easily combine the same square braces `[]` used to create arrays with colons `:` to delineate a key-value entry.

::: code-group

```java
Map<Integer, String> map = new HashMap<>();
map.put(1, "example");
map.put(3, "demo");
```

```groovy
def map = [1: "example", 3: "demo"]
```

:::

## Visibility

In Java, fields, classes, and methods that do not have an access specifier stated are `package-private` by default, meaning they are only visible to other classes inside the package.

### Classes

In Groovy, classes declared without an access specifier default to `public`.

::: code-group

```java
public class DemoClass {}
```

```groovy
class DemoClass {}
```

:::

### Fields

In Groovy, fields declared without an access specifier are declared as a *property*, which creates a `private` field
and an associated *getter* and *setter* method.
If the field is final, only a *getter* method will be created.

::: code-group

```java
public class DemoClass {
    private final String value = "value";
    private String name = "example";

    public getValue() {
        return this.value;
    }

    public getName() {
        return this.name;
    }

    public setName(String newName) {
        this.name = newName;
    }
}
```

```groovy
class DemoClass {
    final def value = "value"
    def name = "example"
}
```

:::

### Methods

In Groovy, methods declared without an access specifier default to `public`.

::: code-group

```java
public class DemoClass {
    public void foo() {
        // example
    }
}
```

```groovy
class DemoClass {
    void foo() {
        // example
    }
}
```

:::

## Return

When a function expects to return a specific value, simply writing a value of that type at the end of the function will cause that to be returned.

::: code-group

```java
public class DemoClass {
    public DemoClass foo() {
        return this;
    }

    public String hello() {
        return "hello";
    }

    public String test(boolean test) {
        if (test) {
            return "Test is true";
        } else {
            return "Test is false";
        }
    }
}
```

```groovy
class DemoClass {
    DemoClass foo() {
        this
    }

    def hello() {
        'hello'
    }

    def test(test) {
        if (test) {
            'Test is true'
        } else {
            'Test is false'
        }
    }
}
```

:::


## Strings

In Java, declaring using single quotes `''` only accepts a single character and creates a `char`,
and you must use double quotes `""` to create a normal `String`.

In Groovy, there is no shorthand to declare a `char`,
declaring using single quotes `''` creates a normal `String`,
and using double quotes `""` creates a special object called a `GString`,
which functions as a normal `String` object unless it contains a dollar sign `$`, in which case it has specific formatting rules.

Learn more about this over on the specific [Strings](./strings.md) page.

::: code-group

```java
char character = 'a';
String name = "example";
```

```groovy
char character0 = 'a'
def character1  = (char) 'a'
def character2  = 'a' as char
String name0    = "example"
def name1       = 'example'
def name2       = "example"
def nameGString = "$name0" // will create a GString, not a String, and will replace with the variable referenced // [!code warning]
def nameInvalid = '$name0' // will have the raw text provided
```

:::


## Omitting `.class`

When you want to refer to a specific `class` object, you can omit the `.class` suffix.

::: code-group

```java
public class DemoClass {
    public Class<?> getClass() {
        return DemoClass.class;
    }
}
```

```groovy
class DemoClass {
    def getClass() {
        DemoClass
    }
}
```

:::


## Repeating Variable Reference


Groovy has multiple ways of simplifying interacting with multiple methods or fields of the same object.

::: code-group

```java
DemoClass obj = new DemoClass();
obj.sayHi();
obj.value = 1;
obj.name = 'hello';
obj.total = 100;
obj.clay = 'clay';
obj.current = 5;
obj.sayGoodbye();
```

```groovy [groovy with]
DemoClass obj = new DemoClass()
obj.with {
    sayHi()
    value = 1
    name = 'hello'
    total = 100
    clay = 'clay'
    current = 5
    sayGoodbye() // returns the value of sayGoodbye()
}
```

```groovy [groovy inbuilt with]
DemoClass obj = new DemoClass().with {
    sayHi()
    value = 1
    name = 'hello'
    total = 100
    clay = 'clay'
    current = 5
    sayGoodbye()
    it // returns 'it'
}
```

```groovy [groovy tap]
DemoClass obj = new DemoClass().tap {
    sayHi()
    value = 1
    name = 'hello'
    total = 100
    clay = 'clay'
    current = 5
    sayGoodbye() // using tap will return the instance, not sayGoodBye()
}
```

:::
