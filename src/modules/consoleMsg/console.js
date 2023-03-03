const {getTime} = require('../time/getTime.js')

function info(msg){
    //console.log('[', getTime(), "\x1b[34m", "INFO", "\x1b[0m]:", msg)
    console.log(`[${getTime()}\x1b[34m INFO\x1b[0m]: ${msg}`)
    //console.log(`[${getTime()} INFO]: ${msg}`)
}

function warn(msg){
    //console.log('[', getTime(), "\x1b[31m", "WARN:", "\x1b[0m]", msg)
    console.log(`[${getTime()}\x1b[31m WARN\x1b[0m]: ${msg}`)
    //console.log(`[${getTime()} WARN]: ${msg}`)
}

function done(msg){
    console.log(`[${getTime()}\x1b[32m DONE\x1b[0m]: ${msg}`)
}

module.exports = {
    info: info,
    warn: warn,
    done: done
}