const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
	gmail:	{
			type:String,
			required:[true,"user gmail required"],
			unique:true
		},
	username: {
			type:String,
			required:[true,"user username required"],
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
module.exports ={User}