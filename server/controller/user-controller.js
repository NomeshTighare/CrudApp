
import User from '../model/user-schema.js';


export const getuser = async(request, response)=>{
    try {
        let user = await User.find();
        response.json(user);
    } catch(error){
        response.json({message: error.message});
    }
}
export const adduser = async (request, response)=>{
    // console.log("hello");
    // response.send("codenmkfmk")
    const user = request.body;
    const newUser = new User(user);
    try {
        await newUser.save();    
        response.json(newUser);
    } catch(error){
        response.json({message: error.message});
    }
}

export const getUserById = async (request, response)=>{
    const user = await User.findById(request.params.id);
    try{
        const user = await User.findById(request.params.id);
        response.json(user);
    }catch(error){
        response.error({message: error.message}); 
    }
    
}

export const edituser = async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const edituser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, edituser);
        response.status(201).json(edituser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteuser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}