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
      examples: ['shrug']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    let guild = message.guild
    const embed = new RichEmbed()
      .setAuthor('Server Stats', `${this.client.user.avatarURL}`)
      .setDescription(`**Guild**: ${guild.id}
**Name**: ${guild.name}
**Owner**: ${guild.owner.user.tag} (${guild.owner.id})
**Members**: ${guild.members.size}
**Bots**: ${guild.members.filter(u => u.user.bot).size} (${Math.floor(guild.members.filter(u => u.user.bot).size / guild.members.size * 100)}%)
**Humans**: ${guild.members.filter(u => !u.user.bot).size} (${Math.floor(guild.members.filter(u => !u.user.bot).size / guild.members.size * 100)}%)`)
      .setColor(0x0000FF)
      .setTimestamp()
    message.edit({ embed })
  }
};
