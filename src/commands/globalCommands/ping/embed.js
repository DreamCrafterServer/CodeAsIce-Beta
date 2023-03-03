const { EmbedBuilder } = require('discord.js');
const os = require("os");
const { cpuUsage } = require('process');
const { client } = require('../../../discord/bot.js')
const { getCpu, getMemory, getSystem } = require('../../../modules/getSystemInformation/getSystemInformation.js')

async function pingResponseIntroduce(time){
    let cpu = await getCpu();
    let mem = await getMemory();
    let sys = await getSystem();

    return new EmbedBuilder()
		.setColor(0x0099FF)
		.setAuthor({ name: '嗨 你好!', iconURL: 'https://cdn.discordapp.com/avatars/1018948444653633588/9525e6bae590bfe158d22f2b607608b9.webp?size=4096&width=554&height=554' })
		.setDescription('我是由 <@192995817626402818> 所主導開發的 Discord 機器人，\n是其第一代重頭開始撰寫的第一個正式開源專案，\n所以是個試驗品！可能會有點瑕疵。\n而我呢，叫做小冰，初次見面，您好！')
        .addFields(
            { name: '⭐ 開發資訊', value: ' ' },
            //{ name: '\u200B', value: '\u200B' },
            { name: '<:mgwand:964155420514091008>開發、維護者', value: '> jack4444\n> billyovo', inline: true},
            { name: ':gear: 運行版本', value: '> 第三代 *𝐈𝐂𝐄 𝐆𝐄𝐍𝟑* \n> ||打掉重練二次||', inline: true},
            { name: '⭐ 相關資源', value: ' '},
            { name: 'Discord 社群', value: '> [點我前往](https://discord.com/invite/as77uKwjyV)', inline: true},
            { name: 'Github 開源碼', value: '> [點我前往](https://github.com/DreamCrafterServer/CodeAsIce-Beta)', inline: true},
            { name: '⭐ 系統資訊', value: ' '},
            { name: '系統延遲', value: `> ${client.ws.ping}`, inline: true},
            { name: '運行系統', value: `> ${sys.OSPlatform}`, inline: true},
            { name: '運行時間', value: `> ${sys.OSUptime}`, inline: true},
            { name: '使用處理器', value: `> ${cpu.cpuModel}`,},
            { name: '處理器核心數', value: `> ${cpu.cpuCores}`, inline: true},
            { name: '處理器使用率', value: `> ${cpu.cpuUsage} %`, inline: true},
            { name: '系統記憶體用量', value: `> ${mem.memUsage.usedMemMb} / ${mem.memUsage.totalMemMb}`}
            //{ name: ''}
        )        
		.setFooter({ text: `DreamCrafter 築夢物語 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}
//await getCpu();
//await getMemory();
//await getSystem();
//console.log(await getMemory())
function pingResponseDC1(time){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: '築夢物語 -- Minecraft 綜合伺服器', iconURL: 'https://cdn.discordapp.com/avatars/1018948444653633588/9525e6bae590bfe158d22f2b607608b9.webp?size=4096&width=554&height=554' })
        .setDescription('\n我們成立於 2015 年。隨後便穩定營運至今，擁有 6 年營運經驗。\n 主要營運休閒麥塊伺服器，包括天空島、生存、建築伺服器。\n致力於提供每位玩家穩定、有趣的麥塊體驗。')
        .addFields(
            { name: '⭐ 伺服器資訊', value: '> 不多，就這些而已！' },
            //{ name: '\u200B', value: '\u200B' },
            { name: '正版驗證', value: '開啟', inline: true},
            { name: '連線版本', value: '1.19.2-1.19.3', inline: true},
            { name: '運行時間', value: '24HR', inline: true},
            { name: '連線位址(自動)', value: 'mc.letsdream.today', inline: true },
            { name: '連線位址(臺灣)', value: 'tw.letsdream.today', inline: true },
            { name: '基岩連線', value: '沒有支援！', inline: true},
            { name: '⭐ 社群平台', value: '> 我們主要在 Discord 上交流或通知'},
            { name: 'Facebook', value: '[點我前往](https://dcraft.org/facebook)', inline: true },
            { name: 'Instagram', value: '[點我前往](https://dcraft.org/instagram)', inline: true },		
            { name: 'Discord', value: '[點我前往](https://discord.com/invite/as77uKwjyV)', inline: true}
        )
        .setFooter({ text: `DreamCrafter 築夢物語 技術提供 • ${time}`, iconURL: 'https://images-ext-2.discordapp.net/external/AuUUQgcieuKl4ZeY4I56Ydhvep_1ear5yc1hCktfKsM/%3Fsize%3D2048/https/cdn.discordapp.com/icons/232865546868228106/a_ab18bcc7cb6b85bf5e040d7a7865ea73.gif?width=559&height=559' });
}

function pingResponseDC2(time){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setImage('https://images-ext-2.discordapp.net/external/yOxnmyLPaMqERy2_LDn6KpUz5WabQvPl4V9Y0QFIKC0/https/imgur.com/QEqklT3.gif')        
}




module.exports = {
    pingResponseIntroduce: pingResponseIntroduce,
    pingResponseDC1: pingResponseDC1,
    pingResponseDC2: pingResponseDC2
}