const User = require("../models/user.model");

// create a new user POST /api/users
const createUser = async(req,res)=>{
    console.log(req.body)
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
        
    } catch (error) {
        res.status(500).json({message:"Error creating user",error: error.message})
        
    }
};

module.exports = {createUser}