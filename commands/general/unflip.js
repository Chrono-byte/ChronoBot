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
      examples: ['unflip'],
      args: [{
        key: 'toUnflip',
        label: 'text',
        prompt: 'Why would you like to unflip?',
        type: 'string',
      }]
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    message.edit(`┬─┬﻿ ノ( ゜-゜ノ), ${args.toUnflip}`)
  }
};
