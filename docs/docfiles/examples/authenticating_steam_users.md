# Authenticating Steam Users 

If you are hosting a multiplayer game (or single player), you might want to validate/authenticate the player. With SteamCore it’s very easy!

## PlayerController
![Image](../../../static/img/1_auth.jpg)

![Image](../../../static/img/2_auth.jpg)

## Begin Auth Session
Depending on your setup, if you are using Dedicated Servers to authenticate users use “GameServer” example, if you are using a “Single Player” or “Listen Server” setup use the “User” example.

![Image](https://eeldev.com/wp-content/uploads/2020/12/56557582ebd0729ae59b2ae335a720d8.png)

## Cleaning Up
Destroy/Invalidate the authenitcation ticket when the player exits the game (Inside the PlayerController)

![Image](https://eeldev.com/wp-content/uploads/2020/02/cleanup.png)