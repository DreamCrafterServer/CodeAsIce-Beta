const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const axios = require('axios').default;
//const { EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')


module.exports = {
	data: new SlashCommandBuilder()
			.setName('猜數字')
			.setDescription('從1~100中猜一數字。系統每五分鐘將刷新一次數字，在此之前猜的都是同個數字。')
            .addStringOption(option =>
                option.setName('數字')
                    .setDescription('填入你想猜的數字')
                    .setRequired(true)),
	async execute(interaction) {
        
        
        //let number = await loadNumber()

        //console.log(global.number)
        await interaction.deferReply();

        const playerGuess = interaction.options.getString('數字')
        
        if(global.randomNumber == playerGuess){
            await interaction.editReply({embeds: [await correctNumber(getDateTime(), interaction.user, playerGuess, global.previousNumber)]})
        } else if ( global.randomNumber > playerGuess){
            await interaction.editReply({embeds: [await smallerNumber(getDateTime(), interaction.user, playerGuess, global.previousNumber)]})
        } else if ( global.randomNumber < playerGuess){
            await interaction.editReply({embeds: [await biggerNumber(getDateTime(), interaction.user, playerGuess, global.previousNumber)]})
        }

        //console.log(res)
        //console.log(interaction.user)
    }
}