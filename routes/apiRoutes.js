const router = require('express').Router();
const { Workout } = require(`../models/index`);
const { create } = require('../models/workout');

router.get (`/workouts`, async (req, res) => {
    try {
        const aggregationDuration = await Workout.aggregate([
            { 
                $addFields: { totalDuration: { $sum: '$exercises.duration'} },
            },
        ]);
        res.status(200).json(aggregationDuration);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post (`/workouts`, async (req, res) => {
    try {
        const createWorkout = await Workout.create({})
        res.json(createWorkout)
    }
     catch (err) {
        res.status(500).json(err);
    }
})

router.put ("/workouts/:id", async (req, res) => {
    try {
        Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body }}
            ) .then(data => {
               res.json(data);
            })
    }
     catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;


