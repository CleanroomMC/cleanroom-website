# Arrow Loose Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.ArrowLooseEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](player_event/player_event.md), [LivingEvent](living_event/living_event.md), [EntityEvent](entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
net.minecraft.world.World getWorld()
```

```groovy:no-line-numbers
boolean hasAmmo()
```

```groovy:no-line-numbers
int getCharge()
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getBow()
```

```groovy:no-line-numbers
void setCharge(int arg0)
```
