# Potion Added Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.PotionEvent.PotionAddedEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PotionEvent](potion_event.md), [LivingEvent](../living_event/living_event.md), [EntityEvent](../entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
net.minecraft.potion.PotionEffect getOldPotionEffect()
```

```groovy:no-line-numbers
net.minecraft.potion.PotionEffect getPotionEffect()
```
