const { Command } = require('discord.js-commando');
const BotData = require("../../BotData.js");
const discord = require("discord.js");
const db = require("quick.db");

module.exports = class rpg extends Command {
  constructor(client) {
    super(client, {
      name: 'rpg',
      group: 'simple',
      memberName: 'rpg',
      description: 'Simple RPG game',
    });
  }

  run(message, args) {
    let words = args.split(' ');
    let reason = words.slice(0).join(' ');

    if (reason == "" || reason == "help") {
        const rpgHelp = new discord.messageEmbed()
          .setTimestamp()
          .setColor("RANDOM")
          .setTitle("RPG Help")
          .setDescription(`
            This Command is a WIP, please check back later!
          `)
    }
  }
}