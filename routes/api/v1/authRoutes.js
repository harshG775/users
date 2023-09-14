const express = require("express")
const authRouter = express.Router()

const test = (req,res)=>{
    res.send("auth route working")
}

authRouter.route("/")
    .get(test)

module.exports = authRouter