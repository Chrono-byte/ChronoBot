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
      description: 'ban.',
      details: oneLine `
      Drop the ban hammer
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
    message.guild.ban(args.toBan).then(user => {
        message.edit(`Successfully Banned ${user.user.tag} from ${message.guild.name}`)
    })
  }
};
