const dotenv = require("dotenv")
dotenv.config({path:`${__dirname}/config.env`})

const app = require("./app");

const Port = process.env.PORT
app.listen(Port,"127.0.0.2", () => {
	console.log(""+`server started at port http://127.0.0.1:${Port}`);
});

