
# External Compat

Here you'll learn about adding external mod compat for GroovyScript.
An example of a mod using this is [GTCEu](https://github.com/GregTechCEu/GregTech/blob/master/src/main/java/gregtech/integration/groovy/GroovyScriptModule.java), [Mekanism-CE](https://github.com/sddsd2332/Mekanism-CE-Unofficial-1.12.2/blob/RFG/src/main/java/mekanism/common/integration/groovyscript/GrSMekanismAdd.java) and Modular Machinery Community Edition (WIP).

::: info {id="info"}
Please read the javadoc for the interface and methods.
:::

The plugin must implement `GroovyPlugin`. GroovyScript will automatically find the class and instantiate it. If the
instance field is non-null the class will not be instantiated by GroovyScript, but instead the value of the field will
be used.

The field `TestReg test` represents a machine that can have recipes.

In `onCompatLoaded()` the compat can be initialised. `container.getRegistrar().addFieldsOf(this)`
automatically register fields of this class which are `VirtualRegistries` including the `TestReg test` field.

With `createGroovyPropertyContainer()` you can create your own property container.
This is the class groovy scripts have access to via `mods.example_id`. The `container.getRegistrar()`function will add registries to the existing property container.

```java
public class ExampleModGroovyPlugin implements GroovyPlugin {

    public final TestReg test = new TestReg();

    @Override
    public @NotNull String getModId() {
        return "example_id";
    }

    @Override
    public @NotNull String getContainerName() {
        return "Example Name";
    }

    @Override
    public void onCompatLoaded(GroovyContainer<?> container) {
        GroovyScript.LOGGER.info("ExampleMod container loaded");
        container.getRegistrar().addRegistry(VanillaModule.furnace);
        container.getRegistrar().addFieldsOf(this);
    }

    // optional
    @Override
    public @Nullable GroovyPropertyContainer createGroovyPropertyContainer() {
        return null;
    }
}
```
