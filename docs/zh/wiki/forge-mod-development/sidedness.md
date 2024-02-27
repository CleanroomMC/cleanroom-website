---
title: Sidedness
---

# 游戏端

## 引言

在 Minecraft 中，游戏由两**端**构成——`client`（客户端）以及 `server`（服务端）。此两端还能进一步细分，根据其内差异，分为 `physical`（实体）以及 `logical`（逻辑）两个层面。

- `实体客户端`：当你启动 Minecraft 时，该程序也会同步启动。游戏的视觉效果、交互逻辑，所有的线程与处理，皆涵括其中。
- `实体服务端`：亦被称为 `完全服务端`（Dedicated Server），该程序会在可执行服务端启动时随之启动，所涵括的程序不会以可操作的 GUI 显示给玩家。
- `逻辑客户端`：指的是任何发生于 `客户端线程`（Client Thread）内的事物。它的主要职责为接受外界的输入信息（例如玩家操作），再将信息发送给 `服务端线程`（Server Thread）。同时，它还会相对应地从 `服务端线程` 取回信息，将信息送回给客户端线程，以供客户端渲染。
- `逻辑服务端`：指的是任何发生于 `服务端线程`内的事物。无论是 `实体客户端` 还是 `实体服务端`，内部都有服务端线程。这一线程主要司职管理怪物生成、天气、物品栏以及生命值等诸多要素。

## `@Mod`

The parameters for `@Mod`: `clientSideOnly` and `serverSideOnly` - does exactly what it says on the tin.

This is by far the best way to control your mod from only loading on a specific **physical side**. As it does this at the very beginning of mod loading process.

However, the mod will not show up on the mod list, if that is less than desired, you will have to check out the annotations below.

## `@SideOnly`

Annotation a class, field, method or constructor will tell Forge that this particular member should be **stripped** out of the loading process on the specified **physical side** (see: `net.minecraftforge.fml.common.asm.transformers.SideTransformer`).

Usually only Minecraft and Forge code utilizes this. For Minecraft, Forge uses it to mark the members that Mojang's obfuscator had stripped out.

You should only annotate `@SideOnly` when you are **100% sure** that the member isn't needed for a particular **physical side**.
Misusing this annotation may bring up crashes that are extremely hard to read (especially during class transformation).

## `@NetworkCheckHandler`

A somewhat obscure annotation that helps when you are creating a mod that needs to query **physical side** information.

- Syntax: In your `@Mod` class, create a method of any name that takes in the parameters `(Map<String, String>, net.minecraftforge.fml.relauncher.Side)` and allow it to return a `boolean`.

During handshaking, when the `Physical Client` loads into a `Physical Server`, two things happen. On the `Physical Server`, it calls the `@NetworkCheckHandler` annotated method (if present) to see if the player should be stopped from joining, and vice-versa on the `Physical Client`.

Thanks to [Forge Community Wiki](https://forge.gemwire.uk/wiki/Sides) for a fleshed out description.
