const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const { convertPatternGroupToTask } = require('fast-glob/out/managers/tasks.js');
const axios = require('axios').default;
//const { EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')
const { responseFail, responseSuccess } = require('./embed.js')

module.exports = {
	data: new SlashCommandBuilder()
			.setName('人生解答')
			.setDescription('為你解答一些問題。')
            .addStringOption(option =>
                option.setName('問句')
                    .setDescription('填入你的問題')
                    .setRequired(true)),            
	async execute(interaction) {
        const question = interaction.options.getString('問句')
        await interaction.deferReply();
        let data = null
        let converted_data = null
        let userName = interaction.user.username +'#'+ interaction.user.discriminator
        //取得答案
        try {
            const res = await axios(`http://ovooa.org/API/daan/`) 
            data = res.data.data.zh
        } catch (error) {
            console.log(error)
            await interaction.editReply({embeds: [await responseFail(getDateTime())]});
            return    
        }      
        //簡繁轉換
        try {
            const res = await axios(`https://api.zhconvert.org/convert?converter=Taiwan&text=${data}&prettify=1`)    
            converted_data = res.data.data.text
            await interaction.editReply({embeds: [await responseSuccess(getDateTime(), converted_data, question, userName, interaction.user.avatarURL())]})
        } catch (error) {
            console.log(error)
            await interaction.editReply({embeds: [await responseFail(getDateTime())]});
            return   
        }
    }
}