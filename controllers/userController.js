const User = require("./../models/userModel");

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
exports.getUserById = async (req, res) => {
	try {
		const oneUser = await User.findById(req.params.id)
		res.status(404).send({
			message:"Response.error",
			user:oneUser
		});
	} catch (error) {
		res.status(200).send(Response.success);
			
	}	
}
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
exports.updateUsersById = async (req, res) => {
	try {
		const newUser = await User.findByIdAndUpdate(
				req.params.id,req.body,{
					new:true,
					runValidators:true
			}
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

// function findUserById(users, userId) {
//     const foundUser = users.find(user => user.id === userId);
//     return foundUser? foundUser :"notfound"

// }
// function findUser(users, userId) {
//     const foundUser = users.find(user => user.id === userId);
//     return foundUser? true:false
// }


// query show all
// exports.getAllUsers = (req, res) => {
//     const Response = {
// 		success: {
// 			count: usersData.length,
// 			result: usersData,
// 			message: "Users retrieved successfully",
// 			status: "success",
// 		},
// 		error: {
// 			message: "Failed to retrieve users there are no users",
// 			status: "error",
// 		},
// 	};
//     if (usersData.length >= 1) {
//         res.status(200).json(Response.success)
//     } else {
//         res.status(404).json(Response.error)
// 	}
// }
// create
// exports.createNewUser = (req, res) => {
//     const user = req.body
//     const found = findUser(usersData, user.id);

//     const Response = {
// 		success: {
// 			data: {
// 				id: user.id,
// 				name: user.username,
// 			},
// 			message: "User created successfully",
// 			status: "success",
// 		},
// 		error: {
// 			message: "Failed to create user already exist",
// 			status: "error",
// 		},
// 	};
//     if (!found) {
//         usersData.push(user)
//         res.status(201).json(Response.success)
//     }else {
//         res.status(500).json(Response.error)
//     }

// }
// query show one data 
// exports.getUserById = (req, res) => {
// 	const userId = req.params.id;
// 	const found = findUserById(usersData, userId);
// 	const Response = {
// 		success: {
// 			result: found,
// 			count: 1,
// 			message: "User retrieved successfully",
// 			status: "success",
// 		},
// 		error: {
// 			message: "User not found",
// 			status: "error",
// 		},
// 	};

// 	if (found === "notfound") {
// 		res.status(404).send(Response.error);
// 	} else {
// 		res.status(200).send(Response.success);
// 	}
// }
// edit user
// exports.updateUsersById = (req, res) => {
//     const found = findUser(usersData, req.params.id);
//     // const updatedUser = {
// 	// 	id: req.body?.id,
// 	// 	username: req.body?.username,
// 	// 	password: req.body?.password,
// 	// 	data: req.body?.data,
// 	// };
//     // const result = data?.filter(item=>{
//     //     if (item.id===queryItem.id) {
//     //         res.send( "username: "+ item.username + "\n success deleted ")
//     //     }
//     //     console.log(item.id===queryItem.id)
//     //     return item.id!=queryItem.id
//     // })
//     // data=result
//     // console.log(data)
//     res.send("under maintaining")
// }
// delete
// exports.deleteUserById = (req, res) => {
//     const userId = req.params.id
//     const found = findUser(usersData, userId);
//     const Response = {
// 		success: {
// 			message: "User deleted successfully",
// 			status: "success",
//             user:{
//                 id:userId
//             }
// 		},
// 		error: {
// 			message: "User not found",
// 			status: "error",
// 		},
// 	};

//     if (found) {
//         usersData = usersData.filter(user=>user.id != userId)
//         res.status(200).json(Response.success)
//         // console.log(usersData)

//     }else {
//         res.status(404).json(Response.error)
//     }
// }
