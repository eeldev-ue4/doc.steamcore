# Configuring SteamNetDriver
:::danger NOTE
The old SteamNetDriver is still available in Unreal Engine 4.27.x, however it is recommended that you switch to the SteamSockets NetDriver instead as it's more secure and updated.
:::

## SteamSockets
- [Configuring SteamSockets](./configuring_steamsockets.md)

## DefaultEngine.ini
```c
[OnlineSubsystemSteam]
SteamDevAppId=480
SteamAppId=480
bVACEnabled=True
bEnabled=True
bUseSteamNetworking=True
bAllowP2PPacketRelay=True
P2PConnectionTimeout=90
GameServerQueryPort=27015
GameVersion=1.0.0.0

[/Script/Engine.Engine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="/Script/OnlineSubsystemSteam.SteamNetDriver",DriverClassNameFallback="/Script/OnlineSubsystemUtils.IpNetDriver")

[/Script/OnlineSubsystemUtils.IpNetDriver]
MaxClientRate=1000000000
MaxInternetClientRate=1000000000
InitialConnectTimeout=120.0

[/Script/OnlineSubsystemSteam.SteamNetDriver] 
NetConnectionClassName="/Script/OnlineSubsystemSteam.SteamNetConnection"
```

## YourProject.uproject
:::danger NOTE
You need to DISABLE the SteamSockets plugin in your .uproject file to completely disable the SteamSockets plugin/driver.
:::

```c
{
   "FileVersion": 3,
   "EngineAssociation": "{A55070D5-4A12-FC83-243C-F590E6EA63FD}",
   "Category": "",
   "Description": "",
   "Modules": [
      {
         "Name": "Steam",
         "Type": "Runtime",
         "LoadingPhase": "Default"
      }
   ],
   "Plugins": [
      {
         "Name": "SteamCore",
         "Enabled": true,
         "MarketplaceURL": "com.epicgames.launcher://ue/marketplace/content/5300c1dc33f74524bcad23bdeb9b2196"
      },
      {
         "Name": "SteamSockets",
         "Enabled": false
      }
   ]
}
```
:::tip NOTE
You can also disable the SteamSockets plugin from your projects plugin menu
:::
![DisablePlugin](https://eeldev.com/wp-content/uploads/2021/10/Screenshot-2021-10-17-160045.png)

## Verifying Your Configuration
To verify that you’re using the SteamNetDriver you need to check your projects Log file when you launch your packaged project, open up your Project.log file and look for the following lines:

![LogFile](https://eeldev.com/wp-content/uploads/2021/10/Screenshot-2021-10-17-160243.png)

```c
LogSteamShared: Display: Loading Steam SDK 1.51
LogSteamShared: Steam SDK Loaded!
LogOnline: OSS: Creating online subsystem instance for: Steam
LogOnline: STEAM: Steam User is subscribed 1
LogOnline: STEAM: [AppId: 480] Client API initialized 1
LogOnline: STEAM: Initializing SteamNetworking Layer
LogOnline: STEAM: Missing P2PCleanupTimeout key in OnlineSubsystemSteam of DefaultEngine.ini, using default

```
If you find the SteamNetworking layer line then your project is using the correct SteamNetDriver