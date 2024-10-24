# Fill Bucket Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.FillBucketEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](./player_event/index.md), [LivingEvent](./living_event/index.md), [EntityEvent](./entity_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.util.math.RayTraceResult getTarget()
```

```groovy:no-line-numbers
boolean hasResult()
```

```groovy:no-line-numbers
net.minecraft.world.World getWorld()
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getFilledBucket()
```

```groovy:no-line-numbers
void setFilledBucket(net.minecraft.item.ItemStack arg0)
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getEmptyBucket()
```
