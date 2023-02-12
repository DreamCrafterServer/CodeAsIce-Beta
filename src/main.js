const { Client, Events, GatewayIntentBits, EmbedBuilder, Embed, REST, Collection } = require('discord.js');
const dotenv = require('dotenv');

const { getDateTime, getTime, getDate} = require('./modules/time/getTime.js');
const { loadCommands } = require('./handler/loadCommands/loadCommands.js')

const { client } = require('./discord/bot.js')

dotenv.config()

client.once(Events.ClientReady,async () => {
    console.log(`[INFO] Ready! Logged in as ${client.user.tag}`)
    await loadCommands();
    console.log(`[INFO] all service loaded and online.`)
    console.log(`done!`)
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
		await interaction.reply({ content: '哎呀，處理這個指令的時候出錯了，請你聯絡開發者。', ephemeral: true });
	}
});

client.once('messageCreate',async (msg) => {
/*
    client.guilds.cache.forEach( (guild) => {
        console.log(guild)
        console.log(`${guild.name} | ${guild.memberCount} | ${guild.id}`)
        })
*/
    //const guild = await client.guilds.cache.get(guild.name)
    //console.log(guild)
    //msg.channel.send({embeds: [exampleEmbed3]})    
})

