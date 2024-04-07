---
title: Basics
---

# Materials

First of all, the best docs is the source
itself: [Source](https://github.com/GregTechCEu/GregTech/blob/master/src/main/java/gregtech/api/unification/material/Material.java)

::: info {id="info"}
This docs goes of GroovyScript version 0.4.0 and GTCEu 2.5.4
:::

## What is Material

Material is the basis of CEu. It defines a substance and its properties. It usually takes the form of an **element** (
i.e. Oxygen) or a **compound** (i.e. Water), but it can also take the form of something weird like the **Eye of Ender**.

### Which Properties are defined?

The **Material** specifies whether it has a **Fluid** property, **plasma** property, **dust** property, **gem** property
or **ingot** property. When it has a specific property, GTCEu will register the corresponding item or fluid
automatically. Some properties will require others, like **Ingot** requiring **Dust**.

### What else does it define?

You can additionally define **Colors**, **Flags** (indicators for specific attributes), **MaterialIconSet** (textures),
**CableProperties**, **Element**, **Formula** (tooltips), **Components** and more. Don't worry, they are not
complicated, and will be introduced in detail below.

***

## Retrieving Existing Materials

There are two good ways to do this: the simple way and the not simple way.

### The Simple Way

This method requires the Material to first exist. This method goes off of the material's **Unlocalized Name**, which is
the name used before it is translated in a lang file. You can use the `/grs hand` command to retrieve the material of
items.

```groovy
// assigns the variable my_material to a Material called Steel.
def my_material = material('steel')
```
This is a global function.

### The Not Simple Way

This method also works exactly the same as before, but the former is much easier and more convenient. It is **strongly**
recommended to use the **Simple Way**.

```groovy
// import the Material class to use Materials
import gregtech.api.unification.material.Materials

// assigns the variable my_material to a Material called Steel.
var my_material = Materials.Steel
```
***

## Getting Material Properties

**Getters:**

* `chemicalFormula` returns a string representation of the internal chemical formula (i.e. "H2O")

* `materialRGB` returns the in color of the material

* `radioactive` returns whether the material is radioactive

* `protons` returns the number of protons in the material

* `neutrons` returns the number of neutrons in the material

* `mass` returns the total amount of mass in the material

* `averageProtons` returns the amount of protons divided by total amount of components in the material

* `averageNeutrons` returns the amount of neutrons divided by total amount of components in the material

* `averageMass` returns the amount of mass divided by total amount of components in the material

* `blastTemperature` returns the material's blast furnace temperature

* `toCamelCaseString()` returns the string camelCase form of the material's unlocalized name. I.e. a name of "my_material" returns "
  myMaterial"

* `unlocalizedName` returns the string of the material's unlocalized name

* `localizedName` returns the string of the material's localized (translated) name

* `name` returns toString() used on the material internally

### Checking if properties exist
* `hasDust()` returns if the material has the dust property
* `hasIngot()` returns if the material has the ingot property
* `hasGem()` returns if the material has the gem property
* `hasOre()` returns if the material has the ore property
* `hasFluid()` returns if the material has the fluid property (this is true when the material has a liquid, gas OR plasma)
* `hasBlastTemp()` returns if the material has the blast property
* `hasTools()` returns if the material has the tool property
* `hasFluidPipes()` returns if the material has the fluid pipe property
* `hasItemPipes()` returns if the material has the item pipe property
* `hasWires()` returns if the material has the cable property
* `hasProperty(PropertyKey key)` returns if the material has the property of the key

## Creating Materials

See [Creating Materials](material_creating.md)

## Modifying Materials

See [Modifying Materials](material_modifying.md)
