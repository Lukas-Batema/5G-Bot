var BotData = [
    Version = "0.0.1",
    VN = "0.0.1 The Beginning of the Bot as we Know it",//VN stands for Version Name
    Developer = "GameHogPlays#0119 | Lukas Batema | BatemaDevelopment",
    DeveloperDiscord = "GameHogPlays#0119",
    DeveloperGitHub = "Lukas-Batema",
];

var BotConfiguration = [
    //--------------------------------------------------
    //Bot Configuration---------------------------------
    BotPrefix = "5G",
    ActivityMessage = "Data Usage High - 5G G5",
];

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

bot.on('ready', function(){
    bot.user.setActivity(ActivityMessage);
    console.log(`Successfully Signed Into: ${bot.user.tag}`);
    console.log(`Bot Developer: ${Developer}`);
    console.log(`Running Version: ${Version}`);
});

