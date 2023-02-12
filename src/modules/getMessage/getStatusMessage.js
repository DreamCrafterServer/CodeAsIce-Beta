async function getStatusMessage(){
    try{
        const annouceChannel = await client.channels.cache.get("1022934184907517973");
    	const message = await annouceChannel.messages.fetch("1023206508235866252");
        return message;
    }
    catch(error){
        console.log("[WARN] Status message not found, process exited");
        process.exit();
    }
}

module.exports = {
    getStatusMessage: getStatusMessage
}