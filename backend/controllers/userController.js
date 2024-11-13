import validator from "validator";
import userModel from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//Route for user login/signin
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}
const userLogin = async (req,res) =>{
     let {email,password} = req.body;
     if(!email || !password){
        return res.json({success:false,msg:"Invalid Credentials"});
     }
     const user = await userModel.findOne({email});
     if(!user){
        return res.json({success:false,msg:"User doesn't exist"});
     }
     const isMatched = await bcrypt.compare(password,user.password);
     if(!isMatched){
        return res.json({success:false,msg:"Invalid Credentials"});
     }
     const token = createToken(user._id);
     res.json({success:true,msg:token});
}
//Route for user register/signup
const userRegister = async (req,res) =>{
    try{

        let {name,email,password} = req.body;
        if(!name || !email || !password){
           return res.json({success:false,msg:"Invalid Credentials"});
        }
      if(!validator.isEmail(email)){
       return res.json({success:false,msg:"Please enter a valid email"});
      }
      if(password.length < 8){
       return res.json({success:false,msg:"Please enter a strong password"});
      }
      const exists = await userModel.findOne({email});
      if(exists){
       return res.json({success:false,msg:"User already exists"});
      }
      //hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
      const user = await new userModel({
       name,
       email,
       password:hashedPassword
      });
      const newUser = await user.save();
      const id = newUser._id;
      const token = createToken(id);
      res.json({success:true,token});
    }catch(e){
        res.json({success:false,msg:e.message});
    }
}

//Route for admin login
const adminLogin = async (req,res) =>{

}
export {userLogin,userRegister,adminLogin}