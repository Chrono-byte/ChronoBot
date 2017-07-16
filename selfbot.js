//eslint-disable-next-line
console.log('Booting...')
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
console.log('Loaded.')
console.log(`Settings:\nPrefix: ${config.prefix}`)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
  if (message.author !== client.user) return;
  let prefix = config.prefix

  if (message.content.startsWith(prefix + 'checkgame')) {
    if (client.user.presence.game.name === null) {
      const embed = new Discord.RichEmbed()
        .setAuthor('Game!', `${message.author.avatarURL}`)
        .setColor(0x0000FF)
        .setDescription('```No game!```')
        .setFooter('')
        .setTimestamp()
      message.edit({ embed })
    } else {
      const embed = new Discord.RichEmbed()
        .setAuthor('Game!', `${message.author.avatarURL}`)
        .setColor(0x0000FF)
        .setDescription(`\`\`\`${client.user.presence.game.name}\`\`\``)
        .setFooter('')
        .setTimestamp()
      message.edit({ embed })
    }
  }

  if (message.content.startsWith(prefix + 'setgame')) {
    let game = message.content.split(' ').slice(1).join(' ')
    client.user.setGame(game)
    const embed = new Discord.RichEmbed()
      .setAuthor('Game Set!', `${message.author.avatarURL}`)
      .setColor(0x0000FF)
      .setDescription(`game set to \`${game}\``)
      .setFooter('')
      .setTimestamp()
    message.edit({ embed })
  }

  if (message.content.startsWith(prefix + 'info')) {
    const embed = new Discord.RichEmbed()
      .setAuthor('ChronoBot', 'https://cdn.discordapp.com/avatars/251383432331001856/c6a0ec56ad6e5f903412cfa86eb2c8a0.png?size=2048')
      .setColor(0x0000FF)
      .setDescription(`${client.user.username} uses ChronoBot, a selfbot by Chronomly#8108\nYou can download it here: https://github.com/Chronomly6/ChronoBot`)
      .setFooter('')
      .setTimestamp()
    message.edit({ embed })
  }
});

console.log('Logging in!')
client.login(config.token);
