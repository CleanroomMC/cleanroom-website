# Command Event

To use this event use the following import:
```groovy:no-line-numbers
import net.minecraftforge.event.CommandEvent
```

## Methods
```groovy:no-line-numbers
java.lang.Throwable getException()
```

```groovy:no-line-numbers
[Ljava.lang.String; getParameters()
```

```groovy:no-line-numbers
net.minecraft.command.ICommand getCommand()
```

```groovy:no-line-numbers
void setParameters([Ljava.lang.String; arg0)
```

```groovy:no-line-numbers
void setException(java.lang.Throwable arg0)
```

```groovy:no-line-numbers
net.minecraft.command.ICommandSender getSender()
```
