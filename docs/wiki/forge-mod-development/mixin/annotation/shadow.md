---
title: Shadow
---

# Shadow

`@Shadow` is used as placeholders for in a Mixin class. Where you would want to access fields and methods like how you would if you were working in the class you are Mixin'ing.

## Arguments

`remap`: `[Optional Boolean, default value: true]`

The annotation processor will skip this if this is false. With the refmap skipping over this member. This is useful for members originating from mods and not Vanilla Minecraft.

`aliases`: `[Optional String Array, default value: {}]`

This can be populated with other aliases, particularly useful when shadowing synthetic members, or if the member is known to have name-changes at runtime from other sources of transformation

`prefix`: `[Optional String, default value: "shadow$"]`

For compilers it is illegal to allow methods to have the same name, same arguments, regardless of the return types. This may be an issue when using `@Shadow`. Hence the `prefix` takes care of that for you, at runtime when the mixin is being applied, the name will be restored with the prefix removed.

```java
public class Illegal {
    protected String method(String argument) {
        return "";
    }

    protected int method(String argument) {
        return 0;
    }
}

public class Legal {
    @Shadow(prefix = "alt$")
    protected String alt$method(String argument) {
        return "";
    }

    protected int method(String argument) {
        return 0;
    }
}
```

## Usages

### Shadowing a Field

::: code-group

```java [Target.java]
public class Target {
    private static String privateStaticString = "Hello Static World";

    private String privateValue = "Hello World";

    protected int protectedValue = 42;
}
```

```java [Example.java]
@Mixin(Target.class)
public class Example {
    @Shadow private static String privateStaticString = ""; // Will not affect original field

    @Shadow private String privateValue = null; // Will not affect original field

    @Shadow protected int protectedValue = 0; // Will not affect original field
}
```

:::

### Shadowing a Method

::: code-group

```java [Target.java]
public class Target {
    public static void staticMethod() {
        // ...
    }

    public void method() {
        // ...
    }

    public int fruitfulMethod() {
        // ...
    }
}
```

```java [Example.java]
@Mixin(Target.class)
public class Example {
    @Shadow public static void staticMethod() { }

    @Shadow public void method() { }

    // If the method needs to return something
    // You can return primitive defaults or null
    // But throwing an exception here helps if something goes extremely wrong
    @Shadow public int fruitfulMethod() {
        throw new AssertionError();
    }
}
```

```java [AbstractExample.java]
@Mixin(Target.class)
// If your class is abstract, your shadowed methods can be too!
public abstract class Example {
    // But not your static methods, they're still class-level!
    // Same as Example.java, static methods
    // can also be written like this for some sanity checking
    @Shadow public static void staticMethod() {
        throw new AssertionError();
    }

    // Shadowed abstract methods look nicer...
    @Shadow public abstract void method();

    // Fruitful abstract methods are also fine!
    @Shadow public abstract int fruitfulMethod();
}
```

:::
