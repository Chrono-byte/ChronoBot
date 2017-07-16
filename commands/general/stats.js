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
    if (!message.guild.member(this.client.user).hasPermission('EMBED_LINKS')) {
      message.edit(`__**User Stats**__
**Server Count**: ${this.client.guilds.size}
**User Count**: ${this.client.users.size}
**Response time**: ${this.client.ping ? `${Math.abs(Math.floor(this.client.ping))}ms` : 'Ping can not currently be measured.'}`)
    } else if (message.guild.member(this.client.user).hasPermission('EMBED_LINKS')) {
      const embed = new RichEmbed()
        .setAuthor('User Stats', `${message.author.avatarURL}`)
        .setColor(0x0000FF)
        .setDescription(`**Server Count**: ${this.client.guilds.size}
**User Count**: ${this.client.users.size}
**Response time**: ${this.client.ping ? `${Math.abs(Math.floor(this.client.ping))}ms` : 'Ping can not currently be measured.'}`)
        .setTimestamp()
      message.edit({ embed })
    } else {
      message.edit('Unknown permissions error.')
    }
  }
};
