const Discord = require('discord.js')
const bot = new Discord.Client()
const moment = require('moment');
const ms = require("ms");
const prefix = ":"
const version = "V1.0"
const talkedRecently = new Set();

bot.login('NzExOTUwMDY1NTEzNTI5MzYy.XsgzMQ.Tckzd8Ok_yvg4jwCQPMp6K6VoGM')

var maintenance = false


//Crabe croustillant workspace
bot.on('message', message => {
  if (message.channel.id === "713484947763232910") {
  if (message.content === 'bonjour') {
  message.channel.sendMessage('bonjour!');
} else if (message.content === 'cv ?') {
  message.channel.sendMessage('oui et toi ?');
} else if (message.content === 'oui') {
  message.channel.sendMessage('ok');
} else if (message.content === 'bien') {
  message.channel.sendMessage('ok');
} else if (message.content === 'non') {
  message.channel.sendMessage('beh alors dégage connard');
} else if (message.content === 'je voudrais un paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
} else if (message.content === 'merci') {
  message.channel.sendMessage('de rien');
} else if (message.content === 'je voudrais deux paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
} else if (message.content === 'je voudrais trois paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
} else if (message.content === 'je voudrais quatre paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
} else if (message.content === 'je voudrais cinq paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
}else if (message.content === 'je voudrais six paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
}else if (message.content === 'je voudrais sept paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
}else if (message.content === 'je voudrais huit paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
}else if (message.content === 'je voudrais neuf paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
}else if (message.content === 'je voudrais dix paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
}else if (message.content === 'je voudrais onze paté de crabe stp Carlo') {
  message.channel.sendMessage('ok c noté je te fait sa');
} else if (message.content === 'ok c noté je te fait sa') {
  message.channel.sendMessage('BOB SE SERAS DES PATE DE CRABE POUR LES GENS LA !!!!!!');
}else if (message.content === 'aurevoir') {
  message.channel.sendMessage('aurevoir !');
}else if (message.content === 'alô c le crabe croustillant ?') {
  message.channel.sendMessage('No its Patrick !!!');
}
}
});
//End of crabe croustillant workspace
