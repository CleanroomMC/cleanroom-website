# Player Interact Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.PlayerInteractEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](../player_event/index.md), [LivingEvent](../living_event/index.md), [EntityEvent](../entity_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraftforge.fml.relauncher.Side getSide()
```

```groovy:no-line-numbers
net.minecraft.util.EnumHand getHand()
```

```groovy:no-line-numbers
net.minecraft.util.math.BlockPos getPos()
```

```groovy:no-line-numbers
net.minecraft.world.World getWorld()
```

```groovy:no-line-numbers
net.minecraft.util.EnumActionResult getCancellationResult()
```

```groovy:no-line-numbers
void setCancellationResult(net.minecraft.util.EnumActionResult arg0)
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getItemStack()
```

```groovy:no-line-numbers
net.minecraft.util.EnumFacing getFace()
```
