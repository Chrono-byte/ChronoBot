//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class RespectsCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'kick',
      aliases: ['shun'],
      group: 'general',
      memberName: 'kick',
      description: 'kick',
      details: oneLine `
      Drop the kick hammer
			`,
      examples: ['kick @Cewldawg#l337'],
      args: [{
        key: 'user',
        label: 'kick',
        prompt: 'Who would you like to kick?',
        type: 'user',
        infinite: false
      }]
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    message.guild.members.get(args.user.id).kick().then((user) => {
        message.edit(`Successfully Kicked ${user.user.tag} from ${message.guild.name}`)
    })
  }
};
