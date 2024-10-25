---
title: "Crafting Table"
titleTemplate: "Minecraft | CleanroomMC"
description: "A normal crafting recipe that takes place in the Vanilla Crafting Table, converting up to 9 items in a shapeless or specific shaped arrangement into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Crafting.java"
---

# Crafting Table (Minecraft)

## Description

A normal crafting recipe that takes place in the Vanilla Crafting Table, converting up to 9 items in a shapeless or specific shaped arrangement into an output itemstack.

:::::::::: details Tip {open id="tip"}
While shorthand methods to create recipes have been supplied, it is far easier to use the recipe builder.
::::::::::

:::::::::: details Tip {open id="tip"}
You can view recipe names in JEI/HEI by hovering over the output with `F3+h` mode enabled.
::::::::::

:::::::::: details Note {open id="note"}
Fallback keys are global and apply to all classes using the matrix feature of `AbstractCraftingRecipeBuilder`.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
crafting/* Used as page default */ // [!code focus]
Crafting
```


## Editing Values

- Set the fallback character for matrices. This fallback is used when the recipe is created via matrix and the given key is not included as a key in the specific recipe builder:

    ```groovy:no-line-numbers
    crafting.setFallback(char, IIngredient)
    ```

- Set the fallback character for matrices. This fallback is used when the recipe is created via matrix and the given key is not included as a key in the specific recipe builder:

    ```groovy:no-line-numbers
    crafting.setFallback(String, IIngredient)
    ```


## Adding Recipes

- Adds a shaped recipe in the format `output`, `input`:

    ```groovy:no-line-numbers
    crafting.addShaped(ItemStack, List<List<IIngredient>>)
    ```

- Adds a shaped recipe in the format `name`, `output`, `input`:

    ```groovy:no-line-numbers
    crafting.addShaped(ResourceLocation, ItemStack, List<List<IIngredient>>)
    ```

- Adds a shaped recipe in the format `name`, `output`, `input`:

    ```groovy:no-line-numbers
    crafting.addShaped(String, ItemStack, List<List<IIngredient>>)
    ```

- Adds a shapeless in the format `output`, `input`:

    ```groovy:no-line-numbers
    crafting.addShapeless(ItemStack, List<IIngredient>)
    ```

- Adds a shapeless in the format `name`, `output`, `input`:

    ```groovy:no-line-numbers
    crafting.addShapeless(ResourceLocation, ItemStack, List<IIngredient>)
    ```

- Adds a shapeless in the format `name`, `output`, `input`:

    ```groovy:no-line-numbers
    crafting.addShapeless(String, ItemStack, List<IIngredient>)
    ```

- Adds a shaped in the format `output`, `input` and removes the recipe matching the given output:

    ```groovy:no-line-numbers
    crafting.replaceShaped(ItemStack, List<List<IIngredient>>)
    ```

- Adds a shaped in the format `name`, `output`, `input` and removes the recipe matching the given name:

    ```groovy:no-line-numbers
    crafting.replaceShaped(ResourceLocation, ItemStack, List<List<IIngredient>>)
    ```

- Adds a shaped in the format `name`, `output`, `input` and removes the recipe matching the given name:

    ```groovy:no-line-numbers
    crafting.replaceShaped(String, ItemStack, List<List<IIngredient>>)
    ```

- Adds a shapeless in the format `output`, `input` and removes the recipe matching the given output:

    ```groovy:no-line-numbers
    crafting.replaceShapeless(ItemStack, List<IIngredient>)
    ```

- Adds a shapeless in the format `name`, `output`, `input` and removes the recipe matching the given name:

    ```groovy:no-line-numbers
    crafting.replaceShapeless(ResourceLocation, ItemStack, List<IIngredient>)
    ```

- Adds a shapeless in the format `name`, `output`, `input` and removes the recipe matching the given name:

    ```groovy:no-line-numbers
    crafting.replaceShapeless(String, ItemStack, List<IIngredient>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
crafting.addShaped(item('minecraft:gold_block'), [[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],[null, null, null],[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')]])
crafting.addShaped(resource('example:resource_location'), item('minecraft:clay'), [[item('minecraft:cobblestone')],[item('minecraft:nether_star')],[item('minecraft:cobblestone')]])
crafting.addShaped('gold_v_to_clay', item('minecraft:clay'), [[item('minecraft:gold_ingot'),null,item('minecraft:gold_ingot')],[null,item('minecraft:gold_ingot'),null]])
crafting.addShapeless(item('minecraft:clay'), [item('minecraft:cobblestone'),item('minecraft:nether_star'),item('minecraft:gold_ingot')])
crafting.addShapeless(resource('example:resource_location2'), item('minecraft:clay'), [item('minecraft:cobblestone'), item('minecraft:gold_ingot')])
crafting.addShapeless('precious_to_clay', item('minecraft:clay'), [item('minecraft:diamond'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')])
crafting.replaceShaped(item('minecraft:chest'), [[ore('logWood'),ore('logWood'),ore('logWood')],[ore('logWood'),null,ore('logWood')],[ore('logWood'),ore('logWood'),ore('logWood')]])
crafting.replaceShaped(resource('minecraft:sea_lantern'), item('minecraft:clay'), [[item('minecraft:glowstone')],[item('minecraft:glowstone')],[item('minecraft:glowstone')]])
crafting.replaceShaped('gold_to_diamonds', item('minecraft:diamond') * 8, [[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],[item('minecraft:gold_ingot'),null,item('minecraft:gold_ingot')],[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')]])
crafting.replaceShapeless(item('minecraft:ender_eye'), [item('minecraft:ender_pearl'),item('minecraft:nether_star')])
crafting.replaceShapeless(resource('minecraft:pink_dye_from_peony'), item('minecraft:clay'), [item('minecraft:cobblestone'), item('minecraft:gold_ingot')])
crafting.replaceShapeless('minecraft:pink_dye_from_pink_tulp', item('minecraft:clay'), [item('minecraft:nether_star')])
```

::::::::::

### Recipe Builder

Just like other recipe types, the Crafting Table also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details crafting.shapedBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 9, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy:no-line-numbers
    shape(List<List<IIngredient>>)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy:no-line-numbers
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `byte`. Sets if the recipe is removed. The `replace` method removes by the output itemstack, and the `replaceByName` method removes by the Resource Location. (Default `0`).

    ```groovy:no-line-numbers
    replace()
    replaceByName()
    ```

- `boolean`. Sets if the recipe is horizontally mirrored. (Default `false`).

    ```groovy:no-line-numbers
    mirrored()
    mirrored(boolean)
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy:no-line-numbers
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy:no-line-numbers
    recipeAction(Closure<Void>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
crafting.shapedBuilder()
    .output(item('minecraft:nether_star'))
    .row('TXT')
    .row('X X')
    .row('!X!')
    .key('T', item('minecraft:tnt'))
    .key('X', item('minecraft:clay').reuse())
    .key('!', item('minecraft:tnt').transform({ _ -> item('minecraft:diamond') }))
    .register()

crafting.shapedBuilder()
    .output(item('minecraft:clay_ball') * 3)
    .shape('S S',
           ' G ',
           'SWS')
    .key([S: ore('netherStar').reuse(), G: ore('ingotGold'), W: fluid('water') * 1000])
    .register()

crafting.shapedBuilder()
    .name('nether_star_duplication_with_tnt')
    .output(item('minecraft:nether_star'))
    .row('!!!')
    .row('!S!')
    .row('!!!')
    .key([S: ore('netherStar').reuse(), '!': item('minecraft:tnt').transform(item('minecraft:diamond'))])
    .register()

crafting.shapedBuilder()
    .output(item('minecraft:clay'))
    .row(' B')
    .key('B', item('minecraft:glass_bottle'))
    .register()

crafting.shapedBuilder()
    .output(item('minecraft:clay'))
    .row('   ')
    .row(' 0 ')
    .row('   ')
    .key('0', item('minecraft:diamond_sword').withNbt([display:[Name:'Sword with Specific NBT data']]))
    .register()

crafting.shapedBuilder()
    .output(item('minecraft:gold_block'))
    .shape([[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],
           [null, null, null],
           [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')]])
    .register()

crafting.shapedBuilder()
    .name('gold_v_to_clay')
    .output(item('minecraft:clay'))
    .shape([[item('minecraft:gold_ingot'),null,item('minecraft:gold_ingot')],
           [null,item('minecraft:stone_pickaxe').transformDamage(2).whenAnyDamage(),null]])
    .register()

crafting.shapedBuilder()
    .name(resource('example:resource_location'))
    .output(item('minecraft:clay'))
    .shape([[item('minecraft:cobblestone')],
           [item('minecraft:nether_star')],
           [item('minecraft:cobblestone')]])
    .register()

crafting.shapedBuilder()
    .output(item('minecraft:chest'))
    .shape([[ore('logWood'),ore('logWood'),ore('logWood')],
           [ore('logWood'),null,ore('logWood')],
           [ore('logWood'),ore('logWood'),ore('logWood')]])
    .replace()
    .register()

crafting.shapedBuilder()
    .name('gold_to_diamonds')
    .output(item('minecraft:diamond') * 8)
    .shape([[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],
           [item('minecraft:gold_ingot'),null,item('minecraft:gold_ingot')],
           [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')]])
    .replaceByName()
    .register()

crafting.shapedBuilder()
    .name(resource('minecraft:sea_lantern'))
    .output(item('minecraft:clay'))
    .shape([[item('minecraft:glowstone')],
           [item('minecraft:glowstone')],
           [item('minecraft:glowstone')]])
    .replaceByName()
    .register()
```

:::::::::

::::::::::

:::::::::: details crafting.shapelessBuilder() {open id="abstract"}
- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy:no-line-numbers
    output(ItemStack)
    ```

- `byte`. Sets if the recipe is removed. The `replace` method removes by the output itemstack, and the `replaceByName` method removes by the Resource Location. (Default `0`).

    ```groovy:no-line-numbers
    replace()
    replaceByName()
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy:no-line-numbers
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy:no-line-numbers
    recipeAction(Closure<Void>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
crafting.shapelessBuilder()
    .output(item('minecraft:clay'))
    .input([item('minecraft:cobblestone'),item('minecraft:nether_star'),item('minecraft:gold_ingot')])
    .register()

crafting.shapelessBuilder()
    .name('precious_to_clay')
    .output(item('minecraft:clay'))
    .input([item('minecraft:diamond'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')])
    .register()

crafting.shapelessBuilder()
    .name(resource('example:resource_location2'))
    .output(item('minecraft:clay'))
    .input([item('minecraft:cobblestone'), item('minecraft:gold_ingot')])
    .register()

crafting.shapelessBuilder()
    .output(item('minecraft:ender_eye'))
    .input([item('minecraft:ender_pearl'),item('minecraft:nether_star')])
    .replace()
    .register()

crafting.shapelessBuilder()
    .name('minecraft:pink_dye_from_pink_tulp')
    .output(item('minecraft:clay'))
    .input([item('minecraft:nether_star')])
    .replaceByName()
    .register()

crafting.shapelessBuilder()
    .name(resource('minecraft:pink_dye_from_peony'))
    .output(item('minecraft:clay'))
    .input([item('minecraft:cobblestone'), item('minecraft:gold_ingot')])
    .replaceByName()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    crafting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    crafting.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    crafting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
crafting.removeByOutput(item('minecraft:gold_ingot'))
crafting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    crafting.streamRecipes()
    ```
