//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class ShrugCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'shrug',
      aliases: ['meh'],
      group: 'general',
      memberName: 'shrug',
      description: 'Sends the ASCII shrug.',
      details: oneLine `
      Feelin kinda meh? Use this command to shrug.
			`,
      examples: ['shrug']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    message.edit('¯\\_(ツ)_/¯')
  }
};
