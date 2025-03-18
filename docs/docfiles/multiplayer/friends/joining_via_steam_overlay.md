# Join via Steam Overlay
If you want to give your friends the ability to join your games by clicking “**JOIN GAME**” from the Steam Overlay / Friends Menu, you have to implement the functionality within your game, here is a barebones example of how we do that

## Joining via Steam Overlay
This example will allow you to join a friends multiplayer session from the Steam Overlay (SHIFT+TAB) while the game is already running.

![Image](https://eeldev.com/wp-content/uploads/2021/01/7f998f63c946bd57b3d3baa693dcec40-1024x758-1.png)

## SteamCore Session Setup
If you are using a “SteamCoreSession“, use the following example,
*The logic in this example is implemented in the players PlayerController*

![Image](https://eeldev.com/wp-content/uploads/2021/03/fcefcc3498bb9a6fb7f18640833785f6.png)

# Advanced Session Setup (Legacy)
If you are using the “Advanced Session” setup, use the following example.
*The logic found below is implemented in the games GameInstance.*

![Image](https://eeldev.com/wp-content/uploads/2021/01/39fcbd751cc0d6cc79c404c88773e040.png)

