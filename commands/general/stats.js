//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const { RichEmbed } = require('discord.js');

module.exports = class StatsCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'stats',
      aliases: ['userstats', 'servers', 'channels'],
      group: 'general',
      memberName: 'stats',
      description: 'Sends user statistics.',
      details: oneLine `
      Want to know how many servers you're on?
      This command shows user statistics.
			`,
      examples: ['stats']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    const embed = new RichEmbed()
      .setAuthor('Stats', `${message.author.avatarURL}`)
      .setColor(0x0000FF)
      .setDescription(`**Server Count**: ${this.client.guilds.size}\n**User Count**: ${this.client.users.size}\n **Response time**: ${this.client.ping ? `${Math.abs(Math.floor(this.client.ping))}ms` : 'Ping can not currently be measured.'}`)
      .setFooter('')
      .setTimestamp()
    message.edit({ embed })
  }
};
