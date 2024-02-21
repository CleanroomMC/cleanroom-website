---
title: Configuration
---

# 配置

以下是一个常见的 Mixin 配置：

```json
{
  "package": "zone.rong.mixinbooter.mixin",
  "required": true,
  "refmap": "mixins.mixinbooter.refmap.json",
  "target": "@env(DEFAULT)",
  "minVersion": "0.8",
  "compatibilityLevel": "JAVA_8",
  "mixins": ["CrashReportMixin", "LoadControllerMixin", "ModAPIManagerMixin"]
}
```

> [!TIP] 以上仅为模板
> 取自 [`mixin.mixinbooter.init.json`](https://github.com/CleanroomMC/MixinBooter/blob/main/src/main/resources/mixin.mixinbooter.init.json)

以下列出了所有 Mixin 配置，以及它们对应的作用：

- `parent`：标注此配置是否继承于别的配置 `[可选，填入类型为 String]`
- `package`：各 Mixin 类所在包的名称  `[必选，填入类型为 String]`
- `required`：若配置内的 Mixin 未能正确注入，是否直接令游戏崩溃 `[可选，填入类型为 Boolean]`
  - 默认值为 `false`
- `refmap`：refmap 文件的名称。 `[必选，填入类型为 String]`
- `plugin`：用于标记一个 `IMixinConfigPlugin` 的实现类的路径，你可以通过此选项在 Mixin 注入之前，之中以及之后安排某些与 Mixin 相关的工作（task）。
- `target`：目标环境`[可选，填入类型为 String]` 
  - 默认值：`@env(DEFAULT)` 
  - 可接受的值：`@env(DEFAULT)` | `@env(PREINIT)` | `@env(INIT)`
  
::: tip `target` 小建议
 若将 `target` 设置为`@env(DEFAULT)`，则 MixinBooter 能够最大程度地控制目标环境，进一步降低发生错误的概率。
:::

- `minVersion`：Mixin 的最低兼容版本。`[可选，填入类型为 String]`

::: tip 不同 `minVersion` 的区别
若将 `minVersion` 设置为 `0.8.5`，你则可以享受 MixinBooter 的所有特性以及注解，无需担心特性缺漏的问题。若是设置为 `0.8`，则那些使用了模组内 Mixin，但未在环境中使用 MixinBooter，或是使用了其他来源 Mixin 的游戏实例，会更不容易发生崩溃。
:::

- `compatibilityLevel`：兼容的 Java 版本。 `[可选，填入类型为 String]`
  - 默认值：`JAVA_6`
  - 可接受的值：任何高于 Java 6 的 Java 均可，需要在版本号前加上 `JAVA_` 字符串
- `mixins`：需要注入的 Mixin，填入的路径为相对路径，路径初始点为 `package` 属性。 `[可选，填入类型为 String Array]`
- `client`：只注入到[物理客户端](../../sidedness.md)中的 Mixin，填入的路径为相对路径，路径初始点为 `package` 属性。 `[可选，填入类型为 String Array]`
- `server`：只注入到[物理服务端](../../sidedness.md)中的 Mixin，填入的路径为相对路径，路径初始点为 `package` 属性。 `[可选，填入类型为 String Array]`
- `priority`：配置的默认优先度 `[可选，填入类型为 Integer]`
  - 默认值：`0`
  - 可接受的值：从 `0` 至 `MAX_INTEGER`
- `mixinPriority`：所有 Mixin 的默认优先度 `[可选，填入类型为 Integer]`
  - 默认值：`1000`
  - 可接受的值：从 `0` 至 `MAX_INTEGER`
- `setSourceFile`：是否覆写目标类，向目标类中添加 Mixin 文件中的元数据？ `[可选，填入类型为 Boolean]`
  - 默认值：`false`
- `refmapWrapper`：用于标记一个 `IReferenceMapper` 的实现类的路径，用于精细控制重映射期间的相关操作。 `[可选，填入类型为 String]`
- `verbose`：是否使用 Verbose logging。 `[可选，填入类型为 Boolean]`
  - 默认值：`false`
- `injectors`：注入器选项 `[可选，填入类型为 Json 对象]`
  - `defaultRequire`：注入时会尝试注入多少次。 `[可选，填入类型为 Integer]`
    - 默认值：`0`
    - 可接受的值：从 `0` 至 `MAX_INTEGER`
  - `maxShiftBy`：注入最多可以越过多少个操作码（opcode）。 `[可选，填入类型为 Integer]`
    - 默认值：`0`
    - 可接受的值：从 `0` 至 `5`
  - `defaultGroup`，`namespace`，`injectionPoints`，`dynamicSelectors` 四者均为 `InjectionPoint` 以及 `ITargetSelectorDynamic` 实现类的属性。若想深入了解，请参阅对应条目的 Javadoc。
- `overwrites`：覆写选项。 `[可选，填入类型为 Json 对象]`
  - `conformVisibility`：覆写后的对象是否继承原对象的可见性。 `[可选，填入类型为 Boolean]`
    - 默认值：`false`
  - `requireAnnotations`：覆写的方法是否无需使用 `@Overwrite` 注解。 `[可选，填入类型为 Boolean]`
    - 默认值：`false`
