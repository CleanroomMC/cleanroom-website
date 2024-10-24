# Generate Minable

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.terraingen.OreGenEvent.GenerateMinable
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[OreGenEvent](ore_gen_event.md)

## Methods
```groovy:no-line-numbers
net.minecraftforge.event.terraingen.OreGenEvent$GenerateMinable$EventType getType()
```

```groovy:no-line-numbers
boolean hasResult()
```

```groovy:no-line-numbers
net.minecraft.world.gen.feature.WorldGenerator getGenerator()
```
