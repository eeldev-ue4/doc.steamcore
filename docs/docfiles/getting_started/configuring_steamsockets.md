---
sidebar_position: 3
---

# Configuring SteamSockets

:::tip NOTE
Make sure you don’t already have any of the below defintions already defined in your DefaultEngine.ini, duplicate entries will break the configuration
:::

## Enable the SteamSockets Plugin
![EnablePlugin](https://eeldev.com/wp-content/uploads/2020/05/a9a7ad65808f63e5ff1e6dfaa72eebd4.png)

## DefaultEngine.ini
Edit your **DefaultEngine.ini** configuration file located in the Project\Config directory. The example below is all you need for a basic SteamSockets setup.
```c
[URL]
GameName=GameName
Port=7777

[OnlineSubsystemSteam]
SteamDevAppId=480
SteamAppId=480
bVACEnabled=True
bEnabled=True
bUseSteamNetworking=True

[OnlineSubsystem]
DefaultPlatformService=Steam

[/Script/Engine.Engine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="SteamSockets.SteamSocketsNetDriver",DriverClassNameFallback="OnlineSubsystemUtils.IpNetDriver")

[/Script/OnlineSubsystemUtils.IpNetDriver]
MaxClientRate=1000000000
MaxInternetClientRate=1000000000
InitialConnectTimeout=120.0

[/Script/OnlineSubsystemSteam.SteamNetDriver]
NetConnectionClassName="SteamSockets.SteamSocketsNetConnection"
```