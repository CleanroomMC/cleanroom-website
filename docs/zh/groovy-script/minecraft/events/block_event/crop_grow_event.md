# Crop Grow Event

To use this event use the following import:
```groovy
import net.minecraftforge.event.world.BlockEvent.CropGrowEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[BlockEvent](block_event.md)

## Methods
# Crop Grow Event.Pre

To use this event use the following import:
```groovy
import net.minecraftforge.event.world.BlockEvent.CropGrowEvent.Pre
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[CropGrowEvent](crop_grow_event.md), [BlockEvent](block_event.md)

## Methods
```groovy
boolean hasResult()
```

# Crop Grow Event.Post

To use this event use the following import:
```groovy
import net.minecraftforge.event.world.BlockEvent.CropGrowEvent.Post
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[CropGrowEvent](crop_grow_event.md), [BlockEvent](block_event.md)

## Methods
```groovy
net.minecraft.block.state.IBlockState getOriginalState()
```
