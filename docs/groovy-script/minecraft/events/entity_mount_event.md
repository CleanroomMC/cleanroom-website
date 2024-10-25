# Entity Mount Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.EntityMountEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[EntityEvent](./entity_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.world.World getWorldObj()
```

```groovy:no-line-numbers
net.minecraft.entity.Entity getEntityBeingMounted()
```

```groovy:no-line-numbers
net.minecraft.entity.Entity getEntityMounting()
```

```groovy:no-line-numbers
boolean isMounting()
```

```groovy:no-line-numbers
boolean isDismounting()
```
