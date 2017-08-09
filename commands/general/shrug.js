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
      Feelin kinda meh? Use this command to shrug at something.
			`,
      examples: ['shrug', 'shrug i don\'t care', 'shrug sure'],
      args: [{
        key: 'toShrug',
        label: 'reason',
        prompt: 'Why would you like to shrug?',
        type: 'string',
        default: ''
      }]
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    if (args.toShrug.toLowerCase() === '') {
      message.edit('¯\\_(ツ)_/¯')
    } else {
      message.edit(`¯\\_(ツ)_/¯, ${args.toShrug}`)
    }
  }
};
