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


exports.getCourses = (req, res) => {
	if (true) {
		res.status(200).json({
			result: coursesData,
			count: coursesData.length,
			message: "Course retrieved successfully",
			status: "success",
		});
	} else {
		res.status(500).json({
			message: "Failed to retrieve courses",
			status: 500,
		});
	}
};

exports.createCourse = (req, res) => {
	if (true) {
		res.status(201).json({
			data: {
				id: "user.id",
			},
			message: "Course created successfully",
			status: "success",
		});
	} else {
		res.status(400).json({
			message: "Failed to create course",
			status: 400,
		});
	}
};

exports.getCourseById = (req, res) => {
	if (true) {
		res.status(200).json({
			result: coursesData[1],
			count: 1,
			message: "User retrieved successfully",
			status: "success",
		});
	} else {
		res.status(404).json({
			message: "course not found",
		 	status: 404 
		});
	}
};

exports.updateCourseById = (req, res) => {
	if (true) {
		res.status(204).send();
	} else {
		res.status(400).json({
			message: "User not found",
			status: 400,
		});
	}
};

exports.deleteCourseById = (req, res) => {
	if (true) {
		res.status(204).send();
	} else {
		res.status(404).json({
			message: "User not found",
			status: 404,
		});
	}
};