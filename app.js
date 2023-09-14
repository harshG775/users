const express = require("express");
const morgan = require("morgan");


const usersRouter = require("./routes/api/v1/usersRoutes");
const coursesRouter = require("./routes/api/v1/coursesRoutes");

const app = express();
app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/courses", coursesRouter);


app.get("/api/v1",(req,res)=>{
    res.status(200).json({
		message: "Welcome to our API!",
		status: "Rout does not exist",
	});
})
app.listen(3000, () => {
	console.log("server started at port 3000");
});