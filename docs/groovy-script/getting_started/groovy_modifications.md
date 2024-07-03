
# Groovy Modifications

GroovyScript makes some modifications to how various things in Groovy function.


## Imports


Groovy automatically imports the following packages and classes:

```groovy:no-line-numbers
import java.io.*
import java.lang.*
import java.math.BigDecimal
import java.math.BigInteger
import java.net.*
import java.util.*
import groovy.lang.*
import groovy.util.*
```

GroovyScript adds the following additional imports:

```groovy:no-line-numbers
import net.minecraft.world.World
import net.minecraft.block.state.IBlockState
import net.minecraft.block.Block
import net.minecraft.block.SoundType
import net.minecraft.enchantment.Enchantment
import net.minecraft.entity.Entity
import net.minecraft.entity.player.EntityPlayer
import net.minecraft.init.Biomes
import net.minecraft.init.Blocks
import net.minecraft.init.Enchantments
import net.minecraft.init.Items
import net.minecraft.init.MobEffects
import net.minecraft.init.PotionTypes
import net.minecraft.init.SoundEvents
import net.minecraft.item.EnumRarity
import net.minecraft.item.Item
import net.minecraft.item.ItemStack
import net.minecraft.nbt.NBTTagCompound
import net.minecraft.nbt.NBTTagList
import net.minecraft.tileentity.TileEntity
import net.minecraft.util.math.BlockPos
import net.minecraft.util.DamageSource
import net.minecraft.util.EnumHand
import net.minecraft.util.EnumHandSide
import net.minecraft.util.EnumFacing
import net.minecraft.util.ResourceLocation
import net.minecraftforge.fml.common.eventhandler.EventPriority
import com.cleanroommc.groovyscript.event.EventBusType
import net.minecraftforge.fml.relauncher.Side
import net.minecraftforge.fml.relauncher.SideOnly
import static com.cleanroommc.groovyscript.helper.GroovyHelper.*
import static net.minecraft.util.math.MathHelper.*
```

## Maps


GroovyScript replaces the use of `LinkedHashMap` with uses `Object2ObjectLinkedOpenHashMap` as the default map used in Groovy.
This is done because it is slightly more memory efficient and keeps the element order.



## Security Restrictions


A number of packages or classes are banned, and not able to be used by Groovy.

When interacting with a File object through Groovy, the File can only refer to a file path that targets inside the minecraft directory.
