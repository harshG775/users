const coursesData = [
	{
		id: "course101",
		title: "HTML Fundamentals",
		description: "Learn the basics of HTML.",
		category: "Web Development",
		instructor: "John Doe",
		duration: "4 Hour",
		price: {
			regular: 799,
			discounted: 599,
		},
		tags: ["HTML", "Front-end", "Beginner"],
		reviews: {
			average_rating: 4.7,
			total_reviews: 120,
		},
	},
	{
		id: "course102",
		title: "CSS Essentials",
		description: "Explore essential CSS concepts.",
		category: "Web Development",
		instructor: "Jane Smith",
		duration: "6 weeks",
		price: {
			regular: 49.99,
			discounted: 29.99,
		},
		tags: ["CSS", "Front-end", "Intermediate"],
		reviews: {
			average_rating: 4.5,
			total_reviews: 90,
		},
	},
	{
		id: "course103",
		title: "JavaScript Mastery",
		description: "Become a JavaScript expert.",
		category: "Web Development",
		instructor: "Alex Johnson",
		duration: "8 weeks",
		price: {
			regular: 79.99,
			discounted: 59.99,
		},
		tags: ["JavaScript", "Front-end", "Advanced"],
		reviews: {
			average_rating: 4.9,
			total_reviews: 150,
		},
	},
	{
		id: "course104",
		title: "React for Beginners",
		description: "Get started with React development.",
		category: "Web Development",
		instructor: "Sarah Brown",
		duration: "6 weeks",
		price: {
			regular: 69.99,
			discounted: 49.99,
		},
		tags: ["React", "Front-end", "Beginner"],
		reviews: {
			average_rating: 4.8,
			total_reviews: 100,
		},
	},
	{
		id: "course105",
		title: "Node.js Fundamentals",
		description: "Master Node.js for backend development.",
		category: "Web Development",
		instructor: "Mike Wilson",
		duration: "10 weeks",
		price: {
			regular: 89.99,
			discounted: 69.99,
		},
		tags: ["Node.js", "Backend", "Advanced"],
		reviews: {
			average_rating: 4.6,
			total_reviews: 130,
		},
	},
];
const users = [
	{
		id: "user1",
		username: "harsh",
		password: "harsh775",
		courses: [
			{
				id: "course101",
				access: {
					is_paid: true,
					is_instructor: false,
					is_admin: false,
				},
			},
		],
	},
	{
		id: "user2",
		username: "john",
		password: "john123",
		courses: [
			{
				id: "course101",
				access: {
					is_paid: false,
					is_instructor: true,
					is_admin: false,
				},
			},
		],
	},
	{
		id: "user3",
		username: "alice",
		password: "alice456",
		courses: [
			{
				id: "course101",
				access: {
					is_paid: true,
					is_instructor: false,
					is_admin: false,
				},
			},
			{
				id: "course102",
				access: {
					is_paid: true,
					is_instructor: false,
					is_admin: false,
				},
			},
		],
	},
	{
		id: "user4",
		username: "bob",
		password: "bob789",
		courses: [],
	},
	{
		id: "user5",
		username: "susan",
		password: "susan102",
		courses: [
			{
				id: "course102",
				access: {
					is_paid: true,
					is_instructor: false,
					is_admin: false,
				},
			},
			{
				id: "course103",
				access: {
					is_paid: false,
					is_instructor: true,
					is_admin: false,
				},
			},
		],
	},
];



const express = require("express");
const listRouter = express.Router();

const getCourses = (req, res) => {
    if (true) {
        res.status(200).json({ message: "Success" });
    } else {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const createCourse = (req, res) => {
    if (true) {
        res.status(201).json({ message: "Resource created" });
    } else {
        res.status(400).json({ error: "Bad Request" });
    }
}

const getCourseById = (req, res) => {
    if (true) {
        res.status(200).json({ message: "Success" });
    } else {
        res.status(404).json({ error: "Not Found" });
    }
}

const updateCourseById = (req, res) => {
    if (true) {
        res.status(204).send();
    } else {
        res.status(400).json({ error: "Bad Request" });
    }
}

const deleteCourseById = (req, res) => {
    if (true) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: "Not Found" });
    }
}


listRouter.route("/")
    .get(getCourses)
    .post(createCourse);
listRouter
	.route("/:id")
	.get(getCourseById)
	.patch(updateCourseById)
	.delete(deleteCourseById);

module.exports = listRouter;

