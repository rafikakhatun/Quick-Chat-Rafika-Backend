
const createUser = async(req,res)=>{
    try {
        const newUser = await User.create(req.body);
        resizeBy.status(201).json(newUser);
        
    } catch (error) {
        res.status(500).json({message:"Error creating user",error: error.message})
        
    }
};