# Create Decorator

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.terraingen.BiomeEvent.CreateDecorator
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[BiomeEvent](biome_event.md)

## Methods
```groovy:no-line-numbers
net.minecraft.world.biome.BiomeDecorator getNewBiomeDecorator()
```

```groovy:no-line-numbers
net.minecraft.world.biome.BiomeDecorator getOriginalBiomeDecorator()
```

```groovy:no-line-numbers
void setNewBiomeDecorator(net.minecraft.world.biome.BiomeDecorator arg0)
```
