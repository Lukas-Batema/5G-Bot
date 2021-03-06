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
      var healthLostRandom = Math.floor(Math.random() * 100);
      var healthLost;
      var enemyFought;

      db.get("users").set(message.author.id, botData.rpgConfig[totalHealth])
        .save();


      if (enemyFoughtRandom == 1) {
        enemyFought = "Slime";
      } else if (enemyFoughtRandom == 2) {
        enemyFought = "Cake";
      } else if (enemyFoughtRandom == 3) {
        enemyFought = "Dog";
      } else if (enemyFoughtRandom == 4) {
        enemyFought = "Radiation";
      } else if (enemyFoughtRandom == 5) {
        enemyFought = "USA";
      } else if (enemyFoughtRandom == 6) {
        enemyFought = "Chair";
      } else if (enemyFoughtRandom == 7) {
        enemyFought = "Ash Ketchum";
      } else if (enemyFoughtRandom == 8) {
        enemyFought = "Steve";
      } else if (enemyFoughtRandom == 9) {
        enemyFought = "Alex";
      } else if (enemyFoughtRandom == 10) {
        enemyFought = "Your Mom";
      }

      if (healthLostRandom == 0) {
        healthLost = 0;
      } else if (healthLostRandom == 1) {
        healthLost = 1;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 2) {
        healthLost = 2;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 3) {
        healthLost = 3;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 4) {
        healthLost = 4;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 5) {
        healthLost = 5;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 6) {
        healthLost = 6;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 7) {
        healthLost = 7;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 8) {
        healthLost = 8;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 9) {
        healthLost = 9;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 10) {
        healthLost = 10;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 11) {
        healthLost = 11;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 12) {
        healthLost = 12;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 13) {
        healthLost = 13;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 14) {
        healthLost = 14;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 15) {
        healthLost = 15;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 16) {
        healthLost = 16;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 17) {
        healthLost = 17;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 18) {
        healthLost = 18;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 19) {
        healthLost = 19;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 20) {
        healthLost = 20;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 21) {
        healthLost = 21;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 22) {
        healthLost = 22;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 23) {
        healthLost = 23;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 24) {
        healthLost = 24;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 25) {
        healthLost = 25;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 26) {
        healthLost = 26;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 27) {
        healthLost = 27;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 28) {
        healthLost = 28;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 29) {
        healthLost = 29;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 30) {
        healthLost = 30;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 31) {
        healthLost = 31;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 32) {
        healthLost = 32;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 33) {
        healthLost = 33;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 34) {
        healthLost = 34;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 35) {
        healthLost = 35;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 36) {
        healthLost = 36;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 37) {
        healthLost = 37;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 38) {
        healthLost = 38;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 39) {
        healthLost = 39;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 40) {
        healthLost = 40;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 41) {
        healthLost = 41;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 42) {
        healthLost = 42;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 43) {
        healthLost = 43;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 44) {
        healthLost = 44;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 45) {
        healthLost = 45;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 46) {
        healthLost = 46;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 47) {
        healthLost = 48;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 49) {
        healthLost = 49;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 50) {
        healthLost = 50;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 51) {
        healthLost = 51;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 52) {
        healthLost = 52;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 53) {
        healthLost = 53;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 54) {
        healthLost = 54;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 55) {
        healthLost = 55;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 56) {
        healthLost = 56;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 57) {
        healthLost = 57;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 58) {
        healthLost = 58;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 59) {
        healthLost = 60;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 61) {
        healthLost = 61;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 62) {
        healthLost = 62;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 63) {
        healthLost = 63;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 64) {
        healthLost = 64;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 65) {
        healthLost = 65;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 66) {
        healthLost = 66;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 67) {
        healthLost = 67;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 68) {
        healthLost = 68;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 69) {
        healthLost = 69;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 70) {
        healthLost = 70;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 71) {
        healthLost = 71;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 72) {
        healthLost = 72;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 73) {
        healthLost = 73;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 74) {
        healthLost = 74;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 75) {
        healthLost = 75;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 76) {
        healthLost = 76;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 77) {
        healthLost = 77;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 78) {
        healthLost = 78;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 79) {
        healthLost = 79;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 80) {
        healthLost = 80;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 81) {
        healthLost = 81;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 82) {
        healthLost = 82;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 83) {
        healthLost = 83;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 84) {
        healthLost = 84;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 85) {
        healthLost = 85;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 86) {
        healthLost = 86;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 87) {
        healthLost = 87;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 88) {
        healthLost = 88;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 89) {
        healthLost = 89;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 90) {
        healthLost = 90;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 91) {
        healthLost = 91;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 92) {
        healthLost = 92;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 93) {
        healthLost = 93;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 94) {
        healthLost = 94;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 95) {
        healthLost = 95;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 96) {
        healthLost = 96;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 97) {
        healthLost = 97;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 98) {
        healthLost = 98;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 99) {
        healthLost = 99;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 100) {
        healthLost = 100;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      }

      db.get("users").set(message.author.id, botData.rpgConfig[totalHealth])
        .save();

      const rpgQuickFight = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Quick Fight")
        .setDescription(
          `You fought ` + enemyFought + ` and lost ` + healthLost + ` health. You have ` + totalHealth + ` health left!`
        )
      message.channel.send(rpgQuickFight);
    } else if (reason == "adventure" || reason == "adv") {
      var enemyFoughtOne = "";
      var enemyFoughtTwo = "";
      var enemiesFought = "";
      var healthLostRandom = Math.floor(Math.random() * 100);
      var healthLost;
      var enemyFought;

      var timesLooped = 0;

      var userID = message.author.id;

      while (timesLooped < 3) {
        var enemyFoughtRandom = Math.floor(Math.random() * 10) + 1;
        if (enemyFoughtRandom == 1) {
          enemyFought = "Slime";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 2) {
          enemyFought = "Cake";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 3) {
          enemyFought = "Dog";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 4) {
          enemyFought = "Radiation";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 5) {
          enemyFought = "USA";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 6) {
          enemyFought = "Chair";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 7) {
          enemyFought = "Ash Ketchum";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 8) {
          enemyFought = "Steve";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 9) {
          enemyFought = "Alex";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        } else if (enemyFoughtRandom == 10) {
          enemyFought = "Your Mom";
          if (enemyFoughtOne == "") {
            enemyFoughtOne = enemyFought;
          } else {
            enemyFoughtTwo = enemyFought;

            enemiesFought = enemyFoughtOne + " and " + enemyFoughtTwo;
          }
        }
        timesLooped++;
      }

      db.get("users").set(userID, botData.rpgConfig[totalHealth])
        .save();

      if (healthLostRandom == 0) {
        healthLost = 0;
      } else if (healthLostRandom == 1) {
        healthLost = 1;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 2) {
        healthLost = 2;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 3) {
        healthLost = 3;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 4) {
        healthLost = 4;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 5) {
        healthLost = 5;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 6) {
        healthLost = 6;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 7) {
        healthLost = 7;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 8) {
        healthLost = 8;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 9) {
        healthLost = 9;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 10) {
        healthLost = 10;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 11) {
        healthLost = 11;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 12) {
        healthLost = 12;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 13) {
        healthLost = 13;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 14) {
        healthLost = 14;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 15) {
        healthLost = 15;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 16) {
        healthLost = 16;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 17) {
        healthLost = 17;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 18) {
        healthLost = 18;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 19) {
        healthLost = 19;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 20) {
        healthLost = 20;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 21) {
        healthLost = 21;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 22) {
        healthLost = 22;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 23) {
        healthLost = 23;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 24) {
        healthLost = 24;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 25) {
        healthLost = 25;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 26) {
        healthLost = 26;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 27) {
        healthLost = 27;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 28) {
        healthLost = 28;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 29) {
        healthLost = 29;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 30) {
        healthLost = 30;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 31) {
        healthLost = 31;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 32) {
        healthLost = 32;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 33) {
        healthLost = 33;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 34) {
        healthLost = 34;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 35) {
        healthLost = 35;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 36) {
        healthLost = 36;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 37) {
        healthLost = 37;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 38) {
        healthLost = 38;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 39) {
        healthLost = 39;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 40) {
        healthLost = 40;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 41) {
        healthLost = 41;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 42) {
        healthLost = 42;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 43) {
        healthLost = 43;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 44) {
        healthLost = 44;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 45) {
        healthLost = 45;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 46) {
        healthLost = 46;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 47) {
        healthLost = 48;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 49) {
        healthLost = 49;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 50) {
        healthLost = 50;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 51) {
        healthLost = 51;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 52) {
        healthLost = 52;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 53) {
        healthLost = 53;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 54) {
        healthLost = 54;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 55) {
        healthLost = 55;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 56) {
        healthLost = 56;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 57) {
        healthLost = 57;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 58) {
        healthLost = 58;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 59) {
        healthLost = 60;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 61) {
        healthLost = 61;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 62) {
        healthLost = 62;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 63) {
        healthLost = 63;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 64) {
        healthLost = 64;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 65) {
        healthLost = 65;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 66) {
        healthLost = 66;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 67) {
        healthLost = 67;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 68) {
        healthLost = 68;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 69) {
        healthLost = 69;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 70) {
        healthLost = 70;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 71) {
        healthLost = 71;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 72) {
        healthLost = 72;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 73) {
        healthLost = 73;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 74) {
        healthLost = 74;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 75) {
        healthLost = 75;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 76) {
        healthLost = 76;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 77) {
        healthLost = 77;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 78) {
        healthLost = 78;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 79) {
        healthLost = 79;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 80) {
        healthLost = 80;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 81) {
        healthLost = 81;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 82) {
        healthLost = 82;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 83) {
        healthLost = 83;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 84) {
        healthLost = 84;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 85) {
        healthLost = 85;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 86) {
        healthLost = 86;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 87) {
        healthLost = 87;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 88) {
        healthLost = 88;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 89) {
        healthLost = 89;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 90) {
        healthLost = 90;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 91) {
        healthLost = 91;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 92) {
        healthLost = 92;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 93) {
        healthLost = 93;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 94) {
        healthLost = 94;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 95) {
        healthLost = 95;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 96) {
        healthLost = 96;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 97) {
        healthLost = 97;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 98) {
        healthLost = 98;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 99) {
        healthLost = 99;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      } else if (healthLostRandom == 100) {
        healthLost = 100;
        var totalHealth = botData.rpgConfig[totalHealth] - healthLost;
      }

      db.get("users").set(userID, botData.rpgConfig[totalHealth])
        .save();

      const rpgAdventure = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Adventure")
        .setDescription(
          `You fought` + enemiesFought + ` and lost` + healthLost + ` health.You have` + totalHealth + ` health left!`
        )
      message.channel.send(rpgAdventure);
    } else if (reason == "quests" || reason == "quest" || reason == "qs" || reason == "q") {
      const rpgQuests = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Quests")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgQuests);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!");
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
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!");
    } else if (reason == "buy potion" || reason == "purchase potion" || reason == "$ potion" || reason == "buy Potion" || reason == "purchase Potion" || reason == "$ Potion") {
      const rpgPurchase = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Buy")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgPurchase);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!");
    } else if (reason == "inventory" || reason == "invent" || reason == "inv") {
      const rpgInventory = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Inventory")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgInventory);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!");
    } else if (reason == "profile" || reason == "prof" || reason == "p") {
      const rpgProfile = new discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("RPG Inventory")
        .setDescription(`
          This Command is a WIP, please check back later!
        `)
      message.channel.send(rpgProfile);
      console.log("OH NO! Someone used the command, \"5G rpg " + reason + "\". Please persistently annoy GameHogPlays#0119 on Discord of this error!");
    }
  }
}