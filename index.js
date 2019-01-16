const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "?"

bot.login(process.env.TOKEN)

bot.on('message', message =>{
    if (message.content.startsWith('https://discord.gg/')){
        message.delete()
        message.reply("Les Pub discord sont interdites. :wink:")
      }
});
