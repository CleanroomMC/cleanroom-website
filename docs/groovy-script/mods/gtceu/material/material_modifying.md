---
title: Modifying Materials
---

# Modifying existing Materials
Sometimes you don't want to create new materials. You just want to modify some properties of an existing material.
Similar to creating materials you use an event. But for modifying materials you use the `PostMaterialEvent`. 

```groovy
mods.gregtech.lateMaterialEvent {
    // modify materials here
}
```

See the **Retrieving Existing Materials** section for information on retrieving existing materials.

The material registry can do more than just get materials.

## Setting basic properties

#### Formula
```groovy:no-line-numbers
setFormula(String formula)
setFormula(String formula, boolean withFormatting)
```

Sets the internal formula and thus tooltip of this Material.

* `formula` - the string to set the formula to
* `withFormatting` - whether to apply number formatting (subscripts, etc) to the formula and tooltip (Default: false)

<br>

#### Flags
```groovy:no-line-numbers
addFlags(String... names)
```

Adds additional flags to this Material.

* `names` - a string array of flags to add

<br>

#### Color
```groovy:no-line-numbers
setMaterialRGB(int materialRGB)
```

Sets the color of this Material.

* `materialRGB` - the int color to set. Accepts the raw int value or values in the `0x` format.

<br>

#### Icon set
```groovy:no-line-numbers
setIconSet(String iconSet)
```

Sets the icon set of this Material.

