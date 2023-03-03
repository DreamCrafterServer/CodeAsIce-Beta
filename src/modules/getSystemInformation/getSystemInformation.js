const osu = require('node-os-utils')


async function getSystem(){
    let os = osu.os

    let OSPlatform = os.platform();
    let OSUptime = Math.round(os.uptime()/60/60) + "小時";
    
    return {
        OSPlatform,
        OSUptime
    }
}  

async function getCpu(){
    let cpu = osu.cpu;

    let cpuUsage = await cpu.usage();
    let cpuModel = cpu.model().trim();
    let cpuCores = cpu.count();
    return {
        cpuModel,
        cpuUsage,
        cpuCores
    }
}

async function getMemory(){
    let mem = osu.mem;

    let memUsage = await mem.used();

    memUsage.totalMemMb = Math.round(memUsage.totalMemMb*10/1024)/10 + " GB"
    memUsage.usedMemMb = Math.round(memUsage.usedMemMb*10/1024)/10 + " GB"

    return {
        memUsage
    }
    
}


module.exports = {
    getCpu: getCpu,
    getMemory: getMemory,
    getSystem: getSystem
}
//getSystemInfo()
//console.log(getCpu())

//getSystemInfomation()

