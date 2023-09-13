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

// show show all
const getAllUsers = (req, res) => {
    const Response = {
        success :{
            result: usersData,
            count: usersData.length,
            message: "Users retrieved successfully",
            status: "success"
        },
        error :{
            message: "Failed to retrieve users",
            status: "error"
        }
    }
    res.status(200).json(Response.success)
}
// show query result
const getUserById = (req, res) => {
    let queryItem=req.body
    let result = data?.find(item=>{
        if (item.id===queryItem.id) {
            console.log(item.id)
        }
        return item.id===queryItem.id
    })
    res.send(result?result:{result:"NotFound"})
}

// create
const createNewUser = (req, res) => {
    let newItem=req.body

    function add(i) {
        let d=data.find( (item)=>item.username===i.username )
        if (d===undefined) {
            data.push(i)
        }
        else{
            return "already added"
        }
    }
    add(newItem)
    console.log(data)
    res.send("ok")
}
// delete
const deleteUserById = (req, res) => {
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

apiRouter.get("/users/", getAllUsers);
apiRouter.get("/users/:id", getUserById);
apiRouter.patch("/users/create", createNewUser);
apiRouter.delete("/users/:id/delete", deleteUserById);
apiRouter.get("/*", userApi);

module.exports = apiRouter