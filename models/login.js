'use strict';

var db = require('./db'); 
const bcrypt = require('bcrypt');

//signup new user
exports.signup = (info, pwd) => {
    return new Promise(( res, rej) => {
        let reject = rej, response = res;
        
        let profile = db.get().collection('profile');
        let user = db.get().collection('users');

        bcrypt.hash(pwd, 10, (err, hash) => {
            if(err)
                reject("error to signup  user or email")
            user.insertOne({user: info.user, pwd: hash}, (err, result) => {
                if(err)
                    reject("error to signup user or ")
                else    
                    response(true)
            });

            profile.insertOne(info, (err, result) => {
                if(err)
                    reject("error to signup user or ")
                else    
                    response(true)
            })
        });
    });
}

//user login
exports.login = (email, password) => {
    return new Promise((res, rej) => {
        let user = db.get().collection('users');
        try {
            user.findOne({user:email}, (err, result) => {
                if(err || result === null)
                    throw err;

                    bcrypt.compare(password, result.pwd, (err, response) => {
                        if(err || response === false)
                            rej('Email or Password is incorrect');
                        else   
                            res(true);
                    });
            });   
        } catch (error) {
            rej('Email or Password is incorrect');
        }
    })
}