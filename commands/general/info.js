//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const { RichEmbed } = require('discord.js');

module.exports = class InfoCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'info',
      aliases: ['selfbot', 'selfinfo', 'botinfo'],
      group: 'general',
      memberName: 'info',
      description: 'Sends selfbot information.',
      details: oneLine `
      Want to show off your seflbot to your friends?
      This command shows selfbot information.
			`,
      examples: ['info']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    if (message.guild) {
      if (!message.guild.member(this.client.user).hasPermission('EMBED_LINKS')) {
        message.edit(`__**ChronoBot**__
${this.client.user.username} uses ChronoBot, a selfbot by Chronomly#8108 and TJDoesCode#6088
You can download it here: https://github.com/Chronomly6/ChronoBot`)
      } else if (message.guild.member(this.client.user).hasPermission('EMBED_LINKS')) {
        const embed = new RichEmbed()
          .setAuthor('ChronoBot', 'https://cdn.discordapp.com/avatars/251383432331001856/c6a0ec56ad6e5f903412cfa86eb2c8a0.png?size=2048')
          .setColor(0x0000FF)
          .setDescription(`${this.client.user.username} uses ChronoBot, a selfbot by Chronomly#8108 and TJDoesCode#6088
You can download it here: https://github.com/Chronomly6/ChronoBot`)
          .setTimestamp()
        message.edit({ embed })
      } else {
        message.edit('Unknown permissions error.')
      }
      //eslint-disable-next-line no-negated-condition
    } else if (!message.guild) {
      const embed = new RichEmbed()
        .setAuthor('ChronoBot', 'https://cdn.discordapp.com/avatars/251383432331001856/c6a0ec56ad6e5f903412cfa86eb2c8a0.png?size=2048')
        .setColor(0x0000FF)
        .setDescription(`${this.client.user.username} uses ChronoBot, a selfbot by Chronomly#8108 and TJDoesCode#6088
You can download it here: https://github.com/Chronomly6/ChronoBot`)
        .setTimestamp()
      message.edit({ embed })
    } else {
      message.edit('Unknown permissions erorr.')
    }
  }
};
