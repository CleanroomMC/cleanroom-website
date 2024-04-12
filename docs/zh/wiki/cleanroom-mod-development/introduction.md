---
title: Introduction
---

# 引言

## 总览

一般而言，如果你的模组能够在正常地在 Forge 上运行，那么你不必特意将模组迁移至 Cleanroom 上，除非你：

- 希望使用 Java 21 的语言特性
- 希望使用 Cleanroom 内打包的一些最新库
- 出于 API 或是某些原因，你希望将模组设计为 Cleanroom 独占模组

如果你打算迁移，以下列出了几条你在迁移过程中可能遇到的问题：

- Java 的变化
- 引用库的变化
- 在老版本 Scala 以及 Kotlin 环境下编译的模组，无法运行在新版本的 Java 环境中

## Java 的变化

### URLClassLoader

部分模组将 AppClassLoader 转换为了 URLClassLoader，以期获取 URL，例如：`((URLClassLoader) Launch.classLoader.getClass().getClassLoader()).getURLs()`

然而这一转换自 Java 9 后不再可行，相关转换会直接抛出错误。我们编写了一套[`URLClassLoaderTransformer`](https://github.com/CleanroomMC/Cleanroom/blob/main/src/main/java/net/minecraftforge/fml/common/asm/transformers/URLClassLoaderTransformer.java)，用于修补此类转换行为，但你仍然需要做出一些改动，详情请参看[此处](https://github.com/CleanroomMC/Cleanroom/blob/cf59ba1080dc2bf7eb3f60e4ae5cff82639cb042/src/main/java/net/minecraftforge/fml/relauncher/CoreModManager.java#L459).

### javax 更名为 jakarta

在 Jakarta EE 9 中，Java EE 的命名空间由原先的 `javax` 更改为了 `jakarta`。javax 中的某些包会受此影响：

- bind
- xml
- ws
- activation
- soap
- jws

并且，大多数 JDK 供应商在各自提供的新版本 Java 并未内置这一更改。

我们在 Cleanroom 中内置了一套 [`JavaxTransformer`](https://github.com/CleanroomMC/Cleanroom/blob/main/src/main/java/net/minecraftforge/fml/common/asm/transformers/JavaxTransformer.java)，用于将 `javax` 的引用重新映射为 `jakarta`，并内置了一套新版本的 Jakarta EE 依赖。

### ScriptEngineManager

自 Java 15 以来，默认的`Nashorn JS`引擎就被移除了，但我们已内置了一套独立版本。
唯一的问题是调用`new ScriptEngineManager(null)`可能会产生错误，它将在错误的类加载器中搜索脚本引擎。 请将其替换为`new CleanroomScriptEngineManager()`。

我们编写了一套[`ScriptEngineTransformer`](https://github.com/CleanroomMC/Cleanroom/blob/main/src/main/java/net/minecraftforge/fml/common/asm/transformers/ScriptEngineTransformer.java) 用于修补此类问题。

### 无效的 UUID

Java 8 将某些无效的 UUID 视为有效，这在较新的 Java 版本中已修复。 现在 Cleanroom已经升级至 Java 21，那些曾今有效的 UUID 将使游戏崩溃。

我们编写了一套[`MalformedUUIDTransformer`](https://github.com/CleanroomMC/Cleanroom/blob/main/src/main/java/net/minecraftforge/fml/common/asm/transformers/MalformedUUIDTransformer.java) 用于修补此类问题，但请验证您的 UUID 并确保使用有效的 UUID。

### `sun.reflect.Reflection`

该类现已移至 JDK 内部，我们不鼓励以任何理由过滤其他 mod 的反射调用。 如果您想获取调用者类，请使用 Java 9 带来的新API `StackWalker`。

目前，我们将 `sun.reflect.Reflection` 的每个引用重新映射到一个[仿制类](https://github.com/CleanroomMC/Cleanroom/blob/main/src/main/java/com/cleanroommc/hackery/Reflection.java)。除了 `getCallerClass()` 和 `getCallerClass(int)` 之外，非操作指令在这里最多调用这个仿制类。

### ASM API 版本

许多使用ASM`visitor` API 的 Coremod 可能继承 `ClassVisitor`， `MethodVisitor` 或 `FieldVisitor` 及以 ASM5 作为 API 版本。

这样的 `visitor` 无法处理新版本的类, 在处理高版本的类时会崩溃。 为此，我们在 `Bouncepad` （我们维护的 `LauncherWapper`分支）提供了 `ASMVersionUpper`。

你应该将其至少更新到 ASM9 才能处理大多类（如果不是全部）。

### 通过反射获取或设置字段

新的 Java 较 Java 8 对 final 字段有更严格的访问控制，即使访问是通过反射或任何其他传统方式进行的。

`Unsafe` 是现在一种可用的官方方法，但极具有破坏性。

我们还提供了一个[`ReflectionFieldTransformer`](https://github.com/CleanroomMC/Cleanroom/blob/main/src/main/java/net/minecraftforge/fml/common/asm/transformers/ReflectionFieldTransformer.java)，将字段的每个`set()`或`get()`重定向到`Unsafe`，但一旦社区完善，这可能会被删除。

### `MethodInsnNode` 的 `itf`

Java 8 不关心方法调用中的接口状态。某些旧版本的 ASM5 也无法正确设置。这导致一些涉及 ASM 的 mod 在 Cleanroom 上崩溃。

我们通过此更改找到并修复了两个 mod 崩溃问题（Lag Goggles 和 ZenScript），但您应该在移植时检查您的 ASM 代码。

### 现在 `private` 方法的调用不使用 `INVOKESPECIAL`

这是[JDK针对基于嵌套的访问控制所做的更改](https://openjdk.org/jeps/181)。

某些模组的 ASM 代码依赖于计算 `INVOKESPECIAL` 或 `INVOKEVIRTUAL`的数量，并且它们可能会在 Cleanroom 中遇到崩溃。
目前只有 Advanced Rocketry 受此影响并已修复。

### Mixin 的 `@Accessor` 也许使游戏崩溃

由于较新的 JVM 限制了其访问控制，即使通过 Mixin 访问器，对 `final` 的设置也会被拒绝。在同一访问器方法上添加`@Mutable`可以删除目标的“final”修饰符并修复此问题。

添加 AT（Access Transformer）也有效，但适用于普通字段。 我们在 _Fugue_ 中手动添加了其中一些，以修复一些失效的模组。

## 新版本的库

### 新的 Mixin 和 ModifyArgs

- 你不再需要引导 Mixin，也不应该这样做。
- 使用 `IEarlyMixinLoader` 和 `ILateMixinLoader` 以获得更好的兼容性，除非您知道自己在做什么，否则不要手动添加配置。
- `@ModifyArgs` 会在运行时被破坏，但应该在我们的 Bouncepad 重构中修复。如果您的 mod 必须使用它，请在 [Fugue](https://github.com/CleanroomMC/Fugue) 中打开新的 `issue`，我们将手动修补它。
- 我们的 Mixin 基于最新的 Fabric fork，拥有您想要的一切。

### LWJGL3

我们使用的 LWJGL 分支路径为`org.lwjgl3`。lwjglx 兼容层位于“org.lwjgl”中。在 lwjglx 中找不到方法，是正常情况。你可用在lwjgl3 中找到。

所有调用LWJGL的mod都应该切换到LWJGL3，一旦社区完善，我们将切换到正式版本。

### Guava

现在它总是最新的（当前为 33.0）。 一些 mods 需要在一些 `Futures` 方法中添加 `Runnable::run`，一些 mod 会发现他们现在使用的方法返回一个 `Optional`。 我们发现的所有案例都已在_Fugue_中进行了修补，但您最好自己更新。

### Fastutil

Fastutil 不再允许将某些`hash set`的`load factor`设置为`1.0`，崩溃时请务必检查最新的 javadoc！

### ICU4J

我们使用 ICU4J 的上游版本作为工作换行引擎，模组也应该使用`com.cleanroommc.client.BreakIteratorHolder#BREAK_ITERATOR`以获得更好的国际化。

### OSHI

这个库也更新了，一些调试屏幕 mod 应该更新他们获取 CPU 信息的方式。

## Scala and Kotlin

### Scala

由于某种原因，尽管 Scala 随旧的 Forge 一起提供，但从未更新。Scala 2.11 不再可以在 Java 21 下编译，编译最低要求 2.12.18。

但如果我们发布 Scala 2.12，那么当前的任何 mod 都不会成功启动。 我们计划将 Scala 库剥离为[一个独立的 mod](https://github.com/CleanroomMC/Scalar/)，制作两个包含 Scala 3 和 2.11 的 mod，然后尝试将所有内容移植到 Scala 3。

目前，Scala mods 只能在 Forge 下使用 Java 8 进行开发。

### Kotlin

相比Scala，Kotlin 更容易 —— 它在整个 1.12 生命周期中仅由 `Forgelin` 提供。 我们已经制作了一个兼容 21 的 Forgelin Kotlin 1.9.21，但一些旧的 mod 在较新的 Kotlin 上运行时出现问题。

Mod 移植尚未开始，因此旧的 Modpack 仍然需要旧的 Forgelin。
