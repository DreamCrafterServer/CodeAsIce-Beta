const { Client, Events, GatewayIntentBits, EmbedBuilder, Embed, REST, Collection } = require('discord.js');
const dotenv = require('dotenv');

const { getDateTime, getTime, getDate} = require('./modules/time/getTime.js');
const { loadCommands } = require('./handler/loadCommands/loadCommands.js')

const { client } = require('./discord/bot.js')

dotenv.config()

client.once(Events.ClientReady,async () => {
    console.log(`[INFO] Ready! Logged in as ${client.user.tag}`)
    loadCommands();
})


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

