const Discord = require("discord.js")
const client = new Discord.Client()
var lastMsg = []

client.login(process.env.token)

client.on("ready", () => {
client.user.setActivity("je suis un bot conçus par Mylan RH pour le Reiden Home")
})

client.on("message", msg => {
  if (msg.content.search("discord.gg") == -1) {
    msg.delete()
  }
  if (msg.content.slice(0,8)==="RH.clear" && msg.member.hasPermission(MANAGE_MESSAGES)) {
    var num = Number(msg.content.slice(8,msg.content.length))
    var i
    if (num != 0 && num < lastMsg.length){
       for (i = 0; i < num; i++) { 
      if (!lastMsg[lastMsg.length-i].deleted){
         lastMsg[lastMsg.length-i].delete()
      }
       }
    }
  } else {
      lastMsg.push(msg)
    }
})
