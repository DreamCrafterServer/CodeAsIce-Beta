const { Client, Events, GatewayIntentBits, EmbedBuilder, Embed, REST, Collection } = require('discord.js');
const dotenv = require('dotenv');
const { registerGlobalCommands, registerGroupCommands } = require('./deploy-commands.js')

//const dotenv = require('../../src')
//dotenv.config({path:'../'})

require('dotenv').config();

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers
    ]
});

async function startUpProcess(){
    const status_global = await registerGlobalCommands();
    const status_group = await registerGroupCommands();
    bot.login(process.env.TOKEN);
}

startUpProcess();

//bot.login(process.env.TOKEN)


module.exports = {
    client: bot
}