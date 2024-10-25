# Potion Color Calculation Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.PotionColorCalculationEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](living_event/living_event.md), [EntityEvent](entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
void setColor(int arg0)
```

```groovy:no-line-numbers
void shouldHideParticles(boolean arg0)
```

```groovy:no-line-numbers
boolean areParticlesHidden()
```

```groovy:no-line-numbers
int getColor()
```

```groovy:no-line-numbers
java.util.Collection getEffects()
```
