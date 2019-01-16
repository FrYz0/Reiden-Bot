const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login('NTMzNDc3NjgyMDUxMTUzOTMx.DxyzFw.NP1zpsOAOWWtoCkWEuqyqDTvLkg');

client.on('message', message =>{
    if(message.content === "Reiden Bot ?"){
        message.reply('Je suis pas dispo je mange des pâtes dans ma chambre ! :heart:');
    }
});
