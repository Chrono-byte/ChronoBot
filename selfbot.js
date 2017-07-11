console.log("Booting...")
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
let embedsay = "off"
console.log("Loaded.")
console.log(`Settings:\nPrefix: ${config.prefix}`)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
    if(message.author !== client.user) return;
    let prefix = config.prefix

    if(message.content.startsWith("c/") !== true) {
        if(embedsay === "on") {
            const embed = new Discord.RichEmbed()
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
                .setColor(0x0000FF)
                .setDescription(`${message.content}`)
            message.edit({ embed: embed})
        }
    }

    if (message.content.startsWith(prefix + 'shrug')) {
        message.edit("¯\\_(ツ)_/¯");
    }

    if (message.content.startsWith(prefix + 'tableflip')) {
        message.edit("(╯°□°）╯︵ ┻━┻");
    }

    if (message.content.startsWith(prefix + 'unflip')) {
        message.edit("┬─┬﻿ ノ( ゜-゜ノ)");
    }

    if (message.content.startsWith(prefix + 'info')) {
        const embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
            .setColor(0x0000FF)
            .setDescription(`Server Count: ${client.guilds.size}\nUser Count: ${client.users.size}\n` + "**Response time**: " + (Date.now() - message.createdTimestamp) + "ms")
            .setFooter(``)
            .setTimestamp()
        message.edit({ embed: embed})
    }

    if (message.content.startsWith(prefix + 'self')) {
        const embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
            .setColor(0x0000FF)
            .setDescription(`${client.user.username} uses ChronoBot, a selfbot by Chronomly6#8108\nYou can download it here: https://github.com/Chronomly6/ChronoBot`)
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
      let evaled = `:inbox_tray: **Input:**\`\`\`js\n${message.content.split(" ").slice(1).join(" ")}\`\`\`\n\n:outbox_tray: **Output:**\n\`\`\`js\n${code}\`\`\``;
        const embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
            .setColor(0x0000FF)
            .setDescription(`${evaled}`)
            .setFooter(``)
            .setTimestamp()
        message.edit({ embed: embed})
    }

    if(message.content.startsWith(prefix + "embed")) {
        let choice = message.content.split(" ").slice(1).join(" ")
        if(choice === "on") {
            embedsay = "on"
            message.edit("embeding is on")
        }
        if(choice === "off") {
            embedsay = "off"
            message.edit("embeding is off")
        }
    }
});

console.log("Logging in!")
client.login(config.token);
