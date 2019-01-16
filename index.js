const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "?"

bot.login(process.env.TOKEN)

bot.on('message', message =>{
    if (message.content('https://discord.gg/')){
        message.reply("Les Pub discord sont interdites. :wink:")
        message.delete()
      }
});
