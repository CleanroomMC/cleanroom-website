---
title: Advanced GUI Features
---

# Advanced GUI Features

## Opening multiple panels

Panels are like windows in windows. You can open as many as you like (please don't open too many) and you can drag them
around if you allow. Note that secondary panels can be closed and opened whenever, but if the main panel closes, the
whole GUI will close. To open a secondary panel you first need to decide if it can be client only or if it needs to be
synced (it can only be synced if the UI was opened as synced).

### Client Panel

Create a `IPanelHandler` using

```java
IPanelHandler.simple(ModularPanel parent, SecondaryPanel.IPanelBuilder provider, boolean subPanel);
```

Arguments:

- `parent`: Any panel that is already open. Usually the main panel
- `provider`: The function that creates the new panel
- `subPanel`: Determines if this panel should close when its parent closes. This is only relevant when the parent is not
  the main panel.

Ideally, this method should only be called once in the `buildUI()` method. By calling `IPanelHandler#openPanel()` you can
open the panel. `closePanel()` closes it. Note that the panel will be cached and opening it a second time does not
rebuild the widget tree. To avoid this you can call `deleteCachedPanel()` before opening it.

### Synced Panel

Here we also create an `IPanelHandler`, but with

```java
PanelSyncManager#panel(String key, PanelSyncHandler.IPanelBuilder panelBuilder, boolean subPanel);
```

The key argument is used to identify the handler on the client and server. It can be anything as long as you don't have
another `SyncHandler` with the same key. The rest of the arguments are similar to the client panel.

Here you must create the panel during `buildUI()`. The panel can be opened and closed with the same methods as the
client panel. You are also free to choose which side you want to call them. ModularUI automatically syncs the command.

Note that `deleteCachedPanel()` does not work if it contains any slots. This is due to minecraft storing the slots in a
list and them being accessed by index. Removing some of them messes up the indexes which is very error-prone. A
workaround is being worked on.

## Custom UIFactories

Sometimes the provided factories are not enough.
For a custom factory implement `UIFactory` in a new class. I recommend to extend `AbstractUIFactory` instead as it
provides some useful default implementations. Make sure to make the class a singleton (private constructor and a single
public instance). Then just register the instance using `GuiManager.registerFactory()`. I recommend to this in FML
pre-init, but post-init should work fine as well.

Inside the factory class, you have to override all necessary methods. This includes methods to sync `GuiData`. Since the
factory also determines the `GuiData` type, you can implement a custom type for your needs or use any of the existing
types.

## Dynamic Synced Widgets
Coming soon
