const { Command } = require('discord.js-commando');
const BotData = require("../../botData.js");
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

    if (reason == "" || reason == "help" || reason == "?") {
        const rpgHelp = new discord.MessageEmbed()
          .setTimestamp()
          .setColor("RANDOM")
          .setTitle("RPG Help")
          .setDescription(`
            This Command is a WIP, please check back later!
          `)
        message.channel.send(rpgHelp);
        console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistantly annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "quickfight" || reason == "quickf" || reason == "qfight" || reason == "qf") {
      const rpgQuickFight = new discord.MessageEmbed()
          .setTimestamp()
          .setColor("RANDOM")
          .setTitle("RPG Quick Fight")
          .setDescription(`
            This Command is a WIP, please check back later!
          `)
        message.channel.send(rpgQuickFight);
        console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistantly annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "adventure" || reason == "adv" || reason == "travel") {
      const rpgAdventure = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Adventure")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgAdventure);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistantly annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "quests" || reason == "quest" || reason == "qs" || reason == "q") {
      const rpgQuests = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Quests")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgQuests);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistantly annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "store" || reason == "shop" || reason == "market") {
      const rpgShop = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Shop")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgShop);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistantly annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "buy" || reason == "purchase" || reason == "$") {
      const rpgPurchase = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Buy")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgPurchase);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistantly annoy GameHogPlays#0119 on Discord of this error!")
    }
  }
}