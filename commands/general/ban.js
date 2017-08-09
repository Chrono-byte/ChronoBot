//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class RespectsCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'ban',
      aliases: ['banish'],
      group: 'general',
      memberName: 'ban',
      description: 'Does what you would expect it to do.',
      details: oneLine `
      This command does what you'd expect it to do, ban people.
      It's quite self-explanitory, is it not?
			`,
      examples: ['ban @Cewldawg#l337'],
      args: [{
        key: 'toBan',
        label: 'ban',
        prompt: 'Who would you like to ban?',
        type: 'user',
        infinite: false
      }]
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    if (!message.guild.member(this.client.user).hasPermission('BAN_MEMBERS')) return message.reply('Ripperoni, no permission to ban people.')
    message.guild.ban(args.toBan).then(user => {
      message.edit(`Successfully Banned ${user.user.tag} from ${message.guild.name}`)
    })
  }
};
