---
title: Game Object
---

# 游戏对象

## 声音

### 播放

- 在 Minecraft 中，播放声音的方式不止一种。
- 同时，某些方法还有数种重载方法，混用乃是常态。
- 这些方法还对逻辑端有不同的要求，并且播放出来的声音给玩家的体感也有差异。

#### 服务端

1. `World#playSound(EntityPlayer, double, double, double, SoundEvent, SoundCategory, float, float)`

- 这是播放声音最常用的方法。
- 它会为所有在范围内的玩家播放声音（基础半径 16 格，参见`ServerWorldEventHandler#playSoundToAllNearExcept(EntityPlayer, SoundEvent, SoundCategory, double, double, double, float, float)`）。若给 `float volume` 参数传入的值大于 1.0F，则播放的半径会超出 16 格。`（公式： 若 volume 大于 1.0F， 则半径为 16 * volume）`
- 一般来说，我们会将 `null` 传入到 `EntityPlayer` 参数中。该参数在方法上看不出太多的门道，文档里也避而不谈。但通过实践得知，该参数乃是起过滤作用，通过此种方式被传入的 `EntityPlayer` 对象，将**不会**听到由该方法播放出的声音。

2. `World#playSound(EntityPlayer, BlockPos, SoundEvent, SoundCategory, float volume, float pitch)`

- 上一方法的重载，将三个 `double` 压缩为了一个 `BlockPos`。

3. `Entity#playSound(SoundEvent, float, float)`

- 这一方法会先检查该实体 `isSilent`，然后再决定是否调用第一个方法。调用时传入的 **`EntityPlayer` 为 `null`**

4. `EntityPlayer#playSound(SoundEvent, float, float)`

- 覆写了第三个方法，该方法位于 `EntityPlayer` 的父类 `Entity` 中。
- 它同样也调用了第一个方法，但与第三个方法的不同之处在于，它在调用第一个方法时，会将调用者**传入**到第一个方法中的 `EntityPlayer` 中。这意味着调用了这一方法的实体**不会**听到由此方法发出来的声音。很古怪，对吧？我们会在下面的客户端一节中针对此方法再做进一步说明。

#### 客户端

1. `WorldClient#playSound(double, double, double, SoundEvent, SoundCategory, float, float, boolean)`

- Main method in `WorldClient`, sets up a `PositionedSoundRecord` on the client to make sure sounds played are positional.
`WorldClient` 中的主要方法。它会在客户端中构建一个 `PositionedSoundRecord`，令玩家听到的声音有确实的方位感。

2. `WorldClient#playSound(BlockPos, SoundEvent, SoundCategory, float, float, boolean)`

- 会调用第一个方法。

3. `WorldClient#playSound(EntityPlayer, SoundEvent, SoundCategory, float, float)`

- 调用时会确认是否 `EntityPlayer` == `this.mc.player`，避免 LAN 中的问题，然后再调用第一个方法。

4. `EntityPlayer#playSound(SoundEvent, float, float)`

- 也是调用第一个方法。

`(COMING SOON: SoundHandler methods)`

这一方法比较特别，它在客户端与服务端的行为恰好相反。若是在服务端调用，播放出的声音**唯独** `EntityPlayer` 这一调用者本身**无法**听到；而在客户端，则**只有**调用者能听到。

总的来说，这一方法是专门设计出来给对游戏端不甚了解的开发者使用的。如果该方法在双端都被调用，则两者互补，恰好能够达到前面方法的效果。
