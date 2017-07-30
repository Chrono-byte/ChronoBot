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
      description: 'respects.',
      details: oneLine `
      Press F to pay respects
			`,
      examples: ['respects']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    message.edit(`Press F to pay respects`)
    message.react(`🇫`)
  }
};
