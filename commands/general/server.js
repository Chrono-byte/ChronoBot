//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const { RichEmbed } = require('discord.js');

module.exports = class ServerCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'server',
      aliases: ['serverstats', 'serverinfo'],
      group: 'general',
      memberName: 'server',
      description: 'Sends server statistics.',
      details: oneLine `
      Want to know how many bots are on the current server?
      This command shows server statistics.
			`,
      examples: ['server']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    if (message.guild) {
      let guild = message.guild
      if (!message.guild.member(this.client.user).hasPermission('EMBED_LINKS')) {
        message.edit(`__**Server Stats**__
**Guild**: ${guild.id}
**Name**: ${guild.name}
**Owner**: ${guild.owner.user.tag} (${guild.owner.id})
**Members**: ${guild.members.size}
**Bots**: ${guild.members.filter(u => u.user.bot).size} (${Math.floor(guild.members.filter(u => u.user.bot).size / guild.members.size * 100)}%)
**Humans**: ${guild.members.filter(u => !u.user.bot).size} (${Math.floor(guild.members.filter(u => !u.user.bot).size / guild.members.size * 100)}%)
**Text Channels**: ${guild.channels.filter(channel => channel.type === 'text').size}
**Voice Channels**: ${guild.channels.filter(channel => channel.type === 'voice').size}
**Default Channel**: ${guild.defaultChannel}
**Roles**: ${guild.roles.size}`)
      } else if (message.guild.member(this.client.user).hasPermission('EMBED_LINKS')) {
        const embed = new RichEmbed()
          .setAuthor('Server Stats', `${guild.iconURL}`)
          .setDescription(`**Guild**: ${guild.id}
**Name**: ${guild.name}
**Owner**: ${guild.owner.user.tag} (${guild.owner.id})
**Members**: ${guild.members.size}
**Bots**: ${guild.members.filter(u => u.user.bot).size} (${Math.floor(guild.members.filter(u => u.user.bot).size / guild.members.size * 100)}%)
**Humans**: ${guild.members.filter(u => !u.user.bot).size} (${Math.floor(guild.members.filter(u => !u.user.bot).size / guild.members.size * 100)}%)
**Text Channels**: ${guild.channels.filter(channel => channel.type === 'text').size}
**Voice Channels**: ${guild.channels.filter(channel => channel.type === 'voice').size}
**Default Channel**: ${guild.defaultChannel}
**Roles**: ${guild.roles.size}`)
          .setColor(0x0000FF)
          .setTimestamp()
        message.edit({ embed })
      } else {
        message.edit('Unknown permissions error.')
      }
      //eslint-disable-next-line no-negated-condition
    } else if (!message.guild) {
      message.edit('This is a DM. DMs do not have server info. \nPlease run this command in a server.')
    } else {
      message.edit('Unknown permissions error.')
    }
  }
};
