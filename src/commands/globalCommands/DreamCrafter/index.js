const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const { getDateTime } = require('../../../modules/time/getTime.js')
const { info } = require('../../../modules/consoleMsg/console.js')

let commandCooldown = []

//TL;DR anti-spam explaination.
//I cached the channel which just triggered a slash command and also channel name for console showing
//when the cooldown finished, clear first two value in commandCooldown array
//that's how it works!

module.exports = {
	data: new SlashCommandBuilder()
		.setName('築夢物語')
		.setDescription('顯示我家鄉的相關資訊。'),

	async execute(interaction) {
        let time = getDateTime()

		const commandResponse = new EmbedBuilder()
            .setColor(0x0099FF)
            .setAuthor({ name: '築夢物語 -- Minecraft 綜合伺服器', iconURL: 'https://cdn.discordapp.com/avatars/1018948444653633588/9525e6bae590bfe158d22f2b607608b9.webp?size=4096&width=554&height=554' })
            .setDescription('\n我們成立於 2015 年。隨後便穩定營運至今，擁有 6 年營運經驗。\n 主要營運休閒麥塊伺服器，包括天空島、生存、建築伺服器。\n致力於提供每位玩家穩定、有趣的麥塊體驗。')
            .addFields(
                { name: '⭐ 伺服器資訊', value: '> 不多，就這些而已！' },
                //{ name: '\u200B', value: '\u200B' },
                { name: '正版驗證', value: '開啟', inline: true},
                { name: '連線版本', value: '1.19.2-1.19.3', inline: true},
                { name: '運行時間', value: '24HR', inline: true},
                { name: '連線位址(自動)', value: 'mc.letsdream.today', inline: true },
                { name: '連線位址(臺灣)', value: 'tw.letsdream.today', inline: true },
                { name: '基岩連線', value: '沒有支援！', inline: true},
                { name: '⭐ 社群平台', value: '> 我們主要在 Discord 上交流或通知'},
                { name: 'Facebook', value: '[點我前往](https://dcraft.org/facebook)', inline: true },
                { name: 'Instagram', value: '[點我前往](https://dcraft.org/instagram)', inline: true },		
                { name: 'Discord', value: '[點我前往](https://discord.com/invite/as77uKwjyV)', inline: true}
            )
            .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });

        const commandResponse2 = new EmbedBuilder()
            .setColor(0x0099FF)
            .setImage('https://images-ext-2.discordapp.net/external/yOxnmyLPaMqERy2_LDn6KpUz5WabQvPl4V9Y0QFIKC0/https/imgur.com/QEqklT3.gif')

		if (!commandCooldown.includes(interaction.channelId)){
			await interaction.reply({embeds: [commandResponse2,commandResponse]});

            //console.log(channelName)
			info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}`);
			info(`${interaction.commandName} triggered, pushed channel ${interaction.channelId}(#${interaction.channel.name}) into cooldown list`);
			
            commandCooldown.push(interaction.channelId); 
            commandCooldown.push(interaction.channel.name);  
            
            //pingCooldown = true;
			setTimeout(function () {
				
                //pingCooldown = false;
				info(`command ${interaction.commandName} ended, dropped channel ${commandCooldown[0]}(#${commandCooldown[1]})`);
                commandCooldown.shift()
                commandCooldown.shift()

			}, 300000);   			
		} else {
			await interaction.reply({embeds: [commandResponse2,commandResponse], ephemeral: true});
			info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}' (ephemeral)`)	
		}


		//console.log(`[INFO] ${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}'`)		
	},
};