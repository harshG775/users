const express = require("express");
const router = express.Router();
const coursesController = require("../../../controllers/coursesController");

// router.param("id",(req,res,next,value)=>{
// 	console.log(`courses is is ${value}`)
// 	next()
// })

router.route("/")
	.get(coursesController.getCourses)
	.post(coursesController.createCourse);
router
	.route("/:id")
	.get(coursesController.getCourseById)
	.patch(coursesController.updateCourseById)
	.delete(coursesController.deleteCourseById);

module.exports = router;
