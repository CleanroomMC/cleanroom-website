
# Info Commands

GroovyScripts adds multiple commands to retrieve information from the game.

The primary purpose is to convert components in the game into GroovyScript [Object Mappers](../../getting_started/object_mappers.md).

Each command processes through information via the same steps:
- Collecting information from the world, which is done by the command directly and varies by command.
- Parsing this information via the `InfoParserRegistry` and all valid `InfoParser`s,
  depending on arguments passed into the command.
- Printing the output information to the chat, or an error if nothing was found.


## Syntax

Each type of info command can be used with different arguments

There are two basic arguments:

- `all`: Ignores any arguments allowing only a specific argument to be used.
- `pretty`: Some info types may have different ways in which they will be logged if pretty is true -
  in particular, NBT Data will appear significantly differently when enabled.

And there are a large and variable number of more complex arguments:

Any `InfoParser` key can be used to filter the valid outputs.
This can be done in two ways,
- allow: using the key directly will cause the command to only print the `InfoParser`s matching the input keys.
- negate: using the key prefixed by a minus sign `-` will cause the command to skip matching `InfoParser`s.


::: info External Compat {id="note"}

Note that `InfoParser`s do *not* have this filtering logic enforced, and may not implement this correctly.

:::

## Command Options

### Info

- `/gs info`

Runs the info operation on the first valid type from Hand, Looking, or Self types.


### Hand

- `/gs hand`

Runs the info operation on the ItemStack in your hand.

Particularly useful for getting the [`EntityEntry`](../vanilla_object_mappers.md#entity) or [`IBlockState`](../vanilla_object_mappers.md#blockstate)
Object Mappers.

### Looking

- `/gs looking`

Runs the info operation on the Entity or Block you are looking at, prioritizing entities.

Target must be in range to be detected.

Particularly useful for getting the [`EntityEntry`](../vanilla_object_mappers.md#entity) or [`IBlockState`](../vanilla_object_mappers.md#blockstate)
Object Mappers.

### Self

- `/gs self`

Runs the info operation on the player entity executing the command.

Particularly useful for getting the [`Dimension`](../vanilla_object_mappers.md#dimension), [`Biome`](../vanilla_object_mappers.md#biome),
or [`Potion`](../vanilla_object_mappers.md#potion) Object Mappers.


## Vanilla Info Parsers

- [`biome`](../vanilla_object_mappers.md#biome): Biome the the target is in.
- [`block`](../vanilla_object_mappers.md#block): Block being targeted or representing the held item.
- [`blockstate`](../vanilla_object_mappers.md#blockstate): IBlockState being looked at or representing the held item.
- [`creativetab`](../vanilla_object_mappers.md#creativetab): Creative Tab the targeted ItemStack is contained by, if any.
- [`dimension`](../vanilla_object_mappers.md#dimension): Dimension type the player is in.
- [`enchantment`](../vanilla_object_mappers.md#enchantment): Enchantments on the held ItemStack.
- [`entity`](../vanilla_object_mappers.md#entity): Entity being looked at.
- [`fluid`](../vanilla_object_mappers.md#liquid-and-fluid): Fluid being looked at in world or being contained in the item being held.
- [`item`](../vanilla_object_mappers.md#itemstack): ItemStack in the player's main hand, offhand, or representing the block being looked at.
- [`nbt`](../vanilla_object_mappers.md#nbt): NBT data of target, trimmed if it gets too long.
- [`oredict`](../vanilla_object_mappers.md#ore): Ore Dictionary values the held ItemStack is part of.
- `potioneffect`: Potion Effects for the held item, active potion effects for the entity being looked at, or active potion effects on the player.
- `translation`: Translation key for the target.
- [`villagercareer`](../vanilla_object_mappers.md#career): The Villager Career of the villager being targeted.
- [`villagerprofession`](../vanilla_object_mappers.md#profession): The Villager Profession of the villager being targeted.


## Creating Info Parsers

In order to register an `InfoParser`, the only thing that needs to be done
is to implement the `InfoParser` interface and call `InfoParserRegistry#addInfoParser(InfoParser)`.

However, the abstract class `GenericInfoParser` has a number of helpful methods already created
to make creating complex `InfoParser`s easy, so extending that should be preferred.
