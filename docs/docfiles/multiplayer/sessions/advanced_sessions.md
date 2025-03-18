---
sidebar_position: 5
---

# Advanced Sessions

~~SteamCore:: doesn’t come with a single node that lets you create an “Advanced Session“, however the utilities to create an “advanced session” does exist, let’s take a look at how we can achieve this.~~

:::tip TIP
This Example has a Video Tutorial that you can find here: [Related Video](../../videos/multiplayer-sessions.mdx)
:::

## Creating the Session
The SteamCore “Create Session” node now has the ability to add custom attributes to your Sessions, here is an example of how simple it is to create a new session with a custom bool attribute.

[
![Image](https://eeldev.com/wp-content/uploads/2021/03/create.png)
](https://eeldev.com/wp-content/uploads/2021/03/create.png)



## Finding Sessions
To find game sessions, all you have to do is call “Find SteamCore Sessions“, here you also have the ability to add Search Settings attributes to filter your search results, the plugin will also attempt to fill out the SessionSettings array with all the parameters it can find from the session result.
[
![Image](https://eeldev.com/wp-content/uploads/2021/03/find.png)
](https://eeldev.com/wp-content/uploads/2021/03/find.png)