
# Creating Materials

First of all, the best docs is the source
itself: [Source](https://github.com/GregTechCEu/GregTech/blob/master/src/main/java/gregtech/api/unification/material/Material.java)


::: info {id="info"}
This docs goes of GroovyScript version 1.0.1 and GTCEu 2.9.0
:::

GregTech materials must be created in the `preInit` loader. Additionaly they need to be registered (or modified) inside
an event.

```groovy
// listen to gregtech material event
mods.gregtech.materialEvent {
    // create materials here
}
```

Note that when the event runs GregTech materials are already created, but addon materials might not. To modify addon
materials (but don't register) use `lateMaterialEvent` instead of `materialEvent`.

Materials are created using a system called `MaterialBuilder`. If you've used GregTech CE and CEu's system for adding
machine recipes, this will feel very similar.

All Materials need a number `id` and a `name`. The `id` must be from 0-32767, however, Ids 32000+ are reserved for pack
makers. No add-on developer is supposed to use ids in that range, so there should be no worry about conflicts. 700+
materials is more than all of CEu uses by itself too! The `name` must be all lowercase, contain no spaces, and not have
special characters (@, %, etc).

```groovy
// listen to gregtech material event
mods.gregtech.materialEvent {
    /*
     * This will not work quite yet. Read on to learn what else this needs!
     * It would assign a variable to a new Material, with an id of 32000, and a name of "my_material".
     *
     * Use .build() to finish building a material. This is what actually creates it.
     */
    def my_material = materialBuilder(32000, "my_material")
        // add properties here
        .build()
}
```

The `materialBuilder()` method is only available inside this event. The second parameter is actually a `ResourceLocation`.
If only a string is supplied, then the namespace defaults to the pack id configured in the run config. 


## Adding Material Properties

This is where materials really start to take shape. All of the following methods are called on
a `materialBuilder()`.
Scroll down to the first example to see how to do this. Each method can be chained together, one after the other, until
the desired material is all specified. It is then built and the end and returns a finished Material.

### Fluid
```groovy:no-line-numbers
liquid()
liquid(FluidBuilder builder)
```

Generates a fluid for this material.

* `builder` - The fluid configuration. See [Fluid builder](#fluid-builder)

### Plasma

```groovy:no-line-numbers
plasma()
plasma(FluidBuilder builder)
```

Generates a plasma fluid for this material.

* `builder` - The fluid configuration. See [Fluid builder](#fluid-builder)

### Gas
```groovy:no-line-numbers
gas()
gas(FluidBuilder builder)
```

Generates a gaseous fluid for this material.

* `builder` - The fluid configuration. See [Fluid builder](#fluid-builder)

### Dust
```groovy:no-line-numbers
dust()
dust(int harvestLevel)
dust(int harvestLevel, int burnTime)
```

Adds a `DustProperty` to this Material, which generates a Dust, Small Dust, and Tiny Dust.
**Is automatically applied by `IngotProperty` and `GemProperty`**.

* `harvestLevel` - The Harvest Level of the Material's block when mining it. If the Material also has
  a `ToolProperty`, this value will also be used to determine the tool's Mining Level.
* `burnTime` - The Burn Time (in ticks) of this Material as a Furnace Fuel. If not specified, the material *
  _cannot_* be used as a furnace fuel.

### Ingot
```groovy:no-line-numbers
ingot()
ingot(int harvestLevel)
ingot(int harvestLevel, int burnTime)
```

Adds an `IngotProperty` to this Material, which generates an Ingot. It automatically adds a `DustProperty`. **This is
INCOMPATIBLE with `GemProperty`.**

* `harvestLevel` - The Harvest Level of the Material's block when mining it. If the Material also has
  a `ToolProperty`, this value will also be used to determine the tool's Mining Level. If this Material already had a
  Harvest Level defined, it will be overridden.
* `burnTime` - The Burn Time (in ticks) of this Material as a Furnace Fuel. If not specified, the material *
  _cannot_* be used as a furnace fuel. If this Material already had a Burn Time defined, it will be overridden.

### Gem
```groovy:no-line-numbers
gem()
gem(int harvestLevel)
gem(int harvestLevel, int burnTime)
```

Adds a `GemProperty` to this Material, which generates all types of GregTech Gems. It automatically adds
a `DustProperty`. **This is INCOMPATIBLE with `IngotProperty`.**

* `harvestLevel` - The Harvest Level of the Material's block when mining it. If the Material also has
  a `ToolProperty`, this value will also be used to determine the tool's Mining Level. If this Material already had a
  Harvest Level defined, it will be overridden.
* `burnTime` - The Burn Time (in ticks) of this Material as a Furnace Fuel. If not specified, the material *
  _cannot_* be used as a furnace fuel. If this Material already had a Burn Time defined, it will be overridden.

### Ore
```groovy:no-line-numbers
ore()
ore(boolean emissive)
ore(int oreMultiplier, int byproductMultiplier)
ore(int oreMultiplier, int byproductMultiplier, boolean emissive)
```

Adds Ore Blocks, Crushed, Crushed Purified, Crushed Centrifuged, Impure Dust, and Purified Dust for this Material.

* `oreMultiplier` - Crushed Ore output amount multiplier for Ore -> Crushed Ore Maceration. Default: 1 (no
  multiplier).
* `byproductMultiplier` - Byproduct output amount multiplier for Crushed Ore processing of any kind. Default:
  1 (no multiplier).
* `emissive` - Should ore block use emissive texturing (see below image). Default: false.

![](https://user-images.githubusercontent.com/18493855/143446969-80de6354-ad12-4170-81f5-071d6c0bb7cd.png)

### Polymer
```groovy:no-line-numbers
polymer()
polymer(int harvestLevel)
```

Adds a `PolymerProperty` to this material, which determines if special lang entries should be used for its items: such
as "Sheet" instead of "Plate." This requires a `FluidProperty`.

* `harvestLevel` - The Harvest Level of the Material's block when mining it. If the Material also has
  a `ToolProperty`, this value will also be used to determine the tool's Mining Level. If this Material already had a
  Harvest Level defined, it will be overridden.

### Wood
```groovy:no-line-numbers
wood()
wood(int harvestLevel)
wood(int harvestLevel, int burnTime)
```

Adds a `WoodProperty` to this Material, which makes the material flammable and removes a few fluid pipe sizes if it has the fluid pipe property. It automatically adds a `DustProperty`.

* `harvestLevel` - The Harvest Level of the Material's block when mining it. If the Material also has
  a `ToolProperty`, this value will also be used to determine the tool's Mining Level.
* `burnTime` - The Burn Time (in ticks) of this Material as a Furnace Fuel. If not specified, the material *
  _cannot_* be used as a furnace fuel.

### Color
```groovy:no-line-numbers
color(int color)
```

Set the Color of this Material. Defaults to 0xFFFFFF unless `colorAverage()` is used. Colors can be supplied in either
of the following formats: the integer value, such as `16777215` or as `0xFFFFFF`. This is RGB, with no alpha channel.
You can use a [Color picker](https://g.co/kgs/Q6x5Jzq) to find the desired color value. Note that the resulting color might look slightly different since its applied on top of textures.

* `color` - The RGB color to use for the Material.

```groovy:no-line-numbers
colorAverage()
```

The Material's Color will be a weighted average of all of the Components' colors in the Material.

### Rotor stats
```groovy:no-line-numbers
rotorStats(float speed, float damage, int durability)
```

Set the stats for turbine rotors which are made from this Material. Speed and Damage are used according to a formula,
and do not reflect those two user-facing properties directly.

* `speed` - Speed of the rotor.
* `damage` - Damage of the rotor.
* `durability` - Durability of the rotor.

### Blast temperature
```groovy:no-line-numbers
blastTemp(int temp)
blastTemp(int temp, String gasTier)
blastTemp(int temp, String gasTier, int eutOverride)
blastTemp(int temp, String gasTier, int eutOverride, int durationOverride)
blastTemp(int temp, String gasTier, int eutOverride, int durationOverride, int vacuumEUtOverride, int vacuumDurationOverride)
```

Sets the Blast Furnace Temperature of this Material. If below 1000 Kelvin, Primitive Blast Furnace recipes will be also
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

### Washed in material
```groovy:no-line-numbers
washedIn(Material material)
washedIn(Material material, int washedAmount)
```

Sets what the material's crushed ore is washed in using the Chemical Bath. Requires `OreProperty` to be set.

* `material` - The Material in which this material is to be washed. The parameter's Material requires `FluidProperty` to
  be set.
* `washedAmount` - The amount of fluid the crushed ore will be washed in. Default: 100mB.

### Separates into materials
```groovy:no-line-numbers
separatedInto(Material... materials)
```

Sets the products of processing this Material's Purified Dust in an Electromagnetic Separator. Requires `OreProperty` to
be set.

* `materials` - An array of materials which is output in the magnetic separator. This already includes the Material
  itself automatically.

### Ore Byproducts
```groovy:no-line-numbers
addOreByproducts(Material... materials)
```

Sets the Ore Byproducts of this Material. Requires `OreProperty` to be set.

* `materials` - An array of materials which are used for various ore processing byproduct outputs.

### Smelts into material
```groovy:no-line-numbers
oreSmeltInto(Material material)
```

Sets the Direct Smelting product in a vanilla furnace of this Material's ore related forms. Requires `OreProperty` to be
set.

* `material` - The material to output in the furnace. Can have `IngotProperty`, `GemProperty`, or `DustProperty`.

### Polarizes into material
```groovy:no-line-numbers
polarizesInto(Material material)
```

Sets the Polarizer product of this Material. Requires `IngotProperty` to be set.

* `material` - The material to output when polarized.

### Arc smelts into material
```groovy:no-line-numbers
arcSmeltInto(Material material)
```

Sets the Arc Furnace product of this Material. Requires `IngotProperty` to be set.

* `material` - The material to output when arc furnaced. By default, the material will output itself.

### Macerates into material
```groovy:no-line-numbers
macerateInto(Material material)
```

Sets the Macerator product of this Material. Requires `IngotProperty` to be set.

* `material` - The material to output when macerated. By default, the material will output itself.

### Cable properties
```groovy:no-line-numbers
cableProperties(long voltage, int amperage, int loss)
cableProperties(long voltage, int amperage, int loss, boolean isSuperCon)
cableProperties(long voltage, int amperage, int loss, boolean isSuperCon, int criticalTemperature)
```

Adds cables and wires of this Material. Requires `IngotProperty` to be set.

* `voltage` - The voltage amount a 1x wire/cable can transfer.
* `amperage` - The amperage amount a 1x wire/cable can handle.
* `loss` - The loss per block a 1x **wire** will have. Cables have this value divided by 2, but will never be lossless
  unless set to `0`.
* `isSuperCon` - Whether this is a superconductor. This will prevent cables from generating, and have a loss
  of `0`.
* `criticalTemperature` - The temperature of the superconductive phase transition. Cable needs to be a super conductor. (Effect unclear)

### Fluid pipe properties
```groovy:no-line-numbers
fluidPipeProperties(int maxTemp, int throughput, boolean gasProof)
fluidPipeProperties(int maxTemp, int throughput, boolean gasProof, boolean acidProof, boolean cryoProof, boolean plasmaProof)
```

Adds Fluid Pipes of this Material. Requires `IngotProperty` to be set.

* `maxTemp` - Sets the maximum allowed fluid temperature in the pipe. Pipes burn/vanish when fluid is too hot.
* `throughput` - Sets the maximum flowrate through the pipes. This value multiplied by `20` is the maximum rate for the
  Tiny Pipe. Each subsequent pipe is further multiplied by `2` over the previous.
* `gasProof` - If `true`, the pipe is able to transfer fluids with the Gas state. Else, they will vaporize.
* `acidProof` - If `true`, the pipe is able to transfer fluids with the Acidic attribute. Else, they will destroy the
  pipe.
* `cryoProof` - If `true`, the pipe is able to transfer fluids with a temperature below 120. Else, they will vaporize.
* `plasmaProof` - If `true`, the pipe is able to transfer fluids with the Plasma state, regardless of the fluid pipe's
  maximum temperature. Else, they will destroy the pipe.

### Item pipe properties
```groovy:no-line-numbers
itemPipeProperties(int priority, float stacksPerSec)
```

Adds item pipes of this Material. Requires `IngotProperty` to be set.

* `priority` - Sets the priority for the pipe. Items will take the path with the lowest priority. This value is used for
  the Normal Pipe. The Small Pipe has this value multiplied by `1.5`, and the Large Pipe has this value multiplied
  by `0.75`.
* `stacksPerSec` - Sets the maximum transfer rate in stacks of 64 items per second. This value is used for the Normal
  Pipe. Small Pipes have this value multiplied by `0.5`. Large Pipes have this value multiplied by `2`.

### Tool stats
Tool stats are slightly more complicated than in CT, but also more configurable. <br>
```groovy:no-line-numbers
toolStats(float harvestSpeed, float attackDamage, int durability, int harvestLevel)
toolStats(ToolProperty toolProperty)
toolStats(ToolProperty.Builder toolPropertyBuilder)
```

Set the stats for tools which are made from this Material.

* `speed` - Mining Speed of the tools.
* `damage` - Attack Damage dealt by the tools.
* `durability` - Durability of the tools.
* `harvestLevel` - Harvest Level of the tools.

The first method is fairly self explanatory. For higher configurability use the second or third method like this.
```groovy
mods.gregtech.materialEvent {
    materialBuilder(32000, 'my_material')
        .toolStats(toolBuilder(float harvestSpeed, float attackDamage, int durability, int harvestLevel)
            .attackSpeed(float attackSpeed) // default 0
            .ignoreCraftingTools() // removes crafting tools like hammer, saw and wrench (default false)
            .unbreakable() // makes the tools unbreakable (default false)
            .enchantment(Enchantment enchantment, int level) // Default enchantment every tool of this material has (default none)
            .magnetic() // Blocks mined with a tool of this materials go straight into the player inventory (default false)
            .durabilityMultiplier(int multiplier) // multiplier for the base durability (default 1)
        )
        .build()
}
```

The `toolBuilder()` method is only available inside the event. All method calls on the tool builder (`attackSpeed()`, `ignoreCraftingTools()`, etc) are optional. In a java environment you would also have to call `.build()` on the tool builder, but this is not required with groovy.

## Fluid builder
To create a fluid builder call `fluidBuilder()` inside the material event.
::: info Example {id="example"}
```groovy
mods.gregtech.materialEvent {
    materialBuilder(32000, 'my_material')
        .liquid(fluidBuilder())
        .build()
}
```
:::
Here are available methods to call on a fluid builder. All of them are optional.
* `name(String)` sets the registry name for the fluid. If a fluid with the name already exists, that fluid will be modified.
  In some cases this leads to an error. By default the name will be generated of the materials name. This is useful when oder mods
  already register the fluid, but with a different registry name.
* `translation(String)` sets the translation key for the fluid. Set the localized name in a lang file.
* `temperature(int)` sets the fluid temperature in Kelvin. By default a temperature is determined based on its properties.
* `color(int color)` sets the color of the fluid texture. This is only used if the fluid doesn't use a custom texture. 
  By default the material color is used.
* `disableColor()` disables the colored texture overlay
* `density(int)` sets the fluids density in Minecraft's units (default depends on the fluid state)
* `density(double)` sets the fluids density in g/cm^3 (default depends on the fluid state)
* `luminosity(int)` sets the luminosity of the fluid. This must be a value from 0 to 15. It's the light value the fluid block will emit.
* `viscosity(int)` sets the fluids viscosity in Minecraft's units (default depends on the fluid state)
* `viscosity(double)` sets the fluids viscosity in Poise (default depends on the fluid state)
* `attribute(FluidAttribute)` adds the fluid attribute (currently only acid attribute exists)
* `attributes(FluidAttribute...)` adds the fluid attributes (currently only acid attribute exists)
* `acidic()` adds the acidic attribute
* `alternativeName(String)` specifies an alternative name for when no fluid with the name was found. (No default)
* `customStill()` marks this fluid as having a custom still texture. Also disables color texture overlay.
* `customFlow()` marks this fluid as having a custom flowing texture. Also disables color texture overlay.
* `textures(boolean hasCustomStill, boolean hasCustomFlowing)` marks this fluid as having custom textures depending on the parameters. Also disables color texture overlay.
* `block()` marks this fluid to generate a fluid block which can be placed with a bucket.
* `disableBucket()` disables the auto generation of the forge fluid bucket

::: info Example {id="example"}
This an example what the helium material in groovy would look like as a helper on how to use the fluid builder.
```groovy
mods.gregtech.materialEvent {
    materialBuilder(46, resource('gregtech', 'helium'))
        .gas(fluidBuilder().customStill())
        .plasma(fluidBuilder().customStill())
        .liquid(fluidBuilder()
            .temperature(4)
            .color(0xFCFF90)
            .name('liquid_helium')
            .translation('gregtech.fluid.liquid_generic'))
        .color(0xFCFC94)
        .element()
        .build()
}
```
:::

<br>
<br>

::: info Example {id="example"}
This is example of a material using everything mentioned so far.
```groovy
mods.gregtech.materialEvent {
    def specialSteel = materialBuilder(32002, "special_steel") // name
            .gas() // gas
            .ingot() // has ingot (and therefore dust)
            .color(0x0000FF) // pure blue
            .toolStats(toolBuilder(10, 3, 256, 21)) // tool stats
            .blastTemp(2900) // EBF temperature
            .ore() // has ore blocks
            .addOreByproducts(material('gold'), material('copper')) // add byproducts
            .cableProperties(128, 2, 4, false) // add cables
            .build() // build the actual material
}
```
:::


## Changing Material Appearances

You may have noticed from testing the above example that the material's textures looks like the same style as many
others. This is called the `MaterialIconSet`. This entire next section is dedicated to explaining this system and how to
use it.

Available **MaterialIconsets** and existing material examples which use them.

::: details MaterialIconset {id="tip"}

| MaterialIconset    | Example         |
|--------------------|-----------------|
| `"DULL"`           | Aluminium       |
| `"METALLIC"`       | Steel           |
| `"MAGNETIC"`       | Magnetic Steel  |
| `"SHINY"`          | Copper          |
| `"BRIGHT"`         | Annealed Copper |
| `"DIAMOND"`        | Apatite         |
| `"EMERALD"`        | Cinnabar        |
| `"GEM_HORIZONTAL"` | Blue Topaz      |
| `"GEM_VERTICAL"`   | Sapphire        |
| `"RUBY"`           | Ruby            |
| `"OPAL"`           | Opal            |
| `"GLASS"`          | Glass           |
| `"NETHERSTAR"`     | Nether Star     |
| `"FINE"`           | Rock Salt       |
| `"SAND"`           | Glauconite Sand |
| `"WOOD"`           | Wood            |
| `"ROUGH"`          | Pyrite          |
| `"FLINT"`          | Flint           |
| `"LIGNITE"`        | Coal Coke       |
| `"QUARTZ"`         | Quartzite       |
| `"CERTUS"`         | Certus Quartz   |
| `"LAPIS"`          | Lazurite        |
| `"FLUID"`          | Nitric Acid     |

:::

For example, the following image shows the appearance of ores with different MaterialIconSets.
![](https://user-images.githubusercontent.com/18493855/143435701-058dcfea-ea35-4976-a7ba-7901fa791e36.png)

The MaterialIconSet of a material, which determines all of its textures, is set with a single method.
```groovy:no-line-numbers
iconSet(String iconSet)
```

Sets the `MaterialIconSet` of this Material. Defaults vary depending on if the Material has:

* `GemProperty` - defaults to `"GEM_VERTICAL"`
* `IngotProperty` or `DustProperty` - defaults to `"DULL"`
* `FluidProperty` - defaults to either `"FLUID"` or `"GAS"`, depending on the `FluidType`
* `PlasmaProperty` - defaults to `"FLUID"`, but will receive a special plasma texture regardless.

The default will be determined by the property found first in this order.

::: info Example with a MaterialIconSet {id="example"}
This is example of a material using everything mentioned so far.
```groovy
mods.gregtech.materialEvent {
    def specialSteel = materialBuilder(32003, "special_steel_textured") // name
            .gas() // gas
            .ingot() // has ingot (and therefore dust)
            .color(0x0000FF) // pure blue
            .iconSet("shiny") // iconset to the shiny type
            .toolStats(toolBuilder(10, 3, 256, 21)) // tool stats
            .blastTemp(2900) // EBF temperature
            .ore() // has ore blocks
            .addOreByproducts(material('gold'), material('copper')) // add byproducts
            .cableProperties(128, 2, 4, false) // add cables
            .build() // build the actual material
}
```
:::

## Components

**Components** refers to composition of the Material.

For example, the components of TungstenSteel is `1 Tungsten (W)` and `1 Steel (Fe)`. That makes its chemical formula:
![Screenshot_20211213_191326](https://user-images.githubusercontent.com/37029404/145909670-cfd0e024-ed32-4f4d-9c72-aee5c2e3b064.png)

### MaterialStack

Components are determined using something called a `MaterialStack`. This is the Material version of an ItemStack which
is an Item with a Count. In our case, MaterialStack is a Material with a Count.

```groovy:no-line-numbers
// creates a MaterialStack of Material Tin with a Count of 3.
def my_material_stack = material('tin') * 3
```

### Setting the Components

```groovy:no-line-numbers
components(Object... components)
```

Sets the components of the material.

* `components` - an array of `Objects` where each element must be a `Material` (for amount 1) or a `MaterialStack` (with any amount). These represent the components of the material.

::: info Example {id="example"}
Material with the components 3x Silver, 6x Nitrogen and 1x Carbon
```groovy
mods.gregtech.materialEvent {
    def specialSteel = materialBuilder(32004, "cursed_chemistry_material") // name
            .fluid()
            .color(0x00FF00) // pure red
            .components(material('silver') * 3, material('nitrogen') * 6, material('carbon')) // set the components
            .build() // build the actual material
}
```
:::


## Material Flags

`MaterialFlags` refers to additional mini-attributes about the material. There are a ton of them.

Available MaterialFlags for Every Material:

* `"no_unification"`: Add to material to disable it's unification fully (this means no autogenerated recipes).
* `"decomposition_requires_hydrogen"`: Decomposition recipe requires hydrogen as additional input. Amount is equal to
  input amount. Sets the electrolyzer voltage to EV.
* `"decomposition_by_electrolyzing"`: Enables electrolyzer decomposition recipe generation.
* `"decomposition_by_centrifuging"`: Enables centrifuge decomposition recipe generation.
* `"disable_decomposition"`: Disables decomposition recipe generation for this material and all materials that has it as
  component.
* `"explosive"`: Add to material if it is some kind of explosive.
* `"flammable"`: Add to material if it is some kind of flammable.
* `"generate_plate"`:

Available MaterialFlags for Materials with `DustProperty`:

* `"generate_plate"`: Generate a plate for this material. If it only has a `DustProperty`, a dust compressor recipe will
  be added. If it has an `IngotProperty`, bending machine recipes will be added. If a block is found, cutting machine
  recipes will be generated.
* `"generate_rod"`: Generate a rod for this material.
* `"generate_frame"`: Generate a frame for this material. Requires `"generate_rod"`.
* `"generate_gear"`: Generate a gear for this material. Requires `"generate_plate"` and `"generate_rod"`.
* `"generate_long_rod"`: Generate a long rod for this material. Requires `"generate_rod"`.
* `"exclude_block_crafting_recipes"`: Prevent creating shapeless recipes for dust to block and vice versa. Prevents
  extruding and alloy smelting via the Block Shape/Mold.
* `"exclude_plate_compressor_recipe"`: Prevent creating plates in the compressor from dust. Requires `"generate_plate"`.
* `"exclude_block_crafting_by_hand_recipes"`: Prevent creating shapeless recipes for dust to block and vice versa.
* `"mortar_grindable"`: All the material to be ground into dust when crafting with a mortar.

Available MaterialFlags for Materials with `IngotProperty`:

* `"no_working"`: Add if it cannot be worked by any means other than smashing or smelting. This is used for coated
  Materials.
* `"no_smashing"`: Add to material if it cannot be used for regular Metal working techniques since it is not possible to
  bend it.
* `"no_smelting"`: Add to material if it's impossible to smelt it.
* `"blast_furnace_calcite_double"`: Add this to your Material if you want to have its Ore Calcite heated in a Blast
  Furnace for 2x output.
* `"blast_furnace_calcite_triple"`: Add this to your Material if you want to have its Ore Calcite heated in a Blast
  Furnace for 3x output.
* `"generate_foil"`: Generate a foil for this material. Requires `"generate_plate"`.
* `"generate_bolt_screw"`: Generate a bolt and screw for this material. Requires `"generate_rod"`.
* `"generate_ring"`: Generate a ring for this material. Requires `"generate_rod"`.
* `"generate_spring"`: Generate a spring for this material. Requires `"generate_long_rod"`.
* `"generate_spring_small"`: Generate a small spring for this material. Requires `"generate_rod"`.
* `"generate_small_gear"`: Generate a small gear for this material. Requires `"generate_plate"` and `"generate_rod"`.
* `"generate_fine_wire"`: Generate a fine wire for this material. Requires `"generate_foil"`.
* `"generate_rotor"`: Generate a rotor for this material. Requires `"generate_bolt_screw"`, `"generate_ring"`,
  and `"generate_plate"`.
* `"generate_dense"`: Generate a dense plate for this material. Requires `"generate_plate"`.
* `"generate_round"`: Generate a dense plate for this material.

Available MaterialFlags for Materials with `GemProperty`:

* `"crystallizable"`: If this material can be crystallized in an autoclave.
* `"generate_lens"`: Generate a lens for this material. Requires `"generate_plate"`.

Available MaterialFlags for Materials with `OreProperty`:

* `"high_sifter_output"`: If this material has a higher output when the Crushed Purified Ore is processed in the Sifter.

### Adding Flags to a Material

```groovy:no-line-numbers
flags(String... names)
```

Add MaterialFlags to this Material.

* `names` - a string array of the names of specific MaterialFlags.

::: info Example {id="example"}

```groovy
mods.gregtech.materialEvent {
    def specialSteel = materialBuilder(32004, "special_steel_flagged") // name
            .gas() // gas
            .ingot() // has ingot (and therefore dust)
            .color(0x0000FF) // pure blue
            .iconSet("shiny") // iconset to the shiny type
            .flags("generate_plate", "generate_foil") // add flags
            .toolStats(toolBuilder(10, 3, 256, 21)) // tool stats
            .blastTemp(2900) // EBF temperature
            .ore() // has ore blocks
            .addOreByproducts(material('gold'), material('copper')) // add byproducts
            .cableProperties(128, 2, 4, false) // add cables
            .build() // build the actual material
}
```
:::


## Elements

`Element` is used to specify a material as element. CEu has the periodic table, so you probably won't need it much.

### Creating an Element

```groovy:no-line-numbers
addElement(long protons, long neutrons, long halfLifeSeconds, String decayTo, String name, String symbol, boolean isIsotope)
```
This method can only by called inside the material event. Otherwise use 

* `protons` - Amount of Protons
* `neutrons` - Amount of Neutrons
* `halfLifeSeconds` - Amount of Half Life this Material has in Seconds. `-1` for stable Materials
* `decayTo` - String representing the Elements it decays to. Separated by an '&' character
* `name` - Name of the Element
* `symbol` - Symbol of the Element

### Obtaining an element
```groovy:no-line-numbers
`element(String nameOrSymbol)`
```

This is a global function whichs parameter can be either an elements name or symbol.

::: details Elements {id="tip"}

 protons | netrons | halfLifeSeconds | decayTo | name               | symbol   | isIsotope
---------|---------|-----------------|---------|--------------------|----------|-----------
 1       | 0       | -1              | null    | "Hydrogen"         | "H"      | false
 1       | 1       | -1              | "H"     | "Deuterium"        | "D"      | true
 1       | 2       | -1              | "D"     | "Tritium"          | "T"      | true
 2       | 2       | -1              | null    | "Helium"           | "He"     | false
 2       | 1       | -1              | "H&D"   | "Helium-3"         | "He-3"   | true
 3       | 4       | -1              | null    | "Lithium"          | "Li"     | false
 4       | 5       | -1              | null    | "Beryllium"        | "Be"     | false
 5       | 5       | -1              | null    | "Boron"            | "B"      | false
 6       | 6       | -1              | null    | "Carbon"           | "C"      | false
 7       | 7       | -1              | null    | "Nitrogen"         | "N"      | false
 8       | 8       | -1              | null    | "Oxygen"           | "O"      | false
 9       | 9       | -1              | null    | "Fluorine"         | "F"      | false
 10      | 10      | -1              | null    | "Neon"             | "Ne"     | false
 11      | 11      | -1              | null    | "Sodium"           | "Na"     | false
 12      | 12      | -1              | null    | "Magnesium"        | "Mg"     | false
 13      | 13      | -1              | null    | "Aluminium"        | "Al"     | false
 14      | 14      | -1              | null    | "Silicon"          | "Si"     | false
 15      | 15      | -1              | null    | "Phosphorus"       | "P"      | false
 16      | 16      | -1              | null    | "Sulfur"           | "S"      | false
 17      | 18      | -1              | null    | "Chlorine"         | "Cl"     | false
 18      | 22      | -1              | null    | "Argon"            | "Ar"     | false
 19      | 20      | -1              | null    | "Potassium"        | "K"      | false
 20      | 20      | -1              | null    | "Calcium"          | "Ca"     | false
 21      | 24      | -1              | null    | "Scandium"         | "Sc"     | false
 22      | 26      | -1              | null    | "Titanium"         | "Ti"     | false
 23      | 28      | -1              | null    | "Vanadium"         | "V"      | false
 24      | 28      | -1              | null    | "Chrome"           | "Cr"     | false
 25      | 30      | -1              | null    | "Manganese"        | "Mn"     | false
 26      | 30      | -1              | null    | "Iron"             | "Fe"     | false
 27      | 32      | -1              | null    | "Cobalt"           | "Co"     | false
 28      | 30      | -1              | null    | "Nickel"           | "Ni"     | false
 29      | 34      | -1              | null    | "Copper"           | "Cu"     | false
 30      | 35      | -1              | null    | "Zinc"             | "Zn"     | false
 31      | 39      | -1              | null    | "Gallium"          | "Ga"     | false
 32      | 40      | -1              | null    | "Germanium"        | "Ge"     | false
 33      | 42      | -1              | null    | "Arsenic"          | "As"     | false
 34      | 45      | -1              | null    | "Selenium"         | "Se"     | false
 35      | 45      | -1              | null    | "Bromine"          | "Br"     | false
 36      | 48      | -1              | null    | "Krypton"          | "Kr"     | false
 37      | 48      | -1              | null    | "Rubidium"         | "Rb"     | false
 38      | 49      | -1              | null    | "Strontium"        | "Sr"     | false
 39      | 50      | -1              | null    | "Yttrium"          | "Y"      | false
 40      | 51      | -1              | null    | "Zirconium"        | "Zr"     | false
 41      | 53      | -1              | null    | "Niobium"          | "Nb"     | false
 42      | 53      | -1              | null    | "Molybdenum"       | "Mo"     | false
 43      | 55      | -1              | null    | "Technetium"       | "Tc"     | false
 44      | 57      | -1              | null    | "Ruthenium"        | "Ru"     | false
 45      | 58      | -1              | null    | "Rhodium"          | "Rh"     | false
 46      | 60      | -1              | null    | "Palladium"        | "Pd"     | false
 47      | 60      | -1              | null    | "Silver"           | "Ag"     | false
 48      | 64      | -1              | null    | "Cadmium"          | "Cd"     | false
 49      | 65      | -1              | null    | "Indium"           | "In"     | false
 50      | 68      | -1              | null    | "Tin"              | "Sn"     | false
 51      | 70      | -1              | null    | "Antimony"         | "Sb"     | false
 52      | 75      | -1              | null    | "Tellurium"        | "Te"     | false
 53      | 74      | -1              | null    | "Iodine"           | "I"      | false
 54      | 77      | -1              | null    | "Xenon"            | "Xe"     | false
 55      | 77      | -1              | null    | "Caesium"          | "Cs"     | false
 56      | 81      | -1              | null    | "Barium"           | "Ba"     | false
 57      | 81      | -1              | null    | "Lanthanum"        | "La"     | false
 58      | 82      | -1              | null    | "Cerium"           | "Ce"     | false
 59      | 81      | -1              | null    | "Praseodymium"     | "Pr"     | false
 60      | 84      | -1              | null    | "Neodymium"        | "Nd"     | false
 61      | 83      | -1              | null    | "Promethium"       | "Pm"     | false
 62      | 88      | -1              | null    | "Samarium"         | "Sm"     | false
 63      | 88      | -1              | null    | "Europium"         | "Eu"     | false
 64      | 93      | -1              | null    | "Gadolinium"       | "Gd"     | false
 65      | 93      | -1              | null    | "Terbium"          | "Tb"     | false
 66      | 96      | -1              | null    | "Dysprosium"       | "Dy"     | false
 67      | 97      | -1              | null    | "Holmium"          | "Ho"     | false
 68      | 99      | -1              | null    | "Erbium"           | "Er"     | false
 69      | 99      | -1              | null    | "Thulium"          | "Tm"     | false
 70      | 103     | -1              | null    | "Ytterbium"        | "Yb"     | false
 71      | 103     | -1              | null    | "Lutetium"         | "Lu"     | false
 72      | 106     | -1              | null    | "Hafnium"          | "Hf"     | false
 73      | 107     | -1              | null    | "Tantalum"         | "Ta"     | false
 74      | 109     | -1              | null    | "Tungsten"         | "W"      | false
 75      | 111     | -1              | null    | "Rhenium"          | "Re"     | false
 76      | 114     | -1              | null    | "Osmium"           | "Os"     | false
 77      | 115     | -1              | null    | "Iridium"          | "Ir"     | false
 78      | 117     | -1              | null    | "Platinum"         | "Pt"     | false
 79      | 117     | -1              | null    | "Gold"             | "Au"     | false
 80      | 120     | -1              | null    | "Mercury"          | "Hg"     | false
 81      | 123     | -1              | null    | "Thallium"         | "Tl"     | false
 82      | 125     | -1              | null    | "Lead"             | "Pb"     | false
 83      | 125     | -1              | null    | "Bismuth"          | "Bi"     | false
 84      | 124     | -1              | null    | "Polonium"         | "Po"     | false
 85      | 124     | -1              | null    | "Astatine"         | "At"     | false
 86      | 134     | -1              | null    | "Radon"            | "Rn"     | false
 87      | 134     | -1              | null    | "Francium"         | "Fr"     | false
 88      | 136     | -1              | null    | "Radium"           | "Ra"     | false
 89      | 136     | -1              | null    | "Actinium"         | "Ac"     | false
 90      | 140     | -1              | null    | "Thorium"          | "Th"     | false
 91      | 138     | -1              | null    | "Protactinium"     | "Pa"     | false
 92      | 146     | -1              | null    | "Uranium"          | "U"      | false
 92      | 146     | -1              | null    | "Uranium-238"      | "U-238"  | false
 92      | 143     | -1              | null    | "Uranium-235"      | "U-235"  | true
 93      | 144     | -1              | null    | "Neptunium"        | "Np"     | false
 94      | 152     | -1              | null    | "Plutonium"        | "Pu"     | false
 94      | 145     | -1              | null    | "Plutonium-239"    | "Pu-239" | false
 94      | 149     | -1              | null    | "Plutonium-241"    | "Pu-241" | true
 95      | 150     | -1              | null    | "Americium"        | "Am"     | false
 96      | 153     | -1              | null    | "Curium"           | "Cm"     | false
 97      | 152     | -1              | null    | "Berkelium"        | "Bk"     | false
 98      | 153     | -1              | null    | "Californium"      | "Cf"     | false
 99      | 153     | -1              | null    | "Einsteinium"      | "Es"     | false
 100     | 157     | -1              | null    | "Fermium"          | "Fm"     | false
 101     | 157     | -1              | null    | "Mendelevium"      | "Md"     | false
 102     | 157     | -1              | null    | "Nobelium"         | "No"     | false
 103     | 159     | -1              | null    | "Lawrencium"       | "Lr"     | false
 104     | 161     | -1              | null    | "Rutherfordium"    | "Rf"     | false
 105     | 163     | -1              | null    | "Dubnium"          | "Db"     | false
 106     | 165     | -1              | null    | "Seaborgium"       | "Sg"     | false
 107     | 163     | -1              | null    | "Bohrium"          | "Bh"     | false
 108     | 169     | -1              | null    | "Hassium"          | "Hs"     | false
 109     | 167     | -1              | null    | "Meitnerium"       | "Mt"     | false
 110     | 171     | -1              | null    | "Darmstadtium"     | "Ds"     | false
 111     | 169     | -1              | null    | "Roentgenium"      | "Rg"     | false
 112     | 173     | -1              | null    | "Copernicium"      | "Cn"     | false
 113     | 171     | -1              | null    | "Nihonium"         | "Nh"     | false
 114     | 175     | -1              | null    | "Flerovium"        | "Fl"     | false
 115     | 173     | -1              | null    | "Moscovium"        | "Mc"     | false
 116     | 177     | -1              | null    | "Livermorium"      | "Lv"     | false
 117     | 177     | -1              | null    | "Tennessine"       | "Ts"     | false
 118     | 176     | -1              | null    | "Oganesson"        | "Og"     | false
 119     | 178     | -1              | null    | "Tritanium"        | "Tr"     | false
 120     | 180     | -1              | null    | "Duranium"         | "Dr"     | false
 125     | 198     | -1              | null    | "Trinium"          | "Ke"     | false
 174     | 352     | 140             | null    | "Naquadah"         | "Nq"     | true
 174     | 354     | 140             | null    | "NaquadahEnriched" | "Nq+"    | true
 174     | 348     | 140             | null    | "Naquadria"        | "Nq"     | true
 0       | 1000    | -1              | null    | "Neutronium"       | "Nt"     | false
 750     | 1000    | -1              | null    | "Adamantium"       | "Ad"     | false
 850     | 900     | -1              | null    | "Vibranium"        | "Vb"     | false
 550     | 670     | -1              | null    | "Taranium"         | "Tn"     | false

:::

::: details Elemental Material Example {open id="example"}

```groovy
mods.gregtech.materialEvent {
    // elements can be created outside the event
    def CEu = addElement(999, 999, -1, null, "GTCEu", "CEu", false) // create a new element.
    def element_material = materialBuilder(32006, "element_material").element("GTCEu").build()

    def Au = element("Gold") // get an existing element.

    def element_material = materialBuilder(32007, "element_material").element("Gold").build()
}
```
:::

<br>

## Examples
::: details Material Creation Full Examples {open id="example"}
```groovy
mods.gregtech.materialEvent {

    materialBuilder(32000, "red_iron")
            .ingot().liquid()
            .color(0xF7B29B)
            .flags("generate_plate", "generate_rod", "generate_gear", "decomposition_by_centrifuging")
            .components(material('iron') * 1, material('redstone') * 1)
            .cableProperties(32, 2, 1)
            .build()

    materialBuilder(32001, "glowing_redstone")
            .dust()
            .color(0x774D05).iconSet("bright")
            .flags(["decomposition_by_centrifuging"])
            .components([material('glowstone') * 1, material('redstone') * 1])
            .build()

    materialBuilder(32002, "rare_iron")
            .ingot().liquid()
            .color(0x6AE26E).iconSet("bright")
            .flags("generate_plate", "generate_rod", "generate_gear", "disable_decomposition")
            .components(material('iron') * 1, material('rare_earth') * 1)
            .cableProperties(8, 2, 1)
            .build()

    materialBuilder(32003, "obsidian_steel")
            .ingot().liquid()
            .color(0x414751).iconSet("metallic")
            .flags("generate_plate", "generate_rod", "disable_decomposition")
            .components(material('steel') * 1, material('obsidian') * 1)
            .build()

    materialBuilder(32004, "silicon_steel")
            .ingot().liquid()
            .color(0xB2C0C1).iconSet("shiny")
            .flags("generate_plate", "generate_rod", "generate_gear", "decomposition_by_centrifuging")
            .components(material('steel') * 1, material('silicon') * 1)
            .build()

    materialBuilder(32005, "rare_gold")
            .ingot().liquid()
            .color(0x755C40)
            .flags("generate_plate", "disable_decomposition")
            .components(material('gold') * 1, material('rare_earth') * 1)
            .build()
}
```

:::