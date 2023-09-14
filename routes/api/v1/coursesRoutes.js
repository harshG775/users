const express = require("express");
const router = express.Router();
const coursesController = require("../../../controllers/coursesController");

router.route("/")
	.get(coursesController.getCourses)
	.post(coursesController.createCourse);
router
	.route("/:id")
	.get(coursesController.getCourseById)
	.patch(coursesController.updateCourseById)
	.delete(coursesController.deleteCourseById);

module.exports = router;
