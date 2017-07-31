//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class UnflipCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'wew',
      aliases: ['wow', 'w0w', 'w3w'],
      group: 'general',
      memberName: 'wew',
      description: 'WEW.',
      details: oneLine `
      Feelin like "WEW", use this.
			`,
      examples: ['wew'],
      args: [{
        key: 'toWew',
        label: 'text',
        prompt: 'What would you like to wew?',
        type: 'string'
      }]
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    message.edit(`**o_O** wew, ${args.toWew}`)
  }
};
