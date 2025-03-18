---
title: Getting Started
---

# Getting Started

## Adding ModularUI to your mod

Add the CleanroomMC maven to the repositories (if not already present)

```groovy
maven {
    name 'Cleanroom Maven'
    url 'https://maven.cleanroommc.com'
}
```

and the dependency declaration to dependencies

```groovy
api 'com.cleanroommc:modularui:2.5.0' { transitive false }
```

Check the latest version on [Github releases](https://github.com/CleanroomMC/ModularUI/releases).

## Development Tools

I highly recommend using IntelliJ in combination with the Single Hotswap plugin.

## Other documentation

As always, the code itself is the best documentation. Most API classes have lots of useful javadoc information.

## Creating a GUI

First you need to decide if you want a client only screen or a client-server synced gui.

### Client only GUI

Client only GUIs are easier to work with, but they can't communicate with the server.
You can open one by calling `ClientGUI.open(ModularScreen)`. You can additionally pass in a `UISettings` or
`JeiSettings` instance. Client only GUIs don't display jei on the side by default. This can be changed in the
JeiSettings. The options in`UISettings` are mostly for synced GUI's. The `ModularScreen` should be a new instance.

Go [here](./client-gui-tutorial.md) to get started on creating a client GUI. Even if you are looking into making a
synced GUI, I still recommend checking it out as it contains some information which is useful for both cases.

Some Examples:

- [A sortable list which allows adding options via a popup panel](https://github.com/CleanroomMC/ModularUI/blob/master/src/main/java/com/cleanroommc/modularui/test/TestGui.java)
- [Various tests](https://github.com/CleanroomMC/ModularUI/blob/master/src/main/java/com/cleanroommc/modularui/test/TestGuis.java)
- [A custom screen with a custom panel and custom transformation](https://github.com/CleanroomMC/ModularUI/blob/master/src/main/java/com/cleanroommc/modularui/test/TransformationTestGui.java)

### Synced GUI

Synced GUIs are much more complicated to open. The most important thing is that you must only open synced GUIs
on server side. ModularUI automatically syncs to client. Choosing the correct `UIFactory` and `GuiData` is important
here. A `UIFactory` is what finds the exact same `IGuiHolder` on client and server with the provided `GuiData`. The
`IGuiHolder` is then responsible for creating the UI. ModularUI has build-in factories for:

- Standard tile entities (`GuiFactories.tileEntity()`, `PosGuiData`)
- Items in players hand (`GuiFactories.item()`, `HandGuiData`)
- Sided tile entities (usefull for GregTech covers) (`GuiFactories.sidedTileEntity()`, `SidedPosGuiData`)
- Simple factories (these always point to the same `IGuiHolder`) (`GuiFactories.createSimple()`, gui data irrelevant)

Each factory may have its own custom method for opening a GUI. The factories then call `GuiManager.open(...)`.

Go [here](./synced-gui-tutorial.md) to get started on creating a synced GUI.

Some Examples:
- [Tile entity with very large widget tree with several tabs and all sorts of syncing](https://github.com/CleanroomMC/ModularUI/blob/master/src/main/java/com/cleanroommc/modularui/test/TestTile.java)
- [Backpack item](https://github.com/CleanroomMC/ModularUI/blob/master/src/main/java/com/cleanroommc/modularui/test/TestItem.java)
- [Tile entity with large amount of slots for testing](https://github.com/CleanroomMC/ModularUI/blob/master/src/main/java/com/cleanroommc/modularui/test/TestTile2.java)
- [Item editor allows editing meta, amount and nbt opened by command](https://github.com/CleanroomMC/ModularUI/blob/master/src/main/java/com/cleanroommc/modularui/test/ItemEditorGui.java)
