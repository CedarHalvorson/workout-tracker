const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Exercise = require('./exercise');



const Exercise = new Schema ({ 
    type: String, 
    name: String, 
    duration: Number, 
    weight: Number, 
    reps: Number, 
    sets: Number, 
});

// you cant switch these around

const schema = new Schema ({
    day: String,
    exercises: [Exercise],
});


const Workout = mongoose.model('Workout', schema);
module.exports = Workout;
