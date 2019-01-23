const Discord = ('discord.js')
const client = new Discord.client()
const Clear = require('clear.js')

client.login(process.env.TOKEN)

client.on('ready', function() {
    client.user.setActivity('Salut je suis un bot conçus par Mylan RH pour le reiden home')
})

client.on('message', message => {

    Clear.parse(message)
    
    if (message.content.startsWith('https://discord.gg/')) {
    message.delete()
    message.reply('Les pubs discord sont interdites !')
    }
    if (message.content.startsWith('http://discord.gg/')) {
    message.delete()
    message.reply('Et non les http sont aussi compris !')
    }
})
