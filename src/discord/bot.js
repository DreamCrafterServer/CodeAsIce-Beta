const { Client, Events, GatewayIntentBits, EmbedBuilder, Embed, REST, Collection } = require('discord.js');
const dotenv = require('dotenv');
const { initialize } = require('./deploy-commands.js')

//const dotenv = require('../../src')
//dotenv.config({path:'../'})

require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers
    ]
});

initialize();

client.login(process.env.TOKEN)
//client.login('OTU3MjEwNzM4NTY3NTQ4OTU5.GVBh8-.r4UjDSEjYEtJhFAHlcMHVcstvwLlCLZWW01zHY')
/*
client.once(Events.ClientReady,async () => {
    console.log(`Ready! Logged in as ${client.user.tag}`)

})
*/
module.exports = {
    client: client
}