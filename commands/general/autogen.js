//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
let rulesMessage = `
__**Server Rules:**__

:one:  Respect **everyone** in chat.

:two: Abide by the **Discord TOS**. Duh.

:three: __**Absolutely no NSFW**__ of __**any kind**__. This includes pictures and roleplay. We do not have an NSFW channel and we **will not** be adding one. If you are caught spreading any NSFW, you will be **permanently banned**.

:four: Keep your __posts in the respective channels__. This means **only use our bots in the allowed channels**.

:five: __Spam of any kind is not allowed__ except in #spam.

:six: __**No roleplay** is allowed__ with anyone. Please keep it in DMs.

:seven: *Try* to keep the chat in **English**.

:eight: **No advertising** and **no instant invite links** outside of #spampost unless otherwise instructed.

:nine: If you have any __questions or concerns__, **DM me or a member of support staff**.

:keycap_ten: Keep your **memes and shitposts in #memes **unless otherwise instructed.

:one::one: **Do not** beg for staff. You **earn** a staff position. Begging is not earning.

:one::two: __**NO SELFBOTS**__ *(except if you're a moderator)*

:one::three: **Just because it isn't listed above doesn't mean it isn't a rule.** Any staff member can tell you to stop doing anything. At that point, it becomes a rule. If you continue, punishments may be taken.

:one::four: **Listen to __all__ staff members.** This goes with rule 13. Even a member of the mod team is a staff member.

:one::five: **Do not abuse *any* of the bots here**`

module.exports = class ServerCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'autogen',
      aliases: ['automake', 'autosetup'],
      group: 'general',
      memberName: 'autogen',
      description: 'Want to setup a server automagically?',
      details: oneLine `
      This command sets up a server automatically.
      This includes creating basic channels and staff roles, as well as posting rules.
      Your life just got a whole lot easier!
			`,
      examples: ['autogen']
    });
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    let guild = message.guild
    // Create a new role with data
    function work() {
      if (message.guild.available === true) {
        guild.createRole({
          name: 'Owner',
          color: 'BLUE',
          hoist: true
        }).catch(console.error)
        guild.createRole({
          name: 'Admin',
          color: 'ORANGE',
          permissions: 'ADMINISTRATOR',
          hoist: true
        }).catch(console.error)
        guild.createRole({
          name: 'Mod',
          color: 'RED',
          permissions: 'KICK_MEMBERS',
          hoist: true
        }).catch(console.error)
        guild.createChannel('rules', 'text').then((channel) => channel.send(rulesMessage)).catch(console.error)
        guild.createChannel('spam', 'text').then((channel) => channel.send('This is the spam channel').then((message) => message.pin()).catch(console.error))
        guild.createChannel('bot_spam', 'text').then((channel) => channel.send('This is the bot_spam channel').then((message) => message.pin()).catch(console.error))
        guild.createChannel('announcements', 'text').then((channel) => channel.send('This is the announcements channel').then((message) => message.pin()).catch(console.error))
      }
    }
    work()
    message.edit('Finished.')
  }
};
