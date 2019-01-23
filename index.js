const Discord = ('discord.js')
const bot = new Discord.client()

const Clear = require('clear.js')

bot.login(process.env.TOKEN)

bot.on('ready', function() {
    bot.user.setActivity('Salut je suis un bot conçus par Mylan RH pour le reiden home')
})

bot.on('message', message => {

    Clear.parse(message)

})
client.on('message', message => {
    if (message.content.startsWith('https://discord.gg/')) {
    message.delete()
    message.reply('Les pubs discord sont interdites !')
    }
    if (message.content.startsWith('http://discord.gg/')) {
    message.delete()
    message.reply('Et non les http sont aussi compris !')
    }
})
