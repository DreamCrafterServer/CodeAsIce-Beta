const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const { getDateTime } = require('../../modules/time/getTime.js')

function pingResponse(time){
	return new EmbedBuilder()
		.setColor(0x0099FF)
		.setAuthor({ name: '嗨 你好!', iconURL: 'https://cdn.discordapp.com/avatars/1018948444653633588/9525e6bae590bfe158d22f2b607608b9.webp?size=4096&width=554&height=554' })
		.setDescription('我是築夢物語 Discord 群組的福利娘，很高興遇見你！')
		.setFooter({ text: `DreamCrafter 築夢物語 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}

let pingCooldown = false

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),

	async execute(interaction) {
		if (!pingCooldown){
			await interaction.reply({embeds: [pingResponse(getDateTime())]});
			console.log(`[INFO] ${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}'`);
			console.log(`[INFO] pingCooldown triggered`);
			pingCooldown = true;
			setTimeout(function () {
				pingCooldown = false;
				console.log(`[INFO] pingCooldown ended.`);
			}, 300000);   			
		} else {
			await interaction.reply({embeds: [pingResponse(getDateTime())], ephemeral: true});
			console.log(`[INFO] ${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName} (ephemeral)'`)	
		}

		//console.log(`[INFO] ${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}'`)		
	},
};