# Summon Aid Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.ZombieEvent.SummonAidEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[ZombieEvent](index.md), [EntityEvent](../entity_event/index.md)

## Methods
```groovy:no-line-numbers
int getY()
```

```groovy:no-line-numbers
int getX()
```

```groovy:no-line-numbers
boolean hasResult()
```

```groovy:no-line-numbers
void setCustomSummonedAid(net.minecraft.entity.monster.EntityZombie arg0)
```

```groovy:no-line-numbers
net.minecraft.entity.monster.EntityZombie getCustomSummonedAid()
```

```groovy:no-line-numbers
int getZ()
```

```groovy:no-line-numbers
net.minecraft.world.World getWorld()
```

```groovy:no-line-numbers
double getSummonChance()
```

```groovy:no-line-numbers
net.minecraft.entity.EntityLivingBase getAttacker()
```
