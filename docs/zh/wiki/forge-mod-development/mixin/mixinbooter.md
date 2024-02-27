---
title: MixinBooter
---

# MixinBooter

## 跨 1.8 - 1.12.2 运行 Mixin，不再是难事

- 当前 Mixin 版本：[UniMix 0.12.2，由 CleanroomMC fork 而出，源分支为 LegacyModdingMC 的 0.8.5 分支](https://github.com/CleanroomMC/UniMix)

- 当前 MixinExtra 版本：[0.3.5](https://github.com/LlamaLad7/MixinExtras)

## 开发者操作

- 添加 CleanroomMC 的仓库至 repositories 中，再将 MixinBooter 添加为依赖：

```groovy
repositories {
    maven {
        url 'https://maven.cleanroommc.com'
    }
}

dependencies {

    // 均需添加：
    annotationProcessor 'org.ow2.asm:asm-debug-all:5.2'
    annotationProcessor 'com.google.guava:guava:32.1.2-jre'
    annotationProcessor 'com.google.code.gson:gson:2.8.9'

    // ForgeGradle：
    implementation ('zone.rong:mixinbooter:9.1') {
        transitive = false
    }
    annotationProcessor ('zone.rong:mixinbooter:9.1') {
        transitive = false
    }

    // RetroFuturaGradle:
    String mixinBooter = modUtils.enableMixins('zone.rong:mixinbooter:9.1')
    // modUtils.enableMixins('zone.rong:mixinbooter:9.1', 'mod_id.mixins.refmap.json') << add refmap name as 2nd arg (optional)
    api (mixinBooter) {
        transitive = false
    }
    annotationProcessor (mixinBooter) {
        transitive = false
    }
}
```

## 历程摘要

- 自 4.2，MixinBooter 的 API 有了改动，我们希望**任何**使用了 Mixin 的模组都将 MixinBooter 添加为依赖，哪怕这些模组的 Mixin 对象为原版/forge/库类。因为这可以避免因模组间混用不同版本 Mixin 而导致的崩溃问题（VanillaFix 就是个典型例子）。感谢[@embeddedt](https://github.com/embeddedt)在这一更改中所提出的建议！

- 自 5.0，2，MixinBooter 内置了由 [@LlamaLad7 编写的 MixinExtras](https://github.com/LlamaLad7/MixinExtras)，开发者可直接调用相关的内容。

- 自 8.0，MixinBooter 可跨版本运行于 1.8 - 1.12.2。一次构建，多版本通用！（TODO：支持 LiteLoader？）

- 自 8.4，MixinBooter 开始尝试与 [SpongeForge](https://github.com/SpongePowered/SpongeForge) 兼容。

## 引子

- 若你想 Mixin 那些原版、forge或是其他的一些在类加载器（classloader）运行极为早期便已传入的对象（例如 Guava），你可以查看 `IEarlyMixinLoader` 的相关内容。
- 若你想 Mixin 模组对象，你可以查看 `ILateMixinLoader` 的相关内容。
- `@MixinLoader` 注解自 4.2 开始废弃不用。相关功能已由 `ILateMixinLoader` 接手。

::: info 关于日志可读性
MixinBooter 虽致力于令崩溃以及日志相关的信息输出尽量可读，降低开发者以及用户的阅读成本，但由于 Mixin 以及字节码内部错综复杂，目前相关特性仍有较大的进步空间。若是你在使用过程中有相关的反馈以及意见建议，请将其发送到[MixinBooter 的问题追踪器上](https://github.com/CleanroomMC/MixinBooter/issues)。
:::
