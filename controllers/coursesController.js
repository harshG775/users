// const coursesData = [
// 	{
// 		id: "course101",
// 		title: "HTML Fundamentals",
// 		description: "Learn the basics of HTML.",
// 		category: "Web Development",
// 		instructor: "John Doe",
// 		duration: "4 Hour",
// 		price: {
// 			regular: 799,
// 			discounted: 599,
// 		},
// 		tags: ["HTML", "Front-end", "Beginner"],
// 		reviews: {
// 			average_rating: 4.7,
// 			total_reviews: 120,
// 		},
// 	},
// 	{
// 		id: "course102",
// 		title: "CSS Essentials",
// 		description: "Explore essential CSS concepts.",
// 		category: "Web Development",
// 		instructor: "Jane Smith",
// 		duration: "6 weeks",
// 		price: {
// 			regular: 49.99,
// 			discounted: 29.99,
// 		},
// 		tags: ["CSS", "Front-end", "Intermediate"],
// 		reviews: {
// 			average_rating: 4.5,
// 			total_reviews: 90,
// 		},
// 	},
// 	{
// 		id: "course103",
// 		title: "JavaScript Mastery",
// 		description: "Become a JavaScript expert.",
// 		category: "Web Development",
// 		instructor: "Alex Johnson",
// 		duration: "8 weeks",
// 		price: {
// 			regular: 79.99,
// 			discounted: 59.99,
// 		},
// 		tags: ["JavaScript", "Front-end", "Advanced"],
// 		reviews: {
// 			average_rating: 4.9,
// 			total_reviews: 150,
// 		},
// 	},
// 	{
// 		id: "course104",
// 		title: "React for Beginners",
// 		description: "Get started with React development.",
// 		category: "Web Development",
// 		instructor: "Sarah Brown",
// 		duration: "6 weeks",
// 		price: {
// 			regular: 69.99,
// 			discounted: 49.99,
// 		},
// 		tags: ["React", "Front-end", "Beginner"],
// 		reviews: {
// 			average_rating: 4.8,
// 			total_reviews: 100,
// 		},
// 	},
// 	{
// 		id: "course105",
// 		title: "Node.js Fundamentals",
// 		description: "Master Node.js for backend development.",
// 		category: "Web Development",
// 		instructor: "Mike Wilson",
// 		duration: "10 weeks",
// 		price: {
// 			regular: 89.99,
// 			discounted: 69.99,
// 		},
// 		tags: ["Node.js", "Backend", "Advanced"],
// 		reviews: {
// 			average_rating: 4.6,
// 			total_reviews: 130,
// 		},
// 	},
// ];

const Course =require("../models/coursesModel");

exports.getCourses = async (req, res) => {
	try {
		const allCourses = await Course.find()
		res.status(200).json({
			message:"Response.success",
			data:allCourses
		})
	} catch (err) {
		res.status(404).json({
			message:"Response.error",
			error:err
		})
	}
};
exports.getCourseById = async (req, res) => {
	try {
		const oneCourse = await Course.findById(req.params.id)
		res.status(404).send({
			message:"Response.success",
			user:oneCourse
		});
	} catch (err) {
		res.status(404).json({
			message:"Response.error",
			error:err
		})
	}
};
exports.createCourse = async (req, res) => {
	try {
		const newCourse = await Course.create(req.body);
		res.status(201).json({
			message:"Response.success",
			data: newCourse
		})

	} catch (err) {
		res.status(500).json({
			message:"Response.error",
			error:"invalid, notfound, required",
			err:err
		})
		console.log(err)
	}
};
exports.updateCourseById = async (req, res) => {
	try {
		const oneCourse = await Course.findByIdAndUpdate(
				req.params.id,
				req.body,{new:true,runValidators:true}
		)
		res.status(201).json({
			message:"Response.success",
			data: oneCourse
		})

	} catch (err) {
		res.status(404).json({
			message:"Response.error",
			error:"invalid, notfound, required"
		})
		console.log(err)
	}
};

exports.deleteCourseById = async (req, res) => {
	try {
		const deletedCourse = await Course.findByIdAndDelete(req.params.id)
		res.status(200).json({
			message:"Response.success",
			deletedCourse
			}
		)
	} catch (error) {
        res.status(404).json({message:"Response.error"})
	}
};