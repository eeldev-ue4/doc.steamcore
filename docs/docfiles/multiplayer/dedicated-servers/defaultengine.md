---
sidebar_position: 2
---

# DefaultEngine.ini

:::tip TIP
This Example has a Video Tutorial that you can find here: [Related Video](../../videos/dedicated-server.mdx)
:::

:::danger WARNING!
Your config file should not contain SteamNetDriver or SteamSockets definitions.
:::

```
[URL]
GameName=GameName
Port=7777

[OnlineSubsystemSteam]
bEnabled=True
SteamDevAppId=480
bVACEnabled=True
SteamAppId=480
bUseSteamNetworking=false 
GameVersion=1.0.0.0

[/Script/Engine.GameEngine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="OnlineSubsystemUtils.IpNetDriver",DriverClassNameFallback="OnlineSubsystemUtils.IpNetDriver")

[/Script/OnlineSubsystemUtils.IpNetDriver]
MaxClientRate=1000000000 
MaxInternetClientRate=1000000000
InitialConnectTimeout=120.0  

[OnlineSubsystem]
DefaultPlatformService=Steam 
```