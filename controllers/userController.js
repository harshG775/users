const User = require("./../models/userModel");
// query show all
exports.getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find()
		res.status(200).json({
			message:"Response.success",
			count:allUsers.length,
			data:{
				users:allUsers
			}
		})
		
	} catch (err) {
		res.status(404).json({
			message:"Response.error",
			count:0,
			error:err
		})
	}
}
// query show one data 
exports.getUserById = async (req, res) => {
	try {
		const oneUser = await User.findById(req.params.id)
		res.status(404).send({
			message:"Response.success",
			count:1,
			data:{
				user:oneUser
			}
		});
	} catch (err) {
		res.status(404).json({
			message:"Response.error",
			count:0,
			error:err
		})
	}	
}
// create
exports.createNewUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json({
			message:"Response.success user created",
			count:1,
			data:{
				user:newUser
			}
		})

	} catch (err) {
		res.status(500).json({
			message:"Response.error",
			count:0,
			error:"invalid, notfound, required"
		})
		console.log(err)
	}
}
// edit user
exports.updateUsersById = async (req, res) => {
	try {
		const newUser = await User.findByIdAndUpdate(
				req.params.id,
				req.body,{new:true,runValidators:true}
		)
		res.status(201).json({
			message:"Response.success updated",
			count:1,
			data:{
				user:newUser
			}
		})

	} catch (err) {
		res.status(404).json({
			message:"Response.error",
			count:0,
			error:"invalid, notfound, required"
		})
		console.log(err)
	}
}
// delete
exports.deleteUserById = async (req, res) => {
	try {
		const DeletedUser = await User.findByIdAndDelete(req.params.id)
		res.status(200).json({
				message:"Response.success user delete",
				count:1,
				data:{
						DeletedUser:DeletedUser
				}
			}
		)
	} catch (error) {
		res.status(404).json({
			message:"Response.error ",
			count:0,
			error:"invalid, notfound, required ,user could not be delete"
		})
	}

}
