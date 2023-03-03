const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const axios = require('axios').default;
//const { EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')
const { COIVDResponseSuccess,COIVDResponseFail } = require('./embed.js')

module.exports = {
	data: new SlashCommandBuilder()
			.setName('疫情查詢')
			.setDescription('抓取欲查詢地區的疫情資訊')
            .addStringOption(option =>
                option.setName('國家或地區')
                    .setDescription('填入你想查詢的國家或地區')
                    .setRequired(true)),
	async execute(interaction) {
        await interaction.deferReply();

        const country = interaction.options.getString('國家或地區')
        
        try {
            const res = await axios(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
            const data = res.data            
            await interaction.editReply({embeds: [await COIVDResponseSuccess(getDateTime(), data, interaction.user)]});
        } catch (error) {
            await interaction.editReply({embeds: [await COIVDResponseFail(getDateTime(), country, interaction.user)]})
        }


        



        //console.log(res)
        //console.log(interaction.user)
    }
}