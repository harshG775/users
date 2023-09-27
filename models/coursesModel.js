const mongoose = require("mongoose")
const courserSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "course title required"],
		unique: true,
	},
	description: {
		type: String,
	},
	category: String,
	instructor: {
		type: String,
		required: [true, "instructor name required"],
	},
	duration: Number,
	price: {
		regular: Number,
		discounted: Number,
	},
	tags: [String, String, String],
	reviews: {
		average_rating: Number,
		total_reviews: Number,
	},
});
const Course =mongoose.model("Courses",courserSchema)
module.exports =Course