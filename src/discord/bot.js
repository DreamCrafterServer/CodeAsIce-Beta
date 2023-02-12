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

//initialize();

//bot.login(process.env.TOKEN)
bot.login('OTU3MjEwNzM4NTY3NTQ4OTU5.G19wfn.CG0KJ3xvs7uIW6gRQ13qOq28a6ZbkoVrms0jBE')

module.exports = {
    client: bot
}