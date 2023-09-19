const express = require("express")
const router = express.Router()

const test = (req,res)=>{
    res.send("auth route working")
}

router.route("/")
    .get(test)

module.exports = router
