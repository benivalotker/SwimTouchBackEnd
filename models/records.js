'use strict';

var db = require('./db'); 

//signup new user
exports.setRecords = (records) => {
    return new Promise(( res, rej) => {
        let reject = rej, response = res;
        
        let record = db.get().collection('st-record');
        let exercise = db.get().collection('st-exercise');

        record.insertOne(records, (err, result) => {
                if(err)
                    reject("error in inserting records ")
                else    
                    response(true)
            })
        });
}


