---
title: Event
---

# 事件

## 总览

- 在 Forge 模组生态中，事件犹如脊梁骨，撑起了整个生态的运作。我们可以将事件统共分为两类：
  - `FMLEvent`
  - `Event`
- FMLEvents 与模组加载有关，刻画了模组加载的方方面面：

  1.  `FMLFingerprintViolationEvent`：若在模组运行时检测到签名（fingerprints）不一致，则会触发该事件。
  2.  `FMLInterModComms$IMCEvent`：触发于 `FMLInitializationEvent` 与 `FMLPostInitializationEvent` 之间。对于模组作者来说，这一事件可用于接收 `InterModComms` 信息。
  3.  `FMLModDisabledEvent`：当你的模组因任何原因而被禁用时，触发该事件。
  4.  `FMLModIdMappingEvent`：在加入世界时，若检测到 ID 映射（ID mapping）发生了改变，则触发该事件。

- FMLStateEvents（继承于 FMLEvent）重点刻画了 FML 生命周期内的不同阶段。

- 初始化加载阶段：

  1. `FMLConstructionEvent`: fires when Forge finishes constructing mods, annotations, mod lists are ready to be queried here.
  2. `FMLPreInitializationEvent`: fires when Forge is ready to start initializing mods, you can again query annotations once again, and see where different files related to your mod would situate (e.g. config files).
  3. `FMLInitializationEvent`: fires after registry events are fired, game objects largely is available in this event. Hence a lot of OreDictionary activity is done here.
  4. `FMLPostInitializationEvent`: fires after `FMLInitializationEvent` is dispatched to all mods, to consolidate any manipulations the mods have made.
  5. `FMLLoadCompleteEvent`: fires straight before the main menu shows up, mods like JustEnoughItem does all their calculations here, it is the last event in the loading FML lifecycle.

- Server Loading Stages:
  1. `FMLServerAboutToStartEvent`: fires after settings and properties are initialized.
  2. `FMLServerStartingEvent`: fires after worlds are loaded, custom commands and more can be done here.
  3. `FMLServerStartedEvent`: fires when the server is ready for players.
- Server Stopping Stages:
  1. `FMLServerStoppingEvent`: fires when shutdown is initiated.
  2. `FMLServerStoppedEvent`: fires before the last tick is ran, after this the shutdown will finish. On integrated servers the menu will be loaded after this.

#### Listening to Events

- Different event types have their own ways of being listened to and unique ways of being posted.

- FMLEvents are listened to by having the `@EventHandler` annotation on methods within `@Mod` annotated classes. These must be member methods. **These listeners are called reflectively**
  ??? abstract "Example"

  ````java title="ExampleClass.java"
  @Mod(modid = "modid", name = "Mod Name", version = "1.0")
  public class ExampleClass {

      	@EventHandler
      	public void runOnPreInit(FMLPreInitializationEvent event) {
      		// This block of code will run when FMLPreInitializationEvent is happening
      	}

      }
      ```

  ````

- Other types of events are more flexible in how they're being registered. **These listeners are called natively**

  1.  Annotation Magic: `@EventBusSubscriber` class level annotation

      - These classes must withhold from being loaded before annotations are processed.
      - If it is annotated with `@Mod`, the `modid` argument isn't needed, otherwise it is needed for recognition sake.
      - Any methods in here that wants to listen to an event **must** be static.
        ??? abstract "Example"

        ````java title="ExampleClass.java"
        @EventBusSubscriber(modid = "modid")
        public class ExampleClass {

            	@SubscribeEvent
            	public static void thisIsAEventListener(Event event) {
            		// This block of code will run when whichever Event is denoted in the argument
            	}

            }
            ```
        ````

  2.       EVENT_BUS interaction:

      - Events are ran on different event buses, Forge originally wanted to differentiate events properly, then realised that EventBuses are really confusing.
      - All the EventBuses can be found in `MinecraftForge.class`, those being `EVENT_BUS`, `TERRAIN_GEN_BUS` and `ORE_GEN_BUS`.
      - Technically a mod can implement their own buses, but there doesn't seem to be any in the wild.
      - Call `register` on any EventBuses and pass through either a class or an object that you want the buses to fire events to.

        - **Class = static methods accepted only.**
          ??? abstract "Example"

          ````java title="StaticExample.java"
          public class StaticExample {

             	public static void register() {
             		MinecraftForge.EVENT_BUS.register(EventListener.class);
             	}

             	public static class EventListener {

             		@SubscribeEvent
             		public static void thisListenerWillRun(Event event) {
             			// 必须为静态方法
             			// 参数的对应事件触发时，这里的代码块会与之一同运行。
             		}

             		@SubscribeEvent
             		public void thisListenerWillNeverRun(Event event) {
             			// 必须为静态方法
             		}

             	}

              }
              ```

          ````

        - **Object = member methods accepted only.**
          ??? abstract "Example"

          ````java title="MemberExample.java"
          public class MemberExample {

             	public static void register() {
             		MinecraftForge.EVENT_BUS.register(new EventListener());
             	}

             	public static class EventListener {

             		@SubscribeEvent
             		public void thisListenerWillRun(Event event) {
             			// 注意，此时可以不是静态方法
             			// 参数的对应事件触发时，这里的代码块会与之一同运行。
             		}

             		@SubscribeEvent
             		public static void thisListenerWillNeverRun(Event event) {
             			// 必须为静态方法，注意，该方法不会正常监听到事件。
             		}

             	}

              }
              ```
          ````

          :::


