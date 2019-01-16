const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login('NTMzNDc3NjgyMDUxMTUzOTMx.DxyzFw.NP1zpsOAOWWtoCkWEuqyqDTvLkg');

client.on('message', message =>{
    if (message.content.startsWith('https://discord.gg/')){
        message.delete()
        message.reply("Les Pub discord sont interdites. :wink:")
      }
});
