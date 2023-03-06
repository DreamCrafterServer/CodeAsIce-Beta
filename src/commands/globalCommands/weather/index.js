const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const axios = require('axios').default;
//const { EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')
const { responseSuccess, responseFail } = require('./embed.js')

module.exports = {
	data: new SlashCommandBuilder()
			.setName('氣候查詢')
			.setDescription('查詢未來三十六小時的縣市天氣資訊')
            .addStringOption(option =>
                option.setName('地區')
                    .setDescription('選取欲查詢的縣市')
                    .setRequired(true)
                    .addChoices(
                        { name: '宜蘭縣', value: '宜蘭縣' },
                        { name: '花蓮縣', value: '花蓮縣' },
                        { name: '臺東縣', value: '臺東縣' },
                        { name: '澎湖縣', value: '澎湖縣' },
                        { name: '金門縣', value: '金門縣' },
                        { name: '連江縣', value: '連江縣' },
                        { name: '臺北縣', value: '臺北縣' },
                        { name: '新北市', value: '新北市' },
                        { name: '桃園市', value: '桃園市' },
                        { name: '臺中市', value: '臺中市' },
                        { name: '臺南市', value: '臺南市' },
                        { name: '高雄市', value: '高雄市' },
                        { name: '臺東縣', value: '臺東縣' },
                        { name: '基隆市', value: '基隆市' },
                        { name: '新竹縣', value: '新竹縣' },
                        { name: '新竹市', value: '新竹市' },
                        { name: '苗栗縣', value: '苗栗縣' },
                        { name: '彰化縣', value: '彰化縣' },
                        { name: '南投縣', value: '南投縣' },
                        { name: '雲林縣', value: '雲林縣' },
                        { name: '嘉義縣', value: '嘉義縣' },
                        { name: '嘉義市', value: '嘉義市' },
                        { name: '屏東縣', value: '屏東縣' },
                    )),
	async execute(interaction) {
        await interaction.deferReply();
        const user = interaction.user
        const userLocation = interaction.options.data[0].value;

        
        try {
            const res = await axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001`,{
                params: {
                    Authorization: process.env.weatherAPI,
                    locationName: userLocation
                }
            })
            let data = res.data.records
            // 氣候
            let dataWx = data.location[0].weatherElement[0].time
            // 降水機率
            let dataPoP = data.location[0].weatherElement[1].time
            // 最低溫度
            let dataMinT  = data.location[0].weatherElement[2].time
            // 舒適度
            let dataCI = data.location[0].weatherElement[3].time
            // 最高溫度
            let dataMaxT = data.location[0].weatherElement[4].time

            //console.log(dataWx.time.item0)
            await interaction.editReply({embeds: [await responseSuccess(getDateTime(), user, data, dataWx, dataPoP, dataMinT, dataCI, dataMaxT)]})
           
        } catch (error) {
            await interaction.editReply({embeds: [await responseFail(getDateTime(), user, userLocation)]})
            //console.log(error)
        }


        



        //console.log(res)
        //console.log(interaction.user)
    }
}