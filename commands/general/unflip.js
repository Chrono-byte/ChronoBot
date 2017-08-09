//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class UnflipCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'unflip',
      aliases: ['revserseflip'],
      group: 'general',
      memberName: 'unflip',
      description: 'Sends the ASCII table unflip.',
      details: oneLine `
      Feelin unangery? Use this command to unflip a table.
			`,
      examples: ['unflip', 'unflip well alright then', 'unflip no worries'],
      args: [{
        key: 'toUnflip',
        label: 'reason',
        prompt: 'Why would you like to unflip?',
        type: 'string',
        default: ''
      }]
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    if (args.toUnflip.toLowerCase() === '') {
      //eslint-disable-next-line no-irregular-whitespace
      message.edit('┬─┬﻿ ノ( ゜-゜ノ)')
    } else {
      //eslint-disable-next-line no-irregular-whitespace
      message.edit(`┬─┬﻿ ノ( ゜-゜ノ), ${args.toUnflip}`)
    }
  }
};
