const { REST, Routes } = require('discord.js');
const fg = require('fast-glob');
const dotenv = require('dotenv');

const { info } = require('../modules/consoleMsg/console.js')

require('dotenv').config();

//console.log(process.env.client, process.env.guild)

//const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const internal = require('node:stream');

async function registerGlobalCommands(){
    const commands = []
    //const path = require('../commands/globalCommands')
    const commandsPath = path.join(__dirname, '../commands/globalCommands');
    const commandFiles = fs.readdirSync(commandsPath)//.filter(file => file.endsWith('.js'));
    
    for( i=0 ; i<commandFiles.length ; i++){
        const command = await require(`../commands/globalCommands/${commandFiles[i]}/index.js`)
        //console.log(command.data)
        commands.push(command.data.toJSON());
    }

    //console.log(commandFiles)
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    /*
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }
    */

//    const commands = []
//    const files = await fg('./commands/globalCommands/**/index.js')
//    //const files = await fg('../src/commands/globalCommands/**/index.js')
//    console.log(files)
//    for (const file of files){
//        const cmd = await require(`.${file}`)
//        commands.push(cmd.data)
//    }   

    // Construct and prepare an instance of the REST module
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    // and deploy your commands!
    await (async () => {
        try {
            info(`---- Global Commands Reistering ----`)
            info(`Started refreshing ${commands.length} application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(
                Routes.applicationCommands(process.env.client),
                { body: commands },
            );

            info(`Successfully reloaded ${data.length} application (/) commands.`);
            info(`---- ---- ---- ---- ---- ---- ----`)
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    })();

    return 'global command registered'
}

async function registerGroupCommands(){
    const commands = []

    const commandsPath = path.join(__dirname, '../commands/groupCommands');
    const commandFiles = fs.readdirSync(commandsPath)//.filter(file => file.endsWith('.js'));
    
    for( i=0 ; i<commandFiles.length ; i++){
        const command = await require(`../commands/groupCommands/${commandFiles[i]}/index.js`)
        //console.log(command.data)
        commands.push(command.data.toJSON());
    }    


//    const files = await fg('./commands/groupCommands/**/index.js')
//    
//    for (const file of files){
//        const cmd = await require(`.${file}`)
//        commands.push(cmd.data)
//    }   

    // Construct and prepare an instance of the REST module
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    // and deploy your commands!
    await (async () => {
        try {
            info(`---- Group Commands Registering ----`)
            info(`Started refreshing ${commands.length} application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(
                Routes.applicationGuildCommands(process.env.client, process.env.guild),
                { body: commands },
            );

            info(`Successfully reloaded ${data.length} application (/) commands.`);
            info(`---- ---- ---- ---- ---- ---- ----`)
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    })();
    
    return 'group commands registered'
}


module.exports = {
    registerGlobalCommands: registerGlobalCommands,
    registerGroupCommands: registerGroupCommands
}
