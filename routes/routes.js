const express = require('express');
const apiRouter  = express.Router()

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
			message: "Failed to retrieve users",
			status: "error",
		},
	};
    res.status(200).json(Response.success)
    // res.status(404).json(Response.error)
}
// query show one data 
const getUserById = (req, res) => {
	let userId = req.params.id * 1;
	let found = findUserById(usersData, userId);
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

// create
const createNewUser = (req, res) => {
    let newUserData = req.body
    let found = findUser(usersData, newUserData.id);

    const Response = {
		success: {
			data: {
				id: newUserData.id,
				name: newUserData.username,
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
        usersData.push(newUserData)
        res.status(201).json(Response.success)
    }else {
        res.status(500).json(Response.error)
    }

}
// delete
const deleteUserById = (req, res) => {
    let newUserData = req.body
    let found = findUser(usersData, newUserData.id);

    let queryItem=req.body
    let result = data?.filter(item=>{
        if (item.id===queryItem.id) {
            res.send( "username: "+ item.username + "\n success deleted ")
        }
        console.log(item.id===queryItem.id)
        return item.id!=queryItem.id
    })
    data=result
    console.log(data)
}



const userApi=(req, res) => {
    res.status(200)
        .json({
            message: "Welcome to our API!",
            status: "success"
          });
}

apiRouter.get("/users", getAllUsers);
apiRouter.get("/users/:id", getUserById);
apiRouter.post("/users", createNewUser);
apiRouter.delete("/users/:id", deleteUserById);
apiRouter.get("/*", userApi);

module.exports = apiRouter