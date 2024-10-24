# Check Spawn

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.living.LivingSpawnEvent.CheckSpawn
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[LivingSpawnEvent](index.md), [LivingEvent](../living_event/index.md), [EntityEvent](../entity_event/index.md)

## Methods
```groovy:no-line-numbers
boolean hasResult()
```

```groovy:no-line-numbers
boolean isSpawner()
```

```groovy:no-line-numbers
net.minecraft.tileentity.MobSpawnerBaseLogic getSpawner()
```
