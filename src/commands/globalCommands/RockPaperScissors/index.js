const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const { drawResponse, lostResponse, winResponse } = require('./embed.js')
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js');
const bot = require('../../../discord/bot.js');

module.exports = {
	data: new SlashCommandBuilder()
			.setName('猜拳遊戲')
			.setDescription('和機器人比猜拳。')
            .addStringOption(option =>
                option.setName('選項')
                    .setDescription('剪刀、石頭、布')
                    .setRequired(true)
                    .addChoices(
                        { name: '剪刀', value: 'Scissors' },
                        { name: '石頭', value: 'Rock' },
                        { name: '布', value: 'Paper' },
                    )),
	async execute(interaction) {
        await interaction.deferReply();
        const playerResult = interaction.options.data[0].value;
        const user = interaction.user
        //botResult = 'Paper'
        const botChoice = ['Paper', 'Scissors', 'Rock'];
        const randomChoose = Math.floor(Math.floor(Math.random() * 10)%3);

        const botResult = botChoice[randomChoose];
        //console.log(playerResult, botResult)
        if(playerResult == botResult){
            //await interaction.editReply({content: "test"})
            await interaction.editReply({embeds: [await drawResponse(getDateTime(), interaction.user, playerResult, botResult)]});
            info(`${user.username+'#'+user.discriminator} 向機器人發起挑戰，他出了 ${playerResult}；機器人出了 ${botResult}。 平手`)
        }
        if( ((playerResult == 'Scissors') && (botResult == 'Rock')) || 
            ((playerResult == 'Rock') && (botResult == 'Paper')) ||
            ((playerResult == 'Paper') && (botResult == 'Scissors'))  ){
                await interaction.editReply({embeds: [await lostResponse(getDateTime(), interaction.user, playerResult, botResult)]})
                info(`${user.username+'#'+user.discriminator} 向機器人發起挑戰，他出了 ${playerResult}；機器人出了 ${botResult}。 機器人贏`)
        }
        if( ((botResult == 'Scissors') && (playerResult == 'Rock')) || 
            ((botResult == 'Rock') && (playerResult == 'Paper')) ||
            ((botResult == 'Paper') && (playerResult == 'Scissors'))  ){
                await interaction.editReply({embeds: [await winResponse(getDateTime(), interaction.user, playerResult, botResult)]})
                info(`${user.username+'#'+user.discriminator} 向機器人發起挑戰，他出了 ${playerResult}；機器人出了 ${botResult}。 玩家贏`)
        }        
        //console.log(botChoice)
    }
}