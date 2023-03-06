const { info } = require('../../modules/consoleMsg/console.js')
const { getDateTime } = require('../time/getTime.js')

number = Math.floor(Math.random() * 100)
info(`number initial update, the first number for starting up is ${number}`)
global.numberUpdateTime = getDateTime()
global.randomNumber = number
global.previousNumber = '尚未有上個數字'

async function generateNumber(){
    
    setTimeout(function () {
        global.previousNumber = number
        //previousNumber = number
        number = Math.floor(Math.random() * 100)
        global.randomNumber = number
        global.numberUpdateTime = getDateTime()
        //console.log(global.numberUpdateTime)
        //console.log(number)
        info(`number updated, the new number is ${global.randomNumber}, previous number is ${global.previousNumber}`)
        //info(`command ${interaction.commandName}/${interaction.options.getSubcommand()} ended, dropped channel ${commandCooldown2[0]}(#${commandCooldown2[1]})`); 
        generateNumber()
    }, 300000); 
}

generateNumber()

//global.

//info(`${number}`)
/*
module.exports = {
    randomNumber: number,
    previousNumber: previousNumber
}
*/