* `iconSet` - the icon set name (see [Icon sets](material_creating.md#changing-material-appearances))

::: info Example {id="example"}

```groovy
import gregtech.api.GregTechAPI.PostMaterialEvent

event_manager.listen { PostMaterialEvent event ->
    def gold = material('gold')
    def name = gold.toString() // "gold"
    def color = gold.getMaterialRGB() // 0xFFE650
    gold.setFormula("(Au)2Au", true) // set formula
    def formula = gold.getChemicalFormula() // "(Au)2Au"
    gold.addFlags("generate_long_rod", "generate_gear") // add gold long rod, add gold gear
}
```
:::

```groovy:no-line-numbers
```

## Fluid, Gas, Plasma
```groovy:no-line-numbers
addLiquid()
addLiquid(FluidBuilder)
addGas()
addGas(FluidBuilder)
addPlasma()
addPlasma(FluidBuilder)
```

Adds a liquid, gas or plasma to a material. Check out [fluid builder](material_creating.md#fluid-builder) for the fluid builder parameter. You can use the `fluidBuilder()` method in late material event too.

::: info Deprecation {id="warning"}
Do not use the `addFluid(String)` and `addFluid(String, boolean)` methods. They are deprecated and might get removed in a future update.
:::

Other methods:
```groovy:no-line-numbers
// getter
isGaseous() // boolean // returns true if the material has a gas
```

## Dust
```groovy:no-line-numbers
addDust()
addDust(int harvestLevel)
addDust(int harvestLevel, int burnTime)
```

Adds or modifies a `DustProperty` to this Material, which generates a Dust, Small Dust, and Tiny Dust.
**Is automatically applied by `IngotProperty` and `GemProperty`**.

* `harvestLevel` - The Harvest Level of the Material's block when mining it. If the Material also has
  a `ToolProperty`, this value will also be used to determine the tool's Mining Level.
* `burnTime` - The Burn Time (in ticks) of this Material as a Furnace Fuel. If not specified, the material *
  _cannot_* be used as a furnace fuel.

Other methods:
```groovy:no-line-numbers
// setter
setHarvestLevel(int harvestLevel)
setBurnTime(int burnTime)
// getter
harvestLevel() // int
burnTime() // int
```

## Ingot
```groovy:no-line-numbers
addIngot()
```

Adds an `IngotProperty` to this Material, which generates an Ingot. It automatically adds a `DustProperty`. **This is
INCOMPATIBLE with `GemProperty`.**

To modify harvest level or burn time, you should look into [adding/modifying dust property](#dust).

## Gem
```groovy:no-line-numbers
addGem()
```

Adds a `GemProperty` to this Material, which generates all types of GregTech Gems. It automatically adds
a `DustProperty`. **This is INCOMPATIBLE with `IngotProperty`.**

To modify harvest level or burn time, you should look into [adding/modifying dust property](#dust).

## Ore
```groovy:no-line-numbers
addOre()
addOre(boolean emissive)
addOre(int oreMultiplier, int byproductMultiplier)
addOre(int oreMultiplier, int byproductMultiplier, boolean emissive)
```

Adds Ore Blocks, Crushed, Crushed Purified, Crushed Centrifuged, Impure Dust, and Purified Dust for this Material.

* `oreMultiplier` - Crushed Ore output amount multiplier for Ore -> Crushed Ore Maceration. Default: 1 (no
  multiplier).
* `byproductMultiplier` - Byproduct output amount multiplier for Crushed Ore processing of any kind. Default:
  1 (no multiplier).
* `emissive` - Should ore block use emissive texturing (see below image). Default: false.

![](https://user-images.githubusercontent.com/18493855/143446969-80de6354-ad12-4170-81f5-071d6c0bb7cd.png)

## Blast
```groovy:no-line-numbers
addBlastProperty(int temp)
addBlastProperty(int temp, String gasTier)
addBlastProperty(int temp, String gasTier, int eutOverride)
addBlastProperty(int temp, String gasTier, int eutOverride, int durationOverride)
addBlastProperty(int temp, String gasTier, int eutOverride, int durationOverride, int vacuumEUtOverride, int vacuumDurationOverride)
```

Sets or modifies the Blast Furnace Temperature of this Material. If below 1000 Kelvin, Primitive Blast Furnace recipes will be also
added. If above 1750 Kelvin, a Hot Ingot and its appropriate Vacuum Freezer recipe will be also added. If a Material
with this Property has a Fluid, its temperature will be set to this if it is currently using the default Fluid
temperature.

* `temp` - Blast Furnace Temperature in Kelvin required to heat up the material. Just like in real life, this value *
  _cannot_* be less than `0`.
* `gasTier` - The tier of gas used to smelt in the Electric Blast Furnace. Available options
  are: `"LOW"`, `"MID"`, `"HIGH"`, `"HIGHER"`, `"HIGHEST`.
* `eutOverride` - Sets the EU/t of autogenerated Electric Blast Furnace recipes to the specified value.
* `durationOverride` - Sets the base duration in ticks of autogenerated Electric Blast Furnace recipes to the
  specified value.
* `vacuumEUtOverride` - Sets the EU/t of autogenerated Vacuum Freezer recipes to the specified value.
* `vacuumDurationOverride` - Sets the base duration in ticks of autogenerated Vacuum Freezer recipes to the
  specified value.

Other methods:
```groovy:no-line-numbers
// setter
setBlastTemp(int blastTemp)
// getter
blastTemp() // int
```

## Tools
```groovy:no-line-numbers
addTools(float harvestSpeed, float attackDamage, float attackSpeed, int durability)
addTools(float harvestSpeed, float attackDamage, float attackSpeed, int durability, int harvestLevel)
addTools(float harvestSpeed, float attackDamage, float attackSpeed, int durability, int harvestLevel, int enchantability)
addTools(float harvestSpeed, float attackDamage, float attackSpeed, int durability, int harvestLevel, int enchantability, int durabilityMultiplier)
addTools(ToolProperty toolProperty)
addTools(ToolProperty.Builder toolPropertyBuilder)
```

Set or modifies the stats for tools which are made from this Material.

See [Tool Builder](material_creating.md#tool-stats) on how to use the tool builder. The `toolBuilder()` method is also available in the late material event.


Other methods:
```groovy:no-line-numbers
// sets / modifies properties
setToolStats(float speed, float attackDamage, int durability)
setToolStats(float speed, float attackDamage, int durability, boolean shouldIgnoreCraftingTools)
setToolStats(float speed, float attackDamage, int durability, int enchantability)
setToolStats(float speed, float attackDamage, int durability, int enchantability, int harvestLevel)
setToolStats(float speed, float attackDamage, int durability, int enchantability, boolean shouldIgnoreCraftingTools)
setToolStats(float speed, float attackDamage, int durability, int enchantability, int harvestLevel, boolean shouldIgnoreCraftingTools)
addToolEnchantment(Enchantment enchantment, int level)
addScaledToolEnchantment(Enchantment enchantment, int level, double levelGrowth)
// returns properties
toolSpeed() // float
attackDamage() // float
toolDurability() // int
toolHarvestLevel() // int
toolEnchantability() // int
```

## Item Pipe
```groovy:no-line-numbers
addItemPipes(int priority, float stacksPerSec)
```

Adds or modifies item pipes of this Material. Requires `IngotProperty` to be set.

* `priority` - Sets the priority for the pipe. Items will take the path with the lowest priority. This value is used for
  the Normal Pipe. The Small Pipe has this value multiplied by `1.5`, and the Large Pipe has this value multiplied
  by `0.75`.
* `stacksPerSec` - Sets the maximum transfer rate in stacks of 64 items per second. This value is used for the Normal
  Pipe. Small Pipes have this value multiplied by `0.5`. Large Pipes have this value multiplied by `2`.

## Fluid Pipe
```groovy:no-line-numbers
fluidPipeProperties(int maxTemp, int throughput, boolean gasProof)
fluidPipeProperties(int maxTemp, int throughput, boolean gasProof, boolean acidProof, boolean cryoProof, boolean plasmaProof)
```

Adds or modifies Fluid Pipes of this Material. Requires `IngotProperty` to be set.

* `maxTemp` - Sets the maximum allowed fluid temperature in the pipe. Pipes burn/vanish when fluid is too hot.
* `throughput` - Sets the maximum flowrate through the pipes. This value multiplied by `20` is the maximum rate for the
  Tiny Pipe. Each subsequent pipe is further multiplied by `2` over the previous.
* `gasProof` - If `true`, the pipe is able to transfer fluids with the Gas state. Else, they will vaporize.
* `acidProof` - If `true`, the pipe is able to transfer fluids with the Acidic attribute. Else, they will destroy the
  pipe.
* `cryoProof` - If `true`, the pipe is able to transfer fluids with a temperature below 120. Else, they will vaporize.
* `plasmaProof` - If `true`, the pipe is able to transfer fluids with the Plasma state, regardless of the fluid pipe's
  maximum temperature. Else, they will destroy the pipe.

## Wires & Cables
```groovy:no-line-numbers
addCables(long voltage, int amperage, int loss)
addCables(long voltage, int amperage, int loss, boolean isSuperCon)
addCables(long voltage, int amperage, int loss, boolean isSuperCon, int criticalTemperature)
```

Adds or modifies cables and wires of this Material. Requires `IngotProperty` to be set. `addWires` is an alternative method name. It does the same thing.

* `voltage` - The voltage amount a 1x wire/cable can transfer.
* `amperage` - The amperage amount a 1x wire/cable can handle.
* `loss` - The loss per block a 1x **wire** will have. Cables have this value divided by 2, but will never be lossless
  unless set to `0`.
* `isSuperCon` - Whether this is a superconductor. This will prevent cables from generating, and have a loss
  of `0`.
* `criticalTemperature` - The temperature of the superconductive phase transition. Cable needs to be a super conductor. (Effect unclear)
