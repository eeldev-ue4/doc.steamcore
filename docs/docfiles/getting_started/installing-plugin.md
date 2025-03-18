---
sidebar_position: 1
---

# Installing the plugin

## Installing
- Find the plugin in the Epic Launcher.

![Image](../../../static/img/installing_1.png)

- Install the plugin to your desired Engine Version.

![Image](../../../static/img/installing_3.png)

- Verify that the plugin is installed

![Image](../../../static/img/installing_4.png)

- **Move** (not copy) the plugin from the engines marketplace directory to your own projects Plugins directory, you may have to create the Plugins directory in your project if it doesn't exist.

![Image](../../../static/img/installing_5.png)
- UE 4.27 Location
```
C:\Program Files\Epic Games\UE_4.27\Engine\Plugins\Marketplace
```

## Force Plugin/Project recompile (optional)
- **Delete** the Binaries, Build, Intermediate and Saved folders inside your project directory.

![Image](../../../static/img/installing_6.png)

- **Delete** the Binaries and Intermediate folders inside the SteamCore plugin directory.

![Image](../../../static/img/installing_7.png)

## C++ project
- If this is a C++ project, add "SteamCore" as a module dependency in your projects Build.cs file.

![Image](../../../static/img/installing_8.png)

## Enabling the Plugin
Make sure the **SteamCore::** plugin is enabled
![Image](../../../static/img/enabled.png)