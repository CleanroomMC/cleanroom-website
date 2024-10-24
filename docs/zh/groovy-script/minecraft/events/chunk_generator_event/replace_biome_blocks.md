# Replace Biome Blocks

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.terraingen.ChunkGeneratorEvent.ReplaceBiomeBlocks
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[ChunkGeneratorEvent](../chunk_generator_event/chunk_generator_event.md)

## Methods
```groovy:no-line-numbers
int getX()
```

```groovy:no-line-numbers
boolean hasResult()
```

```groovy:no-line-numbers
int getZ()
```

```groovy:no-line-numbers
net.minecraft.world.World getWorld()
```

```groovy:no-line-numbers
net.minecraft.world.chunk.ChunkPrimer getPrimer()
```
