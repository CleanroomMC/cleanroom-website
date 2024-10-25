# Break Speed

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.PlayerEvent.BreakSpeed
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](../player_event/index.md), [LivingEvent](../living_event/index.md), [EntityEvent](../entity_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.block.state.IBlockState getState()
```

```groovy:no-line-numbers
net.minecraft.util.math.BlockPos getPos()
```

```groovy:no-line-numbers
float getNewSpeed()
```

```groovy:no-line-numbers
void setNewSpeed(float arg0)
```

```groovy:no-line-numbers
float getOriginalSpeed()
```
