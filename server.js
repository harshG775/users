const dotenv = require("dotenv")
const mongoose = require('mongoose');
dotenv.config({path:`${__dirname}/config.env`})
const app = require("./app");

const DB = process.env.CLOUD_DB.replace("<password>",process.env.API_DB_PASS)
const localDB = process.env.LOCAL_DB
mongoose.connect(localDB+"/test_api")
	.then(() => {console.log('mongoose is connected !!!!!!')})
	.catch((err) => {console.log('\x1b[1;31m oh no error !!!!\n \n \x1b[0m', err)});
module.exports = {mongoose}

const Port = process.env.PORT
app.listen(Port, () => {
	console.log(""+`server started at port http://127.0.0.1:${Port}`);
});

