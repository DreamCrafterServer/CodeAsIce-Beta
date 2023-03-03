function accurationTime(){
    const date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth()+1);
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    function timeModify(number){
        if ( number < 10 ){
            let newNumber = "0"+ number
            return newNumber
        } 
        return number
    }

    month = timeModify(month);
    day = timeModify(day);
    hour = timeModify(hour);
    minutes = timeModify(minutes);
    seconds = timeModify(seconds);

    return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minutes: minutes,
        seconds: seconds
    }
}

function accurationTimeTimestamp(timestamp){
    const date = new Date(timestamp);
    let year = date.getFullYear();
    let month = (date.getMonth()+1);
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    function timeModify(number){
        if ( number < 10 ){
            let newNumber = "0"+ number
            return newNumber
        } 
        return number
    }

    month = timeModify(month);
    day = timeModify(day);
    hour = timeModify(hour);
    minutes = timeModify(minutes);
    seconds = timeModify(seconds);

    return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minutes: minutes,
        seconds: seconds
    }
}

function getDateTime(){

    const time = accurationTime();

    let updateDateTime = time.year + "/" + time.month + "/" + time.day + " @ " + time.hour + ":" + time.minutes + ":" + time.seconds;
    return updateDateTime
}

function getDate(){
    const time = accurationTime();
    
    let updateDate = time.year + "/" + time.month + "/" + time.day;
    return updateDate
}

function getTime(){
    const time = accurationTime();
    let updateTime = time.hour + ":" + time.minutes + ":" + time.seconds;
    return updateTime
}

//let unix_timestamp = 1549312452
//console.log(accurationTimeTimestamp(unix_timestamp))




module.exports = {
    accurationTimeTimestamp: accurationTimeTimestamp,
    getDateTime: getDateTime,
    getDate: getDate,
    getTime: getTime
}
