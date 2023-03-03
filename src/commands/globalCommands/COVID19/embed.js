const { EmbedBuilder } = require('discord.js');

async function COIVDResponseSuccess(time ,data, user){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 查詢了 ${data.country} 的疫情資訊`, iconURL: `${user.avatarURL()}` })
        .setDescription(`以下是我們查詢到該地區的相關資料`)
        .addFields(
            { name: '總人口數', value: `> \`${data.population}\``},
            { name: '總確診數', value: `> \`${data.cases}\``, inline: true},
            { name: '總死亡數', value: `> \`${data.deaths}\``, inline: true},
            { name: '總康復數', value: `> \`${data.recovered}\``, inline: true},
            { name: '今日確診數', value: `> \`${data.todayCases}\``, inline: true},
            { name: '今日死亡數', value: `> \`${data.todayDeaths}\``, inline: true},
            { name: '今日康復數', value: `> \`${data.todayRecovered}\``, inline: true}
            //{ name: '不活躍時限', value: "`"+`${afkTimeout}`+"`", inline: true},
            //{ name: '\u200B', value: '\u200B', inline: true }
        )
        //.setDescription(`該地區總確診數 ${data.cases}`)
        .setThumbnail(`${data.countryInfo.flag}`)
        .setFooter({ text: `DreamCrafter 築夢物語 技術整合提供 (資訊提供：disease.sh) • ${time}\n資料均為第三手或更多手資料，絕對非即時資訊，不具參考價值`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });

}

async function COIVDResponseFail(time ,country , user){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 查詢了 ${country} 的疫情資訊`, iconURL: `${user.avatarURL()}` })
    .setDescription(`我們無法從您所指定的國家或地區中查詢\n到相關資料，請確認是否輸入正確。`)

    //.setDescription(`該地區總確診數 ${data.cases}`)
    //.setThumbnail(`${data.countryInfo.flag}`)
    .setFooter({ text: `DreamCrafter 築夢物語 技術整合提供 (資訊提供：disease.sh) • ${time}\n資料均為第三手或更多手資料，絕對非即時資訊，不具參考價值`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });

}

module.exports = {
    COIVDResponseSuccess: COIVDResponseSuccess,
    COIVDResponseFail: COIVDResponseFail
}