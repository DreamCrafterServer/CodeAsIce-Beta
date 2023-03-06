const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const { convertPatternGroupToTask } = require('fast-glob/out/managers/tasks.js');
const axios = require('axios').default;
//const { EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')
const { responseFail, responseSuccess } = require('./embed.js')

module.exports = {
	data: new SlashCommandBuilder()
			.setName('唬爛生成器')
			.setDescription('為你唬爛一些事情。')
            .addStringOption(option =>
                option.setName('關鍵字')
                    .setDescription('填入關鍵字')
                    .setRequired(true))  
            .addStringOption(option =>
                option.setName('字數')
                    .setDescription('選取希望產生的字數')
                    .setRequired(true)
                    .addChoices(
                        { name: '100字', value: '100' },
                        { name: '200字', value: '200' },
                        { name: '300字', value: '300' },
            )),
	async execute(interaction) {
        const keyWord = interaction.options.getString('關鍵字')
        const num = interaction.options.data[0].value;

        await interaction.deferReply();
        let data = null
        let converted_data = null
        let userName = interaction.user.username +'#'+ interaction.user.discriminator
        //取得結果
        try {
            const res = await axios(`https://ovooa.org/API/dog/api.php?msg=${keyWord}&num=${num}&type=text`)
            console.log(res.data) 
            data = res.data
        } catch (error) {
            console.log(error)
            await interaction.editReply({embeds: [await responseFail(getDateTime())]});
            return    
        }      
        //簡繁轉換
        try {
            const res = await axios(`https://api.zhconvert.org/convert?converter=Taiwan&text=${data}&prettify=1`)    
            converted_data = res.data.data.text
            await interaction.editReply({embeds: [await responseSuccess(getDateTime(), converted_data, keyWord, userName, interaction.user.avatarURL())]})
        } catch (error) {
            console.log(error)
            await interaction.editReply({embeds: [await responseFail(getDateTime())]});
            return   
        }
    }
}