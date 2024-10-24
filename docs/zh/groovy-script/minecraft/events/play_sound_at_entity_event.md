# Play Sound At Entity Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.PlaySoundAtEntityEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[EntityEvent](entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
void setCategory(net.minecraft.util.SoundCategory arg0)
```

```groovy:no-line-numbers
net.minecraft.util.SoundCategory getCategory()
```

```groovy:no-line-numbers
float getVolume()
```

```groovy:no-line-numbers
net.minecraft.util.SoundEvent getSound()
```

```groovy:no-line-numbers
float getPitch()
```

```groovy:no-line-numbers
void setPitch(float arg0)
```

```groovy:no-line-numbers
void setVolume(float arg0)
```

```groovy:no-line-numbers
float getDefaultPitch()
```

```groovy:no-line-numbers
void setSound(net.minecraft.util.SoundEvent arg0)
```

```groovy:no-line-numbers
float getDefaultVolume()
```
