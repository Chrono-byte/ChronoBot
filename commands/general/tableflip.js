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
      examples: ['tableflip', 'tableflip why did you do that', 'tableflip please no'],
      args: [{
        key: 'toFlip',
        label: 'reason',
        prompt: 'Why would you like to flip?',
        type: 'string',
        default: ''
      }]
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    if (args.toFlip.toLowerCase() === '') {
      message.edit('(╯°□°）╯︵ ┻━┻')
    } else {
      message.edit(`(╯°□°）╯︵ ┻━┻, ${args.toFlip}`)
    }
  }
};
