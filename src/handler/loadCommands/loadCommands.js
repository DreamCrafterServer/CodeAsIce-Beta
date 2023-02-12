const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');

const { client } = require('../../discord/bot.js')

//const client = new Client({ intents: [GatewayIntentBits.Guilds] });

function loadCommands(){
    client.commands = new Collection();

    const commandsPath = path.join(__dirname, '../../commands');

    const commandFiles = fs.readdirSync(commandsPath)

    for (const file of commandFiles) {
        
    	const filePath = path.join(commandsPath, file);    
	    const command = require(filePath);
        console.log(`[INFO] command '${command.data.name}' loaded!`)
    	// Set a new item in the Collection with the key as the command name and the value as the exported module
    	if ('data' in command && 'execute' in command) {
		    client.commands.set(command.data.name, command);
	    } else {
    		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    	}
    }
}

module.exports = {
    loadCommands: loadCommands
}