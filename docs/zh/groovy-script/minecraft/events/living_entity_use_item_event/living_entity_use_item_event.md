# Living Entity Use Item Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.LivingEntityUseItemEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](../living_event/living_event.md), [EntityEvent](../entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
int getDuration()
```

```groovy:no-line-numbers
net.minecraft.item.ItemStack getItem()
```

```groovy:no-line-numbers
void setDuration(int arg0)
```
