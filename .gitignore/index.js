const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Actualité; /help");
	console.log("Le bot a bien été connecté.");
});

bot.login("6iv--9LnAfX_pw0auVIfRHbLMnL6tJgx");
