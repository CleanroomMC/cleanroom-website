# PlayerEvent.BreakSpeed

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.player.PlayerEvent.BreakSpeed
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](../player_event/player_event.md), [LivingEvent](../living_event/living_event.md), [EntityEvent](../entity_event/entity_event.md)

## Methods
```groovy
net.minecraft.block.state.IBlockState getState()
```

```groovy
net.minecraft.util.math.BlockPos getPos()
```

```groovy
float getNewSpeed()
```

```groovy
void setNewSpeed(float arg0)
```

```groovy
float getOriginalSpeed()
```
