console.log("Booting...")
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
console.log("Loaded.")
console.log(`Settings:\nPrefix: ${config.prefix}\nLog Settings: ${config.logging}`)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
    if(message.author !== client.user) return;
    let prefix = config.prefix

    if (message.content === prefix + 'shrug') {
        console.log('[CONSOLE] whatever')
        message.edit("¯\_(ツ)_/¯");
    }

    if (message.content === prefix + 'tableflip') {
        console.log('[CONSOLE] flipping the table')
        message.edit("(╯°□°）╯︵ ┻━┻");
    }

    if (message.content === prefix + 'unflip') {
        console.log('[CONSOLE] unflipping the table')
        message.edit("┬─┬﻿ ノ( ゜-゜ノ)");
    }

    if (message.content === prefix + 'info') {
        console.log('[CONSOLE] pasting info!')
        message.edit(`Server Count: ${client.guilds.size}\nUser Count: ${client.users.size}\n` + "**Response time**: " + (Date.now() - message.createdTimestamp) + "ms");
    }
    if (message.content === prefix + 'online') {
        console.log('[CONSOLE] going online!')
        message.edit("")
        client.user.setGame('ONLINE! :)')
        client.user.setStatus('online')
    }

    if (message.content === prefix + 'idle') {
        console.log('[CONSOLE] idle')
        message.edit("")
        client.user.setGame('BRB! :)')
        client.user.setStatus('idle')
    }

    if (message.content === prefix + 'afk') {
        console.log('[CONSOLE] afk')
        message.edit("")
        client.user.setGame('AFK :(')
        client.user.setStatus('dnd')
    }

    if (message.content === prefix + 'steath') {
        console.log('[CONSOLE] steath active')
        message.edit("steath mode active")
        client.user.setStatus('invisible')
    }

    if (message.content === prefix + 'self') {
        console.log('[CONSOLE] INFO POSTED')
        message.edit(`${client.user.username} uses ChronoBot, a selfbot by Chronomly6#8108\nYou can download it here: https://github.com/Chronomly6/ChronoBot`)
    }

});

client.on('message', message => {
    if(config.logging === "false") return;
    if(config.logging === "true") {
        console.log(`${message.author.username}  <  ${message.content}`)
    }
});

console.log("Logging in!")
client.login(config.token);
