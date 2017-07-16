//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class TableflipCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'tableflip',
      aliases: ['rage'],
      group: 'general',
      memberName: 'tableflip',
      description: 'Sends the ASCII tableflip.',
      details: oneLine `
      Feelin ANGERY? Use this command to flip a table!
			`,
      examples: ['tableflip']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    message.edit('(╯°□°）╯︵ ┻━┻')
  }
};
