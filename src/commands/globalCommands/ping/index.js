const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { pingResponseIntroduce,pingResponseDC1,pingResponseDC2 } = require('./embed.js')

const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')

function pingResponse(time){
	return new EmbedBuilder()
		.setColor(0x0099FF)
		.setAuthor({ name: '嗨 你好!', iconURL: 'https://cdn.discordapp.com/avatars/1018948444653633588/9525e6bae590bfe158d22f2b607608b9.webp?size=4096&width=554&height=554' })
		.setDescription('我是築夢物語 Discord 群組的福利娘，很高興遇見你！')
		.setFooter({ text: `DreamCrafter 築夢物語 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}

//let pingCooldown = false
let commandCooldown1 = []
let commandCooldown2 = []


module.exports = {
	data: new SlashCommandBuilder()
			.setName('資訊查詢')
			.setDescription('使用子指令查詢資料')
			.addSubcommand(subcommand =>
				subcommand
					.setName('小冰')
					.setDescription('關於我自己的一切')
					//.addUserOption(option => option.setName('target').setDescription('The user'))
					)
			.addSubcommand(subcommand =>
				subcommand
					.setName('築夢物語')
					.setDescription('關於我家鄉的資訊')
					),
	async execute(interaction) {
		//console.log(interaction.options.getSubcommand())
		let time = getDateTime()

		//console.log(interaction.commandName)
		if (interaction.options.getSubcommand() === '小冰'){
			//let time = getDateTime()

			if(!commandCooldown1.includes(interaction.channelId)){
				await interaction.reply({embeds: [await pingResponseIntroduce(time )]})
				info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}/${interaction.options.getSubcommand()}'`);
				info(`${interaction.commandName} triggered, pushed channel ${interaction.channelId}(#${interaction.channel.name}) into cooldown list`);			

				commandCooldown1.push(interaction.channelId); 
				commandCooldown1.push(interaction.channel.name);  
				
				//pingCooldown = true;
				setTimeout(function () {
					
					//pingCooldown = false;
					info(`command ${interaction.commandName}/${interaction.options.getSubcommand()} ended, dropped channel ${commandCooldown1[0]}(#${commandCooldown1[1]})`);
					commandCooldown1.shift()
					commandCooldown1.shift()

				}, 30000);   		

			} else {
				await interaction.reply({embeds: [await pingResponseIntroduce(time )], ephemeral: true});
				info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}/${interaction.options.getSubcommand()}' (ephemeral)`)	
			}


		} 

		if (interaction.options.getSubcommand() === '築夢物語'){

			if(!commandCooldown2.includes(interaction.channelId)){
				await interaction.reply({embeds: [pingResponseDC1(time),pingResponseDC2(time)]})
				info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}/${interaction.options.getSubcommand()}'`);
				info(`${interaction.commandName} triggered, pushed channel ${interaction.channelId}(#${interaction.channel.name}) into cooldown list`);			

				commandCooldown2.push(interaction.channelId); 
				commandCooldown2.push(interaction.channel.name);  
				
				//pingCooldown = true;
				setTimeout(function () {
					
					//pingCooldown = false;
					info(`command ${interaction.commandName}/${interaction.options.getSubcommand()} ended, dropped channel ${commandCooldown2[0]}(#${commandCooldown2[1]})`);
					commandCooldown2.shift()
					commandCooldown2.shift()

				}, 30000);   		

			} else {
				await interaction.reply({embeds: [pingResponseDC1(time),pingResponseDC2(time)], ephemeral: true});
				info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}/${interaction.options.getSubcommand()}' (ephemeral)`)	
			}



			
		}

	},
};