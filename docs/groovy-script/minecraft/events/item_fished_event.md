# Item Fished Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.ItemFishedEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](./player_event/index.md), [LivingEvent](./living_event/index.md), [EntityEvent](./entity_event/index.md)

## Methods
```groovy:no-line-numbers
int getRodDamage()
```

```groovy:no-line-numbers
net.minecraft.util.NonNullList getDrops()
```

```groovy:no-line-numbers
void damageRodBy(int arg0)
```

```groovy:no-line-numbers
net.minecraft.entity.projectile.EntityFishHook getHookEntity()
```
