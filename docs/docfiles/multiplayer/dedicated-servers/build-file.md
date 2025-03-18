---
sidebar_position: 3
---

# BuildProjectServer.Target.cs

:::tip TIP
This Example has a Video Tutorial that you can find here: [Related Video](../../videos/dedicated-server.mdx)
:::

You must add these global definitions to your **Project\Source\ProjectServer.Target.cs** file.

You can duplicate your Project.Target.cs file and rename it to ProjectServer.Target.cs, here is an example of what (ProjectServer.Target.cs) should look like (make sure to customize the settings to fit your project)

## Unreal Engine 5
```cpp
using UnrealBuildTool;
using System.Collections.Generic;

public class GameLift_ServerServerTarget : TargetRules
{
	public GameLift_ServerServerTarget( TargetInfo Target) : base(Target)
	{
		Type = TargetType.Server;
		DefaultBuildSettings = BuildSettingsVersion.V2;
		ExtraModuleNames.AddRange( new string[] { "GameLift_Server" } );

		GlobalDefinitions.Add("UE_PROJECT_STEAMSHIPPINGID=123");
		GlobalDefinitions.Add("UE_PROJECT_STEAMPRODUCTNAME=\"MyTitle\"");
		GlobalDefinitions.Add("UE_PROJECT_STEAMGAMEDIR=\"MyTitle\"");
		GlobalDefinitions.Add("UE_PROJECT_STEAMGAMEDESC=\"MyTitle\"");
	}
}
```

## Unreal Engine 4
```cpp
using UnrealBuildTool;
using System.Collections.Generic;

public class GameLift_ServerServerTarget : TargetRules
{
	public GameLift_ServerServerTarget( TargetInfo Target) : base(Target)
	{
		Type = TargetType.Server;
		DefaultBuildSettings = BuildSettingsVersion.V2;
		ExtraModuleNames.AddRange( new string[] { "GameLift_Server" } );

		GlobalDefinitions.Add("UE4_PROJECT_STEAMSHIPPINGID=123");
		GlobalDefinitions.Add("UE4_PROJECT_STEAMPRODUCTNAME=\"xxx\"");
		GlobalDefinitions.Add("UE4_PROJECT_STEAMGAMEDIR=\"xxx\"");
		GlobalDefinitions.Add("UE4_PROJECT_STEAMGAMEDESC=\"Power\"");
	}
}
```