# Inviting Friends
There is no default Invite handling using the Steam OSS in Unreal Engine 4 but with SteamCore you can 
implement this functionality using only Blueprints!

## Steamworks Settings
In order for rich presence joins to go through this and not be placed on the OS command line, you must enable “Use launch command line” from the Installation > General page on your app.
![Steamworks](https://eeldev.com/wp-content/uploads/2022/03/Screenshot-2022-03-25-153928.png)

## Connecting to the Server
After receiving and accepting the invite, the client will receive the “123.123.123.123” value from the “GetLaunchCommandLine” function, now all we have to do is get that command line and connect to the server
![Connecting](https://eeldev.com/wp-content/uploads/2021/01/afa237e5070f19b3f32c51bc2cb8cc49.png)

## Dedicated Servers
:::tip DEDICATED SERVERS
If you are using Dedicated Servers, you have to set your Rich Presence key so that your friends know where to connect. Replace 123.123.123.123 with the Servers IP address.
:::
![Server](https://eeldev.com/wp-content/uploads/2021/01/4134af009533684e8e9a20199ae9242f.png)