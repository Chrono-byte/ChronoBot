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
      description: 'Express your amazement at something.',
      details: oneLine `
      Did something amaze you? Are you far to lazy to bold an amazed face yourself?
      This is the command for you!
      This comman can be used to express your amazement at something.
			`,
      examples: ['wew', 'wew that was close', 'wew 360noscope'],
      args: [{
        key: 'toWew',
        label: 'reason',
        prompt: 'What would you like to wew?',
        type: 'string',
        default: ''
      }]
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    if (args.toWew.toLowerCase() === '') {
      message.edit('**o_O** wew')
    } else {
      message.edit(`**o_O** wew, ${args.toWew}`)
    }
  }
};
