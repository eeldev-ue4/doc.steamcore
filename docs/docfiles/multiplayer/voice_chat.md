# Voice Chat
Setting up and using Steam In-game voice with SteamCore is very easy, lets take a look at how we can achieve this!

# PLAYERSTATE
![PlayerState](https://eeldev.com/wp-content/uploads/2021/04/steamcorevoiceobj-1.png)
The PlayerState is a replicated object that exists on all clients and the server so it’s an ideal place to store data that needs to be broadcasted to all players on the server, so in this example we’re going to use a custom PlayerState object to send our Voice data to all the clients.

# REPLICATEAUDIODATA EVENT
![Replicate](https://eeldev.com/wp-content/uploads/2021/04/event.png)

Make sure this event is a “Multicast” type event

# PLAYERCONTROLLER
Inside our PlayerController is where we’re going to be capturing our Audio Data, sending it to the server and then the server will broadcast it to our player state and all other players, let’s take a look at the logic:
![PC1](https://eeldev.com/wp-content/uploads/2021/04/pc1.png)

![PC2](https://eeldev.com/wp-content/uploads/2021/04/pc2.png)
:::danger WARNING
Make sure the “SendAudioData” is of type “Run on Server“
:::
![RunOnServer](https://eeldev.com/wp-content/uploads/2021/04/event2.png)