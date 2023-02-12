const { Client, Events, GatewayIntentBits, EmbedBuilder, Embed, REST, Collection } = require('discord.js');
const dotenv = require('dotenv');
const { initialize } = require('./deploy-commands.js')

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

initialize();

bot.login(process.env.TOKEN)


module.exports = {
    client: bot
}