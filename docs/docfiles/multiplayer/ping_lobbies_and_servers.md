# Ping Lobbies and Servers

As of SteamCore:: 1.18 you can now ping lobbies using Blueprints and the SteamSockets Plugin (built into unreal engine)!

Begin by Configuring SteamSockets

# SETTING UP LOBBY PING DATA
Create a Lobby and set the HOST_PING data
![Setup](https://eeldev.com/wp-content/uploads/2020/05/hostpingdata-1.png)

# GETTING PING VALUE
This will print the ping value from the lobby owner
![Getting](https://eeldev.com/wp-content/uploads/2020/05/getpingvalue.png)
![Get](https://eeldev.com/wp-content/uploads/2020/05/getpingvalue_1.png)

Get the ping value and assign it to UMG / lobby list

# THE RESULT
*The unknown lobbies are because of using Steam AppID 480, it will list irrelevant lobbies.*
![Result](https://eeldev.com/wp-content/uploads/2020/05/valid_ping.png)