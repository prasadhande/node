var url = 'http://mylogger.io/log';

function log(message){
    //Send an HTTP resuesr
    console.log(message);
}

module.exports.log = log

