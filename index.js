const Discord = require('discord.js')
const client = new Discord.Client()
var prefix = "?"

client.login('process.env.TOKEN')

client.on('message', message =>{
    if (message.content.startsWith('https://discord.gg/')){
        message.delete()
        message.reply('Les pubs Discord sont interdites sur ce serveur !')
    }
    if (message.content.startsWith('http://discord.gg/')){
        message.delete()
        message.reply("Et non j'ai penser aux http quand j'ai codé")
    }
})
