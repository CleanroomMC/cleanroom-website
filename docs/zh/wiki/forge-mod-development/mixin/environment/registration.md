---
title: Registration
---

# 注册

在你使用 MixinBooter 注册 Mixin 之前，请你先认真考虑清楚，自己编写的 Mixin 会以何种方式影响游戏。

如果你的 Mixin 影响的目标为**原版 Minecraft** 或是 **Forge** 类，那么你需要使用到 **coremod**。

## 原版 Minecraft/Forge 的 Mixin

- 制作一个 Coremod
- 所写类不仅需要实现 `IFMLLoadingPlugin`，还需要实现 `IEarlyMixinLoader`

## 模组 Mixin

- 在你的模组中新建一个类，任意位置均可（当然最好是在你模组的包中）。
- 令该类实现 `ILateMixinLoader`

`IEarlyMixinLoader` 以及 `ILateMixinLoader` 中的待实现方法均一致：

```java
/**
 * @return 需要被传入 Mixin 库中的 Mixin 配置，作为队列依次传入。
 */
List<String> getMixinConfigs();

/**
 * 控制目标配置是否应该加入到队列中。
 *
 * @param mixinConfig mixin 配置的名称，检索对象为 {@link getMixinConfigs()} 的返回值。
 * @return 若返回 true，则该配置可加入到队列中，false 则相反。
 */
default boolean shouldMixinConfigQueue(String mixinConfig) {
    return true;
}

/**
 * 当目标配置成功进入队列并送达 Mixin 库时，会运行该方法。
 * @param mixinConfig mixin 配置的名称，检索对象为 {@link getMixinConfigs()} 的返回值。
*/
default void onMixinConfigQueued(String mixinConfig) { }
```
