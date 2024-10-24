# Looting Level Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.LootingLevelEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](living_event/living_event.md), [EntityEvent](entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
net.minecraft.util.DamageSource getDamageSource()
```

```groovy:no-line-numbers
void setLootingLevel(int arg0)
```

```groovy:no-line-numbers
int getLootingLevel()
```
