# Content

This part of GroovyScript allows the creation of game content like items and blocks. It's equivalent to ContentTweaker
for CraftTweaker, but for GroovyScript it doesn't require another mod.

::: info Warning {id="warning"}
Requires version 0.4.0+. <br>
Before you start adding content make sure to specify the pack name and id in
your [runConfig](../introduction/getting_started.md#run-config). <br>
Also make sure to read [pack name](../introduction/run_config.md#packname) and [id](../introduction/run_config.md#packid)
:::

Currently, GroovyScript adds helpers to create

- [items](item.md)
- [blocks](block.md)
- [creative tabs](creative_tab.md)
- [fluids](fluid.md)

Coming in the future:

- Mekanism gases

## Creative tabs
You can set a default creative tab which registered items and blocks will use if not specified otherwise
```groovy:no-line-numbers
content.setDefaultCreativeTab(CreativeTabs tab)
```

::: info Example {id="example"}

With [that](creative_tab.md) we can do this
```groovy:no-line-numbers
def creativeTab = content.createCreativeTab("nomifactory.creative_tab", item("nomifactory:heart_of_the_universe"))
content.setDefaultCreativeTab(creativeTab)
```
:::
