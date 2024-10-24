# Populate Chunk Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.terraingen.PopulateChunkEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[ChunkGeneratorEvent](../chunk_generator_event/index.md)

## Methods
```groovy:no-line-numbers
boolean isHasVillageGenerated()
```

```groovy:no-line-numbers
net.minecraft.world.World getWorld()
```

```groovy:no-line-numbers
int getChunkZ()
```

```groovy:no-line-numbers
int getChunkX()
```

```groovy:no-line-numbers
java.util.Random getRand()
```

# Pre

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.terraingen.PopulateChunkEvent.Pre
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PopulateChunkEvent](index.md), [ChunkGeneratorEvent](../chunk_generator_event/index.md)

## Methods
# Post

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.terraingen.PopulateChunkEvent.Post
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PopulateChunkEvent](index.md), [ChunkGeneratorEvent](../chunk_generator_event/index.md)

## Methods
