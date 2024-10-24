# Load From File

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.PlayerEvent.LoadFromFile
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](../player_event/player_event.md), [LivingEvent](../living_event/living_event.md), [EntityEvent](../entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
java.io.File getPlayerDirectory()
```

```groovy:no-line-numbers
java.lang.String getPlayerUUID()
```

```groovy:no-line-numbers
java.io.File getPlayerFile(java.lang.String arg0)
```
