# Place Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.world.BlockEvent.PlaceEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[EntityPlaceEvent](entity_place_event.md), [BlockEvent](block_event.md)

## Methods
```groovy:no-line-numbers
net.minecraft.entity.player.EntityPlayer getPlayer()
```

```groovy:no-line-numbers
net.minecraft.util.EnumHand getHand()
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getItemInHand()
```
