# Living Equipment Change Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](./living_event/index.md), [EntityEvent](./entity_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.inventory.EntityEquipmentSlot getSlot()
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getTo()
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getFrom()
```
