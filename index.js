const Discord = require('discord.js')
const client = new Discord.Client()
var prefix = ("*")

client.login(process.env.TOKEN)

client.on('message', message =>{
    if (message.content.startsWith('https://discord.gg/')){
        message.reply('Les pubs Discord sont interdites sur ce serveur !')
        message.delete()
      }
    if (message.content.startsWith("Bravo Reiden Bot !")){
        message.reply("Merci beacoup ! Je ne fais que mon boulôt :wink:")
    }
    if (message.content.startsWith(prefix /-"RH.Clear")){
        if (!message.guild.memeber(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.reply("Vous n'avez pas la permission:MANAGE_MESSAGE.")

        let args = message.content.split(" ").slice(1)

        if (!args[0]) return message.channel.reply("La commande ne peut pas etre executer pour cause: nombre de message a supprimer manquant")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send('${args[0]} Message ont été supprimer.' )
        })
    }
})
