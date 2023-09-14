const express = require('express');
const router  = express.Router()

// const users = [
// 	{
// 		id: "user1",
// 		username: "harsh",
// 		password: "harsh775",
// 		courses: [
// 			{
// 				id: "course101",
// 				access: {
// 					is_paid: true,
// 					is_instructor: false,
// 					is_admin: false,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		id: "user2",
// 		username: "john",
// 		password: "john123",
// 		courses: [
// 			{
// 				id: "course101",
// 				access: {
// 					is_paid: false,
// 					is_instructor: true,
// 					is_admin: false,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		id: "user3",
// 		username: "alice",
// 		password: "alice456",
// 		courses: [
// 			{
// 				id: "course101",
// 				access: {
// 					is_paid: true,
// 					is_instructor: false,
// 					is_admin: false,
// 				},
// 			},
// 			{
// 				id: "course102",
// 				access: {
// 					is_paid: true,
// 					is_instructor: false,
// 					is_admin: false,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		id: "user4",
// 		username: "bob",
// 		password: "bob789",
// 		courses: [],
// 	},
// 	{
// 		id: "user5",
// 		username: "susan",
// 		password: "susan102",
// 		courses: [
// 			{
// 				id: "course102",
// 				access: {
// 					is_paid: true,
// 					is_instructor: false,
// 					is_admin: false,
// 				},
// 			},
// 			{
// 				id: "course103",
// 				access: {
// 					is_paid: false,
// 					is_instructor: true,
// 					is_admin: false,
// 				},
// 			},
// 		],
// 	},
// ];
let usersData = [
	{
		id: 1,
		username: "harsh",
		password: "harsh775",
		data: ["data", "data", "data"],
	},
	{
		id: 2,
		username: "john",
		password: "john123",
		data: ["data", "data", "data"],
	},
	{
		id: 3,
		username: "alice",
		password: "alice456",
		data: ["data", "data", "data"],
	},
	{
		id: 4,
		username: "bob",
		password: "bob789",
		data: ["data", "data", "data"],
	},
	{
		id: 5,
		username: "susan",
		password: "susan102",
		data: ["data", "data", "data"],
	},
];


function findUserById(users, userId) {
    const foundUser = users.find(user => user.id === userId);
    return foundUser? foundUser :"notfound"

}
function findUser(users, userId) {
    const foundUser = users.find(user => user.id === userId);
    return foundUser? true:false
}




// query show all
const getAllUsers = (req, res) => {
    const Response = {
		success: {
			count: usersData.length,
			result: usersData,
			message: "Users retrieved successfully",
			status: "success",
		},
		error: {
			message: "Failed to retrieve users there are no users",
			status: "error",
		},
	};
    if (usersData.length >= 1) {
        res.status(200).json(Response.success)
    } else {
        res.status(404).json(Response.error)
	}
}
// create
const createNewUser = (req, res) => {
    const user = req.body
    const found = findUser(usersData, user.id);

    const Response = {
		success: {
			data: {
				id: user.id,
				name: user.username,
			},
			message: "User created successfully",
			status: "success",
		},
		error: {
			message: "Failed to create user already exist",
			status: "error",
		},
	};
    if (!found) {
        usersData.push(user)
        res.status(201).json(Response.success)
    }else {
        res.status(500).json(Response.error)
    }

}
// query show one data 
const getUserById = (req, res) => {
	const userId = parseInt(req.params.id);
	const found = findUserById(usersData, userId);
	const Response = {
		success: {
			result: found,
			count: 1,
			message: "User retrieved successfully",
			status: "success",
		},
		error: {
			message: "User not found",
			status: "error",
		},
	};

	if (found === "notfound") {
		res.status(404).send(Response.error);
	} else {
		res.status(200).send(Response.success);
	}
}
// edit user
const updateUsersById = (req, res) => {
    const found = findUser(usersData, parseInt(req.params.id));
    // const updatedUser = {
	// 	id: req.body?.id,
	// 	username: req.body?.username,
	// 	password: req.body?.password,
	// 	data: req.body?.data,
	// };
    // const result = data?.filter(item=>{
    //     if (item.id===queryItem.id) {
    //         res.send( "username: "+ item.username + "\n success deleted ")
    //     }
    //     console.log(item.id===queryItem.id)
    //     return item.id!=queryItem.id
    // })
    // data=result
    // console.log(data)
    res.send("under maintaining")
}
// delete
const deleteUserById = (req, res) => {
    const userId = parseInt(req.params.id)
    const found = findUser(usersData, userId);
    const Response = {
		success: {
			message: "User deleted successfully",
			status: "success",
            user:{
                id:userId
            }
		},
		error: {
			message: "User not found",
			status: "error",
		},
	};

    if (found) {
        usersData = usersData.filter(user=>user.id != userId)
        res.status(200).json(Response.success)
        // console.log(usersData)

    }else {
        res.status(404).json(Response.error)
    }
}


router.route("/")
	.get(getAllUsers)
	.post(createNewUser)
router.route("/:id")
	.get(getUserById)
	.patch(updateUsersById)
	.delete(deleteUserById)

module.exports = router