'use strict';

const express = require('express'),
route = express.Router(),
exercise = require('../models/exercise'),
uuidv4 = require('uuid/v4');

//create new exercise
route.post('/', (req, res)=>{
    var obj_exercise = {
        _id:        uuidv4(),
        date:       req.body.date, 
        coach:      req.body.coach,
        group:      req.body.group,
        style:      req.body.style,
        distance:   req.body.distance,
        howMuchTouches: req.body.howMuchTouches,
        routes:         req.body.routes,
        description:    req.body.description,
        type:            req.body.type,
        singleSwimDistance: req.body.singleSwimDistance,
        repeat:      req.body.repeat,
        hasBeenStarted: req.body.hasBeenStarted
    };

    exercise.createExercise(obj_exercise).then((data) => {
        res.status(200).json({isTrue: true, exercise_id: data});   
        res.end(); 
    }).catch(err => {
        res.json({isTrue: false, error: err})
        res.status(500)
        res.end()
    })
});

//regular get exercises (filter) - if empty req body return all exercises
route.post('/getExercises', (req, res)=>{
    var obj_exercise = JSON.parse(JSON.stringify({
        _id:            req.body._id,
        date:           req.body.date, 
        coach:          req.body.coach,
        group:          req.body.group,
        style:          req.body.style,
        distance:       req.body.distance,
        howMuchTouches: req.body.howMuchTouches,
        routes:         req.body.routes,
        description:    req.body.description,
        type:            req.body.type,
        singleSwimDistance: req.body.singleSwimDistance,
        repeat:      req.body.repeat,
        hasBeenStarted: req.body.hasBeenStarted
    }));

    exercise.getExercises(obj_exercise).then((data) => {
        res.status(200).json({isTrue: true, exercise: data});   
        res.end(); 
    }).catch(err => {
        res.json({isTrue: false, error: err})
        res.status(500)
        res.end()
    })
});

//regular get exercises (filter)
route.post('/updateExercise', (req, res)=>{
    var obj_exercise = JSON.parse(JSON.stringify({
        id:            req.body.id,
        date:           req.body.date, 
        coach:          req.body.coach,
        group:          req.body.group,
        style:          req.body.style,
        distance:       req.body.distance,
        howMuchTouches: req.body.howMuchTouches,
        routes:         req.body.routes,
        description:      req.body.description,
        type:            req.body.type,
        singleSwimDistance: req.body.singleSwimDistance,
        repeat:      req.body.repeat,
        hasBeenStarted: req.body.hasBeenStarted
    }));

    exercise.updateExercises(obj_exercise).then((data) => {
        res.status(200).json({isTrue: true, exercise: data});   
        res.end(); 
    }).catch(err => {
        res.json({isTrue: false, error: err})
        res.status(500)
        res.end()
    })
});

//get swimmer exercises 
route.post('/getSwimmerExercises', (req, res)=>{

    let obj_exercise = req.body._id;

    exercise.getSwimmerExercises(obj_exercise).then((data) => {
        res.status(200).json({isTrue: true, exercise: data});   
        res.end(); 
    }).catch(err => {
        res.json({isTrue: false, error: err})
        res.status(500)
        res.end()
    })
});


module.exports = route