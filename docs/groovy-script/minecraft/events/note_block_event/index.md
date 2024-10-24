# Note Block Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.world.NoteBlockEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[BlockEvent](../block_event/index.md)

## Methods
```groovy:no-line-numbers
net.minecraftforge.event.world.NoteBlockEvent$Note getNote()
```

```groovy:no-line-numbers
net.minecraftforge.event.world.NoteBlockEvent$Octave getOctave()
```

```groovy:no-line-numbers
int getVanillaNoteId()
```

```groovy:no-line-numbers
void setNote(net.minecraftforge.event.world.NoteBlockEvent$Note arg0, net.minecraftforge.event.world.NoteBlockEvent$Octave arg1)
```
