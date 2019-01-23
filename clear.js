const Discord = require('discord.js')

module.exports = class Clear extends Command {

    static match (message) {
        if (message.content.startswith('RH.clear')) {
            return true
        }
    } 

static action (message) {

    let msg = message.content.split(' ')
    msg.shift()

    if (message.content === 'RH.clear') {

        message.reply('Combien de message a supprimer ?')
    }

    else {

        let x = parseInt(msg[0], 10)
        if (x > 100) {
            x = 100
        }
    message.delete()
    message.channel.bulkDelete(x)
    message.reply(x = 'Message ont été supprimées :wink:')
    message.channel.bulkDelete(1)
       }
    }
}
