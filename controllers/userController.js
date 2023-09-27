const User = require("./../models/userModel");
// query show all
exports.getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find()
		res.status(200).json({
			message:"Response.success",
			data:allUsers

		})
		
	} catch (err) {
		res.status(404).json({
			message:"Response.error",
			error:err
		})
	}
}
// query show one data 
exports.getUserById = async (req, res) => {
	try {
		const oneUser = await User.findById(req.params.id)
		res.status(404).send({
			message:"Response.error",
			user:oneUser
		});
	} catch (err) {
		res.status(404).json({
			message:"Response.error",
			error:err
		})
	}	
}
// create
exports.createNewUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json({
			message:"Response.success",
			data: newUser
		})

	} catch (err) {
		res.status(500).json({
			message:"Response.error",
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
			message:"Response.success",
			data: newUser
		})

	} catch (err) {
		res.status(404).json({
			message:"Response.error",
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
			message:"Response.success",
			DeletedUser
			}
		)
	} catch (error) {
        res.status(404).json({message:"Response.error"})
	}

}
