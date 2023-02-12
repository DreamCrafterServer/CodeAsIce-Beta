const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

const { getDateTime } = require('../../modules/time/getTime.js')

let commandCooldown = []

//TL;DR anti-spam explaination.
//I cached the channel which just triggered a slash command and also channel name for console showing
//when the cooldown finished, clear first two value in commandCooldown array
//that's how it works!

module.exports = {
	data: new SlashCommandBuilder()
		.setName('伺服器資訊')
		.setDescription('提供當前群組的相關資訊'),
        

	async execute(interaction) {
		let time = getDateTime()
		let guildId = interaction.member.guild.id;
		let guildName = interaction.member.guild.name;
		let guildMemberCount = interaction.member.guild.memberCount;
		let guildLocale = interaction.guildLocale
		let afkChannelID = `<#${interaction.member.guild.afkChannelId}>`;
		let afkTimeout = interaction.member.guild.afkTimeout / 60 ;
		let ownerId = `<@${interaction.member.guild.ownerId}>`
        console.log(interaction.member.guild.ownerId)

		const commandResponse = new EmbedBuilder()
			.setColor(0x0099FF)
			.setThumbnail(interaction.member.guild.iconURL())
			.setAuthor({ name: '我.. 盡力了', iconURL: 'https://cdn.discordapp.com/avatars/1018948444653633588/9525e6bae590bfe158d22f2b607608b9.webp?size=4096&width=554&height=554' })
			.setDescription('以下是我能力內所觀測到的資料\n\n'+'**群組綜觀**\n' +
							'> **群組名稱**：' +' '+ '`' + guildName + '`\n' + 
							'> **群組人數**：' +' '+ '`' + guildMemberCount + '`\n'+
							'> **群組標籤**：' + ' '+ '`' + guildId + '`\n'+
							'> **群組地區**：' +' '+ '`' + guildLocale + '`\n'+ 
							'> **群擁有者**：' +' '+ ownerId + `\n\n`+
							'**掛機判斷相關**\n' +
							'> **不活躍頻道**：' +' '+  afkChannelID + '\n' +
							'> **不活躍時限**：' +'`'+  afkTimeout +'`'+ ' 分鐘\n'
							 )

			//.setDescription(`**伺服器名稱**: ${guildName}\n**伺服器人數**: ${guildMemberCount}\n**伺服器ID**: ${guildId}`)
			.setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });




		if (!commandCooldown.includes(interaction.channelId)){
			await interaction.reply({embeds: [commandResponse]});

			console.log(`[INFO] ${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}'`);
			console.log(`[INFO] ${interaction.commandName} triggered, pushed channel ${interaction.channelId}(#${interaction.channel.name}) into cooldown list`);

            commandCooldown.push(interaction.channelId);
            commandCooldown.push(interaction.channel.name);

			setTimeout(function () {
				//pingCooldown = false;
				console.log(`[INFO] command ${interaction.commandName} ended, dropped channel ${commandCooldown[0]}(#${commandCooldown[1]})`);
                commandCooldown.shift()
                commandCooldown.shift()

			}, 300000);   			
		} else {
			await interaction.reply({embeds: [commandResponse], ephemeral: true});
			console.log(`[INFO] ${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}' (ephemeral)`)	
		}

		//console.log(`[INFO] ${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}'`)		
	},
};
