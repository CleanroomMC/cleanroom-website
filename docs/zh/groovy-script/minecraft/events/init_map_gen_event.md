# Init Map Gen Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.terraingen.InitMapGenEvent
```

## Methods
```groovy:no-line-numbers
net.minecraftforge.event.terraingen.InitMapGenEvent$EventType getType()
```

```groovy:no-line-numbers
void setNewGen(net.minecraft.world.gen.MapGenBase arg0)
```

```groovy:no-line-numbers
net.minecraft.world.gen.MapGenBase getOriginalGen()
```

```groovy:no-line-numbers
net.minecraft.world.gen.MapGenBase getNewGen()
```
