const dotenv = require("dotenv")
const mongoose = require('mongoose');
dotenv.config({path:`${__dirname}/config.env`})
const app = require("./app");

mongoose.connect(process.env.LOCAL_DB)
	.then(() => {console.log('mongoose is connected !!!!!!')})
	.catch((err) => {console.log('\x1b[1;31m oh no error !!!!\n \n \x1b[0m', err)});

const userSchema= new mongoose.Schema({
	gmail:	{
			type:String,
			required:[true,"user gmail required"],
			unique:true
		},
	username: {
			type:String,
			required:[true,"username required"],
			unique:true
		},
	password: {
			type:String,
			required:[true,"user password required"]
		},
	courses: [
		{
			id: String,
			access: {
				is_paid: Boolean,
				is_instructor: Boolean,
				is_admin: Boolean,
			},
		},
	],
})
const User =mongoose.model("User",userSchema)


const newUser = new User({
		gmail:"hgaur491@gmail.com",
		username: "harsh",
		password: "harsh775",
		courses: [
			{
				id: "course101",
				access: {
					is_paid: true,
					is_instructor: true,
					is_admin: true,
				},
			},
		],
	}
)
newUser.save().then(()=>{console.log("new user saved")})





const Port = process.env.PORT
app.listen(Port,"127.0.0.2", () => {
	console.log(""+`server started at port http://127.0.0.1:${Port}`);
});

