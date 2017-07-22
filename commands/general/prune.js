//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const { RichEmbed } = require('discord.js');

module.exports = class PurgeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'prune',
      aliases: ['purge'],
      group: 'general',
      memberName: 'prune',
      description: 'Deletes messages by the user',
      details: oneLine `
        Deletes your messages
			`,
      examples: ['prune 5'],
      args: [{
        key: 'toPrune',
        label: 'text',
        prompt: 'How many messages?',
        type: 'string',
        validate: text => {
          if (text.length <= 10) return true
          //eslint-disable-next-line newline-before-return
          return 'Your message is too long! Must be 10 characters or less.'
        },
        infinite: false
      }]
    })
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message, args) {
    let messagecount = parseInt(args.toPrune[0]);
    message.channel.fetchMessages({
            limit: 100
        }).then(messages => {
            let msg_array = messages.array();
            msg_array = msg_array.filter(m => m.author.id === this.client.user.id);
            msg_array.length = messagecount + 1;
            msg_array.map(m => m.delete().catch(console.error));
        });
}}