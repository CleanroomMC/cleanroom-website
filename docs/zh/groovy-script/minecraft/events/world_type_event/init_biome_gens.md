# Init Biome Gens

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.terraingen.WorldTypeEvent.InitBiomeGens
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[WorldTypeEvent](world_type_event.md)

## Methods
```groovy:no-line-numbers
long getSeed()
```

```groovy:no-line-numbers
void setNewBiomeGens([Lnet.minecraft.world.gen.layer.GenLayer; arg0)
```

```groovy:no-line-numbers
[Lnet.minecraft.world.gen.layer.GenLayer; getNewBiomeGens()
```

```groovy:no-line-numbers
[Lnet.minecraft.world.gen.layer.GenLayer; getOriginalBiomeGens()
```
