# LivingDamageEvent

To use this event use the following import:
```groovy
import net.minecraftforge.event.entity.living.LivingDamageEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](living_event/living_event.md), [EntityEvent](entity_event/entity_event.md)

## Methods
```groovy
net.minecraft.util.DamageSource getSource()
```

```groovy
void setAmount(float arg0)
```

```groovy
float getAmount()
```
