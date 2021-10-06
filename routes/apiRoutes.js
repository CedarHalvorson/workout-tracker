const router = require('express').Router();
const Workout = require(`../models/index`)

router.get (`/workouts`, async (res) => {
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


module.exports = router;