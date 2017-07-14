console.log("Booting...")
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const oneLine = require('common-tags').oneLine;
console.log("Loaded.")
console.log(`Settings:\nPrefix: ${config.prefix}`)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
    if(message.author !== client.user) return;
    let prefix = config.prefix

    if(message.content.startsWith(">>")) {
            let text = message.content.split(" ").slice(1).join(" ")
            const embed = new Discord.RichEmbed()
                .setAuthor(``, `${client.user.avatarURL}`)
                .setDescription(`${text}`)
                .setColor(0x0000FF)
            message.edit({ embed: embed})
    }

    if (message.content.startsWith(prefix + 'shrug')) {
        message.edit("¯\\_(ツ)_/¯");
    }

    if (message.content.startsWith(prefix + 'server')) {
        let guild = message.guild;
        const embed = new Discord.RichEmbed()
                .setAuthor(`Server Stats`, `${client.user.avatarURL}`)
                .setDescription(`Guild: ${guild.id}
Name: ${guild.name}
Owner: ${guild.owner.user.tag} (${guild.owner.id})
Members: ${guild.members.size}
Bots: ${guild.members.filter(u => u.user.bot).size} (${Math.floor(guild.members.filter(u => u.user.bot).size / guild.members.size * 100)}%)
Humans: ${guild.members.filter(u => !u.user.bot).size} (${Math.floor(guild.members.filter(u => !u.user.bot).size / guild.members.size * 100)}%)`)
                .setColor(0x0000FF)
                .setTimestamp()
            message.edit({ embed: embed})
    }

    if (message.content.startsWith(prefix + 'checkgame')) {
        if(client.user.presence.game.name === null) {
            const embed = new Discord.RichEmbed()
                .setAuthor(`Game!`, `${message.author.avatarURL}`)
                .setColor(0x0000FF)
                .setDescription(`\`\`\`No game!\`\`\``)
                .setFooter(``)
                .setTimestamp()
            message.edit({ embed: embed})
        } else {
        const embed = new Discord.RichEmbed()
            .setAuthor(`Game!`, `${message.author.avatarURL}`)
            .setColor(0x0000FF)
            .setDescription(`\`\`\`${client.user.presence.game.name}\`\`\``)
            .setFooter(``)
            .setTimestamp()
        message.edit({ embed: embed})
        }
    }

    if (message.content.startsWith(prefix + 'setgame')) {
        let game = message.content.split(" ").slice(1).join(" ")
        client.user.setGame(game)
        const embed = new Discord.RichEmbed()
            .setAuthor(`Game Set!`, `${message.author.avatarURL}`)
            .setColor(0x0000FF)
            .setDescription(`game set to \`${game}\``)
            .setFooter(``)
            .setTimestamp()
        message.edit({ embed: embed})
    }

    if (message.content.startsWith(prefix + 'tableflip')) {
        message.edit("(╯°□°）╯︵ ┻━┻");
    }

    if (message.content.startsWith(prefix + 'unflip')) {
        message.edit("┬─┬﻿ ノ( ゜-゜ノ)");
    }

    if (message.content.startsWith(prefix + 'ping')) {
        message.delete()
        const embed = new Discord.RichEmbed()
            .setAuthor(`Pong!`, `${message.author.avatarURL}`)
            .setColor(0x0000FF)
            .setDescription("**Response time**: " + (Date.now() - message.createdTimestamp) + "ms")
            .setFooter(``)
            .setTimestamp()
    }

    if (message.content.startsWith(prefix + 'stats')) {
        const embed = new Discord.RichEmbed()
            .setAuthor(`Stats`, `${message.author.avatarURL}`)
            .setColor(0x0000FF)
            .setDescription(`Server Count: ${client.guilds.size}\nUser Count: ${client.users.size}\n` + "**Response time**: " + (Date.now() - message.createdTimestamp) + "ms")
            .setFooter(``)
            .setTimestamp()
        message.edit({ embed: embed})
    }

    if (message.content.startsWith(prefix + 'info')) {
        const embed = new Discord.RichEmbed()
            .setAuthor(`ChronoBot`, `https://cdn.discordapp.com/avatars/251383432331001856/c6a0ec56ad6e5f903412cfa86eb2c8a0.png?size=2048`)
            .setColor(0x0000FF)
            .setDescription(`${client.user.username} uses ChronoBot, a selfbot by Chronomly#8108\nYou can download it here: https://github.com/Chronomly6/ChronoBot`)
            .setFooter(``)
            .setTimestamp()
        message.edit({ embed: embed})
    }

    if (message.content.startsWith(prefix + 'eval')) {
        let code;
      try {
        if (message.content.includes("token") || message.content.includes("\`token\`")) return message.channel.send("The message was censored because it contained sensitive information!");
        code = eval(message.content.split(" ").slice(1).join(" "));
        //if (typeof code !== "string") code = util.inspect(code);
      } catch (err) {
        code = err.essage;
      }
      let evaled = `:inbox_tray: **Input:**\`\`\`js\n${message.content.split(" ").slice(1).join(" ")}\`\`\`\n:outbox_tray: **Output:**\n\`\`\`js\n${code}\`\`\``;
        const embed = new Discord.RichEmbed()
            .setAuthor(`Eval`, `${message.author.avatarURL}`)
            .setColor(0x0000FF)
            .setDescription(`${evaled}`)
            .setFooter(``)
            .setTimestamp()
        message.edit({ embed: embed})
    }
});

console.log("Logging in!")
client.login(config.token);
