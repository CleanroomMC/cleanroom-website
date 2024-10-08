---
title: Sidedness
---

# Sidedness

## Introduction

There are two **_sides_** in Minecraft, `Client` and `Server`. Not only are there two **_sides_**, each **_side_** has a `Physical` and `Logical` differentiation.

- `Physical Client`: The program that runs whenever you launch Minecraft. All threads and processes that run during the game’s graphical, interact-able lifetime are part of it.
- `Physical Server`: Also known as the `Dedicated Server`, it is the program that runs whenever you launch the server executable that does not bring up a playable GUI.
- `Logical Client`: Anything that happens in the `Client Thread`. It accepts inputs from the player and sends them to the `Server Thread`, it also accepts information from the `Server Thread` so it can display information corresponding to the game logic graphically for the player.
- `Logical Server`: Anything that happens in the `Server Thread`. This thread will spawn on both the `Physical Client` and `Physical Server`. This thread deals with the game logic: mob spawning, weather, inventories, health and more.

## Testing Sidedness

### `FMLLaunchHandler::side`

This will return the current **physical side**. This will be setup at the very start of Forge, and requires no context.

### `FMLCommonHandler::instance#getSide`

Same as `FMLLaunchHandler::side`.

### `FMLCommonHandler::instance#getEffectiveSide`

This will only work when the server is launched, it uses Forge's `SidedThreadGroup` which extends `ThreadGroup` to see which thread the caller is seeking for, the thread is pre-emptively loaded with the sided context.

### `World#isRemote`

This will return the **logical side** of the `World`, it is an easy way to check if you're on the `Client Thread` or the `Server Thread`. You can access this through `EntityPlayer#world` as well.

## Annotations

### `@Mod`

The parameters for `@Mod`: `clientSideOnly` and `serverSideOnly` - does exactly what it says on the tin.

This is by far the best way to control your mod from only loading on a specific **physical side**. As it does this at the very beginning of mod loading process.

However, the mod will not show up on the mod list, if that is less than desired, you will have to check out the annotations below.

### `@SideOnly`

Annotation a class, field, method or constructor will tell Forge that this particular member should be **stripped** out of the loading process on the specified **physical side** (see: `net.minecraftforge.fml.common.asm.transformers.SideTransformer`).

Usually only Minecraft and Forge code utilizes this. For Minecraft, Forge uses it to mark the members that Mojang's obfuscator had stripped out.

You should only annotate `@SideOnly` when you are **100% sure** that the member isn't needed for a particular **physical side**.
Misusing this annotation may bring up crashes that are extremely hard to read (especially during class transformation).

### `@NetworkCheckHandler`

A somewhat obscure annotation that helps when you are creating a mod that needs to query **physical side** information.

- Syntax: In your `@Mod` class, create a method of any name that takes in the parameters `(Map<String, String>, net.minecraftforge.fml.relauncher.Side)` and allow it to return a `boolean`.

During handshaking, when the `Physical Client` loads into a `Physical Server`, two things happen. On the `Physical Server`, it calls the `@NetworkCheckHandler` annotated method (if present) to see if the player should be stopped from joining, and vice-versa on the `Physical Client`.

Thanks to [Forge Community Wiki](https://forge.gemwire.uk/wiki/Sides) for a fleshed out description.
