const fs = require('node:fs');
const path = require('node:path');
const fg = require('fast-glob')
const { Client, Collection, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');

const { client } = require('../../discord/bot.js')
const { info, warn } = require('../../modules/consoleMsg/console.js')

//const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

async function loadGlobalCommands(){

    const commandsPath = path.join(__dirname, '../../commands/globalCommands');
    const commandFiles = fs.readdirSync(commandsPath)//.filter(file => file.endsWith('.js'));
    
    //console.log(commandFiles)


	info(`---- Global Commands Loading ----`)

	for( i=0 ; i<commandFiles.length ; i++){
		const cmd = await require(`../../commands/globalCommands/${commandFiles[i]}/index.js`)

		info(`command '${cmd.data.name}' loaded!`)

    	if ('data' in cmd && 'execute' in cmd) {
		    client.commands.set(cmd.data.name, cmd);
	    } else {
    		warn(`The command at ${files} is missing a required "data" or "execute" property.`);
    	}		
	
	}

	info(`---- ---- ---- ---- ---- ---- ----`)		
	info(`all global commands loaded`)
	/*
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
	*/
}

async function loadGroupCommands(){
    
	//const a = require('../../')
	//const files = await fg('./commands/groupCommands/**/index.js')

    const commandsPath = path.join(__dirname, '../../commands/groupCommands');
    const commandFiles = fs.readdirSync(commandsPath)

	info(`---- Group Commands Loading ----`)

	for( i=0 ; i<commandFiles.length ; i++){
		const cmd = await require(`../../commands/groupCommands/${commandFiles[i]}/index.js`)

		info(`command '${cmd.data.name}' loaded!`)

    	if ('data' in cmd && 'execute' in cmd) {
		    client.commands.set(cmd.data.name, cmd);
	    } else {
    		warn(`The command at ${files} is missing a required "data" or "execute" property.`);
    	}		
	
	}

	/*
	for(const file of files){
		const cmd = await require(`../.${file}`)

		info(`command '${cmd.data.name}' loaded!`)

    	if ('data' in cmd && 'execute' in cmd) {
		    client.commands.set(cmd.data.name, cmd);
	    } else {
    		warn(`The command at ${files} is missing a required "data" or "execute" property.`);
    	}		
	
	}*/
	info(`---- ---- ---- ---- ---- ---- ----`)		
	info(`all group commands loaded`)

}

async function loadCommands(){
	await loadGlobalCommands();
	await loadGroupCommands();
}


module.exports = {
    loadCommands: loadCommands
}