## PlayerDestroyItemEvent

- `PlayerDestroyItemEvent` is fired when a player destroys an item.

### Hooks

1. `PlayerControllerMP#onPlayerDestroyBlock(BlockPos)`
2. `PlayerControllerMP#processRightClick(EntityPlayer, World, EnumHand)`
3. `PlayerControllerMP#processRightClickBlock(EntityPlayerSP, WorldClient, BlockPos, EnumFacing, Vec3d, EnumHand)`
4. `EntityPlayer#attackTargetEntityWithCurrentItem(Entity)`
5. `EntityPlayer#damageShield(float)`
6. `EntityPlayer#interactOn(Entity, EnumHand)`
7. `ForgeHooks#getContainerItem(ItemStack)`
8. `PlayerInteractionManager#processRightClick(EntityPlayer, World, ItemStack, EnumHand)`
9. `PlayerInteractionManager#processRightClickBlock(EntityPlayer, World, ItemStack, EnumHand, BlockPos, EnumFacing, float, float, float)` 10.`PlayerInteractionManager#tryHarvestBlock(BlockPos)`

### Characteristics

1. Event is not cancellable.
2. Event does not have a result.

### Behaviour

1. Fired normally from ForgeEventFactory#onPlayerDestroyItem(EntityPlayer, ItemStack, EnumHand)
2. Fired on MinecraftForge#EVENT_BUS

### Oddities

- This event is never fired correctly for the context of the 7th hook's listed above: `ForgeHooks#getContainerItem(ItemStack)`. Forge's logic when trying to determine if the retrieved container item is destroyed is all wrong. This bug was introduced in [MinecraftForge's PR#3388](https://github.com/MinecraftForge/MinecraftForge/pull/3388). Which meant that the event never fires for when the container item was actually destroyed. This was introduced when Forge was correcting all null-checks on `ItemStacks` to `ItemStack#isEmpty` calls instead. In most contexts, checking `ItemStack#isEmpty` would be enough, but in this particular context, the semantics was misunderstood. Any `ItemStack` that are destroyed will canonically be `ItemStack#isEmpty() == true && ItemStack != ItemStack.EMPTY`, meaning the logic of `if (!stack.isEmpty() && stack.isItemStackDamageable() && stack.getMetadata() > stack.getMaxDamage())` in `ForgeHooks#getContainerItem(ItemStack)` is indeed wrong and should have been `if (stack.isEmpty() && (stack.isItemStackDamageable() || stack.getDamage() >= stack.getMaxDamage())`.
- To circumvent this oddity, one would have to make sure they handle all the logic they would have done in a `PlayerDestroyItemEvent` listener in their item's respective class's `getContainerItem` method instead.

```

```
