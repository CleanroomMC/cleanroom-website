# Entity Place Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.world.BlockEvent.EntityPlaceEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[BlockEvent](index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.entity.Entity getEntity()
```

```groovy:no-line-numbers
net.minecraftforge.common.util.BlockSnapshot getBlockSnapshot()
```

```groovy:no-line-numbers
net.minecraft.block.state.IBlockState getPlacedBlock()
```

```groovy:no-line-numbers
net.minecraft.block.state.IBlockState getPlacedAgainst()
```
