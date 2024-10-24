# Harvest Drops Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.world.BlockEvent.HarvestDropsEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[BlockEvent](block_event.md)

## Methods
```groovy:no-line-numbers
void setDropChance(float arg0)
```

```groovy:no-line-numbers
java.util.List getDrops()
```

```groovy:no-line-numbers
float getDropChance()
```

```groovy:no-line-numbers
int getFortuneLevel()
```

```groovy:no-line-numbers
boolean isSilkTouching()
```

```groovy:no-line-numbers
net.minecraft.entity.player.EntityPlayer getHarvester()
```
