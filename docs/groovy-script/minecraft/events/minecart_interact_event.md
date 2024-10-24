# Minecart Interact Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.minecart.MinecartInteractEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[MinecartEvent](./minecart_event.md), [EntityEvent](entity_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.item.ItemStack getItem()
```

```groovy:no-line-numbers
net.minecraft.entity.player.EntityPlayer getPlayer()
```

```groovy:no-line-numbers
net.minecraft.util.EnumHand getHand()
```
