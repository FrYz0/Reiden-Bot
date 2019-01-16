const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login(process.env.TOKEN);

client.on('message', message =>{
    if(message.content === "https://discord.gg/"){
        message.reply('Les Pub discord sont interdites sur ce serveur ! :wink:');
        message.delete()
    }
});
