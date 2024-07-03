---
order: 500
---

# Keywords


Groovy has 44 keywords:

`abstract`, `assert`, `break`, `case`,
`catch`, `class`, `const`, `continue`,
`def`, `default`, `do`, `else`,
`enum`, `extends`, `final`, `finally`,
`for`, `goto`, `if`, `implements`,
`import`, `instanceof`, `interface`, `native`,
`new`, `null`, `non-sealed`, `package`,
`public`, `protected`, `private`, `return`,
`static`, `strictfp`, `super`, `switch`,
`synchronized`, `this`, `threadsafe`, `throw`,
`throws`, `transient`, `try`, and `while`.

These words cannot be used for variable, field, or method names.

It also has 8 contextual words:

`as`, `in`, `permits`, `record`,
`sealed`, `trait`, `var`, and `yields`.

These words are only keywords in some contexts, and can be used for variable, field, or method names.
However, to avoid confusion, you should still avoid using them in those contexts.

It also has 10 other reserved words:

`true`, `false`, `boolean`,
`char`, `byte`, `short`, `int`,
`long`, `float`, and `double`.

These words are either primitive types or boolean literals, and cannot normally be used for variable, field, or method names.

You will be using many of these keywords frequently.

You can read more about the keywords on the [official documentation](https://groovy-lang.org/syntax.html#_keywords).


## Header


`package`: Defines the location of the file in a package.

`import`: Imports classes from other packages.


## Visibility


These keywords set the visibility of the field, method, or class.

`public`: The target is accessible from anywhere.

`protected`: The target is only accessible from this class, or a class that inherits it.

`private`: The target is only accessible from this class.


## Classes


Defines the type of class created.

`class`: Creates a standard class.

`enum`: Creates an enum class, which contains a fixed list of entries.

`interface`: Creates an interface, which can be implemented by classes.

`record`: Creates a record class, which is used to store data and cannot extend another class.

`trait`: Creates a trait, which is a custom type for Groovy that has the features of an interface and has a state that can be referenced.


## Inheritance


### Inheriting


`extends`: Indicates that the given class extends another class, inheriting all of its non-private fields and methods.

`implements`: Indicates that the given class implements an interface, requiring specific methods to exist.

`sealed`: Indicates that the class can only be extended or implemented by specifically allowed classes.

`non-sealed`: Indicates that the class can be extended by any class, even if a parent class or interface is `sealed` and would otherwise prevent this.

`permits`: Indicates what classes or interfaces a `sealed` class or interface can be implemented or extended by.


### Method Variations


`abstract`: Indicates that the given class cannot be instantiated (must be extended by another class to be used)
or that the given method must be overridden by any inheriting classes.

`default`: Used in an interface to declare default functionality for a given method.

`static`: Causes the method or field to be static, meaning it is attached to the class instead of an instance.


### Reference


`this`: Refers to the specific instance of the class in the given context.

`super`: Refers to the parent class, and is used in the constructor or in an overridden method.


### Instantiation


`new`: Creates an instance of the class with the given parameters, if any.

`instanceof`: Determines if a class or interface is an instance of a given class or interface, evaluating to a boolean.


## Declaration


`def`: Creates a variable or defines a method. In many cases, equivalent to `Object`.

`var`: Creates a variable or defines a method, typically functionally the same as `def`.

`final`: When creating a class preceding it with `final` will cause the class to not be able to be extended.
When preceding declaring a variable or field, it will prevent re-assignment.


## Logic


### Switch


`switch`: Creates a switch block, which consists of multiple case statements checking against a single variable.

`case`: Sets a specific branch within a switch block to match against the provided variable will be run.

`yields`: In modern switch statements, indicates that the following value is what the switch statement branch evaluates as.


### If


`if`: Runs the code inside the if block provided the code inside the if statement evaluates to true.
If it is false, checks for an `if else` block or an `else` block afterward.

`else`: Attached to an `if` statement, runs the code inside the else block provided the if statement
and all preceding else if statements evaluated to false.


### Loops


`while`: Runs the code inside the while block as long as the code inside the while statement evaluates to true.

`do`: Paired with a while block, first runs the code inside the do-while block and then checks if the while statement evaluates to true.

`for`: Repeats the code inside the while block as long as the code inside the for statement evaluates to true,
or until all instances of the object being iterated over have been iterated.

`break`: Placed inside a while or for loop, ends the loop when called.

`continue`: Placed inside a while or for loop, skips the current iteration of the loop when called.


## Exception Handling


`try`: Creates a try block, where any errors thrown can be caught by a corresponding catch block.

`catch`: After a try block, catch specific errors thrown.

`finally`: After attempting to execute code in a try block, run the code in the finally block.

`throw`: Throw an error, which will either be caught and handled or cause a crash.

`throws`: Note that the method can throw an error of the given type(s).

`assert`: Throws an `AssertionError` if the statement evaluates to false.


## Operator Overloading


`as`: Coerces an object to a given class via running `[original].asType([type])`.

`in`: Checks if an object is "in" a different object via running `[different].isCase([original])`.


## Primitive Types


`char`: The primitive type char.

`byte`: The primitive type byte.

`short`: The primitive type short.

`int`: The primitive type int.

`long`: The primitive type long.

`float`: The primitive type float.

`double`: The primitive type double.


## Literal


`null`: Used when setting a variable or field, indicating that it refers to nothing.

`true`: The boolean literal for true.

`false`: The boolean literal for false.


## Return


`return`: Finishes execution of the method, and returns a specific value from the method if provided.


## Misc


`native`: Indicates that the method is defined via arbitrary assembly code.

`synchronized`: Indicates that the method or block must be run sequentially across threads.

`transient`: Indicates that the field is not used when serializing or deserializing the class.


## Unused


These four keywords are unused: `strictfp`, `threadsafe`, `goto`, and `const`.
