const Discord = require('discord.js')
const client = new Discord.Client()
var prefix = "?";

client.login(process.env.TOKEN)

client.on('message', message =>{
    if (message.content.startsWith.string('https://discord.gg/')){
        message.reply('Les pubs Discord sont interdites sur ce serveur !')
        message.delete()
      }
})
