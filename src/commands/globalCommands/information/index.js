const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

const { getDateTime, accurationTimeTimestamp } = require('../../../modules/time/getTime.js')
const { info } = require('../../../modules/consoleMsg/console.js')
//const { accurationTimeTimestamp } = require('../../../modules/time/getTime.js')

let commandCooldown = []

//TL;DR anti-spam explaination.
//I cached the channelId which just triggered a slash command and also channel name for console showing
//when the cooldown finished, clear first two value in commandCooldown array
//that's how it works!

module.exports = {
	data: new SlashCommandBuilder()
		.setName('群組資訊')
		.setDescription('提供當前群組的相關資訊'),
        

	async execute(interaction) {
		let time = getDateTime()
		let guildId = interaction.member.guild.id;
		let guildName = interaction.member.guild.name;
		let guildMemberCount = interaction.member.guild.memberCount;
		let guildLocale = interaction.guildLocale
		if (interaction.member.guild.afkChannelId == null){
			afkChannelID =  '`未設置`';
		} else {
			afkChannelID = `<#${interaction.member.guild.afkChannelId || ''}>`;
		}
		let afkTimeout = interaction.member.guild.afkTimeout / 60 + " " + "分鐘";
		let ownerId = `<@${interaction.member.guild.ownerId}>`
		let guildemoji = {
			size: interaction.guild.emojis.cache.size,
			png: interaction.guild.emojis.cache.filter(emoji => emoji.animated).size,
			gif: interaction.guild.emojis.cache.filter(emoji => !emoji.animated).size
		}
		let guildBanner = (interaction.member.guild.bannerURL() || "未設置")
		console.log(guildBanner)
		//let guildBanner = (interaction.member.guild.bannerURL() || "沒有設置")
		
		let timestamp = interaction.member.joinedTimestamp;
		function guildJoinDate(timestamp){
			timeConvert = accurationTimeTimestamp(timestamp)
			return timeConvert.year + "/" + timeConvert.month + "/" + timeConvert.day + " @ " + timeConvert.hour + ":" + timeConvert.minutes + ":" + timeConvert.seconds
		}

		//console.log(timestamp)
		//console.log(accurationTimeTimestamp(timestamp))

		//let timestamp = interaction.member.joinedTimestamp

		const { guild } = interaction;
        const { GuildExplicitContentFilter, GuildNSFWLevelguild, GuildVerificationLevel } = guild;
        const { members, channels, emojis, roles, stickers } = guild;

		console.log(timestamp)
		console.log(guildJoinDate(timestamp))
		//console.log(interaction.guild.channels.cache.filter(type => type === 2).size)
		//console.log(interaction.guild.emojis.cache.size)
        //console.log(interaction.member.guild.ownerId)

		const randomTitle = ['我.. 盡力了。', '通靈大法.. 賀!!', '李白水中撈月，而我.. 群中撈資料。']
		const randomChoose = Math.floor(Math.floor(Math.random() * 10)/3);
		
		const commandResponse = new EmbedBuilder()
			.setColor(0x0099FF)
			.setThumbnail(interaction.member.guild.iconURL())
			.setAuthor({ name: `${randomTitle[randomChoose]}`, iconURL: 'https://cdn.discordapp.com/avatars/1018948444653633588/9525e6bae590bfe158d22f2b607608b9.webp?size=4096&width=554&height=554' })
            .addFields(
				{ name: '🔍 群組綜觀', value: ' '},
                //{ name: '\u200B', value: '\u200B' },
                { name: '群組名稱', value: "`"+`${guildName}`+"`", inline: true},
                { name: '群組人數', value: "`"+`${guildMemberCount}`+"`", inline: true},
                { name: '群組標籤', value: "`"+`${guildId}`+"`", inline: true},
                { name: '群組地區', value: "`"+`${guildLocale}`+"`", inline: true },
                { name: '群擁有者', value: `${ownerId}`, inline: true },
				{ name: '創建時間', value: "`"+`${guildJoinDate(timestamp)}`+"`", inline: true}

            )
			.addFields(
				{ name: ' ', value: ' '},
				{ name: '🔍 活躍相關', value: ' '},
				{ name: '不活躍頻道', value: `${afkChannelID}`, inline: true},
				{ name: '不活躍時限', value: "`"+`${afkTimeout}`+"`", inline: true},
				{ name: '\u200B', value: '\u200B', inline: true }
			)
			.addFields(
				{ name: ' ', value: ' '},
				{ name: '🔍 表符相關', value: ' '},
				{ name: '表符總數', value: "`"+`${guildemoji.size}`+"`", inline: true},
				{ name: '動態表符', value: "`"+`${guildemoji.gif}`+"`", inline: true },
				{ name: '靜態表符', value: "`"+`${guildemoji.png}`+"`", inline: true}
			)
			.setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });




		if (!commandCooldown.includes(interaction.channelId)){
			await interaction.reply({embeds: [commandResponse]});

			info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}'`);
			info(`${interaction.commandName} triggered, pushed channel ${interaction.channelId}(#${interaction.channel.name}) into cooldown list`);

            commandCooldown.push(interaction.channelId);
            commandCooldown.push(interaction.channel.name);

			setTimeout(function () {
				//pingCooldown = false;
				info(`command ${interaction.commandName} ended, dropped channel ${commandCooldown[0]}(#${commandCooldown[1]})`);
                commandCooldown.shift()
                commandCooldown.shift()

			}, 300000);   			
		} else {
			await interaction.reply({embeds: [commandResponse], ephemeral: true});
			info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}' (ephemeral)`)	
		}

			
	},
};
