# Harvest Check

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.PlayerEvent.HarvestCheck
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](../player_event/index.md), [LivingEvent](../living_event/index.md), [EntityEvent](../entity_event/index.md)

## Methods
```groovy:no-line-numbers
boolean canHarvest()
```

```groovy:no-line-numbers
net.minecraft.block.state.IBlockState getTargetBlock()
```

```groovy:no-line-numbers
void setCanHarvest(boolean arg0)
```
