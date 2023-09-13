const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routes/api/v1/usersRoutes");
// const listRouter = require("./routes/api/v1/listRouter");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/users", usersRouter);
// app.use("/api/v1/list", listRouter);

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
