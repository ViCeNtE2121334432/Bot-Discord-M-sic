const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODQxMzYzMzgwMDA1NTAzMDA3.YJlqtQ.oK1PELUqW1YXlITFRnwx4gpFdD4", //Discord Bot Token
prefix: "%" //Customizable
})
bot.onMessage() //Allows to run Commands
bot.status({
  text: "viendo Dms",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "%help",
  type: "WATCHING",
  time: 12
})

bot.command({
name: "ping", //Trigger name (command name)
code: `$ping ms 📡` //Code
})


bot.command({
name: "play",
code: `$playSong[$message;1m;yes;yes;:x: Could not play song!]`
})

bot.command({
name: "queue",
code: `$queue[1;10;{number} - {title} by <@{userID}>]`
})

bot.command({
name:"stop",
code:`$stopSong`
})

bot.command({
name: "help",
code: `$title[bienvenido $username mi lista de configuración estos son mis comandos
%play 
%ping
%queue
%stop
%avatar
%songinfo
%shuffle]`
})

bot.command({
    name: "avatar",
    code: `$image[$authorAvatar]`
});

bot.joinCommand({ 
channel: "830875128207376385", 
code: `
Welcome to $serverName, $username!
`
/*
Code Breakdown
$serverName - The name of the server the user joined
$username - The user who joined the server
*/
}) 

bot.command({
name: "volume",
code: `
$volume[$message]
`
})
 // Sets the volume to what ever the user inputs

bot.command({
name: "invite",
code: `Invite: $getBotInvite[manageserver;manageroles]`
})

bot.command({
name:"skip",
code:`$skipSong`
})

bot.command({
name: "shuffle",
code: `$shuffleQueue I've shuffled the queue!`
})

bot.command({
name: "songInfo",
code: `
Reproduciendo en este momento:$songInfo[title]
`
})

bot.command({
name: "status",
code: `El status del bot: $status`
})

bot.command({
name: "botram", 
code: `
Memory usage: $ram`
})





