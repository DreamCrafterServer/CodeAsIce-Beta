const { EmbedBuilder } = require('discord.js');


async function correctNumber(time, user, playerGuess, previousNumber){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 猜了一次數字`, iconURL: `${user.avatarURL()}` })
    .setDescription(`系統每五分鐘刷新一次數字，在此之前都可以猜該數字。\n根據紀錄，上一個數字為 \`${previousNumber}\`，是於 \`${global.numberUpdateTime}\` 更新的。`)
    .addFields(
        { name: `${user.username+'#'+user.discriminator} 猜了..`, value: `> ${playerGuess}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
    )
    .addFields(
        { name: '正確無誤。', value: ' '}
    )
    //.setDescription(`該地區總確診數 ${data.cases}`)
    //.setThumbnail(`${data.countryInfo.flag}`)
    .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });

}

async function biggerNumber(time, user, playerGuess, previousNumber){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 猜了一次數字`, iconURL: `${user.avatarURL()}` })
    .setDescription(`系統每五分鐘刷新一次數字，在此之前都可以猜該數字。\n根據紀錄，上一個數字為 \`${previousNumber}\`，是於 \`${global.numberUpdateTime}\` 更新的。`)
    .addFields(
        { name: `${user.username+'#'+user.discriminator} 猜了..`, value: `> ${playerGuess}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
    )
    .addFields(
        { name: '數字過大。', value: ' '}
    )
    //.setDescription(`該地區總確診數 ${data.cases}`)
    //.setThumbnail(`${data.countryInfo.flag}`)
    .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });

}

async function smallerNumber(time, user, playerGuess, previousNumber){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 猜了一次數字`, iconURL: `${user.avatarURL()}` })
    .setDescription(`系統每五分鐘刷新一次數字，在此之前都可以猜該數字。\n根據紀錄，上一個數字為 \`${previousNumber}\`，是於 \`${global.numberUpdateTime}\` 更新的。`)
    .addFields(
        { name: `${user.username+'#'+user.discriminator} 猜了..`, value: `> ${playerGuess}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
    )
    .addFields(
        { name: '數字過小。', value: ' '}
    )
    //.setDescription(`該地區總確診數 ${data.cases}`)
    //.setThumbnail(`${data.countryInfo.flag}`)
    .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });

}

module.exports = {
    smallerNumber: smallerNumber,
    biggerNumber: biggerNumber,
    correctNumber: correctNumber
}