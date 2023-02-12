const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),

	async execute(interaction) {
		console.log(`[INFO] ${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}'`)
		await interaction.reply('Pong!');
		
	},
};