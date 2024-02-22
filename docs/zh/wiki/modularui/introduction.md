---
title: ModularUI
---

# ModularUI

## 什么是 ModularUI

ModularUI 是 Minecraft 的一个库，旨在帮助开发者以更简易的方式创建 GUI。

## 为何选用 ModularUI

Minecraft 的（Forge 也一样）的 GUI 代码质量堪忧，迭代速度快，内部逻辑也较难理清。ModularUI 可以帮助您快速创建空白面板，在面板中，您可以任意选用布局 widgets，搭建出自己想要的 GUI。相关的位置以及大小无需您耗费精力计算。

ModularUI 使用起来颇为灵活，无论是复杂的客户端 GUI，还是需要客户端-服务端同步的 GUI，都能轻松搞定。

我们可以举一个例子：Minecraft 以及 Forge 均未提供在 GUI 中创建液体槽位的便捷方法。有了 ModularUI，您仅需使用 `.child(new FluidSlot().syncHandler(new FluidTank(16000)))` 这一行代码，便能轻松创造出液体槽位（当然，还有一些配置需要您自行调整）。

## 核心特性

- 与 Windows 类似的布局系统
- widgets are placed in a tree like structure
- widget 的渲染以及交互均由模组内部自行安排
- widget 的大小设置以及位置调整十分简易灵活
- widget 的数值会自行同步
- 尤为适合创建仅客户端以及客户端-服务端同步的 GUI
- GUI 的主题由 Json 控制，且可通过资源包添加/修改
- JEI compat for things like exclusion zones

### 模组历史

- First appearance of ModularUI in GTCE by Archengius
- on 30th December 2021 GTCEu released with some improvements to its GUI library
- on 16th January 2022 Rongmario created the ModularUI repository in the CleanroomMC organization with the intention to rewrite it
- on 19th February I (brachy) started working on ModularUI
- on 21st May 2022 ModularUI version 1.0.0 was released on Curseforge
- miozune decided to port ModularUI to 1.7.10 for GTNH
- after 3 month of updates I decided to rewrite some parts of the library
- the rewrite turned very large and thus ModularUI 2 was born
- on 21st March 2023 I uploaded version 2.0.0 to Curseforge
- since then ModularUI is constantly receiving updates
