---
sidebar_position: 2
---

# Configuring the Plugin

## Enable Steam
Enable Steam and set your own AppId (480 is fine for testing but is limited)
![Image](https://eeldev.com/wp-content/uploads/2020/01/4c6416f5e3a3bac5722bb75fabf68427.png)

## DefaultEngine.ini
* Edit your projects DefaultEngine.ini (located in Project\Config\DefaultEngine.ini), these are the minimum settings required in order to use SteamCore. To use Multipayer you'll also have to configure SteamSockets.

```
[OnlineSubsystemSteam]
bEnabled=True
SteamDevAppId=480
SteamAppId=480

[OnlineSubsystem]
DefaultPlatformService=Steam
```


## Configure SteamSockets
[Configure SteamSockets](./configuring_steamsockets.md)