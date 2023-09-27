const dotenv = require("dotenv")
const mongoose = require('mongoose');
dotenv.config({path:`${__dirname}/config.env`})
const app = require("./app");

let DB = process.env.CLOUD_DB.replace("<password>",process.env.API_DB_PASS)
if (process.env.NODE_ENV==="development") {
    DB = process.env.LOCAL_DB
}
console.log(DB)
mongoose.connect(DB+"/test_api")
	.then(() => {console.log('mongoose is connected !!!!!!')})
	.catch((err) => {console.log('\x1b[1;31m oh no error !!!!\n \n \x1b[0m', err)});
module.exports = {mongoose}

const Port = process.env.PORT
app.listen(Port, () => {
	console.log(""+`server started at port http://127.0.0.1:${Port}`);
});

