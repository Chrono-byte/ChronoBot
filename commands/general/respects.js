//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class RespectsCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'respects',
      aliases: ['f'],
      group: 'general',
      memberName: 'respects',
      description: 'Press F to pay respects.',
      details: oneLine `
      Are you too lazy to add reactions to a message yourself?
      This command automatically creates a respects message so people can pay respects.
			`,
      examples: ['respects']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    message.edit('Press F to pay respects')
    message.react('🇫')
  }
};
