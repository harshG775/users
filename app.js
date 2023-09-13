const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routes/api/v1/usersRoutes");
const coursesRouter = require("./routes/api/v1/coursesRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/courses", coursesRouter);

app.listen(3000, () => {
	console.log("server started at port 3000");
});





// const userNotFound=(req, res) => {
//     res.status(200)
//         .json({
//             message: "Welcome to our API!",
//             status: "Rout does not exist"
//           });
// }
