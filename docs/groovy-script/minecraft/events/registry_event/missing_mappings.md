# Missing Mappings

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.RegistryEvent.MissingMappings
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[RegistryEvent](./index.md)

## Methods
```groovy:no-line-numbers
net.minecraft.util.ResourceLocation getName()
```

```groovy:no-line-numbers
net.minecraftforge.registries.IForgeRegistry getRegistry()
```

```groovy:no-line-numbers
void setModContainer(net.minecraftforge.fml.common.ModContainer arg0)
```

```groovy:no-line-numbers
com.google.common.collect.ImmutableList getAllMappings()
```

```groovy:no-line-numbers
com.google.common.collect.ImmutableList getMappings()
```
