//eslint-disable-next-line
const commando = require('discord.js-commando');
const { stripIndents, oneLine } = require('common-tags');
const config = require('../../config.json')
//const disambiguation = require('../../util').disambiguation;

module.exports = class HelpCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'help',
      group: 'general',
      memberName: 'help',
      aliases: ['commands'],
      description: 'Displays a list of available commands, or detailed information for a specified command.',
      details: oneLine `
				The command may be part of a command name or a whole command name.
				If it isn't specified, all available commands will be listed.
			`,
      examples: ['help', 'help prefix'],
      guarded: true,

      args: [{
        key: 'command',
        prompt: 'Which command would you like to view the help for?',
        type: 'string',
        default: ''
      }]
    });
  }

  async run(msg, args) { // eslint-disable-line complexity
    const groups = this.client.registry.groups;
    const commands = this.client.registry.findCommands(args.command, false, msg);
    const showAll = args.command && args.command.toLowerCase() === 'all';
    if (args.command && !showAll) {
      if (commands.length === 1) {
        let help = stripIndents `
					${oneLine `
						__Command **${commands[0].name}**:__ ${commands[0].description}
						${commands[0].guildOnly ? ' (Usable only in servers)' : ''}
					`}

					**Format:** ${msg.anyUsage(`${commands[0].name}${commands[0].format ? ` ${commands[0].format}` : ''}`)}
				`;
        if (commands[0].aliases.length > 0) help += `\n**Aliases:** ${commands[0].aliases.join(', ')}`;
        help += `\n${oneLine `
					**Group:** ${commands[0].group.name}
					(\`${commands[0].groupID}:${commands[0].memberName}\`)
				`}`;
        if (commands[0].details) help += `\n**Details:** ${commands[0].details}`;
        if (commands[0].examples) help += `\n**Examples:**\n${commands[0].examples.join('\n')}`;

        const messages = [];
        try {
          messages.push(await msg.channel.send(help));
        } catch (err) {
          console.error(err)
          messages.push(await msg.reply('Unable to send you the help DM. You probably have DMs disabled.'));
        }

        return messages;
      } else if (commands.length > 1) {
        return msg.reply(/*disambiguation(commands, 'commands')*/);
      }

      /*eslint-disable no-undefined*/
      return msg.reply(
        `Unable to identify command. Use ${msg.usage(
						null, msg.channel.type === 'dm' ? null : undefined, msg.channel.type === 'dm' ? null : undefined
					)} to view the list of all commands.`
        /*eslint-enable no-undefined*/
      );

    }
    const messages = [];
    try {
      /*eslint-disable*/
      messages.push(await msg.channel.send(stripIndents `
					${oneLine `
						To run a command in ${msg.guild || 'any server'},
						use \`${msg.guild ? msg.guild.commandPrefix : null, config.prefix}command\`.
						For example, \`${msg.guild ? msg.guild.commandPrefix : null, config.prefix}prefix\`.
					`}

					Use ${this.usage('<command>', null, null)} to view detailed information about a specific command.
					Use ${this.usage('all', null, null)} to view a list of *all* commands, not just available ones.

					__**${showAll ? 'All commands' : `Available commands in ${msg.guild || 'this DM'}`}**__

					${(showAll ? groups : groups.filter(grp => grp.commands.some(cmd => cmd.isUsable(msg))))
						.map(grp => stripIndents `
							__${grp.name}__
							${(showAll ? grp.commands : grp.commands.filter(cmd => cmd.isUsable(msg)))
								.map(cmd => `**${cmd.name}:** ${cmd.description}`).join('\n')
							}
						`).join('\n\n')
					}
				`, { split: true }));
      /*eslint-enable*/
    } catch (err) {
      messages.push(await msg.reply('Unable to send you the help DM. You probably have DMs disabled.'));
    }

    return messages;

  }
};
