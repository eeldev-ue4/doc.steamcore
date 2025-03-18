# Downloading Leaderboard Scores
Here is an example of how we can download scores from our Leaderboard inside our game, in this example we’ve limited the results to 30 in the “DownloadLeaderboardEntries” node.

Also note that the Data Entry Count that you get from “DownloadLeaderboardEntries” is a Count value and not a Index value meaning that we have to reduce the value by -1 since Counts start at 1 while arrays always start at 0.

After that it’s only a matter of getting the downloaded leaderboard entry and displaying the data. You can send this data to a Widget to make a prettier display.

:::tip TIP
This Example has a Video Tutorial that you can find here: [Related Video](../../videos/leaderboards.mdx)
:::

## Blueprint Setup
![Image](https://eeldev.com/wp-content/uploads/2021/06/get_score.png)

## The Result
![Image](https://eeldev.com/wp-content/uploads/2021/06/result.png)

## Bonus Tip
To get the displayname of a player that you are not friends with you’ll have to request this extra information from Steam, you can do this by using the “RequestUserInformation” node that come with SteamCore

![Image](https://eeldev.com/wp-content/uploads/2021/06/requestuserinnfo.png)