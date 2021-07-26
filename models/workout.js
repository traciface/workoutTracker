const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//details of the schema for mongoose
const workoutSchema = new Schema({
	day: {
		type: Date,
		default: () => new Date()
	},
	        //paramiters for exercise  

	exercises: [
		{
			name: {
				type: String,
				trim: true,
				required: "What is the name of your exercise"
			},
			type: {
				type: String,
				trim: true,
				required: "What type of exercise is this?"
			},
			weight: {
				type: Number
			},
			sets: {
				type: Number
			},
			reps: {
				type: Number
			},
			duration: {
				type: Number,
				required: "Enter an exercise duration in minutes"
			},
			distance: {
				type: Number
			}
        }
      ]
},
 {toJSON: {
		virtuals: true
	}
});


workoutSchema.virtual("totalDuration")
	.get(function () {
		return this.exercises.reduce((total, exercise) => {
			return total + exercise.duration;
		}, 0);
	});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;