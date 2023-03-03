const { EmbedBuilder } = require('discord.js');

function winResponse(time, user, playerResult, botResult){
    if(playerResult == 'Paper'){
        playerResult = ':hand_splayed: 布'
    } else if(playerResult == 'Scissors'){
        playerResult = ':v: 剪刀'
    } else if(playerResult == 'Rock'){
        playerResult = ':fist: 石頭'
    } 
    if(botResult == 'Paper'){
        botResult = ':hand_splayed: 布'
    } else if(botResult == 'Scissors'){
        botResult = ':v: 剪刀'
    } else if(botResult == 'Rock'){
        botResult = ':fist: 石頭'
    } 
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 向機器人發起了挑戰`, iconURL: `${user.avatarURL()}` })
        .setDescription('\n猜拳是一種鬥智鬥勇的遊戲.. \n可以透過判斷對方神情決定出拳。\n但在這裡，你無從判斷！')
        .addFields(
            { name: '玩家出了..', value: `> ${playerResult}`, inline: true },
            //{ name: '\u200B', value: '\u200B' },
            { name: '機器人出了..', value: `> ${botResult}`, inline: true},
        )
        .addFields(
            { name: '這局結果為玩家勝出。', value: ' '}
        )
        .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}

function lostResponse(time, user, playerResult, botResult){
    if(playerResult == 'Paper'){
        playerResult = ':hand_splayed: 布'
    } else if(playerResult == 'Scissors'){
        playerResult = ':v: 剪刀'
    } else if(playerResult == 'Rock'){
        playerResult = ':fist: 石頭'
    } 
    if(botResult == 'Paper'){
        botResult = ':hand_splayed: 布'
    } else if(botResult == 'Scissors'){
        botResult = ':v: 剪刀'
    } else if(botResult == 'Rock'){
        botResult = ':fist: 石頭'
    } 
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 向機器人發起了挑戰`, iconURL: `${user.avatarURL()}` })
        .setDescription('\n猜拳是一種鬥智鬥勇的遊戲.. \n可以透過判斷對方神情決定出拳。\n但在這裡，你無從判斷！')
        .addFields(
            { name: '玩家出了..', value: `> ${playerResult}`, inline: true },
            //{ name: '\u200B', value: '\u200B' },
            { name: '機器人出了..', value: `> ${botResult}`, inline: true},
        )
        .addFields(
            { name: '這局結果為機器人勝出。', value: ' '}
        )
        .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}

async function drawResponse(time, user, playerResult, botResult){
    if(playerResult == 'Paper'){
        playerResult = ':hand_splayed: 布'
    } else if(playerResult == 'Scissors'){
        playerResult = ':v: 剪刀'
    } else if(playerResult == 'Rock'){
        playerResult = ':fist: 石頭'
    } 
    if(botResult == 'Paper'){
        botResult = ':hand_splayed: 布'
    } else if(botResult == 'Scissors'){
        botResult = ':v: 剪刀'
    } else if(botResult == 'Rock'){
        botResult = ':fist: 石頭'
    } 
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 向機器人發起了挑戰`, iconURL: `${user.avatarURL()}` })
        .setDescription('\n猜拳是一種鬥智鬥勇的遊戲.. \n可以透過判斷對方神情決定出拳。\n但在這裡，你無從判斷！')
        .addFields(
            { name: '玩家出了..', value: `> ${playerResult}`, inline: true },
            //{ name: '\u200B', value: '\u200B' },
            { name: '機器人出了..', value: `> ${botResult}`, inline: true},
        )
        .addFields(
            { name: '這局結果為平手。無人勝出。', value: ' '}
        )
        .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}

module.exports = {
    drawResponse: drawResponse,
    lostResponse: lostResponse,
    winResponse: winResponse
}