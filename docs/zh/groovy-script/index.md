# GroovyScript

## 欢迎使用 GroovyScript

欢迎使用 GroovyScript！这是一款运行于 Minecraft 1.12.2 的综合沙盒式脚本工具。
[加入我们的 Discord](https://discord.com/invite/m53yxTjjKM)可了解更多信息。

你与其他人看到的维基不一样？刷新一下便可解决！

## 下载

GroovyScript 目前有两条下载渠道：

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/groovyscript)
- [GitHub](https://github.com/CleanroomMC/GroovyScript/releases)

## 特性

1. Groovy：一款功能强大且久经考验的脚本语言
   - 不仅与 Java 在语法上兼容，在代码上还能相互操作
   - 静态编译
   - 可以采用动态类型的方式声明变量
   - 元编程
2. 沙盒式：脚本完全运行与沙盒之中，沙盒将一些敏感操作列入了黑名单中，所以沙盒中的脚本无法引用以及调用这些操作。
3. 脚本重载：无需重启游戏即可测试你写的脚本。包括：
   - 可直接重载大部分甚至是全部的 Forge 注册对象。
   - 大部分模组的注册对象无需额外兼容，直接可以重载
4. 事件：可通过 Groovy 的闭包来方便快捷地监听到 Forge 的事件总线（EventBus）
5. 语法糖：专为 CraftTweaker 用户设计的 Bracket handler（目前已可正常使用，但不保证未来会一直保有该特性）
6. 信息查询：添加了一些指令，它们可以帮助你查看手持物品的详细信息，以及更多！
7. 注重优化：特性实现与代码整洁两手抓两手硬，坚决不向低质量编程方式妥协。
8. API：为模组作者提供了一套完善的代码目录（catalogue of code），方便模组作者为 GroovyScript 编写外部兼容。例如添加 package/class/method/field blacklists 的兼容。

## 引子

::: info 仍待完善{id="warning"}

本维基还有诸多地方亟待完善。欢迎各位读者为本维基添砖加瓦，补充内容。

_同时，感谢你使用 GroovyScript!_

:::

- 千里之行，始于[前置知识](./introduction/index.md)
- 学习 [Groovy 的基础知识](./groovy/index.md)
- 学习如何与[原版注册系统](./minecraft/index.md)交互
- 使用 [Content](./content/index.md) 系统创造你的第一个物品，方块或是流体
- 超过 25 个[模组](./mods/index.md)的兼容文档待你查阅
- 为你的模组编写[与 GroovyScript 的兼容](./introduction/external_compat.md)！
