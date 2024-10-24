# Get Collision Boxes Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.world.GetCollisionBoxesEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[WorldEvent](world_event/world_event.md)

## Methods
```groovy:no-line-numbers
net.minecraft.entity.Entity getEntity()
```

```groovy:no-line-numbers
java.util.List getCollisionBoxesList()
```

```groovy:no-line-numbers
net.minecraft.util.math.AxisAlignedBB getAabb()
```
