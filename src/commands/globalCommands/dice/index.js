const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const axios = require('axios').default;
//const { EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')


module.exports = {
	data: new SlashCommandBuilder()
			.setName('擲骰子')
			.setDescription('給你一個一到六的數字。'),
	async execute(interaction) {
        
        await interaction.deferReply();

        const diceChoice = [1,2,3,4,5,6];
        const randomChoose = Math.floor(Math.floor(Math.random() * 100)%6);

        info(`${interaction.user.username+'#'+ interaction.user.discriminator} drooped a dice. And it just got ${diceChoice[randomChoose]}`)
        
        const diceImg = [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1200px-Dice-3-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2048px-Dice-5-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png'
        ]
        //let number = await loadNumber()
        //console.log(global.number)  

        function response(time){
            return new EmbedBuilder()
            .setColor(0x0099FF)
            .setAuthor({ name: `${interaction.user.username+'#'+ interaction.user.discriminator} 擲了骰子`, iconURL: `${interaction.user.avatarURL()}` })
            .setDescription('骰子投出了. . ' + '`' + diceChoice[randomChoose]+ '`')
            .setThumbnail(diceImg[diceChoice[randomChoose]-1])
            .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });    
        }
    
        await interaction.editReply({embeds: [await response(getDateTime())]})

        //console.log(res)
        //console.log(interaction.user)
    }
}