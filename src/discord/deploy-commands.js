const { REST, Routes } = require('discord.js');
//const abc = require('../commands')
const dotenv = require('dotenv');
require('dotenv').config();

//console.log(process.env.client, process.env.guild)

//const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const internal = require('node:stream');

async function initialize(){
    const commands = [];
    const commandsPath = path.join(__dirname, '../commands');
    // Grab all the command files from the commands directory you created earlier
    const commandFiles = fs.readdirSync(commandsPath)//.filter(file => file.endsWith('.js'));

    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        commands.push(command.data.toJSON());
    }

    // Construct and prepare an instance of the REST module
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    // and deploy your commands!
    (async () => {
        try {
            console.log(`[INFO] Started refreshing ${commands.length} application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(
                Routes.applicationGuildCommands(process.env.client, process.env.guild),
                { body: commands },
            );

            console.log(`[INFO] Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    })();
}

module.exports = {
    initialize: initialize
}
