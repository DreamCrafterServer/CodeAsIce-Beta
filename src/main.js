const { Client, Events, GatewayIntentBits, EmbedBuilder, Embed, REST, Collection } = require('discord.js');
const dotenv = require('dotenv');

const { getDateTime, getTime, getDate} = require('./modules/time/getTime.js');
const { loadCommands } = require('./handler/loadCommands/loadCommands.js')

const { client } = require('./discord/bot.js')
//const { initilize } = require('./discord/deploy-commands.js')

dotenv.config()
/*
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers
    ]
});
*/
//client.commands = new Collection();

//console.log(process.env.TOKEN)
//client.login(process.env.TOKEN)

client.once(Events.ClientReady,async () => {
    console.log(`[INFO] Ready! Logged in as ${client.user.tag}`)
    //DiscordMessage = await getDiscordMessage()
    //console.log(DiscordMessage)
    //DiscordMessage.edit({embeds: [ exampleEmbed, exampleEmbed2]})
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


const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  async function getDiscordMessage(){
    try{
        const annouceChannel = await client.channels.cache.get("1021056605241999380");
    	const message = await annouceChannel.messages.fetch("1021057429473087598");
        return message;
    }
    catch(error){
        console.log("Status message not found! Commit seppuku!!");
        process.exit();
    }
}


const exampleEmbed = new EmbedBuilder()
	.setColor('#238fe8')
	//.setTitle('請你使用「Discord 斜線指令」來正確的輸入你正在嘗試的指令')
	//.setURL('https://discord.js.org/')
	//.setAuthor({ name: '錯誤的使用方式！                        點圖放大 →', iconURL: 'https://cdn.discordapp.com/emojis/495858574422048768.webp?size=96&quality=lossless' })
	//.setDescription('讓我們一步一步慢慢來吧！\n1) 在聊天室輸入一個 `/` 。\n2) 這時會有指令列表出現，請你選取小冰的頭像，點她。\n3) 找到`/dlevel` 的指令。\n4) 點他後依照引導輸入。\n5) 完成。恭喜你學會如何使用斜線指令！👍')
	//.setThumbnail('https://cdn.discordapp.com/attachments/864837508335140894/1070757317546606672/01_26_14_Discord.gif')
    //.setImage('https://cdn.discordapp.com/attachments/864837508335140894/1070757317546606672/01_26_14_Discord.gif')
    //.setThumbnail('https://cdn.discordapp.com/attachments/1067814978402398288/1068143070371135528/image.png')
	//.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://cdn.discordapp.com/attachments/964158023243296838/1073466572682825840/Banner_DCdiscord-1.png')
	//.setTimestamp()
	//.setFooter({ text: 'DreamCrafter 築夢物語', iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });

const exampleEmbed2 = new EmbedBuilder()
    .setColor('#238fe8')
    //.setImage('https://cdn.discordapp.com/attachments/964158023243296838/1073466572682825840/Banner_DCdiscord-1.png')
    .setTitle('🔒伺服器分流聊天室解鎖')
    .setDescription('無法在 <#339420387748085761> <#352167772962160661> <#373424397681164289> 輸入文字？\n以上聊天室均需要綁定才可使用！\n\n詳細教學可依下連結操作\n**Discord 連接 MC 伺服器聊天室**\n> [築夢論壇 - 圖文教學](https://forum.letsdream.today/threads/414/)\n> [YouTube - 影片教學](https://www.youtube.com/watch?v=975doOZ5NOc)\n\n※在綁定此系統後，將自動與積分系統做連結，\n完成後即可使用積分系統。')
    .setFooter({ text: 'DreamCrafter 築夢物語', iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });

    //channel.send({ embeds: [exampleEmbed] });

const exampleEmbed3 = new EmbedBuilder()
    .setColor('Random')
    //.setImage('https://cdn.discordapp.com/attachments/744732938557718572/1073939528068378624/220px-Achtung.png')
    .setAuthor({name:'偵測到錯誤的指令方式', iconURL: 'https://cdn.discordapp.com/attachments/744732938557718572/1073939528068378624/220px-Achtung.png'})
    .setDescription('看起來您想要在Discord上使用 「`/discork link`」\n但這個指令是遊戲內專屬的！\n請您移駕至遊戲內輸入。')
    .setFooter({ text: 'DreamCrafter 築夢物語', iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
    
client.once('messageCreate', (msg) => {
    console.log(msg.channelId)
    msg.channel.send({embeds: [exampleEmbed3]})    
})


//console.log(dotenv.config())