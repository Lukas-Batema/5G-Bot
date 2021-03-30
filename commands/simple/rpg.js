const { Command } = require('discord.js-commando');
const botData = require("../../botData.js");
const discord = require("discord.js");
const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = new StormDB(engine);

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
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "quickfight" || reason == "quickf" || reason == "qfight" || reason == "qf") {
      var enemyFoughtRandom = Math.floor(Math.random() * 10) + 1;
      var healthLostRandom = Math.floor(Math.random() * 101) + 1;
      var healthLost;
      var enemyFought;
      var totalHealth = 100;
      if (enemyFoughtRandom == 1) {
        enemyFought = "Slime";
        if (healthLostRandom == 1) {
          healthLost = 0;
        } else if (healthLostRandom == 2) {
          healthLost = 1;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = 2;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = 3;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = 4
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = 5;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = 6;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = 7;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = 8;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = 9;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 11) {
          healthLost = 10;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 12) {
          healthLost = 11;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 13) {
          healthLost = 12;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 14) {
          healthLost = 4
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 15) {
          healthLost = 5;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 16) {
          healthLost = 6;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 17) {
          healthLost = 7;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 18) {
          healthLost = 8;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 19) {
          healthLost = 9;
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 2) {
        enemyFought = "Cake";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 3) {
        enemyFought = "Dog";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 4) {
        enemyFought = "Radiation";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 5) {
        enemyFought = "USA";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 6) {
        enemyFought = "Chair";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 7) {
        enemyFought = "Ash Ketchum";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 8) {
        enemyFought = "Steve";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 9) {
        enemyFought = "Alex";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      } else if (enemyFoughtRandom == 10) {
        enemyFought = "Your Mom";
        if (healthLostRandom == 1) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.25));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 2) {
          healthLost = totalHealth;
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 3) {
          healthLost = totalHealth - (Math.round(totalHealth / 2));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 4) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.75));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 5) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.50));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 6) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.35));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 7) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.40));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 8) {
          healthLost = totalHealth - (Math.round(totalHealth / 1.60));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 9) {
          healthLost = totalHealth - (Math.round(totalHealth / 3));
          totalHealth = totalHealth - healthLost;
        } else if (healthLostRandom == 10) {
          healthLost = totalHealth - (Math.round(totalHealth / 5.6));
          totalHealth = totalHealth - healthLost;
        }
      }
      const rpgQuickFight = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Quick Fight")
        .setDescription(
          `You fought ` + enemyFought + ` and lost ` + healthLost + ` health. You have ` + totalHealth + ` health left!`
        )
      message.channel.send(rpgQuickFight);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "adventure" || reason == "adv" || reason == "travel") {
      const rpgAdventure = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Adventure")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgAdventure);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "quests" || reason == "quest" || reason == "qs" || reason == "q") {
      const rpgQuests = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Quests")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgQuests);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "store" || reason == "shop" || reason == "market") {
      const rpgShop = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Shop")
        .setDescription(`
          1. Potion | 100 Data Points
          2. Wooden Sword | 150 Data Points
          3. Wooden Armor | 250 Data Points
          4. Shield | 200 Data Points
          5. Shroud of Revival | 1000 Data Points
        `)
      message.channel.send(rpgShop);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "buy potion" || reason == "purchase potion" || reason == "$ potion" || reason == "buy Potion" || reason == "purchase Potion" || reason == "$ Potion") {
      const rpgPurchase = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Buy")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgPurchase);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "inventory" || reason == "invent" || reason == "inv") {
      const rpgInventory = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Inventory")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgInventory);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!")
    } else if (reason == "profile" || reason == "prof" || reason == "p") {
      const rpgProfile = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Inventory")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgProfile);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!")
    }
  }
}