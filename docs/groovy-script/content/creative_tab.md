# Creating creative tabs

```groovy:no-line-numbers
content.createCreativeTab(String name, ItemStack icon) // returns the creative tab
```

::: info Example {id="example"}

```groovy:no-line-numbers
def creativeTab = content.createCreativeTab("nomifactory.creative_tab", item("nomifactory:heart_of_the_universe"))
```
:::

## Other

You can get a creative tab by using

```groovy:no-line-numbers
creativeTab(String tabName)
```

A list of existing creative tab names can be obtained by running the [`/gs creativeTabs` command](../minecraft/commands/index.md#creative-tabs).
