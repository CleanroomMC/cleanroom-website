# Fluid Place Block Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.world.BlockEvent.FluidPlaceBlockEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[BlockEvent](index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.block.state.IBlockState getNewState()
```

```groovy:no-line-numbers
net.minecraft.util.math.BlockPos getLiquidPos()
```

```groovy:no-line-numbers
void setNewState(net.minecraft.block.state.IBlockState arg0)
```

```groovy:no-line-numbers
net.minecraft.block.state.IBlockState getOriginalState()
```
