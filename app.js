const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routes/api/v1/usersRoutes");
const coursesRouter = require("./routes/api/v1/coursesRoutes");

const app = express();

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV==="development") {
    app.use(morgan("dev"));
}
app.use(express.static(__dirname+"/frontend"))
app.use(express.json());


app.use("/api/v1/users", usersRouter);
app.use("/api/v1/courses", coursesRouter);
module.exports = app