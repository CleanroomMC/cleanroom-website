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

- 初始化加载阶段（Initial Loading Stages）：

  1. `FMLConstructionEvent`：当模组构建模组与注解完毕时会触发该事件。在此时，模组列表已填充完毕，可正常访问。
  2. `FMLPreInitializationEvent`：当 Forge 准备初始化模组时会触发该事件。在此事件中，你可以再次查询注解信息，查看与你模组相关的文件的位置（例如配置文件）。
  3. `FMLInitializationEvent`：上一事件触发后，该事件便会触发。此时，大部分游戏内的对象已可正常访问，所以这一阶段的任务主要是构造矿物词典（OreDictionary）。
  4. `FMLPostInitializationEvent`：当所有模组都经历了 `FMLInitializationEvent` 事件后，该事件便会触发。这一阶段主要是统管整合所有模组做出的更改。
  5. `FMLLoadCompleteEvent`：进入主界面后，此事件立即触发。某些模组，例如 JEI，会在此阶段中执行安排的运算。这一事件标志着整个 FML 生命周期的结束。

- 服务端加载阶段：
  1. `FMLServerAboutToStartEvent`：当所有的设置以及属性都初始化完毕后，触发该事件。
  2. `FMLServerStartingEvent`：当世界加载完毕后该事件便会被触发。这一阶段主要是用于处理自定义指令等内容。
  3. `FMLServerStartedEvent`：当服务器可以正常接受玩家登入时，触发该事件。
- Server Stopping Stages:
  1. `FMLServerStoppingEvent`：当服务器关闭时，触发该事件。
  2. `FMLServerStoppedEvent`：当服务器关闭的最后 1 刻运行之前触发该事件。在此之后，集成服务端会开始加载主界面。

#### 监听事件

- 事件依照种类的不同，有着不同的监听以及发布方式。Different event types have their own ways of being listened to and unique ways of being posted.

- 只有在标注了 `@Mod` 注解的类中，且标注了 `@EventHandler` 的成员方法才能正常监听到 FMLEvents。**这些监听方法会以反射的方式被调用。**
  ??? 抽象“例子”

  ````java title="ExampleClass.java"
  @Mod(modid = "modid", name = "Mod Name", version = "1.0")
  public class ExampleClass {

      	@EventHandler
      	public void runOnPreInit(FMLPreInitializationEvent event) {
      		// 此处的代码块会加入到 FMLPreInitializationEvent 当中，随该事件触发而起效。
      	}

      }
      ```

  ````

- Other types of events are more flexible in how they're being registered. **These listeners are called natively**

  1. Annotation Magic: `@EventBusSubscriber` class level annotation

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

  2. EVENT_BUS interaction:

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
              			// This method is static
              			// This block of code will run when whichever Event is denoted in the argument
              		}

              		@SubscribeEvent
              		public void thisListenerWillNeverRun(Event event) {
              			// This method is not static
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
              			// This method is not static
              			// This block of code will run when whichever Event is denoted in the argument
              		}

              		@SubscribeEvent
              		public static void thisListenerWillNeverRun(Event event) {
              			// This method is static
              		}

              	}

              }
              ```
          ````

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
