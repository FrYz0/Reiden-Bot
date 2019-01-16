const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login(procces.env.TOKEN);

client.on('message', message =>{
    if(message.content === "Reiden Bot ?"){
        message.delete()
        message.reply('Les Pub discord sont interdites sur ce serveur ! :wink:');
    }
});
