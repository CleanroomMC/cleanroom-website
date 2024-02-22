---
title: Shadow
---

# Shadow

在 Mixin 类中，被 `@Shadow` 注解的成员相当于一个占位符。注解成员会“李代桃僵”，成为目标类中某一本就存在的成员的替身。你可以正常地在 Mixin 类中引用、调用，而不受目标类中对应真实成员的权限约束。

## 参数

`remap`: `[可选，参数类型为 Boolean，默认值为 true]`

若此项值为 false，注解处理器（annotation processor）则会跳过该成员的 remap 处理。在使用 @Shadow注解模组成员时，需要将 remap 设置为 false，但在处理原版 Minecraft 成员时则需要为 true。

`aliases`: `[可选，参数类型为 String Array，默认值为 {}]`

你可以在 Array 中填入此成员的别名（aliases），这一参数可用于某些合成成员（synthetic member），或是某些在运行时受其他来源影响而名称发生变化的成员。

`prefix`: `[可选，参数类型为 String，默认值为 "shadow$"]`

编译器并不会允许同名且同参数方法的存在，即使它们的返回类型不同也不行。因而这可能会对你使用 `@Shadow` 造成麻烦。在遇到这类问题时，你可以使用 `prefix` 来解决。当 Mixin 类运行时，使用了 `prefix` 的成员会自动剔除自身标记的“前缀”，这样就绕开了编译的限制。

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

## 用法

### 使用 @Shadow 注解字段

::: code-group

```java [Target.java]
public class Target {
    private String privateValue = "Hello World";

    protected int protectedValue = 42;
}
```

```java [Example.java]
@Mixin(Target.class)
public class Example {
    @Shadow private String privateValue = null; // 不会影响目标类中的真实字段

    @Shadow protected int protectedValue = 0; // 不会影响目标类中的真实字段
}
```

:::

### 使用 @Shadow 注解方法

::: code-group

```java [Target.java]
public class Target {
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
    @Shadow public void method() { }

    // 如果这一方法有返回值，
    // 那你可以将返回值直接设置为某一基本类型，或是直接为null。
    // 但最好还是抛出一个异常，以免遇到某些极端情况。
    @Shadow public int fruitfulMethod() {
        throw new AssertionError();
    }
}
```

:::
