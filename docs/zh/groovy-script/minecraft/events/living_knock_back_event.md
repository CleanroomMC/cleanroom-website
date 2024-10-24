# Living Knock Back Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.LivingKnockBackEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](living_event/living_event.md), [EntityEvent](entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
net.minecraft.entity.Entity getOriginalAttacker()
```

```groovy:no-line-numbers
double getOriginalRatioX()
```

```groovy:no-line-numbers
double getOriginalRatioZ()
```

```groovy:no-line-numbers
float getOriginalStrength()
```

```groovy:no-line-numbers
net.minecraft.entity.Entity getAttacker()
```

```groovy:no-line-numbers
float getStrength()
```

```groovy:no-line-numbers
double getRatioX()
```

```groovy:no-line-numbers
double getRatioZ()
```

```groovy:no-line-numbers
void setStrength(float arg0)
```

```groovy:no-line-numbers
void setAttacker(net.minecraft.entity.Entity arg0)
```

```groovy:no-line-numbers
void setRatioZ(double arg0)
```

```groovy:no-line-numbers
void setRatioX(double arg0)
```
