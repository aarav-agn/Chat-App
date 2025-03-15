import User from "../models/user.models.js";
import bcrypt from "bcrypt";

export const signup = (req, res) => {
const { fullName,email , password } = req.body;    
    try {
        if (password.length < 6) {
            return res.status(400).json({"Password must be at least 6 characters long"});
        }     
        
        const user = await User.findOne({email});
        
        if (user) return res.status(400).json({message:"User already exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password,
        });

        if (newUser) {
            //generate jwt token here 
        } else {
            return res.status(400).json({message:"User not created"});
        }

    } catch (error){

    }
    
};

export const login = (req, res) => { 
    res.send("login route");
    
};

export const logout = (req, res) => {  
    res.send("logout route");
    
};