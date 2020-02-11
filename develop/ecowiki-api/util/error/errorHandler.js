const {Response} = require('express');

function processError(error, res){
    if(error.reason && error.reason.isJoi) error.reason = processJoiError(error);

    if(error.status && error.status < 500) {
        return res.status(error.status).json({ message: error.reason });// Custom ExtError.
    } else {
        console.log(error)
        return res.status(500).json({ message: 'An error occured during your request.' });
        
    };
};

module.exports = processError;