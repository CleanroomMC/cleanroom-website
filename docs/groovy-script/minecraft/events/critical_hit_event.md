# Critical Hit Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.CriticalHitEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](./player_event/index.md), [LivingEvent](./living_event/index.md), [EntityEvent](./entity_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.entity.Entity getTarget()
```

```groovy:no-line-numbers
boolean hasResult()
```

```groovy:no-line-numbers
float getDamageModifier()
```

```groovy:no-line-numbers
void setDamageModifier(float arg0)
```

```groovy:no-line-numbers
float getOldDamageModifier()
```

```groovy:no-line-numbers
boolean isVanillaCritical()
```
