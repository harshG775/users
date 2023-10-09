const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routes/api/v1/usersRoutes");
const coursesRouter = require("./routes/api/v1/coursesRoutes");

const app = express();

if (process.env.NODE_ENV==="development") {
    app.use(morgan("dev"));
}
app.use(express.static(__dirname+"/frontend"))
app.use(express.json());


/* API ROUTES */
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/courses", coursesRouter);


/* GLOBAL ROUTE */
app.all("*", (req,res,next)=>{
    // res.status(404).json({
    //     status:"fail",
    //     message:`can not find the endpoint: ${req.originalUrl}`
    // })
    const err = new Error(`can not find the endpoint: ${req.originalUrl}`)
    err.status = "fail"
    err.statusCode = 404
    next(err);
});

app.use((err ,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.status =err.status || "error"
    res.status(err.statusCode).json({
        statusCode:err.statusCode,
        status:err.status,
        message:err.message
    })
})

module.exports = app