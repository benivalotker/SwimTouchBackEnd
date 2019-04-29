'use strict';


var db = require('./db'); 

//get swimmer notification 
exports.getSwimmerNotification = (obj_notification) => {
    let notification = db.get().collection('st-notification');


    return new Promise(( res, rej) => {
        notification.find({swimmer_id: obj_notification}).toArray((err, result) =>{
            if(err || result === undefined || result.length == 0)
                rej("error to get Notification")
            else
                res(result);
        });
    });
}

//set swimmer notification 
exports.setNotification = (obj_notification) => {
    let notification = db.get().collection('st-notification');

    return new Promise(( res, rej) => {
        notification.insertOne(obj_notification, (err, result) => {
            if(err)
                rej("error in inserting notification ")
            else    
                res(true)
    })
    });
}

//get read notification by swimmer id 
exports.readNotification = (obj_notification) => {
    let notification = db.get().collection('st-notification');

    return new Promise(( res, rej) => {
        notification.find({swimmer_id: obj_notification, HasBeenreaded: {$eq: true}}).toArray((err, result) =>{
            if(err || result === undefined || result.length == 0)
                rej("error to get read Notification")
            else
                res(result);
        });
    });
}

//get unread notification by swimmer id 
exports.unreadNotification = (obj_notification) => {
    let notification = db.get().collection('st-notification');

    return new Promise(( res, rej) => {
        notification.find({swimmer_id: obj_notification, HasBeenreaded: {$eq: false}}).toArray((err, result) =>{
            if(err || result === undefined || result.length == 0)
                rej("error to get read Notification")
            else
                res(result);
        });
    });
}