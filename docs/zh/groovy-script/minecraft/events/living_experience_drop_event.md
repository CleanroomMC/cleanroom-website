# Living Experience Drop Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.LivingExperienceDropEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingEvent](living_event/living_event.md), [EntityEvent](entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
int getDroppedExperience()
```

```groovy:no-line-numbers
void setDroppedExperience(int arg0)
```

```groovy:no-line-numbers
int getOriginalExperience()
```

```groovy:no-line-numbers
net.minecraft.entity.player.EntityPlayer getAttackingPlayer()
```
