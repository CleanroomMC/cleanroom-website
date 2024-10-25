# Anvil Repair Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.entity.player.AnvilRepairEvent
```

## Sub-Classes

This event extends the following events and can use all their methods and fields: <br>
[PlayerEvent](player_event/player_event.md), [LivingEvent](living_event/living_event.md), [EntityEvent](entity_event/entity_event.md)

## Methods
```groovy:no-line-numbers
net.minecraft.item.ItemStack getOutput()
```
```groovy:no-line-numbers
net.minecraft.item.ItemStack getRight()
```
```groovy:no-line-numbers
net.minecraft.item.ItemStack getLeft()
```
```groovy:no-line-numbers
net.minecraft.item.ItemStack getItemResult()
```
```groovy:no-line-numbers
void setBreakChance(float arg0)
```
```groovy:no-line-numbers
net.minecraft.item.ItemStack getItemInput()
```
```groovy:no-line-numbers
net.minecraft.item.ItemStack getIngredientInput()
```
```groovy:no-line-numbers
float getBreakChance()
```
