const { EmbedBuilder, Embed } = require('discord.js');

async function responseSuccess(time, reply, keyWord, userName, avatarURL){

    const randomTitle = ['江郎才盡', '掰不下去了']
    const randomChoose = Math.floor(Math.floor(Math.random() * 10)%2);
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${userName} ${randomTitle[randomChoose]}，想唬爛一些東西`, iconURL: `${avatarURL}` })
        .setDescription('他的關鍵字：'+'```'+ keyWord +'```'+'\n以下生成器所回傳的內容。\n```\n'+ reply +'\n```')

        .setFooter({ text: `DreamCrafter 築夢物語 技術整合提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}

async function responseFail(time){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setDescription(`系統無法得到回應。`)
        .setFooter({ text: `DreamCrafter 築夢物語 技術整合提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}



module.exports = {
    responseSuccess: responseSuccess,
    responseFail: responseFail

}