# Left Click Block

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.PlayerInteractEvent.LeftClickBlock
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerInteractEvent](player_interact_event.md), [PlayerEvent](../player_event/player_event.md), [LivingEvent](../living_event/living_event.md), [EntityEvent](../entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
void setCanceled(boolean arg0)
```

```groovy:no-line-numbers
net.minecraftforge.fml.common.eventhandler.Event$Result getUseItem()
```

```groovy:no-line-numbers
net.minecraft.util.math.Vec3d getHitVec()
```

```groovy:no-line-numbers
net.minecraftforge.fml.common.eventhandler.Event$Result getUseBlock()
```

```groovy:no-line-numbers
void setUseBlock(net.minecraftforge.fml.common.eventhandler.Event$Result arg0)
```

```groovy:no-line-numbers
void setUseItem(net.minecraftforge.fml.common.eventhandler.Event$Result arg0)
```
