const { CommandoClient } = require("discord.js-commando"); //Refer to https://discord.js.org/#/docs/commando/master/general/welcome for help.
const BotData = require("./botData.js");//Imports custom BotData information for the bot.
const discord = require("discord.js"); //Refer to https://discord.js.org/#/docs/main/stable/general/welcome for help.
const token = require("./token.js"); //Imports the token key for the bot to launch.
const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = new StormDB(engine);
const path = require("path");

const bot = new CommandoClient({
	commandPrefix: botPrefix,
});

bot.registry
	.registerDefaultTypes()
	.registerGroups([
		['admin', 'Admin'],
		['economy', 'Economy'],
		['simple', 'Simple'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));
//End of command registration

bot.login(key);

bot.on('ready', function () {
	bot.user.setActivity(activityMessage);
	console.log(`Successfully Signed Into: ${bot.user.tag}`);
	console.log(`Bot Developer: ${Developer}`);
	console.log(`Running Version: ${Version}`);
});